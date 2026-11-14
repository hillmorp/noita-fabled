/* Pixel headings for the Russian version.

   English headings are set in Jacquard 24, a pixel blackletter like the logo. It has no Cyrillic, and
   Google Fonts has no blackletter with Cyrillic at all. The Cyrillic counterpart of blackletter is the
   old Slavic book hand, so Russian headings use Monomakh - and to keep them in the same pixel world
   this file redraws them: the text is drawn on a canvas at half size, its edge is cut hard, and the
   canvas is scaled back up with image-rendering: pixelated.

   The real text stays in the page (transparent, same font, same place): layout, selection, search in
   page and screen readers work as before, and every word is drawn exactly where the browser put it.
   If the font or the canvas is not available the heading simply stays as smooth Monomakh text.

   Two letters are corrected on the way. Monomakh keeps their old shapes: its "и" has a hairline
   diagonal that collapses into a bar once cut to pixels, and its "н" is drawn like a Latin N, so at
   heading sizes both read as "н" ("Заклннання"). Here "и" and "й" are the font's own "н" mirrored
   (a clear thick diagonal, "й" keeps its breve), and "н" is the two stems of the font's "и" with a
   straight bar between them. Same strokes, same widths, modern reading. */
(function () {
  'use strict';

  var F = window.Fabled = window.Fabled || {};
  var SELECTOR = '.codex__title, .node.d0 .node__title, .card__title, .card__empty h3';
  var FAMILY = 'Monomakh';
  var CELL = 2;          // css px per drawn pixel
  var PAD = 8;           // css px around the element: room for swashes and the shadow
  var CUT = 100;         // alpha above which a pixel is on

  var ready = false, loading = null;
  var scratch = document.createElement('canvas');
  var sctx = scratch.getContext && scratch.getContext('2d', { willReadFrequently: true });
  var colorCache = {};

  function on() { return ready && !!sctx && F.lang === 'ru'; }

  function rgb(str) {
    if (colorCache[str]) { return colorCache[str]; }
    var m = /rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/.exec(str) || [0, 255, 212, 103];
    return (colorCache[str] = [+m[1], +m[2], +m[3]]);
  }

  function contentKey(el) {
    var s = '', c = el.firstChild;
    for (; c; c = c.nextSibling) {
      if (c.nodeType === 3) { s += c.nodeValue; }
      else if (c.nodeType === 1 && c.className !== 'pxt') { s += c.outerHTML; }
    }
    return s;
  }

  function strip(el) {
    var st = el._pxt;
    if (st && st.canvas.parentNode) { st.canvas.parentNode.removeChild(st.canvas); }
    el.classList.remove('is-px');
    el._pxt = null;
  }

  /* every word (or letter, if a word is broken across lines) with the place the browser gave it */
  function words(el, er) {
    var out = [], walker = document.createTreeWalker(el, window.NodeFilter.SHOW_TEXT, null);
    var range = document.createRange(), node, re, m, rects, i, color;
    while ((node = walker.nextNode())) {
      color = window.getComputedStyle(node.parentNode).color;
      re = /\S+/g;
      while ((m = re.exec(node.nodeValue))) {
        range.setStart(node, m.index); range.setEnd(node, m.index + m[0].length);
        rects = range.getClientRects();
        if (rects.length === 1) {
          out.push({ t: m[0], x: rects[0].left - er.left, y: rects[0].top - er.top, w: rects[0].width, c: color });
          continue;
        }
        for (i = 0; i < m[0].length; i++) {
          range.setStart(node, m.index + i); range.setEnd(node, m.index + i + 1);
          rects = range.getClientRects();
          if (rects.length) { out.push({ t: m[0].charAt(i), x: rects[0].left - er.left, y: rects[0].top - er.top, w: rects[0].width, c: color }); }
        }
      }
    }
    return out;
  }

  /* ---- the corrected letters: each is built once per size as a small stamp of hard pixels,
          so every "и" of a heading is the same "и" whatever its place in the line */
  var FIX = { 'и': 'н', 'й': 'н', 'И': 'Н', 'Й': 'Н', 'н': 'и', 'Н': 'И' };
  var FIX_RE = /[ийнИЙН]/;
  var stamps = {};

  function stamp(ch, fs, font) {
    var key = ch + '|' + fs;
    if (stamps[key]) { return stamps[key]; }
    var g = FIX[ch], bar = ch === 'н' || ch === 'Н', breve = ch === 'й' || ch === 'Й';
    var pc = document.createElement('canvas'), px = pc.getContext('2d', { willReadFrequently: true });
    px.font = font;
    var m = px.measureText(g), mb = breve ? px.measureText(ch) : m;
    var gw = Math.round(m.width), w = gw + 4;
    var base = Math.ceil(Math.max(m.actualBoundingBoxAscent || fs * 0.7, mb.actualBoundingBoxAscent || 0)) + 2;
    var h = base + Math.ceil(m.actualBoundingBoxDescent || 0) + 2;
    var x, y, n, p;

    function mask(text, at) {
      px.clearRect(0, 0, w, h);
      px.font = font; px.textBaseline = 'alphabetic'; px.fillStyle = '#fff';
      px.fillText(text, at, base);
      var d = px.getImageData(0, 0, w, h).data, out = new Uint8Array(w * h), i;
      for (i = 0; i < w * h; i++) { out[i] = d[i * 4 + 3] >= CUT ? 1 : 0; }
      return out;
    }

    pc.width = w; pc.height = h;
    var a = mask(g, 2), res = new Uint8Array(w * h);
    var top = -1, bottom = -1;
    for (p = 0; p < w * h; p++) { if (a[p]) { if (top < 0) { top = (p / w) | 0; } bottom = (p / w) | 0; } }

    if (bar) {
      /* the stems are the columns that are solid almost top to bottom; what lies between them goes,
         a straight bar comes */
      var body = bottom - top + 1, solid = [], l1 = -1, r0 = -1;
      for (x = 0; x < w; x++) {
        n = 0;
        for (y = top; y <= bottom && top >= 0; y++) { n += a[y * w + x]; }
        solid[x] = top >= 0 && n >= body * 0.72;
      }
      for (x = 0; x < w; x++) { if (solid[x]) { l1 = x; while (l1 + 1 < w && solid[l1 + 1]) { l1++; } break; } }
      for (x = w - 1; x >= 0; x--) { if (solid[x]) { r0 = x; while (r0 - 1 >= 0 && solid[r0 - 1]) { r0--; } break; } }
      var th = Math.max(1, Math.round(fs / 16)), barTop = top + Math.round((body - th) * 0.46);
      for (y = 0; y < h; y++) {
        for (x = 0; x < w; x++) {
          res[y * w + x] = (l1 >= 0 && r0 > l1 + 1 && x > l1 && x < r0) ? (y >= barTop && y < barTop + th ? 1 : 0) : a[y * w + x];
        }
      }
    } else {
      /* mirror inside the advance box of the glyph */
      for (y = 0; y < h; y++) {
        for (x = 2; x < 2 + gw; x++) { res[y * w + x] = a[y * w + (3 + gw - x)]; }
      }
      if (breve && top > 0) {
        var b = mask(ch, 2 + (m.width - mb.width) / 2);
        for (p = 0; p < top * w; p++) { if (b[p]) { res[p] = 1; } }
      }
    }

    var img = px.createImageData(w, h), d = img.data;
    for (p = 0; p < w * h; p++) {
      if (res[p]) { d[p * 4] = d[p * 4 + 1] = d[p * 4 + 2] = d[p * 4 + 3] = 255; }
    }
    px.putImageData(img, 0, 0);
    return (stamps[key] = { canvas: pc, base: base, adv: m.width });
  }

  /* one word at pen position (x, y = baseline) on the scratch canvas */
  function put(t, x, y, fs, font) {
    if (!FIX_RE.test(t)) { sctx.fillText(t, x, y); return; }
    var i, ch, x0 = 0, x1, s;
    for (i = 0; i < t.length; i++) {
      ch = t.charAt(i);
      x1 = sctx.measureText(t.slice(0, i + 1)).width;
      if (FIX[ch]) {
        s = stamp(ch, fs, font);
        sctx.drawImage(s.canvas, Math.round(x + x0 + (x1 - x0 - s.adv) / 2) - 2, y - s.base);
      } else {
        sctx.fillText(ch, x + x0, y);
      }
      x0 = x1;
    }
  }

  function draw(el) {
    var er = el.getBoundingClientRect();
    if (er.width < 2 || er.height < 2) { return; }               // hidden: nothing to draw yet
    var cs = window.getComputedStyle(el), size = parseFloat(cs.fontSize) || 40;
    var key = [contentKey(el), size, Math.round(er.width), Math.round(er.height), cs.color].join('|');
    var st = el._pxt;
    if (st && st.key === key) {
      if (st.canvas.parentNode !== el) { el.appendChild(st.canvas); }
      el.classList.add('is-px');
      return;
    }

    var list = words(el, er);
    var cw = Math.ceil((er.width + PAD * 2) / CELL), ch = Math.ceil((er.height + PAD * 2) / CELL);
    var fs = size / CELL, font = '400 ' + fs + 'px "' + FAMILY + '"';
    if (scratch.width < cw || scratch.height < ch) {
      scratch.width = Math.max(scratch.width, cw); scratch.height = Math.max(scratch.height, ch);
    }
    sctx.font = font;
    var mt = sctx.measureText('Щ');
    var asc = mt.fontBoundingBoxAscent != null ? mt.fontBoundingBoxAscent : fs * 0.82;

    if (!st) {
      st = { canvas: document.createElement('canvas'), key: '' };
      st.canvas.className = 'pxt';
      st.canvas.setAttribute('aria-hidden', 'true');
    }
    var cv = st.canvas;
    cv.width = cw; cv.height = ch;
    cv.style.width = (cw * CELL) + 'px'; cv.style.height = (ch * CELL) + 'px';
    cv.style.left = -PAD + 'px'; cv.style.top = -PAD + 'px';
    var ctx = cv.getContext('2d');
    var out = ctx.createImageData(cw, ch), o = out.data;
    var mask = new Uint8Array(cw * ch);
    var groups = {}, i, c, p, x, y, d, col, depth = size >= 56 ? 2 : 1;

    for (i = 0; i < list.length; i++) { (groups[list[i].c] = groups[list[i].c] || []).push(list[i]); }
    for (c in groups) {
      sctx.setTransform(1, 0, 0, 1, 0, 0);
      sctx.clearRect(0, 0, cw, ch);
      sctx.font = font; sctx.textBaseline = 'alphabetic'; sctx.fillStyle = '#fff';
      for (i = 0; i < groups[c].length; i++) {
        put(groups[c][i].t, Math.round((groups[c][i].x + PAD) / CELL), Math.round((groups[c][i].y + PAD) / CELL + asc), fs, font);
      }
      d = sctx.getImageData(0, 0, cw, ch).data;
      col = rgb(c);
      for (p = 0; p < cw * ch; p++) {
        if (d[p * 4 + 3] >= CUT) {
          mask[p] = 1;
          o[p * 4] = col[0]; o[p * 4 + 1] = col[1]; o[p * 4 + 2] = col[2]; o[p * 4 + 3] = 255;
        }
      }
    }
    /* a one-line name that does not fit its box (a first-level branch in a narrow column): the box
       cuts the real text, here the tail is replaced by three pixel dots */
    var over = false;
    for (i = 0; i < list.length; i++) { if (list[i].x + list[i].w > er.width + 1.5) { over = true; } }
    if (over && list.length) {
      var lim = Math.floor((PAD + er.width) / CELL), from = lim - (depth * 6 + 1);
      var by = Math.round((list[0].y + PAD) / CELL + asc);
      col = rgb(cs.color);
      for (y = 0; y < ch; y++) {
        for (x = Math.max(0, from); x < cw; x++) { p = y * cw + x; mask[p] = 0; o[p * 4 + 3] = 0; }
      }
      for (i = 0; i < 3; i++) {
        for (y = by - depth; y < by; y++) {
          for (x = from + 1 + i * depth * 2; x < from + 1 + i * depth * 2 + depth; x++) {
            if (x < 0 || x >= cw || y < 0 || y >= ch) { continue; }
            p = y * cw + x;
            mask[p] = 1;
            o[p * 4] = col[0]; o[p * 4 + 1] = col[1]; o[p * 4 + 2] = col[2]; o[p * 4 + 3] = 255;
          }
        }
      }
    }

    /* the hard drop shadow of the logo: one or two pixels down and to the right */
    for (y = ch - 1; y >= depth; y--) {
      for (x = cw - 1; x >= depth; x--) {
        p = y * cw + x;
        if (mask[p]) { continue; }
        if (mask[p - cw - 1] || (depth > 1 && mask[p - 2 * cw - 2])) {
          o[p * 4] = 2; o[p * 4 + 1] = 33; o[p * 4 + 2] = 64; o[p * 4 + 3] = 255;
        }
      }
    }
    ctx.putImageData(out, 0, 0);

    st.key = key;
    el._pxt = st;
    if (cv.parentNode !== el) { el.appendChild(cv); }
    el.classList.add('is-px');
    if (ro) { ro.observe(el); }
  }

  var busy = false;
  function scan() {
    if (busy) { return; }
    busy = true;
    try {
      var els = document.querySelectorAll(SELECTOR), i;
      for (i = 0; i < els.length; i++) {
        if (on()) { draw(els[i]); } else if (els[i]._pxt || els[i].classList.contains('is-px')) { strip(els[i]); }
      }
    } catch (err) {
      /* drawing must never take the heading away: fall back to plain text */
      ready = false;
      var all = document.querySelectorAll('.is-px');
      for (var j = 0; j < all.length; j++) { strip(all[j]); }
    }
    busy = false;
  }

  var ro = window.ResizeObserver ? new window.ResizeObserver(function () { scan(); }) : null;

  function load() {
    if (ready || loading || !document.fonts || !document.fonts.load) { return; }
    loading = document.fonts.load('400 40px "' + FAMILY + '"', 'Жд').then(function (faces) {
      loading = null;
      ready = !!(faces && faces.length);
      if (!ready) { return; }
      /* the headings changed width with the new face: let the tree measure them again */
      if (F.codex && F.codex.remeasure) { F.codex.remeasure(); }
      scan();
    }, function () { loading = null; });
  }

  function start() {
    if (!sctx) { return; }
    if (F.lang === 'ru') { load(); }
    if (F.onLang) { F.onLang(function () { if (F.lang === 'ru') { load(); } scan(); }); }
    if (window.MutationObserver) {
      /* headings are rewritten by the tree, the card and the language switch; a redraw right in the
         observer (before the next paint) means a rewritten heading is never shown without its pixels */
      var mo = new window.MutationObserver(function () { scan(); });
      ['_tree'].forEach(function (id) {
        var n = document.getElementById(id);
        if (n) { mo.observe(n, { childList: true, characterData: true, subtree: true }); }
      });
    }
    window.addEventListener('resize', function () { scan(); });
  }

  F.pixelText = { scan: scan, start: start };
})();
