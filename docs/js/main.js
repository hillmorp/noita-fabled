/* Boot: language, header, the video slot of the first screen, stubs, then the tree. */
(function () {
  'use strict';

  var F = window.Fabled = window.Fabled || {};
  var doc = document.documentElement;
  var still = F.param('still') === '1';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (still) { doc.classList.add('is-still'); }
  /* ?shot=1 is for headless screenshots only: no first screen and no scrolling, so the tree starts at the top
     (headless Chrome paints nothing when the page is scrolled before the capture) */
  F.shot = F.param('shot') === '1';
  if (F.shot) { doc.classList.add('is-shot'); }

  /* ---- toast */
  var toastEl = document.getElementById('toast'), toastTimer = 0;
  F.toast = function (text) {
    if (!toastEl) { return; }
    toastEl.textContent = text;
    toastEl.classList.add('is-on');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () { toastEl.classList.remove('is-on'); }, 2200);
  };

  /* ---- language */
  F.setLang(F.lang, true);
  var langBtns = document.querySelectorAll('.lang__btn');
  for (var i = 0; i < langBtns.length; i++) {
    langBtns[i].addEventListener('click', function () { F.setLang(this.getAttribute('data-lang')); });
  }

  /* ---- version labels */
  var data = window.FABLED_TREE;
  var ver = data && data.version ? 'v' + String(data.version).replace(/^v/i, '') : '';
  var vh = document.getElementById('ver-head'), vf = document.getElementById('ver-foot');
  if (vh) { vh.textContent = ver; }
  if (vf) { vf.textContent = ver; }

  /* ---- header: transparent over the first screen, solid below it */
  var top = document.getElementById('_top'), hero = document.querySelector('.hero');
  function onScroll() {
    var limit = hero ? hero.offsetHeight - 120 : 200;
    top.classList.toggle('is-solid', window.pageYOffset > limit);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* ---- stubs: links that have no destination yet */
  document.addEventListener('click', function (ev) {
    var a = ev.target;
    while (a && a !== document.body && !(a.getAttribute && a.getAttribute('data-stub'))) { a = a.parentNode; }
    if (a && a !== document.body && a.getAttribute && a.getAttribute('data-stub')) {
      ev.preventDefault();
      F.toast(F.t('stub.' + a.getAttribute('data-stub')));
    }
  });

  /* ---- video slot. assets/hero.mp4 does not exist yet: the request fails quietly and the drawn cave stays.
          When the file appears the video fades in over the cave and the simulation stops. */
  var video = document.querySelector('.hero__video');
  if (video && hero && !still && !reduce) {
    var src = video.getAttribute('data-src');
    video.addEventListener('canplay', function () {
      hero.classList.add('has-video');
      if (F.hero) { F.hero.suspend(true); }
      var p = video.play();
      if (p && p.catch) { p.catch(function () { /* autoplay refused: the first frame still shows */ }); }
    }, { once: true });
    video.addEventListener('error', function () { video.removeAttribute('src'); }, { once: true });
    video.preload = 'auto';
    video.src = src;
  }

  /* ---- tree */
  if (F.codex) { F.codex.init(data); }

  /* ---- Russian headings are redrawn in pixels (js/pixeltext.js) */
  if (F.pixelText) { F.pixelText.start(); }
})();
