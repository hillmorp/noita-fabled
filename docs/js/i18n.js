/* Interface strings (EN / RU) and the language switch. No dependencies. */
(function () {
  'use strict';

  var F = window.Fabled = window.Fabled || {};

  var S = {
    en: {
      'skip': 'Skip to the tree',
      'nav.tree': 'Tree',
      'nav.download': 'Download',
      'lang.label': 'Language',
      'hero.tag': 'A big content mod for Noita: new spells, perks, alchemy, relics and things to find in the dark.',
      'hero.cue': 'Descend',
      'codex.over': 'Codex',
      'codex.title': 'The whole mod, branch by branch',
      'codex.lead': 'Open a branch to see what grows on it. Every leaf is one thing the mod adds, with its numbers.',
      'search.label': 'Search the tree',
      'search.placeholder': 'Search: comet, mana, relic',
      'btn.expand': 'Expand all',
      'btn.collapse': 'Collapse',
      'kinds.label': 'Filter by kind',
      'status.total': '{n} entries on {b} branches',
      'status.found': 'Found: {n}',
      'status.none': 'Nothing found. Try another word.',
      'status.clear': 'Clear',
      'card.label': 'Entry',
      'card.empty.title': 'Pick a leaf',
      'card.empty.text': 'Open a branch on the left and choose any leaf. Its card opens here: how it works, the numbers, the recipe.',
      'card.keys.move': 'move along the tree',
      'card.keys.open': 'open a branch or a leaf',
      'card.keys.search': 'search',
      'card.keys.close': 'close the card',
      'card.close': 'Close',
      'card.copy': 'Copy link',
      'card.copied': 'Link copied',
      'card.copyfail': 'Copy the address from the address bar',
      'card.vanilla': 'vanilla',
      'card.stats': 'Numbers',
      'card.recipe': 'Recipe',
      'card.reactions': 'Reacts with',
      'card.prev': 'Previous',
      'card.next': 'Next',
      'card.inside': 'On this branch',
      'foot.note': 'A fan-made mod for Noita, not affiliated with Nolla Games.',
      'foot.top': 'Back to the surface',
      'stub.download': 'The download link is not ready yet',
      'nodata': 'The tree data did not load.',
      'kind.branch': 'Branch',
      'kind.spell': 'Spell',
      'kind.perk': 'Perk',
      'kind.tincture': 'Tincture',
      'kind.relic': 'Relic',
      'kind.blessing': 'Blessing',
      'kind.omen': 'Omen',
      'kind.wisp': 'Wisp',
      'kind.elite': 'Elite',
      'kind.place': 'Place',
      'kind.info': 'Note',
      'kinds.spell': 'Spells',
      'kinds.perk': 'Perks',
      'kinds.tincture': 'Tinctures',
      'kinds.relic': 'Relics',
      'kinds.blessing': 'Blessings',
      'kinds.omen': 'Omens',
      'kinds.wisp': 'Wisps',
      'kinds.elite': 'Elites',
      'kinds.place': 'Places',
      'kinds.info': 'Notes'
    },
    ru: {
      'skip': 'Сразу к дереву',
      'nav.tree': 'Дерево',
      'nav.download': 'Скачать',
      'lang.label': 'Язык',
      'hero.tag': 'Большой контент-мод для Noita: новые заклинания, перки, алхимия, реликвии и находки в темноте.',
      'hero.cue': 'Вниз',
      'codex.over': 'Кодекс',
      'codex.title': 'Весь мод, ветка за веткой',
      'codex.lead': 'Откройте ветку и посмотрите, что на ней растёт. Каждый лист — одна вещь из мода, со всеми числами.',
      'search.label': 'Поиск по дереву',
      'search.placeholder': 'Поиск: комета, мана, реликвия',
      'btn.expand': 'Раскрыть всё',
      'btn.collapse': 'Свернуть',
      'kinds.label': 'Фильтр по виду',
      'status.total': 'Записей: {n}, веток: {b}',
      'status.found': 'Найдено: {n}',
      'status.none': 'Ничего не нашлось. Попробуйте другое слово.',
      'status.clear': 'Сбросить',
      'card.label': 'Запись',
      'card.empty.title': 'Выберите лист',
      'card.empty.text': 'Откройте ветку слева и выберите любой лист. Здесь появится его карточка: как работает, числа, рецепт.',
      'card.keys.move': 'ходить по дереву',
      'card.keys.open': 'открыть ветку или лист',
      'card.keys.search': 'поиск',
      'card.keys.close': 'закрыть карточку',
      'card.close': 'Закрыть',
      'card.copy': 'Скопировать ссылку',
      'card.copied': 'Ссылка скопирована',
      'card.copyfail': 'Скопируйте адрес из адресной строки',
      'card.vanilla': 'в ванили',
      'card.stats': 'Числа',
      'card.recipe': 'Рецепт',
      'card.reactions': 'Сочетается',
      'card.prev': 'Назад',
      'card.next': 'Дальше',
      'card.inside': 'На этой ветке',
      'foot.note': 'Фанатский мод для Noita. Не связан с Nolla Games.',
      'foot.top': 'Наверх, к поверхности',
      'stub.download': 'Ссылки на скачивание пока нет',
      'nodata': 'Данные дерева не загрузились.',
      'kind.branch': 'Ветка',
      'kind.spell': 'Заклинание',
      'kind.perk': 'Перк',
      'kind.tincture': 'Настойка',
      'kind.relic': 'Реликвия',
      'kind.blessing': 'Благословение',
      'kind.omen': 'Знамение',
      'kind.wisp': 'Огонёк',
      'kind.elite': 'Элитный враг',
      'kind.place': 'Место',
      'kind.info': 'Заметка',
      'kinds.spell': 'Заклинания',
      'kinds.perk': 'Перки',
      'kinds.tincture': 'Настойки',
      'kinds.relic': 'Реликвии',
      'kinds.blessing': 'Благословения',
      'kinds.omen': 'Знамения',
      'kinds.wisp': 'Огоньки',
      'kinds.elite': 'Элита',
      'kinds.place': 'Места',
      'kinds.info': 'Заметки'
    }
  };

  var listeners = [];

  function param(name) {
    var m = new RegExp('[?&]' + name + '=([^&#]*)').exec(location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : null;
  }

  function initialLang() {
    var p = param('lang');
    if (p && S[p]) { return p; }
    try {
      var saved = window.localStorage.getItem('fabled.lang');
      if (saved && S[saved]) { return saved; }
    } catch (e) { /* storage may be blocked on file:// */ }
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    return /^ru\b/i.test(nav) ? 'ru' : 'en';
  }

  F.param = param;
  F.lang = initialLang();

  /* Interface string by key, with {name} placeholders. */
  F.t = function (key, vars) {
    var s = (S[F.lang] && S[F.lang][key]) || S.en[key] || key;
    if (vars) {
      s = s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
    }
    return s;
  };

  /* Localized value of a { en, ru } field of the tree data. */
  F.pick = function (obj) {
    if (obj == null) { return ''; }
    if (typeof obj === 'string') { return obj; }
    var v = obj[F.lang];
    if (v == null || v === '') { v = obj.en != null && obj.en !== '' ? obj.en : obj.ru; }
    return v == null ? '' : String(v);
  };

  F.applyStatic = function (root) {
    var i, list = (root || document).querySelectorAll('[data-i18n]');
    for (i = 0; i < list.length; i++) { list[i].textContent = F.t(list[i].getAttribute('data-i18n')); }
    list = (root || document).querySelectorAll('[data-i18n-placeholder]');
    for (i = 0; i < list.length; i++) { list[i].setAttribute('placeholder', F.t(list[i].getAttribute('data-i18n-placeholder'))); }
    list = (root || document).querySelectorAll('[data-i18n-aria]');
    for (i = 0; i < list.length; i++) { list[i].setAttribute('aria-label', F.t(list[i].getAttribute('data-i18n-aria'))); }
  };

  F.onLang = function (fn) { listeners.push(fn); };

  F.setLang = function (lang, silent) {
    if (!S[lang]) { return; }
    F.lang = lang;
    document.documentElement.lang = lang;
    try { window.localStorage.setItem('fabled.lang', lang); } catch (e) { /* ignore */ }
    var btns = document.querySelectorAll('.lang__btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-pressed', btns[i].getAttribute('data-lang') === lang ? 'true' : 'false');
    }
    F.applyStatic();
    if (!silent) {
      for (var j = 0; j < listeners.length; j++) { listeners[j](lang); }
    }
  };
})();
