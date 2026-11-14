/* First screen: a cave drawn by code and a small falling-sand simulation behind the logo.

   Two low-resolution canvases, scaled up with image-rendering: pixelated:
   - .hero__rock  static: the back wall, three far planes of rock with dithered edges, the near rock.
                  Drawn once per resize.
   - .hero__sand  dynamic: glowing sand that falls from the ceiling, lands on the letters of the logo
                  (the logo's alpha mask is solid for the simulation) and cools down, plus embers.

   The subtitle sits on the rock under the cave floor (the floor is kept above its box),
   so no stream can run across the text.

   The grid is aligned to the logo's pixels, so grains sit exactly on the letter edges.
   The loop stops when the hero is off screen or the tab is hidden; with prefers-reduced-motion
   (or ?still=1) one settled frame is drawn and nothing moves. */
(function () {
  'use strict';

  var hero = document.querySelector('.hero');
  var masks = window.FABLED_LOGO_MASK;
  if (!hero || !masks || !window.Uint32Array) { return; }

  var F = window.Fabled = window.Fabled || {};
  var rockCv = hero.querySelector('.hero__rock');
  var sandCv = hero.querySelector('.hero__sand');
  var logo = hero.querySelector('.hero__logo');
  var tag = hero.querySelector('.hero__tag');
  var rockCtx = rockCv.getContext('2d');
  var sandCtx = sandCv.getContext('2d');
  if (!rockCtx || !sandCtx) { return; }

  var still = /[?&]still=1/.test(location.search);
  var mqReduce = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };

  var CELL = 2;            // css px per simulation cell
  var W = 0, H = 0;        // grid size in cells
  var occ = null;          // 0 free, 1 solid (rock or logo), 2 sand
  var rock = null;         // 1 where near rock is (embers die there)
  var floorTop = null;     // per column: first rock cell of the floor
  var ceilBottom = null;   // per column: first free cell under the ceiling
  var img = null, px32 = null;
  var logoBox = { x: 0, y: 0, w: 0, h: 0 };   // in cells

  /* sand: dense arrays, swap-remove */
  var MAXP = 0, n = 0;
  var sx, sy, sRest, sLife, sVel, sVar, sTop, sMov;   // sTop: the grain's top speed, sMov: cells fallen this step
  /* embers: float positions, no collisions except rock */
  var MAXE = 0, m = 0;
  var ex, ey, eVy, ePh, eLife, eMax;

  var emitters = [];
  var frame = 0;
  var pointer = { x: -1, y: -1, t: -999 };

  var running = false, visible = true, raf = 0, last = 0, acc = 0;
  var suspended = false;   // set by the video layer

  /* ---------------------------------------------------------------- utils */

  function rng(seed) {
    return function () {
      seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function noise1(seed) {
    var r = rng(seed), tab = new Float32Array(512), i;
    for (i = 0; i < 512; i++) { tab[i] = r(); }
    return function (x) {
      var i0 = Math.floor(x), f = x - i0;
      f = f * f * (3 - 2 * f);
      var a = tab[i0 & 511], b = tab[(i0 + 1) & 511];
      return a + (b - a) * f;
    };
  }

  function fbm(nf, x) { return nf(x) * 0.5 + nf(x * 2.03 + 17.3) * 0.3 + nf(x * 4.1 + 41.7) * 0.2; }

  function rgba(r, g, b, a) { return ((a << 24) | (b << 16) | (g << 8) | r) >>> 0; }

  function decodeMask(mk) {
    var bin = window.atob(mk.bits), out = new Uint8Array(mk.w * mk.h), i;
    for (i = 0; i < out.length; i++) { out[i] = (bin.charCodeAt(i >> 3) >> (i & 7)) & 1; }
    return out;
  }

  var decoded = {};
  function maskFor(name) {
    if (!decoded[name]) { decoded[name] = decodeMask(masks[name]); }
    return decoded[name];
  }

  /* sand colours: stage 0 falling, 1..6 cooling down; three brightness variants each */
  var SAND = (function () {
    var base = [
      [255, 241, 144], [255, 212, 103], [255, 181, 98], [255, 139, 94],
      [255, 110, 89], [230, 88, 86], [185, 74, 81]
    ];
    var out = [], s, v, c, k;
    for (s = 0; s < base.length; s++) {
      for (v = 0; v < 3; v++) {
        k = 1 - v * 0.09;
        c = base[s];
        out.push(rgba(Math.round(c[0] * k), Math.round(c[1] * k), Math.round(c[2] * k), s === 6 ? 200 : 255));
      }
    }
    return out;
  })();
  var HALO = rgba(255, 190, 100, 64);
  var TRAIL = [rgba(255, 196, 100, 190), rgba(255, 160, 92, 110)];
  var EMBER = [rgba(255, 224, 130, 255), rgba(255, 150, 96, 235), rgba(214, 84, 86, 190), rgba(150, 62, 84, 130)];

  /* ---------------------------------------------------------------- scene */

  function build() {
    var r = hero.getBoundingClientRect();
    var hw = Math.round(r.width), hh = Math.round(r.height);
    if (hw < 50 || hh < 50) { return false; }

    var lr = logo.getBoundingClientRect();
    var lx = Math.round(lr.left - r.left), ly = Math.round(lr.top - r.top);
    var lw = Math.round(lr.width), lh = Math.round(lr.height);
    var name = /fa_logo_big/.test(logo.currentSrc || logo.src || '') ? 'big' : 'small';
    var mk = masks[name], bits = maskFor(name);
    var lpx = Math.max(1, Math.round(lw / mk.w));       // css px per logo pixel (1 or 2)

    CELL = (hw * hh) / 4 > 1000000 ? 4 : 2;
    var ox = ((lx % CELL) + CELL) % CELL; if (ox) { ox -= CELL; }
    var oy = ((ly % CELL) + CELL) % CELL; if (oy) { oy -= CELL; }
    W = Math.ceil((hw - ox) / CELL);
    H = Math.ceil((hh - oy) / CELL);

    var cvs = [rockCv, sandCv], i;
    for (i = 0; i < 2; i++) {
      cvs[i].width = W; cvs[i].height = H;
      cvs[i].style.left = ox + 'px'; cvs[i].style.top = oy + 'px';
      cvs[i].style.width = (W * CELL) + 'px'; cvs[i].style.height = (H * CELL) + 'px';
    }

    occ = new Uint8Array(W * H);
    rock = new Uint8Array(W * H);
    floorTop = new Int16Array(W);
    ceilBottom = new Int16Array(W);

    var gx = Math.round((lx - ox) / CELL), gy = Math.round((ly - oy) / CELL);
    var gw = Math.round(lw / CELL), gh = Math.round(lh / CELL);
    logoBox = { x: gx, y: gy, w: gw, h: gh };

    /* --- rock profiles, in css px so the cave looks the same at any cell size.
       Plane 0 is the near rock (solid for the sand). Planes 1..PLANES stand behind it, each with a smaller
       opening and its own outline; behind the last one is the back wall. `lay` counts how many openings
       a cell is inside: 0 near rock, 1..PLANES the planes from the nearest, PLANES + 1 the back wall. */
    var nA = noise1(11), nB = noise1(23), nC = noise1(37), nD = noise1(41), nE = noise1(53),
        nH = noise1(83);
    var PLANES = 3;
    var lay = new Uint8Array(W * H);
    var x, y, xp, yp, e, c1, f1, idx, j;
    var narrow = hw < 700;

    /* the subtitle is written on the rock under the cave floor: sand cannot cross it there */
    var tg = tag ? tag.getBoundingClientRect() : null;
    var tagTop = tg && tg.height ? tg.top - r.top : hh * 0.93;
    var tagMid = tg && tg.height ? (tg.left + tg.right) / 2 - r.left : hw / 2;
    var tagHalf = tg && tg.height ? tg.width / 2 : 0;

    var clearTop = Math.max(10, ly - (narrow ? 34 : 70));
    var clearBottom = Math.min(hh - 40, ly + lh + (narrow ? 190 : 210), Math.max(ly + lh + 44, tagTop - 62));

    var pC = [], pF = [], pL = [], pR = [], nPc = [], nPf = [], nPl = [], nPr = [];
    for (j = 0; j <= PLANES; j++) {
      pC.push(new Float32Array(W)); pF.push(new Float32Array(W));
      pL.push(new Float32Array(H)); pR.push(new Float32Array(H));
      nPc.push(noise1(101 + j * 7)); nPf.push(noise1(131 + j * 11)); nPl.push(noise1(167 + j * 13)); nPr.push(noise1(191 + j * 17));
    }

    for (x = 0; x < W; x++) {
      xp = x * CELL + ox;
      e = Math.abs(xp / hw - 0.5) * 2; e = e * e * e;
      /* a rolling ceiling with sparse stalactites, a rolling floor with sparse stalagmites */
      var st = nB(xp / 44); st = st > 0.5 ? Math.pow((st - 0.5) / 0.5, 1.5) : 0;
      var sg = nD(xp / 56); sg = sg > 0.55 ? Math.pow((sg - 0.55) / 0.45, 1.4) : 0;
      /* the floor may not sink below this line: under the subtitle it stays above the text */
      var lim = Math.min(hh * 0.93, tagTop - 16 + Math.max(0, Math.abs(xp - tagMid) - tagHalf - 24) * 0.6);
      c1 = hh * 0.035 + hh * 0.11 * fbm(nA, xp / 280) + st * hh * 0.19 + hh * 0.22 * e;
      f1 = lim - hh * 0.05 * fbm(nC, xp / 320) - sg * hh * 0.09 - hh * 0.24 * e;
      c1 = Math.min(c1, clearTop + (hh * 0.3) * e);
      f1 = Math.max(f1, clearBottom - (hh * 0.25) * e);
      pC[0][x] = c1; pF[0][x] = f1;
      for (j = 1; j <= PLANES; j++) {
        var stj = nB(xp / (58 + 22 * j) + 31 * j); stj = stj > 0.56 ? Math.pow((stj - 0.56) / 0.44, 1.4) : 0;
        var sgj = nD(xp / (70 + 24 * j) + 17 * j); sgj = sgj > 0.58 ? Math.pow((sgj - 0.58) / 0.42, 1.4) : 0;
        pC[j][x] = hh * (0.035 + 0.06 * j) + hh * (0.1 + 0.03 * j) * fbm(nPc[j], xp / (230 + 60 * j)) +
                   stj * hh * 0.08 + hh * (0.22 + 0.03 * j) * e;
        pF[j][x] = clearBottom + hh * 0.035 - hh * 0.05 * j - hh * (0.05 + 0.015 * j) * (2 * fbm(nPf[j], xp / (260 + 60 * j)) - 1) -
                   sgj * hh * 0.06 - hh * (0.25 + 0.03 * j) * e;
      }
    }
    for (y = 0; y < H; y++) {
      yp = y * CELL + oy;
      pL[0][y] = hw * (0.015 + 0.075 * fbm(nE, yp / 220));
      pR[0][y] = hw - hw * (0.015 + 0.075 * fbm(nH, yp / 240));
      for (j = 1; j <= PLANES; j++) {
        pL[j][y] = pL[0][y] + hw * (0.012 + 0.024 * j) + hw * (0.03 + 0.012 * j) * nPl[j](yp / (130 + 34 * j));
        pR[j][y] = pR[0][y] - hw * (0.012 + 0.024 * j) - hw * (0.03 + 0.012 * j) * nPr[j](yp / (150 + 30 * j));
      }
    }
    /* A far plane's edge is not a hard line: a band of ordered dither, the way pixel art softens a step. */
    var BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
    var BAND = 12, inside, mj, by;
    for (y = 0; y < H; y++) {
      yp = y * CELL + oy;
      for (x = 0; x < W; x++) {
        xp = x * CELL + ox;
        idx = y * W + x;
        if (yp < pC[0][x] || yp >= pF[0][x] || xp < pL[0][y] || xp >= pR[0][y]) { rock[idx] = 1; continue; }
        by = (BAYER[(y & 3) * 4 + (x & 3)] + 0.5) / 16 * BAND;
        inside = 1;
        for (j = 1; j <= PLANES; j++) {
          mj = Math.min(yp - pC[j][x], pF[j][x] - yp, xp - pL[j][y], pR[j][y] - xp);
          if (mj > by) { inside++; }
        }
        lay[idx] = inside;
      }
    }
    for (x = 0; x < W; x++) {
      for (y = 0; y < H && rock[y * W + x]; y++) { /* scan */ }
      ceilBottom[x] = y;
      for (y = H - 1; y >= 0 && rock[y * W + x]; y--) { /* scan */ }
      floorTop[x] = y + 1;
    }

    /* --- paint the static layer */
    var im = rockCtx.createImageData(W, H);
    var d32 = new Uint32Array(im.data.buffer);
    var hash = rng(7);
    var cxl = gx + gw / 2, cyl = gy + gh / 2;
    var rx = Math.max(gw * 0.75, W * 0.3), ry = Math.max(gh * 2.2, H * 0.34);
    for (y = 0; y < H; y++) {
      var ty = y / H;
      for (x = 0; x < W; x++) {
        idx = y * W + x;
        var dx = (x - cxl) / rx, dy = (y - cyl) / ry;
        var dist = Math.sqrt(dx * dx + dy * dy);
        var warm = dist < 1 ? (1 - dist) * (1 - dist) : 0;
        var hsh = hash();
        var cr, cg, cb;
        if (rock[idx]) {
          /* lit rim on the surface, two darker rings under it, then the page colour */
          var edge = (x > 0 && !rock[idx - 1]) || (x < W - 1 && !rock[idx + 1]) ||
                     (y > 0 && !rock[idx - W]) || (y < H - 1 && !rock[idx + W]);
          var ring = !edge && ((x > 1 && !rock[idx - 2]) || (x < W - 2 && !rock[idx + 2]) ||
                     (y > 1 && !rock[idx - 2 * W]) || (y < H - 2 && !rock[idx + 2 * W]));
          var near = !edge && !ring && ((x > 5 && !rock[idx - 5]) || (x < W - 6 && !rock[idx + 5]) ||
                     (y > 5 && !rock[idx - 5 * W]) || (y < H - 6 && !rock[idx + 5 * W]));
          var wk = Math.pow(warm, 0.8);
          if (edge) {
            cr = 50 + 160 * wk; cg = 68 + 62 * wk; cb = 122 - 28 * wk;
            /* embers lying on the floor of the middle of the cave */
            if (y > H * 0.6 && hsh > 0.8 && Math.abs(x / W - 0.5) < 0.36) {
              cr = 230; cg = hsh > 0.93 ? 181 : hsh > 0.86 ? 120 : 88; cb = 86;
            }
          } else if (ring) {
            cr = 25 + 62 * wk; cg = 35 + 20 * wk; cb = 72 - 6 * wk;
          } else if (near) {
            cr = 13 + 24 * wk; cg = 18 + 7 * wk; cb = 40;
            if (hsh > 0.9) { cr += 5; cg += 6; cb += 10; }
          } else {
            cr = 7; cg = 9; cb = 18;
            if (hsh > 0.985) { cr = 11; cg = 14; cb = 28; }
          }
        } else {
          /* air seen against a plane or the back wall: the deeper, the lighter and the hazier.
             The warm light of the logo comes in steps with the same dither, not as a smooth blur. */
          var L = lay[idx];
          var wq = Math.floor(warm * 9 + (BAYER[(y & 3) * 4 + (x & 3)] + 0.5) / 16) / 9;
          cr = 7 + 3.4 * L + (14 + 15 * L) * wq;
          cg = 9 + 5.2 * L + (4 + 5.5 * L) * wq;
          cb = 19 + 11.5 * L + 2 * wq;
          if (L > PLANES) {
            var v = 1 - Math.abs(ty - 0.45) * 1.6; if (v < 0) { v = 0; }
            cr += 2 * v; cg += 4 * v; cb += 8 * v;
            var q = (hsh - 0.5) * 3; cr += q; cg += q; cb += q;
          } else if (hsh > 0.975) { cr += 3; cg += 4; cb += 8; }
        }
        d32[idx] = rgba(cr | 0, cg | 0, cb | 0, 255);
      }
    }
    rockCtx.putImageData(im, 0, 0);

    /* --- solids for the simulation: rock + logo */
    for (i = 0; i < occ.length; i++) { occ[i] = rock[i]; }
    var ratio = CELL / lpx, half = (ratio * ratio) / 2, u, v2, cnt, sxp, syp;
    for (y = 0; y < gh; y++) {
      for (x = 0; x < gw; x++) {
        if (gx + x < 0 || gx + x >= W || gy + y < 0 || gy + y >= H) { continue; }
        cnt = 0;
        for (v2 = 0; v2 < ratio; v2++) {
          for (u = 0; u < ratio; u++) {
            sxp = Math.floor(x * ratio + u); syp = Math.floor(y * ratio + v2);
            if (sxp < mk.w && syp < mk.h && bits[syp * mk.w + sxp]) { cnt++; }
          }
        }
        if (cnt >= half) { occ[(gy + y) * W + gx + x] = 1; }
      }
    }

    /* --- particles */
    MAXP = Math.max(2000, Math.min(14000, Math.round(W * H / 24)));
    sx = new Int16Array(MAXP); sy = new Int16Array(MAXP);
    sRest = new Uint16Array(MAXP); sLife = new Uint16Array(MAXP);
    sVel = new Uint8Array(MAXP); sVar = new Uint8Array(MAXP);
    sTop = new Uint8Array(MAXP); sMov = new Uint8Array(MAXP);
    n = 0;
    MAXE = Math.max(40, Math.min(220, Math.round(W / 4)));
    ex = new Float32Array(MAXE); ey = new Float32Array(MAXE); eVy = new Float32Array(MAXE);
    ePh = new Float32Array(MAXE); eLife = new Uint16Array(MAXE); eMax = new Uint16Array(MAXE);
    m = 0;

    emitters = [];
    var count = hw < 700 ? 2 : (hw < 1300 ? 3 : 4);
    for (i = 0; i < count; i++) { emitters.push(newEmitter(i * 37)); }

    img = sandCtx.createImageData(W, H);
    px32 = new Uint32Array(img.data.buffer);
    frame = 0;
    return true;
  }

  function newEmitter(delay) {
    /* streams mostly fall on the logo, sometimes beside it */
    var span = logoBox.w, x, w, pick = Math.random(), small = span < 200;
    /* Streams differ: a thread, a trickle or a pour, slow or fast.
       Over the logo only threads fall, or the letters would drown; the pours go beside it, to the floor. */
    if (Math.random() < 0.62) {
      x = logoBox.x + 6 + Math.random() * (span - 12);
      w = (small || pick < 0.7) ? 1 : 2;
    } else {
      x = Math.random() < 0.5 ? logoBox.x - 8 - Math.random() * (logoBox.x - W * 0.1)
                              : logoBox.x + span + 8 + Math.random() * (W * 0.9 - logoBox.x - span);
      if (x < W * 0.08 || x > W * 0.92) { x = W * (0.2 + Math.random() * 0.6); }
      w = small ? (pick < 0.5 ? 1 : 2) : (pick < 0.3 ? 2 : pick < 0.75 ? 3 : 4);
    }
    x = Math.max(2, Math.min(W - 6, Math.round(x)));
    return {
      x: x,
      w: w,                                  // cells across
      top: 2 + ((Math.random() * 3) | 0),    // top speed of its grains, cells per step
      wait: delay || 0,
      t: (small ? 120 : 170) + Math.random() * (small ? 220 : 380),   // frames the stream runs
      rate: w * (1 + Math.random() * 0.3)    // grains per frame: at least one per column, so no gaps
    };
  }

  /* ---------------------------------------------------------------- step */

  function spawn(x, y, vel, top) {
    if (n >= MAXP || x < 0 || x >= W || y < 0 || y >= H) { return; }
    var idx = y * W + x;
    if (occ[idx]) { return; }
    occ[idx] = 2;
    sx[n] = x; sy[n] = y; sRest[n] = 0; sVel[n] = vel || 1; sTop[n] = top || 2; sMov[n] = 0;
    sLife[n] = 320 + (Math.random() * 520) | 0;      // frames a grain glows after it comes to rest
    sVar[n] = (Math.random() * 3) | 0;
    n++;
  }

  function kill(i) {
    occ[sy[i] * W + sx[i]] = 0;
    n--;
    if (i !== n) {
      sx[i] = sx[n]; sy[i] = sy[n]; sRest[i] = sRest[n]; sLife[i] = sLife[n]; sVel[i] = sVel[n]; sVar[i] = sVar[n];
      sTop[i] = sTop[n]; sMov[i] = sMov[n];
    }
  }

  function step() {
    var i, s, x, y, idx, below, d, moved, sp, dead;
    frame++;

    /* emitters */
    for (i = 0; i < emitters.length; i++) {
      var em = emitters[i];
      if (em.wait > 0) { em.wait--; continue; }
      em.t--;
      if (em.t <= 0) { emitters[i] = newEmitter(40 + Math.random() * 160); continue; }
      /* the stream wanders a little, so its edge is not a ruler line */
      if ((frame & 31) === 0 && Math.random() < 0.5) { em.x = Math.max(2, Math.min(W - 6, em.x + (Math.random() < 0.5 ? -1 : 1))); }
      var k = em.rate, col = 0;
      while (k > 0) {
        if (k >= 1 || Math.random() < k) {
          /* one grain into every column first, what is left over goes to a random column */
          x = em.x + (col < em.w ? col : ((Math.random() * em.w) | 0));
          spawn(x, ceilBottom[x] + (col < em.w ? 0 : 1 + ((Math.random() * 2) | 0)), em.top, em.top);
        }
        col++; k -= 1;
      }
    }

    /* pointer pours a little sand */
    if (frame - pointer.t < 4) {
      for (i = 0; i < 3; i++) {
        spawn(pointer.x + ((Math.random() * 5) | 0) - 2, pointer.y + ((Math.random() * 3) | 0) - 1, 1, 3);
      }
    }

    /* sand */
    for (i = n - 1; i >= 0; i--) {
      x = sx[i]; y = sy[i]; idx = y * W + x;
      sp = sVel[i]; moved = false; dead = false;
      for (s = 0; s < sp; s++) {
        if (y + 1 >= H) { dead = true; break; }
        below = idx + W;
        if (!occ[below]) {
          occ[idx] = 0; idx = below; y++; occ[idx] = 2; moved = true;
          continue;
        }
        d = Math.random() < 0.5 ? -1 : 1;
        if (x + d >= 0 && x + d < W && !occ[below + d] && !occ[idx + d]) {
          occ[idx] = 0; idx = below + d; x += d; y++; occ[idx] = 2; moved = true;
        } else if (x - d >= 0 && x - d < W && !occ[below - d] && !occ[idx - d]) {
          occ[idx] = 0; idx = below - d; x -= d; y++; occ[idx] = 2; moved = true;
        }
        break;
      }
      sMov[i] = y - sy[i];
      sx[i] = x; sy[i] = y;
      if (dead) { kill(i); continue; }
      if (moved) {
        sRest[i] = 0;
        /* each grain speeds up on its own: a shared clock would bunch a stream into evenly spaced clumps */
        if (sp < sTop[i] && Math.random() < 0.22) { sVel[i] = sp + 1; }
      } else {
        sVel[i] = 1;
        if (++sRest[i] > sLife[i]) { kill(i); }
      }
    }

    /* embers */
    if (m < MAXE && Math.random() < 0.22 + W / 2600) {
      x = (Math.random() * W) | 0;
      y = floorTop[x] - 1;
      if (y > 2 && y < H && !rock[y * W + x]) {
        ex[m] = x; ey[m] = y; eVy[m] = 0.22 + Math.random() * 0.5; ePh[m] = Math.random() * 6.28;
        eMax[m] = 150 + (Math.random() * 260) | 0; eLife[m] = eMax[m];
        m++;
      }
    }
    for (i = m - 1; i >= 0; i--) {
      ey[i] -= eVy[i];
      ex[i] += Math.sin(ePh[i] + eLife[i] * 0.045) * 0.28;
      eLife[i]--;
      x = ex[i] | 0; y = ey[i] | 0;
      if (eLife[i] === 0 || y < 1 || x < 0 || x >= W || rock[y * W + x]) {
        m--;
        if (i !== m) {
          ex[i] = ex[m]; ey[i] = ey[m]; eVy[i] = eVy[m]; ePh[i] = ePh[m]; eLife[i] = eLife[m]; eMax[i] = eMax[m];
        }
      }
    }
  }

  function render() {
    var i, idx, st, q, k, len, up;
    px32.fill(0);
    for (i = 0; i < n; i++) {
      idx = sy[i] * W + sx[i];
      if (sRest[i] < 3) {
        st = 0;
        if (sx[i] > 0 && !px32[idx - 1]) { px32[idx - 1] = HALO; }
        if (sx[i] < W - 1 && !px32[idx + 1]) { px32[idx + 1] = HALO; }
        /* A falling grain is drawn as the stretch it fell this step plus a fading tail of the same length:
           a fed stream is a solid thread at any speed, and a thin trickle is dashes that overlap, not dots. */
        len = sMov[i];
        for (k = 1; k < len * 2 + 1; k++) {
          up = idx - k * W;
          if (up < 0 || occ[up] === 1) { break; }
          if (k < len) { px32[up] = SAND[(k > 1 ? 3 : 0) + sVar[i]]; }
          else if (!px32[up] || px32[up] === HALO) { px32[up] = k < len + 2 ? TRAIL[0] : TRAIL[1]; }
        }
      } else {
        q = sRest[i] / sLife[i];
        st = q < 0.3 ? 1 : q < 0.55 ? 2 : q < 0.74 ? 3 : q < 0.87 ? 4 : q < 0.95 ? 5 : 6;
      }
      px32[idx] = SAND[st * 3 + sVar[i]];
    }
    for (i = 0; i < m; i++) {
      q = eLife[i] / eMax[i];
      if (q < 0.25 && ((eLife[i] + i) & 3) === 0) { continue; }   // flicker out
      idx = (ey[i] | 0) * W + (ex[i] | 0);
      px32[idx] = EMBER[q > 0.66 ? 0 : q > 0.4 ? 1 : q > 0.18 ? 2 : 3];
      if (q > 0.4 && idx > W && idx < px32.length - W) {      // a young ember is a small cross
        if (!px32[idx - 1]) { px32[idx - 1] = HALO; }
        if (!px32[idx + 1]) { px32[idx + 1] = HALO; }
        if (!px32[idx - W]) { px32[idx - W] = HALO; }
        if (!px32[idx + W]) { px32[idx + W] = HALO; }
      }
    }
    sandCtx.putImageData(img, 0, 0);
  }

  /* ---------------------------------------------------------------- loop */

  function tick(now) {
    raf = 0;
    if (!running) { return; }
    var dt = now - last; last = now;
    if (dt > 100) { dt = 100; }
    acc += dt;
    var steps = 0;
    while (acc >= 16.6 && steps < 2) { step(); acc -= 16.6; steps++; }
    if (acc > 50) { acc = 0; }
    if (steps) { render(); }
    raf = window.requestAnimationFrame(tick);
  }

  function wantRun() { return visible && !document.hidden && !suspended && !still && !mqReduce.matches && !!occ; }

  function sync() {
    var want = wantRun();
    if (want && !running) {
      running = true; last = window.performance.now(); acc = 0;
      raf = window.requestAnimationFrame(tick);
    } else if (!want && running) {
      running = false;
      if (raf) { window.cancelAnimationFrame(raf); raf = 0; }
    }
  }

  function rebuild() {
    if (!build()) { return; }
    /* settle before the first paint: streams already run, a little sand already lies on the letters */
    var warm = (still || mqReduce.matches) ? 800 : 420, i;
    for (i = 0; i < warm; i++) { step(); }
    render();
    hero.classList.add('is-drawn');
    sync();
  }

  var sig = '';
  function signature() {
    var r = hero.getBoundingClientRect(), l = logo.getBoundingClientRect();
    var g = tag ? tag.getBoundingClientRect() : { top: 0, width: 0 };
    return [Math.round(r.width), Math.round(r.height / 60), Math.round(l.left - r.left), Math.round(l.top - r.top),
            Math.round(l.width), Math.round((g.top - r.top) / 8), Math.round(g.width / 8)].join(',');
  }
  var timer = 0;
  function onResize() {
    window.clearTimeout(timer);
    timer = window.setTimeout(function () {
      var s = signature();
      if (s !== sig) { sig = s; rebuild(); }
    }, 180);
  }

  function start() {
    sig = signature();
    rebuild();
    window.addEventListener('resize', onResize);
    if (window.ResizeObserver) {
      var ro = new window.ResizeObserver(onResize);
      ro.observe(hero.querySelector('.hero__center'));
      if (tag) { ro.observe(tag); }       // the other language may take another number of lines
    }
    if (document.fonts && document.fonts.ready) { document.fonts.ready.then(onResize); }
    if (window.IntersectionObserver) {
      new window.IntersectionObserver(function (entries) {
        visible = entries[entries.length - 1].isIntersecting;
        sync();
      }, { threshold: 0.02 }).observe(hero);
    }
    document.addEventListener('visibilitychange', sync);
    if (mqReduce.addEventListener) { mqReduce.addEventListener('change', sync); }

    hero.addEventListener('pointermove', function (ev) {
      if (!running) { return; }
      var r = sandCv.getBoundingClientRect();
      pointer.x = Math.floor((ev.clientX - r.left) / CELL);
      pointer.y = Math.floor((ev.clientY - r.top) / CELL);
      pointer.t = frame;
    }, { passive: true });
  }

  /* the logo must be decoded before its place and its file (big or small) are known */
  if (logo.complete && logo.naturalWidth) { start(); }
  else {
    logo.addEventListener('load', start, { once: true });
    logo.addEventListener('error', start, { once: true });
  }

  F.hero = {
    /* the video layer calls this when it takes over the first screen */
    suspend: function (on) { suspended = !!on; sync(); }
  };
})();
