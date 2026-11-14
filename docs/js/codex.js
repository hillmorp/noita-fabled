/* The tree ("codex").

   Layout is computed here (absolute positions), branches are SVG paths drawn on a 2 px grid so they
   look like pixel art, growth is stroke-dashoffset. Two layouts share one engine:
   - wide:   a horizontal tree. The first child sits on its parent's row, the rest fan out downwards.
   - narrow: children go under the parent, one step to the right (phones, narrow columns).

   State: which branches are open, which leaf is selected, the search query and the kind filter.
   Every change goes through relayout(), which tweens nodes to their new places and grows or
   retracts the lines. */
(function () {
  'use strict';

  var F = window.Fabled = window.Fabled || {};

  /* geometry shared with css/site.css (.node, .node__bud, .node__slot) */
  var H0 = 92, HB = 52, HL = 50;      // row heights: first-level branch, branch, leaf
  var A0 = 22, AB = 20, AL = 22;      // y of the line's attach point inside a row
  var GAP0 = 6;                       // extra space after a first-level block
  var GRID = 2;                       // pixel grid of the branch lines

  var MOVE = 380, FADE = 200, GROW = 340;

  var KIND_ORDER = ['spell', 'perk', 'tincture', 'relic', 'blessing', 'omen', 'wisp', 'elite', 'place', 'info'];

  var els = {};
  var meta = {};            // id -> { node, parent, depth, leaf, leaves, hay, kind }
  var roots = [];           // first-level ids
  var allOrder = [];        // every id, depth first
  var entryOrder = [];      // ids of entries (see indexData), depth first
  var maxDepth = 0;
  var totalBranches = 0;

  var open = {};            // id -> true
  var selected = null;
  var focusId = null;
  var query = '';
  var kindFilter = null;

  var mode = 'wide';
  var geo = null;           // current geometry parameters
  var nodeViews = {};       // id -> view
  var linkViews = {};       // child id (or 'trunk') -> view
  var visList = [];         // ids currently laid out, in order
  var treeH = { cur: 0, from: 0, to: 0 };

  var instantAll = false;   // ?still=1 or reduced motion
  var held = false;         // intro waits until the tree scrolls into view
  var t0 = 0, raf = 0;
  var mqReduce = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  var mqOverlay = window.matchMedia ? window.matchMedia('(max-width: 1099px)') : { matches: false };

  /* ------------------------------------------------------------ helpers */

  function h(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) { e.className = cls; }
    if (text != null) { e.textContent = text; }
    return e;
  }

  function svgEl(tag) { return document.createElementNS('http://www.w3.org/2000/svg', tag); }

  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function ease(t) { return 1 - Math.pow(1 - t, 3); }
  function snap(v) { return Math.round(v / GRID) * GRID; }
  function isInstant() { return instantAll || mqReduce.matches; }

  function kindOf(node) {
    var k = node.kind || 'info';
    return KIND_ORDER.indexOf(k) >= 0 || k === 'branch' ? k : 'info';
  }

  /* An icon in a pixel slot. 16x16 icons take the css size; other sizes get the largest integer scale that fits. */
  function icon(src, letter) {
    if (!src) { return h('i', null, (letter || '?').charAt(0).toUpperCase()); }
    var img = h('img');
    img.alt = '';
    img.decoding = 'async';
    img.draggable = false;
    img.addEventListener('load', function () {
      var nw = img.naturalWidth, nh = img.naturalHeight, box = img.parentNode;
      if (!box || (nw === 16 && nh === 16)) { return; }
      var room = Math.max(16, box.clientWidth - 4);
      var s = Math.max(1, Math.floor(room / Math.max(nw, nh)));
      img.style.width = (nw * s) + 'px';
      img.style.height = (nh * s) + 'px';
    });
    img.addEventListener('error', function () {
      if (img.parentNode) { img.parentNode.replaceChild(h('i', null, (letter || '?').charAt(0).toUpperCase()), img); }
    });
    img.src = src;
    return img;
  }

  /* **bold** and `code` inside one paragraph */
  function inline(text, parent) {
    var re = /\*\*([^*]+)\*\*|`([^`]+)`/g, last = 0, m;
    while ((m = re.exec(text))) {
      if (m.index > last) { parent.appendChild(document.createTextNode(text.slice(last, m.index))); }
      parent.appendChild(m[1] != null ? h('strong', null, m[1]) : h('code', null, m[2]));
      last = re.lastIndex;
    }
    if (last < text.length) { parent.appendChild(document.createTextNode(text.slice(last))); }
  }

  function rich(text, parent) {
    var parts = String(text || '').split(/\n\s*\n/), i, p;
    for (i = 0; i < parts.length; i++) {
      if (!parts[i].trim()) { continue; }
      p = h('p');
      inline(parts[i].trim(), p);
      parent.appendChild(p);
    }
  }

  /* text with the search query marked */
  function marked(text, parent) {
    parent.textContent = '';
    var q = query, low = text.toLowerCase(), at = q ? low.indexOf(q) : -1;
    if (at < 0) { parent.textContent = text; return; }
    parent.appendChild(document.createTextNode(text.slice(0, at)));
    parent.appendChild(h('mark', null, text.slice(at, at + q.length)));
    parent.appendChild(document.createTextNode(text.slice(at + q.length)));
  }

  /* ------------------------------------------------------------ data */

  function indexData(data) {
    meta = {}; roots = []; allOrder = []; entryOrder = []; maxDepth = 0; totalBranches = 0;
    function walk(node, parent, depth) {
      if (!node || node.id == null || meta[node.id]) { return 0; }
      var kids = node.children && node.children.length ? node.children : [];
      var m = { node: node, parent: parent, depth: depth, leaf: !kids.length, leaves: 0, kids: [], kind: kindOf(node) };
      if (m.leaf && m.kind === 'branch') { m.kind = 'info'; }
      /* an entry is a thing of the mod (it has a card and an icon slot); a plain branch is only a group.
         An entry may have children of its own, e.g. a place with a list of what it offers. */
      m.entry = m.kind !== 'branch';
      meta[node.id] = m;
      allOrder.push(node.id);
      if (m.entry) { entryOrder.push(node.id); }
      if (depth > maxDepth) { maxDepth = depth; }
      var hay = [node.id];
      ['title', 'summary', 'body'].forEach(function (f) {
        var v = node[f];
        if (v && typeof v === 'object') { hay.push(v.en || '', v.ru || ''); } else if (v) { hay.push(v); }
      });
      if (node.tags) { hay.push(node.tags.join(' ')); }
      m.hay = hay.join(' \n ').toLowerCase();
      if (m.leaf) {
        m.leaves = 1;
      } else {
        if (m.entry) { m.leaves = 1; } else { totalBranches++; }
        for (var i = 0; i < kids.length; i++) {
          var n = walk(kids[i], node.id, depth + 1);
          if (kids[i] && meta[kids[i].id] && meta[kids[i].id].parent === node.id) { m.kids.push(kids[i].id); }
          m.leaves += n;
        }
      }
      return m.leaves;
    }
    var top = (data && data.root && data.root.children) || [];
    for (var i = 0; i < top.length; i++) {
      walk(top[i], null, 0);
      if (top[i] && meta[top[i].id] && meta[top[i].id].parent === null) { roots.push(top[i].id); }
    }
  }

  function ancestors(id) {
    var out = [], m = meta[id];
    while (m && m.parent != null) { out.unshift(m.parent); m = meta[m.parent]; }
    return out;
  }

  function sproutIcons(id, max) {
    var out = [], seen = {};
    (function walk(i) {
      var m = meta[i];
      if (out.length >= max) { return; }
      if (m.entry) {
        var src = m.node.icon;
        if (src && !seen[src]) { seen[src] = 1; out.push(src); }
      }
      for (var k = 0; k < m.kids.length; k++) { walk(m.kids[k]); }
    })(id);
    return out;
  }

  /* ------------------------------------------------------------ filter */

  var matchSelf = null;     // id -> bool, when a filter is on
  var matchTree = null;     // id -> bool: itself or something below matches

  function filterOn() { return !!(query || kindFilter); }

  function computeFilter() {
    if (!filterOn()) { matchSelf = matchTree = null; return 0; }
    matchSelf = {}; matchTree = {};
    var found = 0;
    function walk(id) {
      var m = meta[id], self, below = false, i;
      if (m.entry) {
        self = (!kindFilter || m.kind === kindFilter) && (!query || m.hay.indexOf(query) >= 0);
        if (self) { found++; }
      } else {
        /* a plain branch matches by its own name only, and only for a text query without a kind filter */
        self = !kindFilter && !!query &&
          ((F.pick(m.node.title) + ' ' + (m.node.title && m.node.title.en || '')).toLowerCase().indexOf(query) >= 0);
      }
      for (i = 0; i < m.kids.length; i++) { if (walk(m.kids[i])) { below = true; } }
      matchSelf[id] = self;
      matchTree[id] = self || below;
      m.below = below;
      return matchTree[id];
    }
    for (var r = 0; r < roots.length; r++) { walk(roots[r]); }
    return found;
  }

  function isOpen(id) {
    var m = meta[id];
    if (m.leaf) { return false; }
    if (filterOn() && m.below) { return true; }
    return !!open[id];
  }

  /* inside a branch that matched by name, with nothing matching below, everything is shown */
  function underNamed(id) {
    var m = meta[id];
    while (m && m.parent != null) {
      if (matchSelf[m.parent] && !meta[m.parent].below) { return true; }
      m = meta[m.parent];
    }
    return false;
  }

  function visible(id) {
    if (!filterOn()) { return true; }
    return matchTree[id] || underNamed(id);
  }

  function buildList() {
    var out = [];
    function walk(id) {
      if (!visible(id)) { return; }
      out.push(id);
      if (isOpen(id)) {
        var k = meta[id].kids;
        for (var i = 0; i < k.length; i++) { walk(k[i]); }
      }
    }
    for (var r = 0; r < roots.length; r++) { walk(roots[r]); }
    return out;
  }

  /* ------------------------------------------------------------ geometry */

  function computeGeo() {
    var W = els.tree.clientWidth;
    var g = { W: W };
    var D = Math.max(1, maxDepth);
    var x0 = 46, step = Math.min(215, (W - x0 - 240) / D);
    if (step >= 150) {
      g.mode = 'wide';
      g.trunk = 14; g.x0 = x0; g.step = Math.floor(step);
      g.step0 = Math.floor(step) + Math.min(40, Math.max(0, Math.floor((W - x0 - 200 - D * Math.floor(step)))));
      /* a long first-level name (the Russian ones are longer) may take a little more from the leaves:
         bud and gap 26 + the head + 8 + a stub of line 10 + the lane 28 */
      var hn = headNeed();
      g.step0 = Math.max(g.step0, Math.min(hn.head + 72, g.step0 + 32));
      /* and if the longest name still does not fit its column, all first-level names step down in
         size together (26 before the name, 8 after it, the lane 28 from the next column) */
      var room = g.step0 - 62;
      g.d0 = hn.name > room ? Math.max(30, Math.floor(hn.size * room / hn.name)) : 0;
    } else {
      g.mode = 'narrow';
      if (W < 520) { g.trunk = 7; g.x0 = 26; g.step = 20; }
      else { g.trunk = 14; g.x0 = 46; g.step = 32; }
      g.step0 = g.step;
      g.d0 = 0;
    }
    return g;
  }

  /* the widest first-level head (name and count) and the widest name in the current language and
     font at the full size, measured on a hidden copy so that it does not depend on what is open,
     cut or scaled at the moment */
  var need0 = null, d0Size = 0;
  function headNeed() {
    if (need0) { return need0; }
    var probe = h('div', 'node node--branch d0'), text = h('span', 'node__text'), head = h('span', 'node__head');
    var title = h('span', 'node__title'), count = h('span', 'node__count'), w = 0, nw = 0, i, m;
    probe.style.visibility = 'hidden'; probe.style.width = 'max-content';
    probe.style.setProperty('--d0-size', 'initial');
    probe.setAttribute('aria-hidden', 'true');
    probe.appendChild(h('span', 'node__bud'));
    head.appendChild(title); head.appendChild(count);
    text.appendChild(head); probe.appendChild(text);
    els.nodes.appendChild(probe);
    for (i = 0; i < roots.length; i++) {
      m = meta[roots[i]];
      if (!m.kids.length) { continue; }
      title.textContent = F.pick(m.node.title); count.textContent = String(m.leaves);
      w = Math.max(w, head.offsetWidth);
      nw = Math.max(nw, Math.ceil(title.getBoundingClientRect().width));
    }
    var size = parseFloat(window.getComputedStyle(title).fontSize) || 40;
    els.nodes.removeChild(probe);
    return (need0 = { head: w, name: nw, size: size });
  }

  /* width of the text of a name, whether or not it is cut by its box right now */
  function textWidth(el) {
    var r = document.createRange(), w = 0, c;
    for (c = el.firstChild; c; c = c.nextSibling) {
      if (c.nodeType === 1 && c.className === 'pxt') { continue; }      // the pixel layer of js/pixeltext.js
      r.selectNodeContents(c);
      w += r.getBoundingClientRect().width;
    }
    return Math.ceil(w);
  }

  /* an open first-level branch in the wide layout: if name and count do not fit the column together,
     the count steps aside (the children are on screen anyway) */
  function fitHead0(v, room) {
    if (v.nameW == null) {
      v.el.classList.remove('is-tight');
      var count = v.head.querySelector('.node__count');
      v.nameW = textWidth(v.title);
      v.countW = count ? count.offsetWidth : 0;
    }
    var full = v.nameW + (v.countW ? 10 + v.countW : 0), tight = full > room;
    v.el.classList.toggle('is-tight', tight);
    v.headW = Math.min(room, tight ? v.nameW : full);
  }

  function colX(depth) {
    if (depth === 0) { return geo.x0; }
    return geo.x0 + geo.step0 + (depth - 1) * geo.step;
  }

  function rowH(m) { return m.entry ? HL : (m.depth === 0 ? H0 : HB); }
  function anchor(m) { return m.entry ? AL : (m.depth === 0 ? A0 : AB); }

  function nodeWidth(id, opened) {
    var m = meta[id], x = colX(m.depth), room = geo.W - x;
    if (geo.mode === 'narrow') { return Math.max(120, room); }
    if (opened) { return (m.depth === 0 ? geo.step0 : geo.step) - 30; }
    if (m.entry) { return Math.max(160, Math.min(room, 400)); }
    return Math.max(160, Math.min(room, 540));
  }

  /* id -> { x, y, w } for every id of the list; returns total height */
  function computeLayout(list) {
    var pos = {}, cursor = 0, inList = {}, i;
    for (i = 0; i < list.length; i++) { inList[list[i]] = true; }

    function place(id) {
      var m = meta[id], opened = isOpen(id), y = cursor, k, first = true, kid;
      pos[id] = { x: colX(m.depth), y: y, w: nodeWidth(id, opened) };
      if (opened) {
        if (geo.mode === 'narrow') { cursor += rowH(m); }
        for (k = 0; k < m.kids.length; k++) {
          kid = m.kids[k];
          if (!inList[kid]) { continue; }
          if (first && geo.mode === 'wide') { cursor = y + anchor(m) - anchor(meta[kid]); first = false; }
          place(kid);
        }
        if (cursor < y + rowH(m)) { cursor = y + rowH(m); }
      } else {
        cursor += rowH(m);
      }
      if (m.depth === 0) { cursor += GAP0 + (opened ? 14 : 0); }
    }
    for (i = 0; i < roots.length; i++) { if (inList[roots[i]]) { place(roots[i]); } }
    pos._h = Math.max(cursor, 40);
    return pos;
  }

  /* ------------------------------------------------------------ pixel paths */

  function pixelPath(pts) {
    var x = snap(pts[0][0]), y = snap(pts[0][1]);
    var d = 'M' + x + ' ' + y, cmd = '', val = 0, i, nx, ny;
    for (i = 1; i < pts.length; i++) {
      nx = snap(pts[i][0]); ny = snap(pts[i][1]);
      if (nx !== x) {
        if (cmd === 'H') { val = nx; } else { if (cmd) { d += cmd + val; } cmd = 'H'; val = nx; }
        x = nx;
      }
      if (ny !== y) {
        if (cmd === 'V') { val = ny; } else { if (cmd) { d += cmd + val; } cmd = 'V'; val = ny; }
        y = ny;
      }
    }
    if (cmd) { d += cmd + val; }
    return d;
  }

  /* a bough: along the parent's row to the lane, down the lane, a stepped quarter turn into the child.
     Siblings share the lane pixel for pixel, so a long branch reads as one line with twigs:
     a fan of separate curves used to stick together into a rope at its base. */
  function bough(x0, y0, bx, x1, y1) {
    if (Math.abs(y1 - y0) < GRID) { return [[x0, y0], [x1, y0]]; }
    var r0 = Math.min(8, Math.max(0, bx - x0)), r1 = Math.min(18, x1 - bx, y1 - y0 - r0), pts = [[x0, y0]], i, a;
    if (r0 < 4 || r1 < 4) { pts.push([bx, y0], [bx, y1], [x1, y1]); return pts; }
    pts.push([bx - r0, y0]);
    for (i = 1; i <= 4; i++) {
      a = (i / 4) * Math.PI / 2;
      pts.push([bx - r0 + Math.sin(a) * r0, y0 + r0 - Math.cos(a) * r0]);
    }
    pts.push([bx, y1 - r1]);
    for (i = 1; i <= 7; i++) {
      a = (i / 7) * Math.PI / 2;
      pts.push([bx + r1 - Math.cos(a) * r1, y1 - r1 + Math.sin(a) * r1]);
    }
    pts.push([x1, y1]);
    return pts;
  }

  /* upright S: leaves and arrives vertically (the vein from the first screen) */
  function vCurve(x0, y0, x1, y1) {
    var n = Math.max(8, Math.ceil((Math.abs(x1 - x0) + Math.abs(y1 - y0)) / 3));
    var k = (y1 - y0) * 0.85, pts = [], i, t, u;
    for (i = 0; i <= n; i++) {
      t = i / n; u = 1 - t;
      pts.push([
        u * u * u * x0 + 3 * u * u * t * x0 + 3 * u * t * t * x1 + t * t * t * x1,
        u * u * u * y0 + 3 * u * u * t * (y0 + k) + 3 * u * t * t * (y1 - k) + t * t * t * y1
      ]);
    }
    return pts;
  }

  /* down, then a stepped quarter turn to the right */
  function elbow(x0, y0, x1, y1) {
    var r = Math.min(10, x1 - x0, Math.max(0, y1 - y0)), pts = [[x0, y0]], i, a;
    if (r < 4) { pts.push([x0, y1], [x1, y1]); return pts; }
    pts.push([x0, y1 - r]);
    for (i = 1; i <= 5; i++) {
      a = (i / 5) * Math.PI / 2;
      pts.push([x0 + r - Math.cos(a) * r, y1 - r + Math.sin(a) * r]);
    }
    pts.push([x1, y1]);
    return pts;
  }

  /* ------------------------------------------------------------ node elements */

  function makeNode(id) {
    var m = meta[id], node = m.node, el = h('div', 'node');
    el.id = 'node-' + id;
    el.setAttribute('role', 'treeitem');
    el.setAttribute('data-id', id);
    el.setAttribute('aria-level', String(m.depth + 1));
    var sibs = m.parent == null ? roots : meta[m.parent].kids;
    el.setAttribute('aria-setsize', String(sibs.length));
    el.setAttribute('aria-posinset', String(sibs.indexOf(id) + 1));
    el.tabIndex = -1;
    var text = h('span', 'node__text'), head = h('span', 'node__head');
    var title = h('span', 'node__title'), sum = h('span', 'node__sum');
    head.appendChild(title);
    text.appendChild(head);
    text.appendChild(sum);
    el.setAttribute('aria-selected', 'false');
    if (m.entry) {
      el.className = 'node node--leaf k-' + m.kind + (m.leaf ? '' : ' node--kids');
      var slot = h('span', 'node__slot');
      slot.appendChild(icon(node.icon, F.pick(node.title)));
      el.appendChild(slot);
      if (!m.leaf) { head.appendChild(h('span', 'node__count', String(m.leaves - 1))); }
    } else {
      el.className = 'node node--branch' + (m.depth === 0 ? ' d0' : '');
      el.appendChild(h('span', 'node__bud'));
      head.appendChild(h('span', 'node__count', String(m.leaves)));
      if (m.depth === 0) {
        var sprout = h('span', 'node__sprout'), icons = sproutIcons(id, 9), i, im;
        sprout.setAttribute('aria-hidden', 'true');
        for (i = 0; i < icons.length; i++) {
          im = h('img'); im.alt = ''; im.src = icons[i]; im.draggable = false;
          im.addEventListener('error', function () { this.style.display = 'none'; });
          sprout.appendChild(im);
        }
        head.appendChild(sprout);
      }
    }
    el.appendChild(text);
    var v = { id: id, el: el, title: title, sum: sum, head: head, x: 0, y: 0, o: 0, leaving: false };
    fillNodeText(v);
    return v;
  }

  function fillNodeText(v) {
    var node = meta[v.id].node;
    marked(F.pick(node.title), v.title);
    v.sum.textContent = plain(F.pick(node.summary));
    v.headW = null; v.nameW = null;
  }

  /* summaries may carry **bold** and `code`; in the one-line preview they are plain text */
  function plain(text) { return String(text || '').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/`([^`]+)`/g, '$1'); }

  function syncNodeState(v, opened) {
    var m = meta[v.id], el = v.el, sel = selected === v.id;
    if (!m.leaf) {
      el.classList.toggle('is-open', opened);
      el.setAttribute('aria-expanded', opened ? 'true' : 'false');
    }
    el.classList.toggle('is-selected', sel);
    el.setAttribute('aria-selected', sel ? 'true' : 'false');
    el.tabIndex = v.id === focusId ? 0 : -1;
  }

  /* ------------------------------------------------------------ relayout */

  function relayout(opts) {
    opts = opts || {};
    var instant = isInstant() || opts.instant;
    var now = window.performance.now();
    var prevGeoMode = geo && geo.mode;
    geo = computeGeo();
    mode = geo.mode;
    if (prevGeoMode && prevGeoMode !== mode) { instant = true; }
    if (geo.d0 !== d0Size) {
      d0Size = geo.d0;
      if (d0Size) { els.tree.style.setProperty('--d0-size', d0Size + 'px'); }
      else { els.tree.style.removeProperty('--d0-size'); }
      for (var nid in nodeViews) { nodeViews[nid].headW = null; nodeViews[nid].nameW = null; }
    }

    /* freeze whatever is moving right now as the new starting point */
    if (raf) { window.cancelAnimationFrame(raf); raf = 0; }
    var id, v, lv, i;

    var list = buildList();
    var pos = computeLayout(list);
    var inList = {};
    for (i = 0; i < list.length; i++) { inList[list[i]] = true; }

    if (focusId == null || !inList[focusId]) {
      /* keep focus on something visible: nearest shown ancestor, else the first node */
      var f = focusId != null && meta[focusId] ? ancestors(focusId).reverse() : [];
      focusId = null;
      for (i = 0; i < f.length; i++) { if (inList[f[i]]) { focusId = f[i]; break; } }
      if (focusId == null) { focusId = list[0] != null ? list[0] : null; }
    }

    /* nodes: enter, move, leave */
    var enterIdx = {}, entering = {};
    var nextEl = null;
    for (i = list.length - 1; i >= 0; i--) {
      id = list[i];
      v = nodeViews[id];
      if (!v) {
        v = nodeViews[id] = makeNode(id);
        els.nodes.insertBefore(v.el, nextEl);
        v.x = pos[id].x; v.y = pos[id].y; v.o = 0;
        entering[id] = true;
      } else if (v.leaving) {
        v.leaving = false;
        v.el.style.pointerEvents = '';
        entering[id] = true;
      }
      nextEl = v.el;
    }
    /* entering siblings appear one after another */
    for (i = 0; i < list.length; i++) {
      id = list[i];
      if (!entering[id]) { continue; }
      var par = meta[id].parent == null ? '_root' : meta[id].parent;
      enterIdx[par] = (enterIdx[par] || 0) + 1;
      entering[id] = enterIdx[par];
    }

    for (i = 0; i < list.length; i++) {
      id = list[i]; v = nodeViews[id];
      v.fx = v.x; v.fy = v.y; v.tx = pos[id].x; v.ty = pos[id].y;
      v.fo = v.o; v.to = 1;
      v.od = entering[id] ? enterDelay(entering[id], meta[id].depth === 0 && opts.intro) + GROW * 0.5 : 0;
      v.w = pos[id].w;
      v.el.style.width = v.w + 'px';
      syncNodeState(v, isOpen(id));
      if (opts.retitle) { fillNodeText(v); }
    }
    for (id in nodeViews) {
      if (inList[id]) { continue; }
      v = nodeViews[id];
      /* a leaving node rides along with its nearest surviving ancestor */
      var anc = ancestors(id).reverse(), dx = 0, dy = 0;
      for (i = 0; i < anc.length; i++) {
        if (inList[anc[i]]) {
          var av = nodeViews[anc[i]];
          dx = av.tx - av.fx; dy = av.ty - av.fy;
          break;
        }
      }
      v.fx = v.x; v.fy = v.y; v.tx = v.x + dx; v.ty = v.y + dy;
      v.fo = v.o; v.to = 0; v.od = 0;
      v.leaving = true;
      v.el.style.pointerEvents = 'none';
      v.el.tabIndex = -1;
    }

    /* where each open branch's lines start: right after its label */
    for (i = 0; i < list.length; i++) {
      id = list[i]; v = nodeViews[id];
      if (meta[id].depth === 0) {
        if (mode === 'wide' && !meta[id].leaf && isOpen(id)) { fitHead0(v, pos[id].w - 26); }
        else { v.el.classList.remove('is-tight'); }
      } else if (mode === 'wide' && !meta[id].leaf && isOpen(id) && v.headW == null) {
        v.headW = v.head.offsetWidth;
      }
    }

    /* links */
    var want = {};
    var lit = {};
    if (selected != null && inList[selected]) {
      lit[selected] = true;
      ancestors(selected).forEach(function (a) { lit[a] = true; });
    }
    for (i = 0; i < list.length; i++) {
      id = list[i];
      want[id] = true;
      lv = linkViews[id];
      if (!lv) {
        lv = linkViews[id] = { id: id, el: svgEl('path'), g: 0, key: '' };
        lv.el.setAttribute('pathLength', '1');
        els.paths.appendChild(lv.el);
      }
      lv.leaving = false;
      lv.fg = lv.g; lv.tg = 1;
      lv.gd = entering[id] ? enterDelay(entering[id], meta[id].depth === 0 && opts.intro) : 0;
      lv.dur = GROW;
      lv.el.setAttribute('class', (meta[id].depth === 0 ? 'w4' : meta[id].depth === 1 ? 'w4' : '') + (lit[id] ? ' is-lit' : ''));
    }
    /* siblings share a lane: the lit path goes last so that it is drawn over them (ancestors first) */
    if (selected != null && inList[selected]) {
      ancestors(selected).concat([selected]).forEach(function (a) {
        if (linkViews[a]) { els.paths.appendChild(linkViews[a].el); }
      });
    }
    if (list.length) {
      want.trunk = true;
      lv = linkViews.trunk;
      if (!lv) {
        lv = linkViews.trunk = { id: 'trunk', el: svgEl('path'), g: 0, key: '' };
        lv.el.setAttribute('pathLength', '1');
        lv.el.setAttribute('class', 'w6');
        els.paths.insertBefore(lv.el, els.paths.firstChild);
      }
      lv.leaving = false; lv.fg = lv.g; lv.tg = 1; lv.gd = 0; lv.dur = opts.intro ? 900 : GROW;
      lv.last = null;
      for (i = list.length - 1; i >= 0; i--) { if (meta[list[i]].depth === 0) { lv.last = list[i]; break; } }
    }
    for (id in linkViews) {
      if (want[id]) { continue; }
      lv = linkViews[id];
      lv.leaving = true; lv.fg = lv.g; lv.tg = 0; lv.gd = 0; lv.dur = 170;
    }

    visList = list;
    els.tree.classList.toggle('is-wide', mode === 'wide');
    treeH.to = pos._h;
    treeH.from = (opts.hold || !treeH.cur) ? pos._h : treeH.cur;
    els.grad.setAttribute('y2', String(Math.max(300, pos._h)));

    t0 = now;
    if (instant) { held = false; applyAt(1e9); cleanup(); return; }
    if (opts.hold) { held = true; applyAt(0); return; }
    held = false;
    raf = window.requestAnimationFrame(frame);
  }

  function enterDelay(idx, intro) {
    if (intro) { return 260 + (idx - 1) * 120; }
    return 30 + Math.min(idx - 1, 14) * 26;
  }

  function linkCoords(lv) {
    /* returns [kind, x0, y0, x1, y1] from the current (tweened) node positions */
    var id = lv.id, v, m, p, pm;
    if (id === 'trunk') {
      v = nodeViews[lv.last];
      return v ? ['line', geo.trunk, 0, geo.trunk, v.y + A0] : null;
    }
    v = nodeViews[id]; m = meta[id];
    if (!v) { return null; }
    if (m.depth === 0) { return ['line', geo.trunk, v.y + A0, v.x - 4, v.y + A0]; }
    p = nodeViews[m.parent]; pm = meta[m.parent];
    if (!p) { return null; }
    if (mode === 'wide') {
      var lead = pm.entry ? 46 : (pm.depth === 0 ? 26 : 20);      // icon slot or bud, plus the gap
      var sx = p.x + lead + (p.headW != null ? p.headW : 60) + 8;
      var lane = v.x - 28;                                        // the same for every sibling
      if (sx > lane - 10) { sx = lane - 10; }
      return ['bough', sx, p.y + anchor(pm), v.x - 4, v.y + anchor(m), lane];
    }
    var half = pm.entry ? 6 : (pm.depth === 0 ? 7 : 5);           // under the slot's left part, or the bud's middle
    return ['elbow', p.x + half, p.y + anchor(pm) + (pm.entry ? 22 : half + 4), v.x - 4, v.y + anchor(m)];
  }

  function applyAt(t) {
    var busy = false, id, v, lv, p, q, x, y, o, c, key, g;
    p = ease(clamp01(t / MOVE));
    if (p < 1) { busy = true; }
    for (id in nodeViews) {
      v = nodeViews[id];
      x = v.fx + (v.tx - v.fx) * p; y = v.fy + (v.ty - v.fy) * p;
      if (x !== v.x || y !== v.y || !v.placed) {
        v.x = x; v.y = y; v.placed = true;
        v.el.style.transform = 'translate(' + Math.round(x) + 'px,' + Math.round(y) + 'px)';
      }
      q = clamp01((t - v.od) / (v.leaving ? 130 : FADE));
      if (q < 1) { busy = true; }
      o = v.fo + (v.to - v.fo) * q;
      if (o !== v.o || v.oSet == null) { v.o = o; v.oSet = true; v.el.style.opacity = o >= 1 ? '' : String(o); }
    }
    for (id in linkViews) {
      lv = linkViews[id];
      q = clamp01((t - lv.gd) / lv.dur);
      if (q < 1) { busy = true; }
      g = lv.fg + (lv.tg - lv.fg) * ease(q);
      c = linkCoords(lv);
      if (c) {
        key = c.join(',');
        if (key !== lv.key) {
          lv.key = key;
          lv.el.setAttribute('d', pixelPath(
            c[0] === 'bough' ? bough(c[1], c[2], c[5], c[3], c[4]) :
            c[0] === 'elbow' ? elbow(c[1], c[2], c[3], c[4]) :
            [[c[1], c[2]], [c[3], c[4]]]));
        }
      }
      if (g !== lv.g || lv.gSet == null) {
        lv.g = g; lv.gSet = true;
        lv.el.style.strokeDashoffset = String(1 - g);
        lv.el.style.visibility = g <= 0.001 ? 'hidden' : '';
      }
    }
    var hh = treeH.from + (treeH.to - treeH.from) * p;
    if (hh !== treeH.cur) { treeH.cur = hh; els.tree.style.height = Math.round(hh) + 'px'; }
    return busy;
  }

  function cleanup() {
    var id;
    for (id in nodeViews) {
      if (nodeViews[id].leaving) {
        if (nodeViews[id].el.parentNode) { nodeViews[id].el.parentNode.removeChild(nodeViews[id].el); }
        delete nodeViews[id];
      }
    }
    for (id in linkViews) {
      if (linkViews[id].leaving) {
        if (linkViews[id].el.parentNode) { linkViews[id].el.parentNode.removeChild(linkViews[id].el); }
        delete linkViews[id];
      }
    }
  }

  function frame(now) {
    raf = 0;
    if (applyAt(now - t0)) { raf = window.requestAnimationFrame(frame); }
    else { cleanup(); }
  }

  function release() {
    if (!held) { return; }
    held = false;
    t0 = window.performance.now();
    raf = window.requestAnimationFrame(frame);
  }

  /* ------------------------------------------------------------ vein from the first screen */

  function drawVein() {
    var inner = els.inner.getBoundingClientRect(), tr = els.tree.getBoundingClientRect();
    var cx = inner.width / 2, tx = tr.left - inner.left + geo.trunk, ty = tr.top - inner.top;
    var y0 = inner.width < 700 ? 14 : 22, y1 = Math.min(ty - 20, inner.width < 700 ? 82 : 136);
    var pts = [[cx, 0], [cx, y0]].concat(vCurve(cx, y0, tx, y1)).concat([[tx, ty]]);
    els.vein.style.height = Math.round(ty) + 'px';
    els.veinPath.setAttribute('pathLength', '1');
    els.veinPath.setAttribute('d', pixelPath(pts));
  }

  /* ------------------------------------------------------------ status, chips */

  function renderKinds() {
    var counts = {}, i, m, k;
    for (i = 0; i < entryOrder.length; i++) { m = meta[entryOrder[i]]; counts[m.kind] = (counts[m.kind] || 0) + 1; }
    els.kinds.textContent = '';
    for (i = 0; i < KIND_ORDER.length; i++) {
      k = KIND_ORDER[i];
      if (!counts[k]) { continue; }
      var b = h('button', 'kind k-' + k);
      b.type = 'button';
      b.setAttribute('data-kind', k);
      b.setAttribute('aria-pressed', kindFilter === k ? 'true' : 'false');
      b.appendChild(h('span', null, F.t('kinds.' + k)));
      b.appendChild(h('span', 'kind__n', String(counts[k])));
      els.kinds.appendChild(b);
    }
  }

  /* on a phone the chips are one row that scrolls sideways: keep the pressed one in sight */
  function showChip() {
    var box = els.kinds, b = box.querySelector('.kind[aria-pressed="true"]');
    if (!b || box.scrollWidth <= box.clientWidth) { return; }
    var br = b.getBoundingClientRect(), kr = box.getBoundingClientRect();
    if (br.left < kr.left + 4) { box.scrollLeft += br.left - kr.left - 4; }
    else if (br.right > kr.right - 44) { box.scrollLeft += br.right - kr.right + 44; }
  }

  function renderStatus(found) {
    els.status.textContent = '';
    if (!filterOn()) {
      els.status.textContent = F.t('status.total', { n: entryOrder.length, b: totalBranches });
      return;
    }
    els.status.appendChild(document.createTextNode(found ? F.t('status.found', { n: found }) : F.t('status.none')));
    var b = h('button', null, F.t('status.clear'));
    b.type = 'button';
    b.addEventListener('click', function () { clearFilter(); els.q.focus(); });
    els.status.appendChild(b);
  }

  function applyFilter(opts) {
    var found = computeFilter();
    var chips = els.kinds.querySelectorAll('.kind');
    for (var i = 0; i < chips.length; i++) {
      chips[i].setAttribute('aria-pressed', chips[i].getAttribute('data-kind') === kindFilter ? 'true' : 'false');
    }
    renderStatus(found);
    showChip();
    var o = { retitle: true };
    if (opts && opts.instant) { o.instant = true; }
    relayout(o);
  }

  function clearFilter(silent) {
    query = ''; kindFilter = null;
    els.q.value = '';
    if (!silent) { applyFilter(); } else { computeFilter(); renderStatus(0); }
  }

  /* ------------------------------------------------------------ card */

  function crumb(id) {
    var p = h('p', 'card__path');
    ancestors(id).forEach(function (a) { p.appendChild(h('span', null, F.pick(meta[a].node.title))); });
    return p;
  }

  function renderEmptyCard() {
    var box = h('div', 'card__empty'), art = h('div', 'card__empty-art'), i;
    var icons = [];
    for (i = 0; i < entryOrder.length && icons.length < 8; i += Math.max(1, Math.floor(entryOrder.length / 8))) {
      if (meta[entryOrder[i]].node.icon) { icons.push(meta[entryOrder[i]].node.icon); }
    }
    for (i = 0; i < 8; i++) {
      var s = h('span');
      if (icons[i]) { s.appendChild(icon(icons[i], '')); }
      art.appendChild(s);
    }
    art.setAttribute('aria-hidden', 'true');
    box.appendChild(art);
    box.appendChild(h('h3', null, F.t('card.empty.title')));
    box.appendChild(h('p', null, F.t('card.empty.text')));
    var keys = h('div', 'keys');
    [[['↑', '↓', '←', '→'], 'card.keys.move'], [['Enter'], 'card.keys.open'],
     [['/'], 'card.keys.search'], [['Esc'], 'card.keys.close']].forEach(function (row) {
      var k = h('kbd');
      row[0].forEach(function (c) { k.appendChild(h('b', null, c)); });
      keys.appendChild(k);
      keys.appendChild(h('span', null, F.t(row[1])));
    });
    box.appendChild(keys);
    els.card.textContent = '';
    els.card.appendChild(box);
  }

  function renderCard() {
    if (selected == null || !meta[selected]) { renderEmptyCard(); return; }
    var m = meta[selected], node = m.node, i;
    var box = h('div', 'card__inner k-' + m.kind);

    var close = h('button', 'card__close');
    close.type = 'button';
    close.setAttribute('aria-label', F.t('card.close'));
    close.innerHTML = '<svg viewBox="0 0 14 14" aria-hidden="true"><path fill="currentColor" d="M0 0h2v2H0zM2 2h2v2H2zM4 4h2v2H4zM6 6h2v2H6zM8 8h2v2H8zM10 10h2v2h-2zM12 12h2v2h-2zM12 0h2v2h-2zM10 2h2v2h-2zM8 4h2v2H8zM4 8h2v2H4zM2 10h2v2H2zM0 12h2v2H0z"/></svg>';
    close.addEventListener('click', function () { select(null, { focusBack: true }); });
    box.appendChild(close);

    box.appendChild(crumb(selected));

    var top = h('div', 'card__top'), slot = h('span', 'card__slot'), tt = h('div');
    if (m.entry) { slot.appendChild(icon(node.icon, F.pick(node.title))); }
    else { slot.appendChild(h('i', 'card__n', String(m.leaves))); }      // a plain branch shows how much grows on it
    top.appendChild(slot);
    tt.appendChild(h('p', 'card__kind', F.t('kind.' + m.kind)));
    var title = h('h3', 'card__title', F.pick(node.title));
    title.tabIndex = -1;
    title.id = 'card-title';
    tt.appendChild(title);
    top.appendChild(tt);
    box.appendChild(top);

    /* the summary is the lead line, unless the body opens with the same words */
    var sum = F.pick(node.summary), body = F.pick(node.body);
    var sumKey = plain(sum).replace(/[.…!\s]+$/, '');
    if (sum && !(sumKey && plain(body).indexOf(sumKey) === 0)) {
      var sp = h('p', 'card__sum'); inline(sum, sp); box.appendChild(sp);
    }

    if (node.stats && node.stats.length) {
      var dl = h('dl', 'stats');
      dl.setAttribute('aria-label', F.t('card.stats'));
      for (i = 0; i < node.stats.length; i++) {
        var st = node.stats[i], cell = h('div', 'stat');
        cell.appendChild(h('dt', null, F.pick(st.label) || st.key || ''));
        var dd = h('dd', null, F.pick(st.value));
        cell.appendChild(dd);
        if (st.vanilla != null && st.vanilla !== '') {
          dd.appendChild(h('span', 'stat__van', F.t('card.vanilla') + ' · ' + F.pick(st.vanilla)));
        }
        dl.appendChild(cell);
      }
      box.appendChild(dl);
    }

    if (body) { var bd = h('div', 'card__body'); rich(body, bd); box.appendChild(bd); }

    if (node.recipe && (node.recipe.inputs || node.recipe.result)) {
      box.appendChild(h('h4', 'card__h', F.t('card.recipe')));
      /* a sign and the item after it wrap as one piece: no arrow is left hanging at the end of a row */
      var rc = h('div', 'recipe'), ins = node.recipe.inputs || [], step;
      for (i = 0; i < ins.length; i++) {
        step = h('span', 'recipe__step');
        if (i) { step.appendChild(h('span', 'recipe__op', '+')); }
        step.appendChild(recipeItem(ins[i], false));
        rc.appendChild(step);
      }
      if (node.recipe.result) {
        step = h('span', 'recipe__step');
        step.appendChild(h('span', 'recipe__op', '→'));
        step.appendChild(recipeItem(node.recipe.result, true));
        rc.appendChild(step);
      }
      box.appendChild(rc);
      var note = F.pick(node.recipe.note);
      if (note) { var np = h('p', 'recipe__note'); inline(note, np); box.appendChild(np); }
    }

    if (node.reactions && node.reactions.length) {
      box.appendChild(h('h4', 'card__h', F.t('card.reactions')));
      var ul = h('ul', 'react');
      for (i = 0; i < node.reactions.length; i++) {
        var li = h('li');
        li.appendChild(h('span', 'react__with', F.pick(node.reactions[i]['with'])));
        li.appendChild(h('span', 'react__arrow', '→'));
        li.appendChild(h('span', 'react__gives', F.pick(node.reactions[i].gives)));
        ul.appendChild(li);
      }
      box.appendChild(ul);
    }

    if (node.tags && node.tags.length) {
      var tags = h('ul', 'tags');
      for (i = 0; i < node.tags.length; i++) { tags.appendChild(h('li', null, '#' + node.tags[i])); }
      box.appendChild(tags);
    }

    /* what grows on this node: quick links to its children */
    if (m.kids.length) {
      box.appendChild(h('h4', 'card__h', F.t('card.inside')));
      var kl = h('ul', 'inside');
      m.kids.forEach(function (kid) {
        var km = meta[kid], li = h('li'), b = h('button', 'inside__btn k-' + km.kind), sl = h('span', 'inside__ico');
        b.type = 'button';
        if (km.entry) { sl.appendChild(icon(km.node.icon, F.pick(km.node.title))); }
        else { sl.appendChild(h('i', null, String(km.leaves))); }
        b.appendChild(sl);
        b.appendChild(h('span', null, F.pick(km.node.title)));
        b.addEventListener('click', function () { go(kid, { fromCard: true }); });
        li.appendChild(b);
        kl.appendChild(li);
      });
      box.appendChild(kl);
    }

    /* previous / next entry in reading order (plain branches are skipped) */
    var foot = h('div', 'card__foot'), at = allOrder.indexOf(selected), prev = null, next = null;
    for (i = at - 1; i >= 0; i--) { if (meta[allOrder[i]].entry) { prev = allOrder[i]; break; } }
    for (i = at + 1; i < allOrder.length; i++) { if (meta[allOrder[i]].entry) { next = allOrder[i]; break; } }
    foot.appendChild(navBtn(prev, 'prev'));
    var copy = h('button', 'card__copy', F.t('card.copy'));
    copy.type = 'button';
    copy.addEventListener('click', copyLink);
    foot.appendChild(copy);
    foot.appendChild(navBtn(next, 'next'));
    box.appendChild(foot);

    els.card.textContent = '';
    els.card.appendChild(box);
    els.card.scrollTop = 0;
    fitTitle();
  }

  /* a long single word must not be broken in the middle of the card title (Russian has words of
     15 letters): the title steps down in size until its longest word fits the line */
  function fitTitle() {
    var t = document.getElementById('card-title');
    if (!t) { return; }
    t.style.fontSize = '';
    var size = parseFloat(window.getComputedStyle(t).fontSize), room = t.clientWidth, w = 0;
    if (!room || !size) { return; }
    var r = document.createRange(), c, re, m;
    t.style.whiteSpace = 'nowrap';
    for (c = t.firstChild; c; c = c.nextSibling) {
      if (c.nodeType !== 3) { continue; }
      re = /[^\s-]+-?|-+/g;                                    // a line may break after a hyphen
      while ((m = re.exec(c.nodeValue))) {
        r.setStart(c, m.index); r.setEnd(c, m.index + m[0].length);
        w = Math.max(w, r.getBoundingClientRect().width);
      }
    }
    t.style.whiteSpace = '';
    if (w > room) { t.style.fontSize = Math.max(24, Math.floor(size * room / w / 2) * 2) + 'px'; }
    if (F.pixelText) { F.pixelText.scan(); }
  }

  function recipeItem(item, out) {
    var e = h('span', 'recipe__item' + (out ? ' recipe__item--out' : '')), ic = h('span', 'recipe__ico');
    var name = F.pick(item.title);
    ic.appendChild(icon(item.icon, name));
    e.appendChild(ic);
    e.appendChild(h('span', null, name));
    return e;
  }

  function navBtn(id, dir) {
    var b = h('button', 'card__nav card__nav--' + dir);
    b.type = 'button';
    if (id == null) { b.disabled = true; return b; }
    b.appendChild(h('small', null, F.t('card.' + dir)));
    b.appendChild(h('span', null, F.pick(meta[id].node.title)));
    b.addEventListener('click', function () { select(id, { reveal: true, keepCardFocus: true, dir: dir }); });
    return b;
  }

  function copyLink() {
    var url = location.href.split('#')[0] + '#' + encodeURIComponent(selected).replace(/%2E/gi, '.');
    function ok() { F.toast(F.t('card.copied')); }
    function fallback() {
      try {
        var ta = h('textarea'); ta.value = url; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        var done = document.execCommand('copy');
        document.body.removeChild(ta);
        F.toast(F.t(done ? 'card.copied' : 'card.copyfail'));
      } catch (e) { F.toast(F.t('card.copyfail')); }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(url).then(ok, fallback); }
    else { fallback(); }
  }

  function setOverlay(on) {
    els.card.classList.toggle('is-open', on);
    els.scrim.hidden = !(on && mqOverlay.matches);
  }

  /* ------------------------------------------------------------ actions */

  function setHash(id) {
    var url = location.pathname + location.search + (id != null ? '#' + id : '');
    try { window.history.replaceState(null, '', url); }
    catch (e) { if (id != null) { location.hash = id; } }
  }

  function scrollToNode(id, smooth) {
    var v = nodeViews[id];
    if (!v || F.shot) { return; }
    var top = els.tree.getBoundingClientRect().top + window.pageYOffset + v.ty;
    var y = Math.max(0, top - Math.round(window.innerHeight * 0.28));
    if (smooth && !isInstant()) { window.scrollTo({ top: y, behavior: 'smooth' }); }
    else { window.scrollTo(0, y); }
  }

  function focusNode(id, scroll) {
    var old = focusId != null && nodeViews[focusId];
    if (old) { old.el.tabIndex = -1; }
    focusId = id;
    var v = nodeViews[id];
    if (!v) { return; }
    v.el.tabIndex = 0;
    v.el.focus({ preventScroll: true });
    if (scroll !== false) { v.el.scrollIntoView({ block: 'nearest' }); }
  }

  function toggle(id, want) {
    var m = meta[id];
    if (!m || m.leaf) { return; }
    if (filterOn() && m.below) { return; }   // held open by the search
    var next = want == null ? !open[id] : want;
    if (!!open[id] === next) { return; }
    if (next) { open[id] = true; } else { delete open[id]; }
    relayout();
  }

  function openPath(id) {
    var changed = false;
    ancestors(id).forEach(function (a) { if (!open[a]) { open[a] = true; changed = true; } });
    return changed;
  }

  /* opts: reveal (open the way to it and scroll), focusBack, keepCardFocus, instant, fromKeyboard */
  function select(id, opts) {
    opts = opts || {};
    var prev = selected;
    if (id != null && !meta[id]) { return; }
    selected = id;
    var cleared = false;
    if (id != null) {
      if (filterOn() && !visible(id)) { clearFilter(true); cleared = true; }
      openPath(id);
      focusId = id;
    }
    relayout({ instant: opts.instant, retitle: cleared });
    renderCard();
    setHash(id);
    setOverlay(id != null);
    if (id != null) {
      if (opts.reveal) { scrollToNode(id, !opts.instant); }
      if ((mqOverlay.matches || opts.keepCardFocus) && !opts.noFocus) {
        /* the card is a panel over the page here: move focus into it (back to the same arrow when paging) */
        var t = opts.dir ? els.card.querySelector('.card__nav--' + opts.dir + ':not([disabled])') : null;
        if (!t) { t = els.card.querySelector('.card__close'); }
        if (t) { t.focus({ preventScroll: true }); }
      }
    } else if (opts.focusBack && prev != null && nodeViews[prev]) {
      focusNode(prev, false);
    }
  }

  /* open a node by id (deep links, links inside a card): an entry gets its card, a branch is opened;
     both are scrolled to. A plain branch shows its overview card only where the card sits beside the tree. */
  function go(id, opts) {
    opts = opts || {};
    var m = meta[id];
    if (!m) { return false; }
    if (!m.leaf) { open[id] = true; }
    if (m.entry || !mqOverlay.matches) {
      select(id, { reveal: true, instant: opts.instant, noFocus: opts.noFocus || !opts.fromCard });
      if (opts.fromCard && !mqOverlay.matches) { focusNode(id, false); }
    } else {
      if (filterOn()) { clearFilter(true); }
      openPath(id);
      focusId = id;
      if (selected != null) { select(null, {}); } else { relayout({ instant: opts.instant }); }
      scrollToNode(id, !opts.instant);
    }
    return true;
  }

  /* click or Enter on a node */
  function activate(id) {
    var m = meta[id];
    if (m.leaf) { select(id, {}); return; }
    var pinned = filterOn() && m.below;                 // the search keeps it open
    if (!m.entry) {
      if (!pinned) { if (open[id]) { delete open[id]; } else { open[id] = true; } }
      if (mqOverlay.matches) { relayout(); } else { select(id, {}); }
    } else {
      /* an entry with children: the first click opens it and shows its card, a click on the selected one folds it */
      if (!pinned) { if (selected === id && open[id]) { delete open[id]; } else { open[id] = true; } }
      select(id, {});
    }
  }

  function expandAll(on) {
    open = {};
    if (on) { for (var id in meta) { if (!meta[id].leaf) { open[id] = true; } } }
    relayout();
  }

  /* ------------------------------------------------------------ events */

  function nodeIdFrom(target) {
    while (target && target !== els.tree) {
      if (target.getAttribute && target.getAttribute('data-id') != null) { return target.getAttribute('data-id'); }
      target = target.parentNode;
    }
    return null;
  }

  function onTreeClick(ev) {
    var id = nodeIdFrom(ev.target);
    if (id == null || !meta[id]) { return; }
    var old = focusId != null && nodeViews[focusId];
    if (old) { old.el.tabIndex = -1; }
    focusId = id;
    activate(id);
  }

  function onTreeKey(ev) {
    var id = nodeIdFrom(ev.target);
    if (id == null || !meta[id] || ev.altKey || ev.ctrlKey || ev.metaKey) { return; }
    var m = meta[id], at = visList.indexOf(id), k = ev.key, done = true;
    if (k === 'ArrowDown') { if (at < visList.length - 1) { focusNode(visList[at + 1]); } }
    else if (k === 'ArrowUp') { if (at > 0) { focusNode(visList[at - 1]); } }
    else if (k === 'ArrowRight') {
      if (!m.leaf) {
        if (!isOpen(id)) { toggle(id, true); }
        else if (at < visList.length - 1 && meta[visList[at + 1]].parent === id) { focusNode(visList[at + 1]); }
      }
    }
    else if (k === 'ArrowLeft') {
      if (!m.leaf && isOpen(id) && !(filterOn() && m.below)) { toggle(id, false); }
      else if (m.parent != null) { focusNode(m.parent); }
    }
    else if (k === 'Home') { if (visList.length) { focusNode(visList[0]); } }
    else if (k === 'End') { if (visList.length) { focusNode(visList[visList.length - 1]); } }
    else if (k === 'Enter' || k === ' ' || k === 'Spacebar') { focusId = id; activate(id); }
    else { done = false; }
    if (done) { ev.preventDefault(); }
  }

  var qTimer = 0;
  function onSearchInput() {
    window.clearTimeout(qTimer);
    qTimer = window.setTimeout(function () {
      var q = els.q.value.trim().toLowerCase();
      if (q === query) { return; }
      query = q;
      applyFilter();
    }, 110);
  }

  function firstMatchLeaf() {
    for (var i = 0; i < visList.length; i++) {
      if (meta[visList[i]].entry && (!matchSelf || matchSelf[visList[i]])) { return visList[i]; }
    }
    return null;
  }

  function onSearchKey(ev) {
    if (ev.key === 'Escape') {
      if (els.q.value) { ev.preventDefault(); ev.stopPropagation(); clearFilter(); }
      return;
    }
    if (ev.key === 'Enter' || ev.key === 'ArrowDown') {
      ev.preventDefault();
      window.clearTimeout(qTimer);
      var q = els.q.value.trim().toLowerCase();
      if (q !== query) { query = q; applyFilter(); }
      var id = firstMatchLeaf();
      if (id == null) { id = visList[0]; }
      if (id == null) { return; }
      if (ev.key === 'Enter' && meta[id].entry) { select(id, { reveal: true, noFocus: !mqOverlay.matches }); }
      else { focusNode(id); }
    }
  }

  function onDocKey(ev) {
    var tag = ev.target && ev.target.tagName;
    var typing = tag === 'INPUT' || tag === 'TEXTAREA' || (ev.target && ev.target.isContentEditable);
    if (ev.key === '/' && !typing && !ev.ctrlKey && !ev.metaKey && !ev.altKey) {
      ev.preventDefault();
      els.q.focus();
      els.q.select();
    } else if (ev.key === 'Escape' && selected != null && !typing) {
      select(null, { focusBack: true });
    }
  }

  function onHash() {
    var id = decodeURIComponent(location.hash.replace(/^#/, ''));
    if (!id || id.charAt(0) === '_') { return; }   // page anchors (#_tree, #_top)
    if (id === selected) { return; }
    go(id, { instant: false });
  }

  var rTimer = 0, lastW = 0;
  function onResize() {
    window.clearTimeout(rTimer);
    rTimer = window.setTimeout(function () {
      var w = els.tree.clientWidth;
      if (w === lastW) { drawVein(); return; }
      lastW = w;
      remeasure();
    }, 120);
  }

  function remeasure() {
    var id;
    need0 = null;
    if (held) {
      /* the intro has not played yet: start it over with the new measures */
      for (id in nodeViews) { els.nodes.removeChild(nodeViews[id].el); }
      for (id in linkViews) { els.paths.removeChild(linkViews[id].el); }
      nodeViews = {}; linkViews = {};
      relayout({ hold: true, intro: true });
    } else {
      for (id in nodeViews) { nodeViews[id].headW = null; nodeViews[id].nameW = null; }
      relayout({ instant: true });
    }
    drawVein();
    setOverlay(selected != null);
    fitTitle();
  }

  /* ------------------------------------------------------------ init */

  function init(data) {
    els.codex = document.getElementById('_tree');
    els.inner = els.codex.querySelector('.codex__inner');
    els.tree = document.getElementById('tree');
    els.nodes = els.tree.querySelector('.tree__nodes');
    els.paths = els.tree.querySelector('.tree__paths');
    els.grad = els.tree.querySelector('#heat');
    els.card = document.getElementById('card');
    els.q = document.getElementById('q');
    els.kinds = document.getElementById('kinds');
    els.status = document.getElementById('status');
    els.scrim = document.getElementById('scrim');
    els.vein = els.codex.querySelector('.codex__vein');
    els.veinPath = els.vein.querySelector('path');

    indexData(data);
    if (!roots.length) {
      els.status.textContent = F.t('nodata');
      els.card.style.display = 'none';
      return;
    }

    instantAll = F.param('still') === '1';

    /* state from the address: ?open=a,b &leaf=id &q=text &kind=spell, or #id */
    var pOpen = F.param('open'), pLeaf = F.param('leaf'), pQ = F.param('q'), pKind = F.param('kind');
    var hash = decodeURIComponent(location.hash.replace(/^#/, ''));
    var deep = false;
    if (pOpen) {
      pOpen.split(',').forEach(function (id) {
        id = id.trim();
        if (id === 'all') { for (var k in meta) { if (!meta[k].leaf) { open[k] = true; } } deep = true; return; }
        if (meta[id] && !meta[id].leaf) { open[id] = true; openPath(id); deep = true; }
      });
    }
    if (pQ) { query = pQ.trim().toLowerCase(); els.q.value = pQ; deep = true; }
    if (pKind && KIND_ORDER.indexOf(pKind) >= 0) { kindFilter = pKind; deep = true; }
    var target = null;
    if (pLeaf && meta[pLeaf]) { target = pLeaf; }
    else if (hash && meta[hash]) { target = hash; }
    if (target != null) {
      deep = true;
      openPath(target);
      if (!meta[target].leaf) { open[target] = true; }
      if (meta[target].entry || !mqOverlay.matches) { selected = target; }
      focusId = target;
    }

    renderKinds();
    showChip();
    renderStatus(computeFilter());
    renderCard();

    lastW = els.tree.clientWidth;
    var intro = !deep && !isInstant();
    relayout({ instant: !intro, hold: intro, intro: intro });
    drawVein();
    setOverlay(selected != null);

    if (isInstant() || deep) { els.codex.classList.add('is-in'); }
    if (target != null) {
      /* after layout settles (fonts, images) put the target in view */
      var jump = function () { if (target === selected || open[target]) { scrollToNode(target, false); } };
      jump();
      window.addEventListener('load', jump);
    }

    if (window.IntersectionObserver) {
      var io = new window.IntersectionObserver(function (entries) {
        for (var i = 0; i < entries.length; i++) {
          if (!entries[i].isIntersecting) { continue; }
          if (entries[i].target === els.codex) { els.codex.classList.add('is-in'); }
          else { window.setTimeout(release, isInstant() ? 0 : 420); }
          io.unobserve(entries[i].target);
        }
      }, { rootMargin: '0px 0px -12% 0px' });
      io.observe(els.codex);
      io.observe(els.tree);
    } else {
      els.codex.classList.add('is-in');
      release();
    }

    els.tree.addEventListener('click', onTreeClick);
    els.tree.addEventListener('keydown', onTreeKey);
    els.q.addEventListener('input', onSearchInput);
    els.q.addEventListener('keydown', onSearchKey);
    els.kinds.addEventListener('click', function (ev) {
      var b = ev.target;
      while (b && b !== els.kinds && !(b.getAttribute && b.getAttribute('data-kind'))) { b = b.parentNode; }
      if (!b || b === els.kinds) { return; }
      var k = b.getAttribute('data-kind');
      kindFilter = kindFilter === k ? null : k;
      applyFilter();
    });
    document.getElementById('expand-all').addEventListener('click', function () { expandAll(true); });
    document.getElementById('collapse-all').addEventListener('click', function () { expandAll(false); });
    els.scrim.addEventListener('click', function () { select(null, { focusBack: true }); });
    document.addEventListener('keydown', onDocKey);
    window.addEventListener('hashchange', onHash);
    window.addEventListener('resize', onResize);
    if (mqOverlay.addEventListener) { mqOverlay.addEventListener('change', function () { setOverlay(selected != null); }); }
    if (document.fonts && document.fonts.ready) { document.fonts.ready.then(remeasure); }

    F.onLang(function () {
      renderKinds();
      showChip();
      renderStatus(computeFilter());
      renderCard();
      for (var id in nodeViews) { fillNodeText(nodeViews[id]); }
      remeasure();
    });
  }

  F.codex = {
    init: init, go: go, select: select,
    /* for js/pixeltext.js: a heading face that arrives late changes the width of the branch names */
    remeasure: function () { if (els.tree && roots.length) { remeasure(); } }
  };
})();
