/* Sample tree for the showcase page. Real data comes from data/tree.js (loaded before this file);
   this one only fills in when the real file is missing. Same format, about 35 nodes. */
window.FABLED_TREE = window.FABLED_TREE || (function () {
  function t(en, ru) { return { en: en, ru: ru }; }
  function stat(key, en, ru, value, vanilla) {
    return { key: key, label: t(en, ru), value: value, vanilla: vanilla || null };
  }
  function branch(id, title, summary, children) {
    return {
      id: id, kind: "branch", title: title, summary: summary, icon: null,
      stats: [], body: t("", ""), recipe: null, reactions: null, tags: [], children: children
    };
  }
  function leaf(id, kind, icon, title, summary, stats, body, tags, extra) {
    var n = {
      id: id, kind: kind, title: title, summary: summary,
      icon: icon ? I + icon + ".png" : null,
      stats: stats || [], body: body, recipe: null, reactions: null, tags: tags || [], children: []
    };
    if (extra) { for (var k in extra) { n[k] = extra[k]; } }
    return n;
  }
  /* The sample keeps its icons in a folder of its own: the data build empties assets/icons/*.png on every run. */
  var I = "assets/icons/sample/";

  return {
    version: "0.1-sample",
    langs: ["en", "ru"],
    root: {
      id: "root",
      children: [

        /* ------------------------------------------------------------ spells */
        branch("spells", t("Spells", "Заклинания"),
          t("New cards for your wands: bolts, modifiers and tools.", "Новые карты для палочек: снаряды, модификаторы и инструменты."), [

          branch("spells.bolts", t("Bolts", "Снаряды"),
            t("Projectiles with one clear trick each.", "Снаряды, у каждого один понятный приём."), [

            leaf("spells.bolts.fa_swarm", "spell", "fa_swarm",
              t("Swarm", "Рой"),
              t("Five motes that lean toward the nearest enemy.", "Пять искр, которые сами доворачивают к ближайшему врагу."),
              [
                stat("mana", "Mana", "Мана", "22", null),
                stat("damage", "Damage", "Урон", "5 x 2.5", "Spark bolt: 3"),
                stat("lifetime", "Lifetime", "Время жизни", "90 fr", null),
                stat("homing", "Homing", "Наведение", "60 deg/s", null)
              ],
              t("Fires **five motes** at once. Each one turns toward an enemy within 80 px, slowly enough that it can still miss a fast target.\n\nGood behind a multicast: the motes spread out first and close in afterwards, so one cast covers a whole corridor.",
                "Выпускает сразу **пять искр**. Каждая доворачивает к врагу в пределах 80 пикселей, но медленно: быструю цель может и упустить.\n\nХорошо работает за мультикастом: искры сначала расходятся, потом сходятся, и один выстрел закрывает весь коридор."),
              ["tier2", "uncommon", "homing"]),

            leaf("spells.bolts.fa_comet", "spell", "fa_comet",
              t("Comet", "Комета"),
              t("Starts slow, speeds up, hits harder the faster it flies.", "Стартует медленно, разгоняется и бьёт тем сильнее, чем быстрее летит."),
              [
                stat("mana", "Mana", "Мана", "60", null),
                stat("damage", "Damage", "Урон", "20 - 80", "Magic bolt: 13"),
                stat("cast_delay", "Cast delay", "Задержка", "+0.50 s", null),
                stat("radius", "Blast radius", "Радиус взрыва", "10 px", null)
              ],
              t("The damage is read from the speed at the moment of impact: **20** at 100 px/s, **80** at 600 px/s and above. The blast does not dig.\n\nGive it room. In a tight tunnel it hits before it has picked up speed; across a lake it lands at full weight. Speed modifiers count.",
                "Урон считается по скорости в момент удара: **20** при 100 пикселях в секунду, **80** при 600 и выше. Взрыв породу не роет.\n\nЕй нужен разбег. В тесном тоннеле она ударит, не успев разогнаться, а через озеро долетит в полную силу. Модификаторы скорости учитываются."),
              ["tier4", "rare", "explosive"]),

            leaf("spells.bolts.fa_needle", "spell", "fa_needle",
              t("Needle", "Игла"),
              t("A fast bolt that passes through up to three enemies.", "Быстрый снаряд, пробивает до трёх врагов насквозь."),
              [
                stat("mana", "Mana", "Мана", "16", null),
                stat("damage", "Damage", "Урон", "7", "Spark bolt: 3"),
                stat("pierce", "Pierces", "Пробивает", "3", null)
              ],
              t("Goes through enemies, not through terrain, and **never hurts the caster**.",
                "Проходит сквозь врагов, но не сквозь породу, и **никогда не ранит самого мага**."),
              ["tier2", "common", "piercing"])
          ]),

          branch("spells.mods", t("Modifiers", "Модификаторы"),
            t("Each rewards a way of playing: moving, waiting, aiming.", "Каждый награждает манеру игры: движение, выдержку, прицел."), [

            leaf("spells.mods.fa_momentum", "spell", "fa_momentum",
              t("Momentum", "Импульс"),
              t("More damage the faster you are moving when you cast.", "Чем быстрее вы движетесь в момент выстрела, тем больше урон."),
              [
                stat("mana", "Mana", "Мана", "6", null),
                stat("damage", "Bonus damage", "Бонус урона", "+0 .. +15", null)
              ],
              t("Reads the caster's speed at the moment of the cast: nothing at rest, **+15** at 150 px/s and above. Falling counts.",
                "Берёт скорость мага в момент выстрела: ничего на месте, **+15** при 150 пикселях в секунду и выше. Падение тоже считается."),
              ["tier1", "common"]),

            leaf("spells.mods.fa_glass_round", "spell", "fa_glass_round",
              t("Glass Round", "Стеклянный заряд"),
              t("+25 damage, paid for with 2 of your own health.", "+25 урона ценой двух единиц собственного здоровья."),
              [
                stat("mana", "Mana", "Мана", "5", null),
                stat("damage", "Bonus damage", "Бонус урона", "+25", "Damage plus: +10"),
                stat("cost", "Health cost", "Цена в здоровье", "2 hp", null)
              ],
              t("Every cast takes **2 hp** from the caster. At 10 hp or less it stops working: no cost and no bonus, so it cannot kill you.",
                "Каждый выстрел забирает у мага **2 единицы здоровья**. При 10 и меньше перестаёт работать: ни цены, ни бонуса, так что убить вас он не может."),
              ["tier3", "uncommon", "risk"])
          ]),

          branch("spells.tools", t("Tools", "Инструменты"),
            t("Utility, structures and passive cards.", "Утилиты, постройки и пассивные карты."), [

            leaf("spells.tools.fa_recall", "spell", "fa_recall",
              t("Recall", "Возврат"),
              t("First cast leaves a mark, second cast brings you back to it.", "Первый каст ставит метку, второй возвращает к ней."),
              [
                stat("mana", "Mana", "Мана", "40", null),
                stat("type", "Type", "Тип", "Utility", null)
              ],
              t("The mark is visible in the world and stays until used. The second cast teleports the caster to it and clears it.",
                "Метка видна в мире и держится, пока её не используют. Второй каст переносит мага к ней и снимает её."),
              ["tier2", "uncommon", "utility"]),

            branch("spells.tools.passive", t("Passive cards", "Пассивные карты"),
              t("They work just by sitting in the wand.", "Работают, просто лёжа в палочке."), [

              leaf("spells.tools.passive.fa_battery", "spell", "fa_battery",
                t("Battery", "Батарея"),
                t("A rested wand recharges its mana 30 % faster.", "Отдохнувшая палочка восстанавливает ману на 30 % быстрее."),
                [
                  stat("mana", "Mana", "Мана", "0", null),
                  stat("charge", "Mana charge", "Заряд маны", "+30 %", null),
                  stat("rest", "After rest of", "После паузы", "60 fr", null)
                ],
                t("Kicks in when the wand has not fired for one second. A wand in the second slot charges this way all the time.",
                  "Включается, когда палочка не стреляла секунду. Палочка во втором слоте заряжается так постоянно."),
                ["tier2", "common", "passive"])
            ])
          ])
        ]),

        /* ------------------------------------------------------------- perks */
        branch("perks", t("Perks", "Перки"),
          t("New choices in the Holy Mountain, none of them a trap.", "Новые варианты выбора в Святой горе, и ни одного бесполезного."), [

          leaf("perks.fa_collector", "perk", "fa_collector",
            t("Collector", "Коллекционер"),
            t("+3 % damage for every different spell on the held wand.", "+3 % урона за каждое разное заклинание на палочке в руке."),
            [
              stat("bonus", "Per spell", "За заклинание", "+3 %", null),
              stat("cap", "Cap", "Предел", "+30 %", null)
            ],
            t("Counts **different** cards, so ten copies of one bolt give nothing. Pays off on long, varied wands.",
              "Считает **разные** карты: десять копий одного снаряда не дадут ничего. Окупается на длинных пёстрых палочках."),
            ["damage"]),

          leaf("perks.fa_kill_battery", "perk", "fa_kill_battery",
            t("Kill Battery", "Трофейный заряд"),
            t("Every kill returns 15 mana to the held wand.", "Каждое убийство возвращает 15 маны палочке в руке."),
            [stat("mana", "Mana per kill", "Маны за убийство", "15", null)],
            t("Never goes above the wand's maximum.", "Выше максимума палочки не поднимает."),
            ["mana"]),

          leaf("perks.fa_gambler", "perk", "fa_gambler",
            t("Gambler", "Игрок"),
            t("Once per Holy Mountain: reroll the shop's spells.", "Раз за Святую гору: перебросить заклинания в лавке."),
            [stat("uses", "Uses", "Использований", "1 / mountain", null)],
            t("A pedestal appears next to the shop. Step on it and every spell on sale is rolled again; prices follow the new cards.",
              "Рядом с лавкой появляется постамент. Встаньте на него, и все заклинания на продаже выпадут заново; цены меняются вместе с картами."),
            ["economy"])
        ]),

        /* ----------------------------------------------------------- alchemy */
        branch("alchemy", t("Alchemy", "Алхимия"),
          t("A cauldron, two flasks and tinctures to discover.", "Котёл, две фляги и настойки, которые ещё надо открыть."), [

          leaf("alchemy.cauldron", "place", "fa_cauldron",
            t("Cauldron", "Котёл"),
            t("Stands in every Holy Mountain. Takes two liquids, gives a tincture.", "Стоит в каждой Святой горе. Берёт две жидкости, отдаёт настойку."),
            [
              stat("needs", "Needs", "Нужно", "500+ px", null),
              stat("where", "Where", "Где", "Holy Mountain", null)
            ],
            t("Hold a flask and interact with the cauldron: it takes the flask's main liquid and remembers it. The flask stays, empty.\n\nWith two liquids stored, a **tincture** appears if the pair is a recipe of this run. If not, there is a puff of smoke and both are lost. Recipes are shuffled by the world seed.",
              "Возьмите флягу в руку и нажмите взаимодействие у котла: он заберёт основную жидкость фляги и запомнит её. Фляга остаётся, пустая.\n\nКогда жидкостей две, появляется **настойка**, если такая пара — рецепт этого забега. Если нет, будет облачко дыма, и обе пропадут. Рецепты перемешиваются по зерну мира."),
            ["structure"]),

          branch("alchemy.tinctures", t("Tinctures", "Настойки"),
            t("One sip, one clear effect, a fixed time.", "Один глоток, один понятный эффект, отмеренное время."), [

            leaf("alchemy.tinctures.mend", "tincture", "tincture_mend_ui",
              t("Mending", "Заживление"),
              t("Heals 40 health over 20 seconds.", "Лечит 40 здоровья за 20 секунд."),
              [
                stat("heal", "Heals", "Лечит", "40 hp", null),
                stat("duration", "Over", "За", "20 s", null)
              ],
              t("The healing is gradual and never goes above your maximum. Drinking a second one while the first is still working only **refreshes the time**.",
                "Лечение идёт постепенно и не поднимает здоровье выше максимума. Вторая настойка поверх первой только **обновляет время**."),
              ["healing"],
              {
                recipe: {
                  inputs: [
                    { title: t("Water", "Вода"), icon: null },
                    { title: t("Blood", "Кровь"), icon: null }
                  ],
                  result: { title: t("Tincture of Mending", "Настойка заживления"), icon: I + "tincture_mend_ui.png" },
                  note: t("Example pair. The real pair is different in every run; find a note to learn it.",
                    "Пара для примера. В каждом забеге она своя; найдите записку, чтобы её узнать.")
                },
                reactions: [
                  { with: t("Flask Charm relic", "Реликвия «Оберег фляги»"), gives: t("lasts 30 s instead of 20", "длится 30 секунд вместо 20") },
                  { with: t("A second Mending", "Вторая такая же"), gives: t("time is refreshed, not stacked", "время обновляется, не складывается") }
                ]
              }),

            leaf("alchemy.tinctures.fount", "tincture", "tincture_fount_ui",
              t("Fount", "Родник"),
              t("Wands recharge mana 50 % faster for 90 seconds.", "Палочки восстанавливают ману на 50 % быстрее 90 секунд."),
              [
                stat("charge", "Mana charge", "Заряд маны", "+50 %", null),
                stat("duration", "Duration", "Длится", "90 s", null)
              ],
              t("Works on whichever wand you hold while it lasts.", "Действует на ту палочку, что в руке, пока не кончится."),
              ["mana"],
              {
                recipe: {
                  inputs: [
                    { title: t("Oil", "Масло"), icon: null },
                    { title: t("Slime", "Слизь"), icon: null }
                  ],
                  result: { title: t("Tincture of the Fount", "Настойка родника"), icon: I + "tincture_fount_ui.png" },
                  note: t("Example pair. Shuffled by the world seed.", "Пара для примера. Перемешивается по зерну мира.")
                },
                reactions: [
                  { with: t("Flask Charm relic", "Реликвия «Оберег фляги»"), gives: t("lasts 135 s", "длится 135 секунд") }
                ]
              })
          ]),

          leaf("alchemy.notes", "info", "fa_note",
            t("Recipe notes", "Записки с рецептами"),
            t("Paper scraps in the caves, each reveals one recipe.", "Обрывки бумаги в пещерах, каждый открывает один рецепт."),
            [stat("rate", "How often", "Как часто", "1 per 8 screens", null)],
            t("Pick one up and the pair of liquids is shown on screen. Known recipes are then listed over every cauldron.",
              "Подберите записку, и пара жидкостей появится на экране. Известные рецепты потом перечислены над каждым котлом."),
            [])
        ]),

        /* ------------------------------------------------------------ relics */
        branch("relics", t("Relics", "Реликвии"),
          t("Stones that take an item slot and work while you carry them.", "Камни, которые занимают слот предмета и работают, пока вы их носите."), [

          leaf("relics.ward", "relic", "relic_ward",
            t("Ward Stone", "Оберегающий камень"),
            t("Negates one hit completely, then recharges for 45 seconds.", "Полностью гасит один удар, потом заряжается 45 секунд."),
            [
              stat("blocks", "Blocks", "Гасит", "1 hit", null),
              stat("recharge", "Recharge", "Перезарядка", "45 s", null)
            ],
            t("A small mark over your head shows that the ward is ready. Drop the stone and the effect is gone within a moment.",
              "Маленький знак над головой показывает, что оберег готов. Бросьте камень, и эффект тут же пропадёт."),
            ["defense"]),

          leaf("relics.fang", "relic", "relic_fang",
            t("Leech Fang", "Клык-пиявка"),
            t("Every eighth kill heals 4 health.", "Каждое восьмое убийство лечит 4 здоровья."),
            [
              stat("heal", "Heals", "Лечит", "4 hp", null),
              stat("every", "Every", "Каждые", "8 kills", null)
            ],
            t("Two fangs do not stack. Different relics do.", "Два клыка не складываются. Разные реликвии складываются."),
            ["healing"])
        ]),

        /* ------------------------------------------------------------- world */
        branch("world", t("World", "Мир"),
          t("Shrines, omen cards, wisps, elite enemies and places to find.", "Алтари, карты знамений, огоньки, элитные враги и места, которые стоит найти."), [

          branch("world.shrines", t("Shrines", "Алтари"),
            t("Pray once, keep a small blessing for the run.", "Помолитесь один раз и унесите малое благословение до конца забега."), [
            leaf("world.shrines.aegis", "blessing", "blessing_aegis",
              t("Blessing of the Aegis", "Благословение эгиды"),
              t("All damage taken is 6 % lower.", "Весь получаемый урон на 6 % меньше."),
              [stat("defense", "Damage taken", "Получаемый урон", "-6 %", null)],
              t("Small on its own. Blessings from different shrines add up.", "Само по себе немного. Благословения разных алтарей складываются."),
              ["defense"])
          ]),

          branch("world.omens", t("Omens", "Знамения"),
            t("One-use cards with a big, immediate effect.", "Одноразовые карты с сильным мгновенным эффектом."), [
            leaf("world.omens.smite", "omen", "omen_smite",
              t("Omen of Wrath", "Знамение гнева"),
              t("Every enemy within 300 px takes 60 electric damage.", "Каждый враг в 300 пикселях получает 60 урона электричеством."),
              [
                stat("damage", "Damage", "Урон", "60", null),
                stat("radius", "Radius", "Радиус", "300 px", null),
                stat("targets", "Targets", "Целей", "up to 12", null)
              ],
              t("Strikes the nearest enemies first. The card is spent on use.", "Сначала бьёт ближайших. Карта тратится при использовании."),
              ["damage"])
          ]),

          branch("world.wisps", t("Wisps", "Огоньки"),
            t("Companions hatched from eggs found in caches.", "Спутники из яиц, которые лежат в тайниках."), [
            leaf("world.wisps.lantern", "wisp", "wisp_lantern",
              t("Lantern Wisp", "Огонёк-фонарь"),
              t("Lights the cave 180 px around itself.", "Освещает пещеру на 180 пикселей вокруг себя."),
              [stat("light", "Light radius", "Радиус света", "180 px", "Player: about 100")],
              t("Follows you and never fights. Dark biomes stop being dark.", "Летит за вами и никогда не дерётся. Тёмные биомы перестают быть тёмными."),
              ["light"])
          ]),

          branch("world.elites", t("Elite enemies", "Элитные враги"),
            t("Ordinary enemies with one dangerous extra.", "Обычные враги с одной опасной особенностью."), [
            leaf("world.elites.volatile", "elite", "elite_volatile",
              t("Volatile", "Взрывной"),
              t("Blows up on death after a short warning flash.", "Взрывается после смерти, перед этим коротко вспыхивает."),
              [
                stat("damage", "Blast damage", "Урон взрыва", "15", null),
                stat("radius", "Radius", "Радиус", "20 px", null),
                stat("warning", "Warning", "Предупреждение", "30 fr", null)
              ],
              t("The blast does not dig. Step back when the body flashes.", "Взрыв породу не роет. Отойдите, когда тело вспыхнет."),
              ["affix"])
          ]),

          branch("world.places", t("Places", "Места"),
            t("Structures worth a detour.", "Постройки, ради которых стоит свернуть с пути."), [
            leaf("world.places.forge", "place", "fa_forge",
              t("Wand Forge", "Кузня палочек"),
              t("One strike: improves one stat of the wand you hold.", "Один удар: улучшает одну характеристику палочки в руке."),
              [stat("uses", "Uses", "Использований", "1", null)],
              t("The anvil goes cold after one use.", "После одного использования наковальня остывает."),
              ["structure"]),
            leaf("world.places.wanderer", "place", "fa_wanderer",
              t("The Wanderer", "Странник"),
              t("A travelling trader who buys and sells between mountains.", "Бродячий торговец, который покупает и продаёт между горами."),
              [],
              t("Met by chance in the caves. His stock is different every time.", "Встречается в пещерах случайно. Товар каждый раз другой."),
              ["trader"])
          ])
        ])
      ]
    }
  };
})();
