window.FABLED_TREE = {
 "version": "0.1",
 "langs": [
  "en",
  "ru"
 ],
 "root": {
  "id": "root",
  "children": [
   {
    "id": "spells",
    "kind": "branch",
    "title": {
     "en": "Spells",
     "ru": "Заклинания"
    },
    "summary": {
     "en": "**50 spells** in four groups: projectiles, modifiers, tools and held spells.",
     "ru": "**50 заклинаний** в четырёх группах: снаряды, модификаторы, инструменты и удерживаемые."
    },
    "icon": null,
    "stats": [],
    "body": {
     "en": "**50 spells** in four groups: projectiles, modifiers, tools and held spells. Every spell has a power rating from 1 to 6 and a rarity (see `balance.lua` of the mod). A spell of power N appears in the shop and in chests at levels N to min(N+3, 6); the weight depends on the position in that range (0.6, 1.0, 0.8, 0.5 from the first level to the fourth) and on the rarity (common 1.0, uncommon 0.6, rare 0.3, legendary 0.12). The mod's share of the whole spell pool is capped by the setting `pool_share` (default 20%), so vanilla spells are never crowded out.\n\nPrice of a card: 100 + 50 × power, times 1.0 / 1.2 / 1.5 / 2.0 by rarity. The numbers below the names are read from the mod's files; \"vanilla\" is the vanilla spell the card was modelled on.",
     "ru": "**50 заклинаний** в четырёх группах: снаряды, модификаторы, инструменты и удерживаемые. У каждого заклинания есть мощность от 1 до 6 и редкость (см. `balance.lua` мода). Заклинание мощности N встречается в магазине и сундуках на уровнях от N до min(N+3, 6); вес зависит от позиции в этом диапазоне (0,6, 1,0, 0,8, 0,5 от первого уровня к четвёртому) и от редкости (обычная 1,0, необычная 0,6, редкая 0,3, легендарная 0,12). Доля мода во всём пуле заклинаний ограничена настройкой `pool_share` (по умолчанию 20%), так что ванильные заклинания не вытесняются.\n\nЦена карты: 100 + 50 × мощность, умноженная на 1,0 / 1,2 / 1,5 / 2,0 по редкости. Числа у заклинаний взяты из файлов мода; «ваниль» это ванильное заклинание, по образцу которого сделана карта."
    },
    "recipe": null,
    "reactions": null,
    "tags": [
     "spells"
    ],
    "children": [
     {
      "id": "spells.projectiles",
      "kind": "branch",
      "title": {
       "en": "Projectiles",
       "ru": "Снаряды"
      },
      "summary": {
       "en": "Cards that fire a projectile.",
       "ru": "Карты, которые выпускают снаряд."
      },
      "icon": null,
      "stats": [],
      "body": {
       "en": "Cards that fire a projectile. Each one is a small idea on top of a plain bolt: distance damage, a shotgun burst, a melee sweep, a bolt that splits, pierces, bounces, comes back, marks, links or falls like a comet.",
       "ru": "Карты, которые выпускают снаряд. Каждая это небольшая идея поверх обычной молнии: урон от дальности, дробь, удар вблизи, болт, который раскалывается, пробивает, отскакивает, возвращается, метит, связывает или падает кометой."
      },
      "recipe": null,
      "reactions": null,
      "tags": [
       "projectiles"
      ],
      "children": [
       {
        "id": "spells.projectiles.fa_range_bolt",
        "kind": "spell",
        "title": {
         "en": "Longshot",
         "ru": "Дальний выстрел"
        },
        "summary": {
         "en": "A fast, thin bolt that grows stronger the farther it flies: 4 damage at the wand, +1 per 15 px, up to 16 at 180 px.",
         "ru": "Быстрая тонкая молния, которая крепчает в полёте: 4 урона у палочки, +1 за каждые 15 px, до 16 на 180 px."
        },
        "icon": "assets/icons/fa_range_bolt.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "15",
          "vanilla": "5 (LIGHT_BULLET)"
         },
         {
          "key": "delay",
          "label": {
           "en": "Cast delay, frames",
           "ru": "Задержка выстрела, кадры"
          },
          "value": "+3",
          "vanilla": "+3 (LIGHT_BULLET)"
         },
         {
          "key": "damage",
          "label": {
           "en": "Damage (base hit)",
           "ru": "Урон (базовый удар)"
          },
          "value": "4",
          "vanilla": "3 (LIGHT_BULLET)"
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "1",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "1–4",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "150",
          "vanilla": null
         }
        ],
        "body": {
         "en": "A fast, thin bolt that grows stronger the farther it flies: 4 damage at the wand, +1 per 15 px, up to 16 at 180 px.",
         "ru": "Быстрая тонкая молния, которая крепчает в полёте: 4 урона у палочки, +1 за каждые 15 px, до 16 на 180 px."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "projectiles",
         "projectile",
         "power-1",
         "common"
        ],
        "children": []
       },
       {
        "id": "spells.projectiles.fa_point_blank",
        "kind": "spell",
        "title": {
         "en": "Point Blank",
         "ru": "В упор"
        },
        "summary": {
         "en": "Five pellets in a 30 degree cone, 4 damage each, they fly only about 60 px (8 frames).",
         "ru": "Пять дробинок в конусе 30 градусов, по 4 урона, летят всего около 60 px (8 кадров)."
        },
        "icon": "assets/icons/fa_point_blank.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "22",
          "vanilla": "25 (BUCKSHOT)"
         },
         {
          "key": "delay",
          "label": {
           "en": "Cast delay, frames",
           "ru": "Задержка выстрела, кадры"
          },
          "value": "+14",
          "vanilla": "+8 (BUCKSHOT)"
         },
         {
          "key": "damage",
          "label": {
           "en": "Damage (base hit)",
           "ru": "Урон (базовый удар)"
          },
          "value": "4 ×5",
          "vanilla": "4.62 (BUCKSHOT)"
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "1",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "1–4",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "150",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Five pellets in a 30 degree cone, 4 damage each, they fly only about 60 px (8 frames). Cast delay +14.",
         "ru": "Пять дробинок в конусе 30 градусов, по 4 урона, летят всего около 60 px (8 кадров). Задержка выстрела +14."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "projectiles",
         "projectile",
         "power-1",
         "common"
        ],
        "children": []
       },
       {
        "id": "spells.projectiles.fa_glaive",
        "kind": "spell",
        "title": {
         "en": "Glaive",
         "ru": "Глефа"
        },
        "summary": {
         "en": "A melee sweep: an arc 40 px in front of you deals 14 slice damage to everything in it, through enemies, stopped by walls.",
         "ru": "Удар вблизи: дуга в 40 px перед вами наносит 14 рубящего урона всем в ней, сквозь врагов, стены останавливают."
        },
        "icon": "assets/icons/fa_glaive.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "14",
          "vanilla": "20 (DISC_BULLET)"
         },
         {
          "key": "delay",
          "label": {
           "en": "Cast delay, frames",
           "ru": "Задержка выстрела, кадры"
          },
          "value": "+15",
          "vanilla": "+10 (DISC_BULLET)"
         },
         {
          "key": "damage",
          "label": {
           "en": "Damage (base hit)",
           "ru": "Урон (базовый удар)"
          },
          "value": "14",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "1",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "1–4",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "150",
          "vanilla": null
         }
        ],
        "body": {
         "en": "A melee sweep: an arc 40 px in front of you deals 14 slice damage to everything in it, through enemies, stopped by walls. Cast delay +15.",
         "ru": "Удар вблизи: дуга в 40 px перед вами наносит 14 рубящего урона всем в ней, сквозь врагов, стены останавливают. Задержка выстрела +15."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "projectiles",
         "projectile",
         "power-1",
         "common"
        ],
        "children": []
       },
       {
        "id": "spells.projectiles.fa_splinter",
        "kind": "spell",
        "title": {
         "en": "Splinter",
         "ru": "Осколок"
        },
        "summary": {
         "en": "A bolt of 6 damage. On the first hit of anything it breaks into 3 shards of 2.5 damage that fly on in a 40 degree fan for 20 frames.",
         "ru": "Болт на 6 урона. При первом попадании во что-либо раскалывается на 3 осколка по 2,5 урона, которые летят дальше веером в 40 градусов 20 кадров."
        },
        "icon": "assets/icons/fa_splinter.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "16",
          "vanilla": "20 (BULLET)"
         },
         {
          "key": "delay",
          "label": {
           "en": "Cast delay, frames",
           "ru": "Задержка выстрела, кадры"
          },
          "value": "+3",
          "vanilla": "+4 (BULLET)"
         },
         {
          "key": "damage",
          "label": {
           "en": "Damage (base hit)",
           "ru": "Урон (базовый удар)"
          },
          "value": "6",
          "vanilla": "10 (BULLET)"
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "1",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "1–4",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "150",
          "vanilla": null
         }
        ],
        "body": {
         "en": "A bolt of 6 damage. On the first hit of anything it breaks into 3 shards of 2.5 damage that fly on in a 40 degree fan for 20 frames.",
         "ru": "Болт на 6 урона. При первом попадании во что-либо раскалывается на 3 осколка по 2,5 урона, которые летят дальше веером в 40 градусов 20 кадров."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "projectiles",
         "projectile",
         "power-1",
         "common"
        ],
        "children": []
       },
       {
        "id": "spells.projectiles.fa_needle",
        "kind": "spell",
        "title": {
         "en": "Needle",
         "ru": "Игла"
        },
        "summary": {
         "en": "A fast bolt of 7 damage that passes through up to 3 enemies (not terrain) and never hurts you.",
         "ru": "Быстрый болт на 7 урона, пробивает до 3 врагов (но не землю) и никогда не ранит вас."
        },
        "icon": "assets/icons/fa_needle.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "16",
          "vanilla": "30 (LANCE)"
         },
         {
          "key": "delay",
          "label": {
           "en": "Cast delay, frames",
           "ru": "Задержка выстрела, кадры"
          },
          "value": "+5",
          "vanilla": "+20 (LANCE)"
         },
         {
          "key": "damage",
          "label": {
           "en": "Damage (base hit)",
           "ru": "Урон (базовый удар)"
          },
          "value": "7",
          "vanilla": "35 (LANCE)"
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "2–5",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "200",
          "vanilla": null
         }
        ],
        "body": {
         "en": "A fast bolt of 7 damage that passes through up to 3 enemies (not terrain) and never hurts you.",
         "ru": "Быстрый болт на 7 урона, пробивает до 3 врагов (но не землю) и никогда не ранит вас."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "projectiles",
         "projectile",
         "power-2",
         "common"
        ],
        "children": []
       },
       {
        "id": "spells.projectiles.fa_ricochet",
        "kind": "spell",
        "title": {
         "en": "Ricochet",
         "ru": "Рикошет"
        },
        "summary": {
         "en": "A bolt of 8 damage with 4 bounces; each bounce adds 4 damage (50% of base): 8, 12, 16, 20, 24 at most.",
         "ru": "Болт на 8 урона с 4 отскоками; каждый отскок добавляет 4 урона (50% базового): 8, 12, 16, 20, максимум 24."
        },
        "icon": "assets/icons/fa_ricochet.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "15",
          "vanilla": "5 (RUBBER_BALL)"
         },
         {
          "key": "delay",
          "label": {
           "en": "Cast delay, frames",
           "ru": "Задержка выстрела, кадры"
          },
          "value": "+3",
          "vanilla": "-2 (RUBBER_BALL)"
         },
         {
          "key": "damage",
          "label": {
           "en": "Damage (base hit)",
           "ru": "Урон (базовый удар)"
          },
          "value": "8",
          "vanilla": "3 (RUBBER_BALL)"
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "2–5",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "240",
          "vanilla": null
         }
        ],
        "body": {
         "en": "A bolt of 8 damage with 4 bounces; each bounce adds 4 damage (50% of base): 8, 12, 16, 20, 24 at most.",
         "ru": "Болт на 8 урона с 4 отскоками; каждый отскок добавляет 4 урона (50% базового): 8, 12, 16, 20, максимум 24."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "projectiles",
         "projectile",
         "power-2",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.projectiles.fa_swarm",
        "kind": "spell",
        "title": {
         "en": "Swarm",
         "ru": "Рой"
        },
        "summary": {
         "en": "Five motes of 2.5 damage with weak homing (turn 60 deg/s, range 80 px), they live 90 frames.",
         "ru": "Пять искр по 2,5 урона со слабым самонаведением (поворот 60 град/с, дальность 80 px), живут 90 кадров."
        },
        "icon": "assets/icons/fa_swarm.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "22",
          "vanilla": "60 (SWARM_FLY)"
         },
         {
          "key": "delay",
          "label": {
           "en": "Cast delay, frames",
           "ru": "Задержка выстрела, кадры"
          },
          "value": "+6",
          "vanilla": "+60 (SWARM_FLY)"
         },
         {
          "key": "damage",
          "label": {
           "en": "Damage (base hit)",
           "ru": "Урон (базовый удар)"
          },
          "value": "2.5 ×5",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "2–5",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "240",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Five motes of 2.5 damage with weak homing (turn 60 deg/s, range 80 px), they live 90 frames.",
         "ru": "Пять искр по 2,5 урона со слабым самонаведением (поворот 60 град/с, дальность 80 px), живут 90 кадров."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "projectiles",
         "projectile",
         "power-2",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.projectiles.fa_return_bolt",
        "kind": "spell",
        "title": {
         "en": "Return Bolt",
         "ru": "Бумеранг"
        },
        "summary": {
         "en": "A bolt that flies 120 px, turns and comes back to you.",
         "ru": "Болт, который пролетает 120 px, разворачивается и возвращается к вам."
        },
        "icon": "assets/icons/fa_return_bolt.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "20",
          "vanilla": null
         },
         {
          "key": "delay",
          "label": {
           "en": "Cast delay, frames",
           "ru": "Задержка выстрела, кадры"
          },
          "value": "+8",
          "vanilla": null
         },
         {
          "key": "damage",
          "label": {
           "en": "Damage (base hit)",
           "ru": "Урон (базовый удар)"
          },
          "value": "7",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "2–5",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "240",
          "vanilla": null
         }
        ],
        "body": {
         "en": "A bolt that flies 120 px, turns and comes back to you. 7 damage each way: an enemy can be hit once on the way out and once on the way back. It never hurts you. Cast delay +8 frames.",
         "ru": "Болт, который пролетает 120 px, разворачивается и возвращается к вам. По 7 урона в каждую сторону: враг может получить удар и туда, и обратно. Вас он не ранит. Задержка залпа +8 кадров."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "projectiles",
         "projectile",
         "power-2",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.projectiles.fa_siphon",
        "kind": "spell",
        "title": {
         "en": "Siphon",
         "ru": "Вытяжка"
        },
        "summary": {
         "en": "A slow orb of 12 damage.",
         "ru": "Медленный шар на 12 урона."
        },
        "icon": "assets/icons/fa_siphon.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "25",
          "vanilla": "30 (SLOW_BULLET)"
         },
         {
          "key": "delay",
          "label": {
           "en": "Cast delay, frames",
           "ru": "Задержка выстрела, кадры"
          },
          "value": "+8",
          "vanilla": "+6 (SLOW_BULLET)"
         },
         {
          "key": "damage",
          "label": {
           "en": "Damage (base hit)",
           "ru": "Урон (базовый удар)"
          },
          "value": "12",
          "vanilla": "11.2 (SLOW_BULLET)"
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "2–5",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "240",
          "vanilla": null
         }
        ],
        "body": {
         "en": "A slow orb of 12 damage. If it kills, the wand that fired it gets 25 mana back (never above its maximum). Cast delay +8 frames.",
         "ru": "Медленный шар на 12 урона. Если он убивает, палочка, из которой он выпущен, получает назад 25 маны (но не выше максимума). Задержка залпа +8 кадров."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "projectiles",
         "projectile",
         "power-2",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.projectiles.fa_mark",
        "kind": "spell",
        "title": {
         "en": "Mark",
         "ru": "Метка"
        },
        "summary": {
         "en": "A bolt of 2 damage. The enemy it hits is marked for 8 seconds and takes 20% more damage from every source. A new mark refreshes the old one, they do not stack.",
         "ru": "Болт на 2 урона. Враг, в которого он попал, получает метку на 8 секунд и принимает на 20% больше урона из любого источника. Новая метка обновляет старую, они не складываются."
        },
        "icon": "assets/icons/fa_mark.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "20",
          "vanilla": null
         },
         {
          "key": "damage",
          "label": {
           "en": "Damage (base hit)",
           "ru": "Урон (базовый удар)"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "3–6",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "375",
          "vanilla": null
         }
        ],
        "body": {
         "en": "A bolt of 2 damage. The enemy it hits is marked for 8 seconds and takes 20% more damage from every source. A new mark refreshes the old one, they do not stack.",
         "ru": "Болт на 2 урона. Враг, в которого он попал, получает метку на 8 секунд и принимает на 20% больше урона из любого источника. Новая метка обновляет старую, они не складываются."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "projectiles",
         "projectile",
         "power-3",
         "rare"
        ],
        "children": []
       },
       {
        "id": "spells.projectiles.fa_storm_seed",
        "kind": "spell",
        "title": {
         "en": "Storm Seed",
         "ru": "Грозовое семя"
        },
        "summary": {
         "en": "A seed that sticks to whatever it hits.",
         "ru": "Семя, которое прилипает к тому, во что попало."
        },
        "icon": "assets/icons/fa_storm_seed.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "40",
          "vanilla": null
         },
         {
          "key": "delay",
          "label": {
           "en": "Cast delay, frames",
           "ru": "Задержка выстрела, кадры"
          },
          "value": "+20",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "3–6",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "300",
          "vanilla": null
         }
        ],
        "body": {
         "en": "A seed that sticks to whatever it hits. 90 frames later it releases 3 electric arcs of 10 damage at targets within 40 px. Cast delay +20. Electricity in water works as in vanilla: be careful.",
         "ru": "Семя, которое прилипает к тому, во что попало. Через 90 кадров оно выпускает 3 электрические дуги по 10 урона в цели в радиусе 40 px. Задержка выстрела +20. Электричество в воде работает как в оригинале: осторожнее."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "projectiles",
         "projectile",
         "power-3",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.projectiles.fa_tether",
        "kind": "spell",
        "title": {
         "en": "Tether",
         "ru": "Узы"
        },
        "summary": {
         "en": "A bolt of 5 damage that links the first two enemies it touches for 6 seconds: half of the damage one of them takes is also dealt to the other, never back again.",
         "ru": "Болт на 5 урона, который на 6 секунд связывает первых двух врагов, которых коснётся: половина урона, полученного одним из них, наносится и другому, но не возвращается обратно."
        },
        "icon": "assets/icons/fa_tether.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "30",
          "vanilla": null
         },
         {
          "key": "damage",
          "label": {
           "en": "Damage (base hit)",
           "ru": "Урон (базовый удар)"
          },
          "value": "5",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "3–6",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "375",
          "vanilla": null
         }
        ],
        "body": {
         "en": "A bolt of 5 damage that links the first two enemies it touches for 6 seconds: half of the damage one of them takes is also dealt to the other, never back again. A line is drawn between them.",
         "ru": "Болт на 5 урона, который на 6 секунд связывает первых двух врагов, которых коснётся: половина урона, полученного одним из них, наносится и другому, но не возвращается обратно. Между ними рисуется линия."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "projectiles",
         "projectile",
         "power-3",
         "rare"
        ],
        "children": []
       },
       {
        "id": "spells.projectiles.fa_comet",
        "kind": "spell",
        "title": {
         "en": "Comet",
         "ru": "Комета"
        },
        "summary": {
         "en": "Starts slow and accelerates.",
         "ru": "Стартует медленно и разгоняется."
        },
        "icon": "assets/icons/fa_comet.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "60",
          "vanilla": null
         },
         {
          "key": "delay",
          "label": {
           "en": "Cast delay, frames",
           "ru": "Задержка выстрела, кадры"
          },
          "value": "+30",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "4",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "4–6",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "450",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Starts slow and accelerates. The blast at the impact (radius 10, does not dig) deals damage by speed: 20 at 100 px/s, rising to 80 at 600 px/s and above. Cast delay +30.",
         "ru": "Стартует медленно и разгоняется. Взрыв при ударе (радиус 10, землю не роет) наносит урон по скорости: 20 при 100 px/с, растёт до 80 при 600 px/с и выше. Задержка выстрела +30."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "projectiles",
         "projectile",
         "power-4",
         "rare"
        ],
        "children": []
       }
      ]
     },
     {
      "id": "spells.modifiers",
      "kind": "branch",
      "title": {
       "en": "Modifiers",
       "ru": "Модификаторы"
      },
      "summary": {
       "en": "Cards that change the next spell: damage by situation (speed, standing still, being in the air, a rested wand), effects on a hit (mana back, slow, chain, bounty), and four wand-tuning cards (Recharge+, Recharge++, Mana+, Mana++).",
       "ru": "Карты, которые меняют следующее заклинание: урон по ситуации (скорость, неподвижность, прыжок, отдохнувшая палочка), эффекты при попадании (возврат маны, замедление, цепь, награда) и четыре карты настройки палочки (Перезарядка+…"
      },
      "icon": null,
      "stats": [],
      "body": {
       "en": "Cards that change the next spell: damage by situation (speed, standing still, being in the air, a rested wand), effects on a hit (mana back, slow, chain, bounty), and four wand-tuning cards (Recharge+, Recharge++, Mana+, Mana++). The strength and cost of those four come from the mod settings; the numbers shown are the defaults.",
       "ru": "Карты, которые меняют следующее заклинание: урон по ситуации (скорость, неподвижность, прыжок, отдохнувшая палочка), эффекты при попадании (возврат маны, замедление, цепь, награда) и четыре карты настройки палочки (Перезарядка+, Перезарядка++, Мана+, Мана++). Сила и цена этих четырёх берутся из настроек мода; показаны значения по умолчанию."
      },
      "recipe": null,
      "reactions": null,
      "tags": [
       "modifiers"
      ],
      "children": [
       {
        "id": "spells.modifiers.fa_momentum",
        "kind": "spell",
        "title": {
         "en": "Momentum",
         "ru": "Разгон"
        },
        "summary": {
         "en": "Adds 0 to 15 damage by your speed when you cast: nothing at rest, +15 at 150 px/s and faster.",
         "ru": "Добавляет от 0 до 15 урона по вашей скорости в момент выстрела: ничего в покое, +15 от 150 px/s."
        },
        "icon": "assets/icons/fa_momentum.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "6",
          "vanilla": "3 (SPEED)"
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "1",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "1–4",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "150",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Adds 0 to 15 damage by your speed when you cast: nothing at rest, +15 at 150 px/s and faster.",
         "ru": "Добавляет от 0 до 15 урона по вашей скорости в момент выстрела: ничего в покое, +15 от 150 px/s."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "modifiers",
         "modifier",
         "power-1",
         "common"
        ],
        "children": []
       },
       {
        "id": "spells.modifiers.fa_focus",
        "kind": "spell",
        "title": {
         "en": "Focus",
         "ru": "Прицел"
        },
        "summary": {
         "en": "If you have stood still for 1 second: +8 damage and 10 degrees less spread.",
         "ru": "Если вы стоите на месте уже 1 секунду: +8 урона и разброс меньше на 10 градусов."
        },
        "icon": "assets/icons/fa_focus.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "5",
          "vanilla": "1 (SPREAD_REDUCE)"
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "1",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "1–4",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "150",
          "vanilla": null
         }
        ],
        "body": {
         "en": "If you have stood still for 1 second: +8 damage and 10 degrees less spread.",
         "ru": "Если вы стоите на месте уже 1 секунду: +8 урона и разброс меньше на 10 градусов."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "modifiers",
         "modifier",
         "power-1",
         "common"
        ],
        "children": []
       },
       {
        "id": "spells.modifiers.fa_high_ground",
        "kind": "spell",
        "title": {
         "en": "High Ground",
         "ru": "Высота"
        },
        "summary": {
         "en": "If you are in the air: +12 damage and +20% critical chance.",
         "ru": "Если вы в воздухе: +12 урона и +20% к шансу критического удара."
        },
        "icon": "assets/icons/fa_high_ground.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "8",
          "vanilla": "5 (DAMAGE)"
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "2–5",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "200",
          "vanilla": null
         }
        ],
        "body": {
         "en": "If you are in the air: +12 damage and +20% critical chance.",
         "ru": "Если вы в воздухе: +12 урона и +20% к шансу критического удара."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "modifiers",
         "modifier",
         "power-2",
         "common"
        ],
        "children": []
       },
       {
        "id": "spells.modifiers.fa_leech_mana",
        "kind": "spell",
        "title": {
         "en": "Mana Leech",
         "ru": "Кража маны"
        },
        "summary": {
         "en": "The projectile's first hit on an enemy returns 8 mana to the wand.",
         "ru": "Первое попадание снаряда во врага возвращает палочке 8 маны."
        },
        "icon": "assets/icons/fa_leech_mana.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "2–5",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "200",
          "vanilla": null
         }
        ],
        "body": {
         "en": "The projectile's first hit on an enemy returns 8 mana to the wand.",
         "ru": "Первое попадание снаряда во врага возвращает палочке 8 маны."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "modifiers",
         "modifier",
         "power-2",
         "common"
        ],
        "children": []
       },
       {
        "id": "spells.modifiers.fa_slow",
        "kind": "spell",
        "title": {
         "en": "Slow",
         "ru": "Замедление"
        },
        "summary": {
         "en": "The enemy hit moves 40% slower for 3 seconds.",
         "ru": "Враг, в которого попали, двигается на 40% медленнее 3 секунды."
        },
        "icon": "assets/icons/fa_slow.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "12",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "2–5",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "200",
          "vanilla": null
         }
        ],
        "body": {
         "en": "The enemy hit moves 40% slower for 3 seconds. Adds no damage.",
         "ru": "Враг, в которого попали, двигается на 40% медленнее 3 секунды. Урон не добавляет."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "modifiers",
         "modifier",
         "power-2",
         "common"
        ],
        "children": []
       },
       {
        "id": "spells.modifiers.fa_finisher",
        "kind": "spell",
        "title": {
         "en": "Finisher",
         "ru": "Добивание"
        },
        "summary": {
         "en": "Double damage against an enemy below 30% of its health.",
         "ru": "Двойной урон по врагу, у которого меньше 30% здоровья."
        },
        "icon": "assets/icons/fa_finisher.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "10",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "2–5",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "240",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Double damage against an enemy below 30% of its health.",
         "ru": "Двойной урон по врагу, у которого меньше 30% здоровья."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "modifiers",
         "modifier",
         "power-2",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.modifiers.fa_bounty",
        "kind": "spell",
        "title": {
         "en": "Bounty",
         "ru": "Награда"
        },
        "summary": {
         "en": "An enemy killed by the projectile drops 50% more gold.",
         "ru": "Враг, убитый снарядом, роняет на 50% больше золота."
        },
        "icon": "assets/icons/fa_bounty.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "20",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "2–5",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "240",
          "vanilla": null
         }
        ],
        "body": {
         "en": "An enemy killed by the projectile drops 50% more gold.",
         "ru": "Враг, убитый снарядом, роняет на 50% больше золота."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "modifiers",
         "modifier",
         "power-2",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.modifiers.fa_opener",
        "kind": "spell",
        "title": {
         "en": "Opener",
         "ru": "Первый удар"
        },
        "summary": {
         "en": "If this wand has not fired for 2 seconds, this cast deals double damage.",
         "ru": "Если палочка не стреляла 2 секунды, этот залп наносит двойной урон."
        },
        "icon": "assets/icons/fa_opener.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "10",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "2–5",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "240",
          "vanilla": null
         }
        ],
        "body": {
         "en": "If this wand has not fired for 2 seconds, this cast deals double damage. Copies of this card on one cast do not stack.",
         "ru": "Если палочка не стреляла 2 секунды, этот залп наносит двойной урон. Копии этой карты в одном залпе не складываются."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "modifiers",
         "modifier",
         "power-2",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.modifiers.fa_ramp",
        "kind": "spell",
        "title": {
         "en": "Ramp",
         "ru": "Разгон темпа"
        },
        "summary": {
         "en": "Each cast within a second of the previous one shortens this cast's delay by one more frame, up to 8 frames.",
         "ru": "Каждый залп не позже чем через секунду после предыдущего сокращает задержку этого залпа ещё на кадр, до 8 кадров."
        },
        "icon": "assets/icons/fa_ramp.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "10",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "3–6",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "300",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Each cast within a second of the previous one shortens this cast's delay by one more frame, up to 8 frames. A pause resets it.",
         "ru": "Каждый залп не позже чем через секунду после предыдущего сокращает задержку этого залпа ещё на кадр, до 8 кадров. Пауза сбрасывает счёт."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "modifiers",
         "modifier",
         "power-3",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.modifiers.fa_kill_charge",
        "kind": "spell",
        "title": {
         "en": "Kill Charge",
         "ru": "Заряд убийства"
        },
        "summary": {
         "en": "A kill by the projectile gives a stack (up to 5, each lasts 6 seconds).",
         "ru": "Убийство снарядом даёт заряд (до 5, каждый держится 6 секунд)."
        },
        "icon": "assets/icons/fa_kill_charge.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "8",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "3–6",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "300",
          "vanilla": null
         }
        ],
        "body": {
         "en": "A kill by the projectile gives a stack (up to 5, each lasts 6 seconds). Each stack adds 10% damage to casts with this modifier. Copies of this card on one cast do not stack.",
         "ru": "Убийство снарядом даёт заряд (до 5, каждый держится 6 секунд). Каждый заряд добавляет 10% урона залпам с этим модификатором. Копии этой карты в одном залпе не складываются."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "modifiers",
         "modifier",
         "power-3",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.modifiers.fa_glass_round",
        "kind": "spell",
        "title": {
         "en": "Glass Round",
         "ru": "Стеклянный патрон"
        },
        "summary": {
         "en": "Adds 20 damage, but the cast costs you 2 health.",
         "ru": "Добавляет 20 урона, но залп стоит вам 2 здоровья."
        },
        "icon": "assets/icons/fa_glass_round.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "10",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "3–6",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "300",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Adds 20 damage, but the cast costs you 2 health. At 10 health or less: no cost and no bonus.",
         "ru": "Добавляет 20 урона, но залп стоит вам 2 здоровья. При 10 здоровья и меньше: ни платы, ни бонуса."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "modifiers",
         "modifier",
         "power-3",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.modifiers.fa_chain",
        "kind": "spell",
        "title": {
         "en": "Chain",
         "ru": "Цепь"
        },
        "summary": {
         "en": "When the projectile hits an enemy, half of the damage dealt jumps once to the nearest other enemy within 60 pixels.",
         "ru": "Когда снаряд попадает во врага, половина нанесённого урона один раз переходит на ближайшего другого врага в радиусе 60 пикселей."
        },
        "icon": "assets/icons/fa_chain.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "25",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "3–6",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "300",
          "vanilla": null
         }
        ],
        "body": {
         "en": "When the projectile hits an enemy, half of the damage dealt jumps once to the nearest other enemy within 60 pixels.",
         "ru": "Когда снаряд попадает во врага, половина нанесённого урона один раз переходит на ближайшего другого врага в радиусе 60 пикселей."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "modifiers",
         "modifier",
         "power-3",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.modifiers.fa_last_word",
        "kind": "spell",
        "title": {
         "en": "Last Word",
         "ru": "Последнее слово"
        },
        "summary": {
         "en": "If nothing is left in the wand's deck after this cast is drawn, it deals 150% more damage.",
         "ru": "Если после этого залпа в колоде палочки ничего не остаётся, он наносит на 150% больше урона."
        },
        "icon": "assets/icons/fa_last_word.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "20",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "3–6",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "300",
          "vanilla": null
         }
        ],
        "body": {
         "en": "If nothing is left in the wand's deck after this cast is drawn, it deals 150% more damage. Copies of this card on one cast do not stack.",
         "ru": "Если после этого залпа в колоде палочки ничего не остаётся, он наносит на 150% больше урона. Копии этой карты в одном залпе не складываются."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "modifiers",
         "modifier",
         "power-3",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.modifiers.fa_recharge_plus",
        "kind": "spell",
        "title": {
         "en": "Recharge+",
         "ru": "Перезарядка+"
        },
        "summary": {
         "en": "Shortens the delay between casts and the wand's recharge time.",
         "ru": "Сокращает задержку между залпами и время перезарядки палочки."
        },
        "icon": "assets/icons/fa_recharge_plus.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "18",
          "vanilla": null
         },
         {
          "key": "delay",
          "label": {
           "en": "Cast delay, frames",
           "ru": "Задержка выстрела, кадры"
          },
          "value": "-20",
          "vanilla": null
         },
         {
          "key": "reload",
          "label": {
           "en": "Recharge time, frames",
           "ru": "Перезарядка, кадры"
          },
          "value": "-40",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "3–6",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "300",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Shortens the delay between casts and the wand's recharge time. Strength and cost are set in the mod settings.",
         "ru": "Сокращает задержку между залпами и время перезарядки палочки. Сила и цена задаются в настройках мода."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "modifiers",
         "modifier",
         "power-3",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.modifiers.fa_recharge_plus2",
        "kind": "spell",
        "title": {
         "en": "Recharge++",
         "ru": "Перезарядка++"
        },
        "summary": {
         "en": "Shortens the delay between casts and the wand's recharge time, more than Recharge+.",
         "ru": "Сокращает задержку между залпами и время перезарядки палочки сильнее, чем Перезарядка+."
        },
        "icon": "assets/icons/fa_recharge_plus2.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "24",
          "vanilla": null
         },
         {
          "key": "delay",
          "label": {
           "en": "Cast delay, frames",
           "ru": "Задержка выстрела, кадры"
          },
          "value": "-40",
          "vanilla": null
         },
         {
          "key": "reload",
          "label": {
           "en": "Recharge time, frames",
           "ru": "Перезарядка, кадры"
          },
          "value": "-80",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "5",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "5–6",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "525",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Shortens the delay between casts and the wand's recharge time, more than Recharge+. Strength and cost are set in the mod settings.",
         "ru": "Сокращает задержку между залпами и время перезарядки палочки сильнее, чем Перезарядка+. Сила и цена задаются в настройках мода."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "modifiers",
         "modifier",
         "power-5",
         "rare"
        ],
        "children": []
       },
       {
        "id": "spells.modifiers.fa_mana_plus",
        "kind": "spell",
        "title": {
         "en": "Mana+",
         "ru": "Мана+"
        },
        "summary": {
         "en": "Returns mana to the wand when cast, but adds cast delay.",
         "ru": "Возвращает палочке ману при выстреле, но добавляет задержку."
        },
        "icon": "assets/icons/fa_mana_plus.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "-60",
          "vanilla": null
         },
         {
          "key": "delay",
          "label": {
           "en": "Cast delay, frames",
           "ru": "Задержка выстрела, кадры"
          },
          "value": "+15",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "3–6",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "300",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Returns mana to the wand when cast, but adds cast delay. Strength and delay are set in the mod settings.",
         "ru": "Возвращает палочке ману при выстреле, но добавляет задержку. Сила и задержка задаются в настройках мода."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "modifiers",
         "modifier",
         "power-3",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.modifiers.fa_mana_plus2",
        "kind": "spell",
        "title": {
         "en": "Mana++",
         "ru": "Мана++"
        },
        "summary": {
         "en": "Returns more mana to the wand than Mana+, but adds cast delay.",
         "ru": "Возвращает палочке больше маны, чем Мана+, но добавляет задержку."
        },
        "icon": "assets/icons/fa_mana_plus2.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "-120",
          "vanilla": null
         },
         {
          "key": "delay",
          "label": {
           "en": "Cast delay, frames",
           "ru": "Задержка выстрела, кадры"
          },
          "value": "+20",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "5",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "5–6",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "525",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Returns more mana to the wand than Mana+, but adds cast delay. Strength and delay are set in the mod settings.",
         "ru": "Возвращает палочке больше маны, чем Мана+, но добавляет задержку. Сила и задержка задаются в настройках мода."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "modifiers",
         "modifier",
         "power-5",
         "rare"
        ],
        "children": []
       }
      ]
     },
     {
      "id": "spells.tools",
      "kind": "branch",
      "title": {
       "en": "Tools",
       "ru": "Инструменты"
      },
      "summary": {
       "en": "Utility and structure cards: wind, traps, walls, a decoy, an orbiting blade, a prism, a recall mark, and passive cards that work while the wand is in your hand (Reload Guard, Battery, Alt Cast).",
       "ru": "Карты-инструменты и постройки: ветер, ловушки, стены, приманка, кружащий клинок, призма, метка возврата и пассивные карты, которые работают, пока палочка в руке (Щит перезарядки, Батарея, Второй залп)."
      },
      "icon": null,
      "stats": [],
      "body": {
       "en": "Utility and structure cards: wind, traps, walls, a decoy, an orbiting blade, a prism, a recall mark, and passive cards that work while the wand is in your hand (Reload Guard, Battery, Alt Cast).",
       "ru": "Карты-инструменты и постройки: ветер, ловушки, стены, приманка, кружащий клинок, призма, метка возврата и пассивные карты, которые работают, пока палочка в руке (Щит перезарядки, Батарея, Второй залп)."
      },
      "recipe": null,
      "reactions": null,
      "tags": [
       "tools"
      ],
      "children": [
       {
        "id": "spells.tools.fa_gust",
        "kind": "spell",
        "title": {
         "en": "Gust",
         "ru": "Порыв"
        },
        "summary": {
         "en": "A cone of wind 80 px long: shoves enemies back 64 px and turns enemy projectiles away.",
         "ru": "Конус ветра длиной 80 px: отбрасывает врагов на 64 px и отворачивает вражеские снаряды."
        },
        "icon": "assets/icons/fa_gust.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "15",
          "vanilla": "5 (LIGHT_BULLET)"
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "1",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "1–4",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "150",
          "vanilla": null
         }
        ],
        "body": {
         "en": "A cone of wind 80 px long: shoves enemies back 64 px and turns enemy projectiles away. No damage.",
         "ru": "Конус ветра длиной 80 px: отбрасывает врагов на 64 px и отворачивает вражеские снаряды. Урона нет."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "tools",
         "projectile",
         "power-1",
         "common"
        ],
        "children": []
       },
       {
        "id": "spells.tools.fa_snare",
        "kind": "spell",
        "title": {
         "en": "Snare",
         "ru": "Капкан"
        },
        "summary": {
         "en": "A trap that falls to the ground and waits 30 seconds.",
         "ru": "Капкан падает на землю и ждёт 30 секунд."
        },
        "icon": "assets/icons/fa_snare.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "30",
          "vanilla": "20 (MINE)"
         },
         {
          "key": "uses",
          "label": {
           "en": "Uses",
           "ru": "Заряды"
          },
          "value": "15",
          "vanilla": "15 (MINE)"
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "1",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "1–4",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "150",
          "vanilla": null
         }
        ],
        "body": {
         "en": "A trap that falls to the ground and waits 30 seconds. The first enemy to step on it takes 15 damage and cannot move for 3 seconds.",
         "ru": "Капкан падает на землю и ждёт 30 секунд. Первый наступивший враг получает 15 урона и 3 секунды не может двигаться."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "tools",
         "static_projectile",
         "power-1",
         "common"
        ],
        "children": []
       },
       {
        "id": "spells.tools.fa_recall",
        "kind": "spell",
        "title": {
         "en": "Recall",
         "ru": "Возврат"
        },
        "summary": {
         "en": "The first cast marks your place.",
         "ru": "Первый залп отмечает ваше место."
        },
        "icon": "assets/icons/fa_recall.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "40",
          "vanilla": "40 (TELEPORT_PROJECTILE_STATIC)"
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "2–5",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "240",
          "vanilla": null
         }
        ],
        "body": {
         "en": "The first cast marks your place. The second cast teleports you back to the mark and clears it. The mark is visible.",
         "ru": "Первый залп отмечает ваше место. Второй телепортирует вас обратно к метке и стирает её. Метка видна."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "tools",
         "utility",
         "power-2",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.tools.fa_barrier",
        "kind": "spell",
        "title": {
         "en": "Barrier",
         "ru": "Барьер"
        },
        "summary": {
         "en": "A wall of force 40 px tall for 4 seconds: stops enemy projectiles, lets yours through, blocks nobody's movement.",
         "ru": "Стена силы высотой 40 px на 4 секунды: останавливает вражеские снаряды, ваши пропускает, никому не мешает идти."
        },
        "icon": "assets/icons/fa_barrier.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "50",
          "vanilla": null
         },
         {
          "key": "uses",
          "label": {
           "en": "Uses",
           "ru": "Заряды"
          },
          "value": "10",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "2–5",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "240",
          "vanilla": null
         }
        ],
        "body": {
         "en": "A wall of force 40 px tall for 4 seconds: stops enemy projectiles, lets yours through, blocks nobody's movement.",
         "ru": "Стена силы высотой 40 px на 4 секунды: останавливает вражеские снаряды, ваши пропускает, никому не мешает идти."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "tools",
         "static_projectile",
         "power-2",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.tools.fa_parry",
        "kind": "spell",
        "title": {
         "en": "Parry",
         "ru": "Парирование"
        },
        "summary": {
         "en": "For 0.3 seconds enemy projectiles within 24 px of you are thrown back at full damage.",
         "ru": "На 0.3 секунды вражеские снаряды в 24 px от вас отбрасываются назад с полным уроном."
        },
        "icon": "assets/icons/fa_parry.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "25",
          "vanilla": null
         },
         {
          "key": "delay",
          "label": {
           "en": "Cast delay, frames",
           "ru": "Задержка выстрела, кадры"
          },
          "value": "+40",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "2–5",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "240",
          "vanilla": null
         }
        ],
        "body": {
         "en": "For 0.3 seconds enemy projectiles within 24 px of you are thrown back at full damage. Cast delay +40.",
         "ru": "На 0.3 секунды вражеские снаряды в 24 px от вас отбрасываются назад с полным уроном. Задержка выстрела +40."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "tools",
         "static_projectile",
         "power-2",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.tools.fa_alternate",
        "kind": "spell",
        "title": {
         "en": "Alternate",
         "ru": "Чередование"
        },
        "summary": {
         "en": "Takes the next two spells: casts the first on odd uses and the second on even uses.",
         "ru": "Берёт следующие два заклинания: на нечётных применениях колдует первое, на чётных второе."
        },
        "icon": "assets/icons/fa_alternate.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "3–6",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "300",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Takes the next two spells: casts the first on odd uses and the second on even uses. The other one is skipped without being cast.",
         "ru": "Берёт следующие два заклинания: на нечётных применениях колдует первое, на чётных второе. Другое пропускается без каста."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "tools",
         "other",
         "power-3",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.tools.fa_decoy",
        "kind": "spell",
        "title": {
         "en": "Decoy",
         "ru": "Приманка"
        },
        "summary": {
         "en": "A decoy with 50 hp stands next to you for 6 seconds.",
         "ru": "Приманка с 50 здоровья стоит рядом с вами 6 секунд."
        },
        "icon": "assets/icons/fa_decoy.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "60",
          "vanilla": "60 (DECOY)"
         },
         {
          "key": "uses",
          "label": {
           "en": "Uses",
           "ru": "Заряды"
          },
          "value": "8",
          "vanilla": "10 (DECOY)"
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "2–5",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "240",
          "vanilla": null
         }
        ],
        "body": {
         "en": "A decoy with 50 hp stands next to you for 6 seconds. Enemies that see it attack it instead of you.",
         "ru": "Приманка с 50 здоровья стоит рядом с вами 6 секунд. Враги, которые её видят, атакуют её вместо вас."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "tools",
         "static_projectile",
         "power-2",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.tools.fa_orbit_blade",
        "kind": "spell",
        "title": {
         "en": "Orbit Blade",
         "ru": "Вращающийся клинок"
        },
        "summary": {
         "en": "A blade circles you at 30 px for 8 seconds.",
         "ru": "Клинок кружит вокруг вас на расстоянии 30 px 8 секунд."
        },
        "icon": "assets/icons/fa_orbit_blade.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "45",
          "vanilla": "30 (BERSERK_FIELD)"
         },
         {
          "key": "damage",
          "label": {
           "en": "Damage (base hit)",
           "ru": "Урон (базовый удар)"
          },
          "value": "6",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "2–5",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "240",
          "vanilla": null
         }
        ],
        "body": {
         "en": "A blade circles you at 30 px for 8 seconds. It deals 6 slice damage, once per enemy per turn. Casting the same card again only renews its blade.",
         "ru": "Клинок кружит вокруг вас на расстоянии 30 px 8 секунд. Наносит 6 урона режущего, один раз по врагу за оборот. Повторный залп той же карты лишь обновляет её клинок."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "tools",
         "static_projectile",
         "power-2",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.tools.fa_reload_guard",
        "kind": "spell",
        "title": {
         "en": "Reload Guard",
         "ru": "Щит перезарядки"
        },
        "summary": {
         "en": "While the wand recharges for 30 frames or more, a frontal energy shield is up.",
         "ru": "Пока палочка перезаряжается 30 кадров и дольше, спереди стоит энергетический щит."
        },
        "icon": "assets/icons/fa_reload_guard.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "0",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "2–5",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "240",
          "vanilla": null
         }
        ],
        "body": {
         "en": "While the wand recharges for 30 frames or more, a frontal energy shield is up. Works only while the wand is held.",
         "ru": "Пока палочка перезаряжается 30 кадров и дольше, спереди стоит энергетический щит. Работает только в руке."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "tools",
         "passive",
         "power-2",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.tools.fa_battery",
        "kind": "spell",
        "title": {
         "en": "Battery",
         "ru": "Батарея"
        },
        "summary": {
         "en": "While the wand has not fired for 1 second, its mana charges 30% faster.",
         "ru": "Пока палочка не стреляла 1 секунду, мана восстанавливается на 30% быстрее."
        },
        "icon": "assets/icons/fa_battery.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "0",
          "vanilla": "0 (TORCH)"
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "2–5",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "200",
          "vanilla": null
         }
        ],
        "body": {
         "en": "While the wand has not fired for 1 second, its mana charges 30% faster. Works only while the wand is held.",
         "ru": "Пока палочка не стреляла 1 секунду, мана восстанавливается на 30% быстрее. Работает только в руке."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "tools",
         "passive",
         "power-2",
         "common"
        ],
        "children": []
       },
       {
        "id": "spells.tools.fa_overcharge",
        "kind": "spell",
        "title": {
         "en": "Overcharge",
         "ru": "Перегрузка"
        },
        "summary": {
         "en": "Needs 40 or more mana in the wand and spends all of it: the next projectile gets +1 damage per 4 mana spent, up to +60.",
         "ru": "Нужно не меньше 40 маны в жезле, тратит всю: следующий снаряд получает +1 урона за каждые 4 маны, до +60."
        },
        "icon": "assets/icons/fa_overcharge.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "0",
          "vanilla": "5 (DAMAGE)"
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "4",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "4–6",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "450",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Needs 40 or more mana in the wand and spends all of it: the next projectile gets +1 damage per 4 mana spent, up to +60. With less mana it adds nothing and spends nothing.",
         "ru": "Нужно не меньше 40 маны в жезле, тратит всю: следующий снаряд получает +1 урона за каждые 4 маны, до +60. При меньшем запасе ничего не добавляет и ничего не тратит."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "tools",
         "modifier",
         "power-4",
         "rare"
        ],
        "children": []
       },
       {
        "id": "spells.tools.fa_twin_delay",
        "kind": "spell",
        "title": {
         "en": "Twin Delay",
         "ru": "Отложенный двойник"
        },
        "summary": {
         "en": "The next projectile is fired as usual.",
         "ru": "Следующий снаряд летит как обычно."
        },
        "icon": "assets/icons/fa_twin_delay.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "20",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "4",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "4–6",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "450",
          "vanilla": null
         }
        ],
        "body": {
         "en": "The next projectile is fired as usual. 24 frames later a copy of it with 50% damage is shot from the wand toward where you aim then. The copy costs no mana.",
         "ru": "Следующий снаряд летит как обычно. Через 24 кадра из жезла в сторону, куда вы целитесь в тот момент, вылетает его копия с 50% урона. Копия не стоит маны."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "tools",
         "modifier",
         "power-4",
         "rare"
        ],
        "children": []
       },
       {
        "id": "spells.tools.fa_prism",
        "kind": "spell",
        "title": {
         "en": "Prism",
         "ru": "Призма"
        },
        "summary": {
         "en": "A prism hangs in front of you for 10 seconds.",
         "ru": "Призма висит перед вами 10 секунд."
        },
        "icon": "assets/icons/fa_prism.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "80",
          "vanilla": null
         },
         {
          "key": "uses",
          "label": {
           "en": "Uses",
           "ru": "Заряды"
          },
          "value": "10",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "5",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "5–6",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "525",
          "vanilla": null
         }
        ],
        "body": {
         "en": "A prism hangs in front of you for 10 seconds. Each of your projectiles that passes through it once becomes 3 projectiles with 50% damage each, in a 20 degree fan. Enemy projectiles are not split.",
         "ru": "Призма висит перед вами 10 секунд. Каждый ваш снаряд, пролетевший через неё, один раз превращается в 3 снаряда по 50% урона в веере 20 градусов. Вражеские снаряды не делятся."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "tools",
         "static_projectile",
         "power-5",
         "rare"
        ],
        "children": []
       },
       {
        "id": "spells.tools.fa_alt_cast",
        "kind": "spell",
        "title": {
         "en": "Alt Cast",
         "ru": "Второй залп"
        },
        "summary": {
         "en": "While this wand is held, the right mouse button casts the spell to the right of this card for 1.5 times its mana, taken from the wand.",
         "ru": "Пока этот жезл в руке, правая кнопка мыши колдует заклинание справа от этой карты за 1,5 его маны, которая берётся из жезла."
        },
        "icon": "assets/icons/fa_alt_cast.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "0",
          "vanilla": "0 (TORCH)"
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "3–6",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "375",
          "vanilla": null
         }
        ],
        "body": {
         "en": "While this wand is held, the right mouse button casts the spell to the right of this card for 1.5 times its mana, taken from the wand. At most once per 0.8 seconds. Nothing to the right, or not enough mana: nothing happens.",
         "ru": "Пока этот жезл в руке, правая кнопка мыши колдует заклинание справа от этой карты за 1,5 его маны, которая берётся из жезла. Не чаще раза в 0,8 секунды. Справа ничего нет или маны не хватает: ничего не происходит."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "tools",
         "passive",
         "power-3",
         "rare"
        ],
        "children": []
       }
      ]
     },
     {
      "id": "spells.held",
      "kind": "branch",
      "title": {
       "en": "Held spells",
       "ru": "Удерживаемые"
      },
      "summary": {
       "en": "Cards for the hold-to-use style (setting `held_on`): hold the fire button to charge a shot or channel a beam, release to shoot.",
       "ru": "Карты для стиля «зажать и держать» (настройка `held_on`): держите кнопку огня, чтобы зарядить выстрел или вести луч, отпустите, чтобы выстрелить."
      },
      "icon": null,
      "stats": [],
      "body": {
       "en": "Cards for the hold-to-use style (setting `held_on`): hold the fire button to charge a shot or channel a beam, release to shoot. While you hold, nothing else is cast and the card keeps its place in the deck; the next press casts the next card. Modifiers placed before the card apply to the shot.",
       "ru": "Карты для стиля «зажать и держать» (настройка `held_on`): держите кнопку огня, чтобы зарядить выстрел или вести луч, отпустите, чтобы выстрелить. Пока вы держите, ничего больше не кастуется, а карта остаётся на своём месте в колоде; следующее нажатие кастует следующую карту. Модификаторы перед картой действуют на выстрел."
      },
      "recipe": null,
      "reactions": null,
      "tags": [
       "held"
      ],
      "children": [
       {
        "id": "spells.held.fa_charge_bolt",
        "kind": "spell",
        "title": {
         "en": "Charge Bolt",
         "ru": "Заряжаемая молния"
        },
        "summary": {
         "en": "Hold fire to charge (full in 1.5 s, 0.8 mana per frame, 12 more to begin); release to shoot ONE bolt: 7 damage at a tap up to 56 when full, faster the longer it charged.",
         "ru": "Зажмите огонь, чтобы зарядить (полный заряд за 1,5 с, 0,8 маны за кадр, ещё 12 за начало); отпустите, чтобы выстрелить ОДНОЙ молнией: 7 урона при касании, до 56 при полном заряде, и чем дольше заряд, тем она быстрее."
        },
        "icon": "assets/icons/fa_charge_bolt.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "2.4",
          "vanilla": "5 (LIGHT_BULLET)"
         },
         {
          "key": "charge_damage",
          "label": {
           "en": "Damage, tap → full charge",
           "ru": "Урон, касание → полный заряд"
          },
          "value": "7 → 56",
          "vanilla": null
         },
         {
          "key": "charge_time",
          "label": {
           "en": "Full charge, frames",
           "ru": "Полный заряд, кадры"
          },
          "value": "90",
          "vanilla": null
         },
         {
          "key": "tick",
          "label": {
           "en": "Tick, frames",
           "ru": "Такт, кадры"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "3–6",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "300",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Hold fire to charge (full in 1.5 s, 0.8 mana per frame, 12 more to begin); release to shoot ONE bolt: 7 damage at a tap up to 56 when full, faster the longer it charged. Modifiers before it (damage, speed, homing...) apply to the shot. The card holds its place while you hold; the next press casts the next card.",
         "ru": "Зажмите огонь, чтобы зарядить (полный заряд за 1,5 с, 0,8 маны за кадр, ещё 12 за начало); отпустите, чтобы выстрелить ОДНОЙ молнией: 7 урона при касании, до 56 при полном заряде, и чем дольше заряд, тем она быстрее. Модификаторы перед картой (урон, скорость, самонаведение...) действуют на выстрел. Пока вы держите, карта остаётся на месте; следующее нажатие кастует следующую карту."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "held",
         "projectile",
         "power-3",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.held.fa_prism_ray",
        "kind": "spell",
        "title": {
         "en": "Prism Ray",
         "ru": "Луч призмы"
        },
        "summary": {
         "en": "Hold fire: a bright beam segment (2.5 damage, about 250 px) every 3 frames for 18 mana each, until you release or the mana runs out (a few seconds on a normal wand).",
         "ru": "Зажмите огонь: каждые 3 кадра вылетает яркий отрезок луча (2,5 урона, около 250 px) за 18 маны, пока вы не отпустите или не кончится мана (несколько секунд на обычной палочке)."
        },
        "icon": "assets/icons/fa_prism_ray.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "18",
          "vanilla": "5 (LIGHT_BULLET)"
         },
         {
          "key": "damage",
          "label": {
           "en": "Damage (base hit)",
           "ru": "Урон (базовый удар)"
          },
          "value": "2.5",
          "vanilla": "3 (LIGHT_BULLET)"
         },
         {
          "key": "tick",
          "label": {
           "en": "Tick, frames",
           "ru": "Такт, кадры"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "4",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "4–6",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "450",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Hold fire: a bright beam segment (2.5 damage, about 250 px) every 3 frames for 18 mana each, until you release or the mana runs out (a few seconds on a normal wand). The card holds its place while you hold; the next press casts the next card.",
         "ru": "Зажмите огонь: каждые 3 кадра вылетает яркий отрезок луча (2,5 урона, около 250 px) за 18 маны, пока вы не отпустите или не кончится мана (несколько секунд на обычной палочке). Пока вы держите, карта остаётся на месте; следующее нажатие кастует следующую карту."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "held",
         "projectile",
         "power-4",
         "rare"
        ],
        "children": []
       },
       {
        "id": "spells.held.fa_overcharge_shot",
        "kind": "spell",
        "title": {
         "en": "Overcharge Shot",
         "ru": "Перезаряд-выстрел"
        },
        "summary": {
         "en": "Hold fire to charge, 1 mana per frame.",
         "ru": "Зажмите огонь, чтобы зарядить, 1 мана за кадр."
        },
        "icon": "assets/icons/fa_overcharge_shot.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "charge_damage",
          "label": {
           "en": "Damage, tap → full charge",
           "ru": "Урон, касание → полный заряд"
          },
          "value": "4 → 18",
          "vanilla": null
         },
         {
          "key": "charge_time",
          "label": {
           "en": "Full charge, frames",
           "ru": "Полный заряд, кадры"
          },
          "value": "90",
          "vanilla": null
         },
         {
          "key": "tick",
          "label": {
           "en": "Tick, frames",
           "ru": "Такт, кадры"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "4",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "4–6",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "450",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Hold fire to charge, 1 mana per frame. Past 1.5 s the shot keeps growing: x6 damage at 2.25 s, but the wand shakes more every frame (the aim scatters). At 2.5 s it misfires: a small blast in your hands costs 10 hp and the charge is lost. Release in time: 4 damage at a tap, 18 at 1.5 s, 108 at 2.25 s.",
         "ru": "Зажмите огонь, чтобы зарядить, 1 мана за кадр. После 1,5 с выстрел продолжает расти: урон x6 к 2,25 с, но палочка трясётся всё сильнее (прицел разбрасывает). На 2,5 с она даёт осечку: небольшой взрыв в руках отнимает 10 здоровья, заряд пропадает. Отпустите вовремя: 4 урона при касании, 18 при 1,5 с, 108 при 2,25 с."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "held",
         "projectile",
         "power-4",
         "rare"
        ],
        "children": []
       },
       {
        "id": "spells.held.fa_beam_drill",
        "kind": "spell",
        "title": {
         "en": "Beam Drill",
         "ru": "Лучевой бур"
        },
        "summary": {
         "en": "Hold fire: a short beam (60 px) every 3 frames digs a hole in ground of vanilla DIG strength (soil, rock, sand; the Holy Mountain's walls stay) and hurts an enemy for 1.",
         "ru": "Зажмите огонь: каждые 3 кадра короткий луч (60 px) выбивает ямку в грунте силы ванильного DIG (земля, камень, песок; стены Святой горы остаются) и бьёт врага на 1."
        },
        "icon": "assets/icons/fa_beam_drill.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "damage",
          "label": {
           "en": "Damage (base hit)",
           "ru": "Урон (базовый удар)"
          },
          "value": "1",
          "vanilla": null
         },
         {
          "key": "tick",
          "label": {
           "en": "Tick, frames",
           "ru": "Такт, кадры"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "2–5",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "240",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Hold fire: a short beam (60 px) every 3 frames digs a hole in ground of vanilla DIG strength (soil, rock, sand; the Holy Mountain's walls stay) and hurts an enemy for 1. 2 mana a tick. The card holds its place while you hold.",
         "ru": "Зажмите огонь: каждые 3 кадра короткий луч (60 px) выбивает ямку в грунте силы ванильного DIG (земля, камень, песок; стены Святой горы остаются) и бьёт врага на 1. 2 маны за тик. Пока вы держите, карта остаётся на месте."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "held",
         "projectile",
         "power-2",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.held.fa_siphon_ray",
        "kind": "spell",
        "title": {
         "en": "Siphon Ray",
         "ru": "Луч вампира"
        },
        "summary": {
         "en": "Hold fire: a weak beam (2 damage, 180 px) every 6 frames for 5 mana.",
         "ru": "Зажмите огонь: каждые 6 кадров слабый луч (2 урона, 180 px) за 5 маны."
        },
        "icon": "assets/icons/fa_siphon_ray.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "5",
          "vanilla": null
         },
         {
          "key": "damage",
          "label": {
           "en": "Damage (base hit)",
           "ru": "Урон (базовый удар)"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "tick",
          "label": {
           "en": "Tick, frames",
           "ru": "Такт, кадры"
          },
          "value": "6",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "3–6",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "300",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Hold fire: a weak beam (2 damage, 180 px) every 6 frames for 5 mana. Every 10th tick that hits an enemy gives you 1 hp. Misses give nothing. The card holds its place while you hold.",
         "ru": "Зажмите огонь: каждые 6 кадров слабый луч (2 урона, 180 px) за 5 маны. Каждый 10-й тик, попавший во врага, возвращает вам 1 здоровье. Промахи ничего не дают. Пока вы держите, карта остаётся на месте."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "held",
         "projectile",
         "power-3",
         "uncommon"
        ],
        "children": []
       },
       {
        "id": "spells.held.fa_charge_guard",
        "kind": "spell",
        "title": {
         "en": "Charge Guard",
         "ru": "Заряжаемый заслон"
        },
        "summary": {
         "en": "Hold fire: a shield arc in front of you (aim direction, 120 degrees) stops enemy projectiles, 1 mana per frame (6 more to begin).",
         "ru": "Зажмите огонь: дуга щита перед вами (в сторону прицела, 120 градусов) останавливает вражеские снаряды, 1 мана за кадр (ещё 6 за начало)."
        },
        "icon": "assets/icons/fa_charge_guard.png",
        "stats": [
         {
          "key": "mana",
          "label": {
           "en": "Mana",
           "ru": "Мана"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "tick",
          "label": {
           "en": "Tick, frames",
           "ru": "Такт, кадры"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "power",
          "label": {
           "en": "Power (1–6)",
           "ru": "Мощность (1–6)"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "levels",
          "label": {
           "en": "Appears at levels",
           "ru": "Встречается на уровнях"
          },
          "value": "3–6",
          "vanilla": null
         },
         {
          "key": "price",
          "label": {
           "en": "Shop price, gold",
           "ru": "Цена в магазине, золото"
          },
          "value": "300",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Hold fire: a shield arc in front of you (aim direction, 120 degrees) stops enemy projectiles, 1 mana per frame (6 more to begin). Release: enemies within 60 px are thrown away from you, no damage. Nothing is shot. The card holds its place while you hold.",
         "ru": "Зажмите огонь: дуга щита перед вами (в сторону прицела, 120 градусов) останавливает вражеские снаряды, 1 мана за кадр (ещё 6 за начало). Отпустите: враги в 60 px отлетают от вас, без урона. Ничего не стреляет. Пока вы держите, карта остаётся на месте."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "held",
         "projectile",
         "power-3",
         "uncommon"
        ],
        "children": []
       }
      ]
     }
    ]
   },
   {
    "id": "perks",
    "kind": "branch",
    "title": {
     "en": "Perks",
     "ru": "Перки"
    },
    "summary": {
     "en": "Perks of the mod appear among the perks offered in the Holy Mountain.",
     "ru": "Перки мода появляются среди перков, которые предлагает Святая гора."
    },
    "icon": null,
    "stats": [],
    "body": {
     "en": "Perks of the mod appear among the perks offered in the Holy Mountain. Ten are the mod's own; ten more come from the merged Immunity Compendium, each of them switched by a checkbox in the mod settings. None of them can be taken twice.",
     "ru": "Перки мода появляются среди перков, которые предлагает Святая гора. Десять из них собственные; ещё десять пришли из влитого Immunity Compendium, и каждый включается галочкой в настройках мода. Ни один нельзя взять дважды."
    },
    "recipe": null,
    "reactions": null,
    "tags": [
     "perks"
    ],
    "children": [
     {
      "id": "perks.core",
      "kind": "branch",
      "title": {
       "en": "Mod perks",
       "ru": "Перки мода"
      },
      "summary": {
       "en": "The mod's own ten perks.",
       "ru": "Десять собственных перков мода."
      },
      "icon": null,
      "stats": [],
      "body": {
       "en": "The mod's own ten perks. They are flagged by the engine on pickup and their effects live in the player or in the gun state.",
       "ru": "Десять собственных перков мода. Движок отмечает их при взятии, а действие живёт в игроке или в состоянии палочки."
      },
      "recipe": null,
      "reactions": null,
      "tags": [
       "perks_a"
      ],
      "children": [
       {
        "id": "perks.core.fa_kill_battery",
        "kind": "perk",
        "title": {
         "en": "Kill Battery",
         "ru": "Боевая батарея"
        },
        "summary": {
         "en": "Each enemy you kill returns 15 mana to the wand in your hand, never above its maximum.",
         "ru": "Каждый убитый вами враг возвращает 15 маны жезлу в вашей руке, но не выше его максимума."
        },
        "icon": "assets/icons/fa_kill_battery.png",
        "stats": [],
        "body": {
         "en": "Each enemy you kill returns 15 mana to the wand in your hand, never above its maximum.",
         "ru": "Каждый убитый вами враг возвращает 15 маны жезлу в вашей руке, но не выше его максимума."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "mod-perk",
         "perks_a"
        ],
        "children": []
       },
       {
        "id": "perks.core.fa_safe_hands",
        "kind": "perk",
        "title": {
         "en": "Safe Hands",
         "ru": "Надёжные руки"
        },
        "summary": {
         "en": "Your own spells deal 50% less damage to you.",
         "ru": "Ваши собственные заклинания наносят вам на 50% меньше урона."
        },
        "icon": "assets/icons/fa_safe_hands.png",
        "stats": [],
        "body": {
         "en": "Your own spells deal 50% less damage to you. Damage from enemies and the world is unchanged.",
         "ru": "Ваши собственные заклинания наносят вам на 50% меньше урона. Урон от врагов и мира не меняется."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "mod-perk",
         "perks_a"
        ],
        "children": []
       },
       {
        "id": "perks.core.fa_adrenaline",
        "kind": "perk",
        "title": {
         "en": "Adrenaline",
         "ru": "Адреналин"
        },
        "summary": {
         "en": "Each enemy you kill gives +4% move speed and +4% fire rate for 5 seconds.",
         "ru": "Каждый убитый вами враг даёт +4% к скорости бега и +4% к скорострельности на 5 секунд."
        },
        "icon": "assets/icons/fa_adrenaline.png",
        "stats": [],
        "body": {
         "en": "Each enemy you kill gives +4% move speed and +4% fire rate for 5 seconds. Up to 5 stacks, each one runs out on its own.",
         "ru": "Каждый убитый вами враг даёт +4% к скорости бега и +4% к скорострельности на 5 секунд. До 5 слоёв, каждый кончается сам по себе."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "mod-perk",
         "perks_a"
        ],
        "children": []
       },
       {
        "id": "perks.core.fa_collector",
        "kind": "perk",
        "title": {
         "en": "Collector",
         "ru": "Коллекционер"
        },
        "summary": {
         "en": "+3% damage for every different spell on the wand in your hand, at most +30%.",
         "ru": "+3% к урону за каждое разное заклинание на жезле в вашей руке, не больше +30%."
        },
        "icon": "assets/icons/fa_collector.png",
        "stats": [],
        "body": {
         "en": "+3% damage for every different spell on the wand in your hand, at most +30%.",
         "ru": "+3% к урону за каждое разное заклинание на жезле в вашей руке, не больше +30%."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "mod-perk",
         "perks_a"
        ],
        "children": []
       },
       {
        "id": "perks.core.fa_curiosity",
        "kind": "perk",
        "title": {
         "en": "Curiosity",
         "ru": "Любопытство"
        },
        "summary": {
         "en": "The first time you cast each different spell in a run: +2 max health and +2 health.",
         "ru": "Первый раз, когда вы колдуете каждое разное заклинание за забег: +2 к максимуму здоровья и +2 здоровья."
        },
        "icon": "assets/icons/fa_curiosity.png",
        "stats": [],
        "body": {
         "en": "The first time you cast each different spell in a run: +2 max health and +2 health. At most +150 in total.",
         "ru": "Первый раз, когда вы колдуете каждое разное заклинание за забег: +2 к максимуму здоровья и +2 здоровья. Всего не больше +150."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "mod-perk",
         "perks_a"
        ],
        "children": []
       },
       {
        "id": "perks.core.fa_appraiser",
        "kind": "perk",
        "title": {
         "en": "Appraiser",
         "ru": "Оценщик"
        },
        "summary": {
         "en": "Spells and wands for sale in shops cost 25% less.",
         "ru": "Заклинания и жезлы в магазинах стоят на 25% дешевле."
        },
        "icon": "assets/icons/fa_appraiser.png",
        "stats": [],
        "body": {
         "en": "Spells and wands for sale in shops cost 25% less. Items already on a shelf are marked down too, once.",
         "ru": "Заклинания и жезлы в магазинах стоят на 25% дешевле. Товары, уже лежащие на полках, тоже дешевеют, один раз."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "mod-perk",
         "perks_a"
        ],
        "children": []
       },
       {
        "id": "perks.core.fa_spare_pocket",
        "kind": "perk",
        "title": {
         "en": "Spare Pocket",
         "ru": "Запасной карман"
        },
        "summary": {
         "en": "Every wand you pick up gets +1 capacity, once per wand.",
         "ru": "Каждый подобранный вами жезл получает +1 к вместимости, один раз на жезл."
        },
        "icon": "assets/icons/fa_spare_pocket.png",
        "stats": [],
        "body": {
         "en": "Every wand you pick up gets +1 capacity, once per wand. Wands you already hold get it when you take this perk.",
         "ru": "Каждый подобранный вами жезл получает +1 к вместимости, один раз на жезл. Жезлы, которые у вас уже есть, получают его при взятии перка."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "mod-perk",
         "perks_a"
        ],
        "children": []
       },
       {
        "id": "perks.core.fa_scavenger",
        "kind": "perk",
        "title": {
         "en": "Scavenger",
         "ru": "Мусорщик"
        },
        "summary": {
         "en": "10% of the enemies you kill drop a spell card from this mod's spells with 1-3 uses left, suited to the depth.",
         "ru": "10% убитых вами врагов роняют карту заклинания из заклинаний этого мода, с 1-3 оставшимися зарядами, по глубине."
        },
        "icon": "assets/icons/fa_scavenger.png",
        "stats": [],
        "body": {
         "en": "10% of the enemies you kill drop a spell card from this mod's spells with 1-3 uses left, suited to the depth.",
         "ru": "10% убитых вами врагов роняют карту заклинания из заклинаний этого мода, с 1-3 оставшимися зарядами, по глубине."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "mod-perk",
         "perks_a"
        ],
        "children": []
       },
       {
        "id": "perks.core.fa_gambler",
        "kind": "perk",
        "title": {
         "en": "Gambler",
         "ru": "Азартный игрок"
        },
        "summary": {
         "en": "Once per Holy Mountain a button appears near the shop.",
         "ru": "Один раз за Святую Гору рядом с магазином появляется кнопка."
        },
        "icon": "assets/icons/fa_gambler.png",
        "stats": [],
        "body": {
         "en": "Once per Holy Mountain a button appears near the shop. Press it and every spell card in the shop is replaced by a new one of the same level. Wands stay.",
         "ru": "Один раз за Святую Гору рядом с магазином появляется кнопка. Нажмите её, и каждая карта заклинания в магазине заменится новой того же уровня. Жезлы остаются."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "mod-perk",
         "perks_a"
        ],
        "children": []
       },
       {
        "id": "perks.core.fa_thrift",
        "kind": "perk",
        "title": {
         "en": "Thrift",
         "ru": "Бережливость"
        },
        "summary": {
         "en": "Each time you cast a spell with limited uses, there is a 25% chance that it does not lose a use.",
         "ru": "Каждый раз, когда вы колдуете заклинание с ограниченным числом зарядов, с шансом 25% оно не тратит заряд."
        },
        "icon": "assets/icons/fa_thrift.png",
        "stats": [],
        "body": {
         "en": "Each time you cast a spell with limited uses, there is a 25% chance that it does not lose a use.",
         "ru": "Каждый раз, когда вы колдуете заклинание с ограниченным числом зарядов, с шансом 25% оно не тратит заряд."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "mod-perk",
         "perks_a"
        ],
        "children": []
       }
      ]
     },
     {
      "id": "perks.immunity",
      "kind": "branch",
      "title": {
       "en": "Immunity perks",
       "ru": "Перки-иммунитеты"
      },
      "summary": {
       "en": "Ten immunity perks from the merged Immunity Compendium.",
       "ru": "Десять перков-иммунитетов из влитого Immunity Compendium."
      },
      "icon": null,
      "stats": [],
      "body": {
       "en": "Ten immunity perks from the merged Immunity Compendium. A perk is in the pool only while its checkbox is on. On by default: Freeze, Curse, Earth, Plasma, Polymorph, Poison, Slice. Off by default: Acid, Lava, Projectile Resistance.",
       "ru": "Десять перков-иммунитетов из влитого Immunity Compendium. Перк есть в пуле, только пока включена его галочка. Включены по умолчанию: заморозка, проклятия, земля, плазма, превращение, яд, рубящий урон. Выключены по умолчанию: кислота, лава, сопротивление снарядам."
      },
      "recipe": null,
      "reactions": null,
      "tags": [
       "immunity"
      ],
      "children": [
       {
        "id": "perks.immunity.fa_acid_immunity",
        "kind": "perk",
        "title": {
         "en": "Acid Immunity",
         "ru": "Иммунитет к кислоте"
        },
        "summary": {
         "en": "Acid doesn't damage you.",
         "ru": "Кислота не наносит вам урона."
        },
        "icon": "assets/icons/fa_acid_immunity.png",
        "stats": [],
        "body": {
         "en": "Acid doesn't damage you.",
         "ru": "Кислота не наносит вам урона."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "immunity",
         "perks_immunity",
         "off-by-default"
        ],
        "children": []
       },
       {
        "id": "perks.immunity.fa_cold_immunity",
        "kind": "perk",
        "title": {
         "en": "Freeze Immunity",
         "ru": "Иммунитет к заморозке"
        },
        "summary": {
         "en": "You can't be frozen.",
         "ru": "Вас нельзя заморозить."
        },
        "icon": "assets/icons/protection_freeze.png",
        "stats": [],
        "body": {
         "en": "You can't be frozen.",
         "ru": "Вас нельзя заморозить."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "immunity",
         "perks_immunity",
         "in-pool-by-default"
        ],
        "children": []
       },
       {
        "id": "perks.immunity.fa_curse_immunity",
        "kind": "perk",
        "title": {
         "en": "Curse Immunity",
         "ru": "Иммунитет к проклятиям"
        },
        "summary": {
         "en": "You are immune to curse damage.",
         "ru": "Вы неуязвимы к урону от проклятий."
        },
        "icon": "assets/icons/fa_curse_immunity.png",
        "stats": [],
        "body": {
         "en": "You are immune to curse damage.",
         "ru": "Вы неуязвимы к урону от проклятий."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "immunity",
         "perks_immunity",
         "in-pool-by-default"
        ],
        "children": []
       },
       {
        "id": "perks.immunity.fa_earth_immunity",
        "kind": "perk",
        "title": {
         "en": "Earth Immunity",
         "ru": "Иммунитет к земле"
        },
        "summary": {
         "en": "You can't get crushed by physics objects.",
         "ru": "Физические объекты не могут вас раздавить."
        },
        "icon": "assets/icons/fa_earth_immunity.png",
        "stats": [],
        "body": {
         "en": "You can't get crushed by physics objects.",
         "ru": "Физические объекты не могут вас раздавить."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "immunity",
         "perks_immunity",
         "in-pool-by-default"
        ],
        "children": []
       },
       {
        "id": "perks.immunity.fa_lava_immunity",
        "kind": "perk",
        "title": {
         "en": "Lava Immunity",
         "ru": "Иммунитет к лаве"
        },
        "summary": {
         "en": "You are immune to lava.",
         "ru": "Вы неуязвимы к лаве."
        },
        "icon": "assets/icons/fa_lava_immunity.png",
        "stats": [],
        "body": {
         "en": "You are immune to lava.",
         "ru": "Вы неуязвимы к лаве."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "immunity",
         "perks_immunity",
         "off-by-default"
        ],
        "children": []
       },
       {
        "id": "perks.immunity.fa_plasma_immunity",
        "kind": "perk",
        "title": {
         "en": "Plasma Immunity",
         "ru": "Иммунитет к плазме"
        },
        "summary": {
         "en": "You are immune to plasma based spells.",
         "ru": "Вы неуязвимы к плазменным заклинаниям."
        },
        "icon": "assets/icons/fa_plasma_immunity.png",
        "stats": [],
        "body": {
         "en": "You are immune to plasma based spells.",
         "ru": "Вы неуязвимы к плазменным заклинаниям."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "immunity",
         "perks_immunity",
         "in-pool-by-default"
        ],
        "children": []
       },
       {
        "id": "perks.immunity.fa_poison_immunity",
        "kind": "perk",
        "title": {
         "en": "Poison Immunity",
         "ru": "Иммунитет к яду"
        },
        "summary": {
         "en": "The Poison effect and poisoned materials don't damage you.",
         "ru": "Эффект яда и ядовитые материалы не наносят вам урона."
        },
        "icon": "assets/icons/fa_poison_immunity.png",
        "stats": [],
        "body": {
         "en": "The Poison effect and poisoned materials don't damage you.",
         "ru": "Эффект яда и ядовитые материалы не наносят вам урона."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "immunity",
         "perks_immunity",
         "in-pool-by-default"
        ],
        "children": []
       },
       {
        "id": "perks.immunity.fa_polymorph_immunity",
        "kind": "perk",
        "title": {
         "en": "Polymorph Immunity",
         "ru": "Иммунитет к превращению"
        },
        "summary": {
         "en": "You can't be Polymorphed.",
         "ru": "Вас нельзя превратить в другое существо."
        },
        "icon": "assets/icons/fa_polymorph_immunity.png",
        "stats": [],
        "body": {
         "en": "You can't be Polymorphed.",
         "ru": "Вас нельзя превратить в другое существо."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "immunity",
         "perks_immunity",
         "in-pool-by-default"
        ],
        "children": []
       },
       {
        "id": "perks.immunity.fa_projectile_immunity",
        "kind": "perk",
        "title": {
         "en": "Projectile Resistance",
         "ru": "Сопротивление снарядам"
        },
        "summary": {
         "en": "You take less damage from projectiles.",
         "ru": "Вы получаете меньше урона от снарядов."
        },
        "icon": "assets/icons/fa_projectile_immunity.png",
        "stats": [],
        "body": {
         "en": "You take less damage from projectiles.",
         "ru": "Вы получаете меньше урона от снарядов."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "immunity",
         "perks_immunity",
         "off-by-default"
        ],
        "children": []
       },
       {
        "id": "perks.immunity.fa_slice_immunity",
        "kind": "perk",
        "title": {
         "en": "Slice Immunity",
         "ru": "Иммунитет к рубящему урону"
        },
        "summary": {
         "en": "You are immune to slice damage and disc projectiles no longer damage you.",
         "ru": "Вы неуязвимы к рубящему урону, и диски больше не ранят вас."
        },
        "icon": "assets/icons/fa_slice_immunity.png",
        "stats": [],
        "body": {
         "en": "You are immune to slice damage and disc projectiles no longer damage you. (Self damage bugged with omega sawblade + berserkium.)",
         "ru": "Вы неуязвимы к рубящему урону, и диски больше не ранят вас. (Урон по себе от омега-пилы вместе с берсеркием работает с ошибкой.)"
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "immunity",
         "perks_immunity",
         "in-pool-by-default"
        ],
        "children": []
       },
       {
        "id": "perks.immunity.vanilla_edits",
        "kind": "info",
        "title": {
         "en": "Changes to vanilla perks",
         "ru": "Изменения ванильных перков"
        },
        "summary": {
         "en": "The merged Immunity Compendium also edits five vanilla perks, each edit switched by its own checkbox.",
         "ru": "Влитый Immunity Compendium также правит пять ванильных перков, каждая правка включается своей галочкой."
        },
        "icon": null,
        "stats": [],
        "body": {
         "en": "The merged Immunity Compendium also edits five vanilla perks, each edit switched by its own checkbox.\n\nOn by default: Fire Immunity also removes lava damage; Toxic Immunity also removes acid damage; Slime Blood makes you immune to glue and cuts projectile damage by 25% (instead of the fixed 25% of vanilla, now adjustable).\n\nOff by default: Oil Blood and lava; Gas Blood and acid; Toxic Immunity and poison; Gas Blood and poison; Slime Blood and poison.",
         "ru": "Влитый Immunity Compendium также правит пять ванильных перков, каждая правка включается своей галочкой.\n\nВключены по умолчанию: Иммунитет к огню также убирает урон от лавы; Токсичный иммунитет также убирает урон от кислоты; Слизистая кровь даёт иммунитет к клею и снижает урон от снарядов на 25% (в ваниле число фиксированное, здесь настраивается).\n\nВыключены по умолчанию: Нефтяная кровь и лава; Газовая кровь и кислота; Токсичный иммунитет и яд; Газовая кровь и яд; Слизистая кровь и яд."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "immunity"
        ],
        "children": []
       }
      ]
     }
    ]
   },
   {
    "id": "alchemy",
    "kind": "branch",
    "title": {
     "en": "Alchemy",
     "ru": "Алхимия"
    },
    "summary": {
     "en": "Brew tinctures at a cauldron in the Holy Mountain: pour two different liquids from your flasks into it and, if the pair is a recipe of this run, a tincture appears.",
     "ru": "Варите настойки у котла в Святой горе: вылейте в него две разные жидкости из своих флаконов, и если пара является рецептом этого забега, появится настойка."
    },
    "icon": "assets/icons/fa_cauldron.png",
    "stats": [],
    "body": {
     "en": "Brew tinctures at a cauldron in the Holy Mountain: pour two different liquids from your flasks into it and, if the pair is a recipe of this run, a tincture appears. A tincture is a small timed buff that you drink by holding it and clicking. Recipes are different in every run, so you find them out by trying or by picking up recipe notes.",
     "ru": "Варите настойки у котла в Святой горе: вылейте в него две разные жидкости из своих флаконов, и если пара является рецептом этого забега, появится настойка. Настойка это небольшой временный бонус: возьмите её в руку и кликните, чтобы выпить. Рецепты в каждом забеге разные, их узнают пробами или находя записки с рецептами."
    },
    "recipe": null,
    "reactions": null,
    "tags": [
     "alchemy"
    ],
    "children": [
     {
      "id": "alchemy.cauldron",
      "kind": "place",
      "title": {
       "en": "Cauldron",
       "ru": "Котёл"
      },
      "summary": {
       "en": "Two flasks of different liquids (500+ cells, 8 kinds) brew a tincture",
       "ru": "Две склянки разных жидкостей (500+ клеток, видов: 8) дают настойку"
      },
      "icon": "assets/icons/fa_cauldron.png",
      "stats": [
       {
        "key": "min_cells",
        "label": {
         "en": "Cells of one liquid in a flask",
         "ru": "Клеток одной жидкости во флаконе"
        },
        "value": "500+",
        "vanilla": null
       },
       {
        "key": "ingredients",
        "label": {
         "en": "Liquids that count as ingredients",
         "ru": "Жидкостей-ингредиентов"
        },
        "value": "8",
        "vanilla": null
       },
       {
        "key": "pairs",
        "label": {
         "en": "Possible pairs of two different liquids",
         "ru": "Возможных пар разных жидкостей"
        },
        "value": "28",
        "vanilla": null
       },
       {
        "key": "recipes",
        "label": {
         "en": "Pairs that make a tincture (per run)",
         "ru": "Пар, дающих настойку (за забег)"
        },
        "value": "10",
        "vanilla": null
       }
      ],
      "body": {
       "en": "A cauldron stands in every Holy Mountain with a shop, next to the exchanger. Hold a flask and press the interact key on it.\n\n**First flask:** it needs 500 or more cells of ONE of the 8 liquids that count as ingredients. The flask is emptied (it stays in your hands), and the cauldron remembers the liquid and shows it above itself. **Second flask:** if the two liquids are a recipe of this run, a tincture appears on the cauldron. If not, there is a puff of smoke, the mixture is ruined and both liquids are lost. Nothing is ever poured into the world.\n\nThe cauldron also lists the recipes you already know. Any two different liquids of the ingredient pool can be a recipe, but only 10 of the 28 pairs are.",
       "ru": "Котёл стоит в каждой Святой горе с магазином, рядом с обменником. Возьмите флакон и нажмите на нём клавишу взаимодействия.\n\n**Первый флакон:** нужно 500 или больше клеток ОДНОЙ из 8 жидкостей-ингредиентов. Флакон опустошается (остаётся у вас в руках), а котёл запоминает жидкость и показывает её над собой. **Второй флакон:** если две жидкости составляют рецепт этого забега, на котле появляется настойка. Если нет, вырывается дымок, смесь испорчена и обе жидкости потеряны. В мир ничего не выливается.\n\nКотёл также перечисляет уже известные вам рецепты. Рецептом может быть любая пара разных жидкостей из пула ингредиентов, но рецептов только 10 из 28 пар."
      },
      "recipe": {
       "inputs": [
        {
         "title": {
          "en": "Water",
          "ru": "Вода"
         },
         "icon": null
        },
        {
         "title": {
          "en": "Oil",
          "ru": "Нефть"
         },
         "icon": null
        },
        {
         "title": {
          "en": "Blood",
          "ru": "Кровь"
         },
         "icon": null
        },
        {
         "title": {
          "en": "Whiskey",
          "ru": "Виски"
         },
         "icon": null
        },
        {
         "title": {
          "en": "Slime",
          "ru": "Слизь"
         },
         "icon": null
        },
        {
         "title": {
          "en": "Lava",
          "ru": "Лава"
         },
         "icon": null
        },
        {
         "title": {
          "en": "Toxic sludge",
          "ru": "Радиоактивное вещество"
         },
         "icon": null
        },
        {
         "title": {
          "en": "Acid",
          "ru": "Кислота"
         },
         "icon": null
        }
       ],
       "result": {
        "title": {
         "en": "A tincture (one of 10)",
         "ru": "Настойка (одна из 10)"
        },
        "icon": "assets/icons/fa_tincture_ui.png"
       },
       "note": {
        "en": "Recipes depend on the world seed: each run pairs the 10 tinctures with 10 different pairs out of 28 possible pairs of the 8 liquids. The same seed gives the same recipes, another seed gives other ones. Recipe notes and the cauldron's list show the pair of this run.",
        "ru": "Рецепты зависят от сида мира: в каждом забеге 10 настоек ставятся в соответствие 10 разным парам из 28 возможных пар 8 жидкостей. Тот же сид даёт те же рецепты, другой сид даёт другие. Записки с рецептами и список у котла показывают пару этого забега."
       }
      },
      "reactions": null,
      "tags": [
       "alchemy",
       "holy-mountain"
      ],
      "children": []
     },
     {
      "id": "alchemy.tinctures",
      "kind": "branch",
      "title": {
       "en": "Tinctures",
       "ru": "Настойки"
      },
      "summary": {
       "en": "Ten tinctures. Hold one and click to drink it. Drinking the same tincture again only refreshes its time (no stacking). Wand effects apply to the wand in your hand. With the Flask Charm relic every tincture lasts 50% longer.",
       "ru": "Десять настоек. Возьмите настойку в руку и кликните, чтобы выпить. Если выпить ту же настойку ещё раз, обновится только время (без суммирования). Эффекты для палочки действуют на палочку в руке."
      },
      "icon": "assets/icons/fa_tincture_ui.png",
      "stats": [],
      "body": {
       "en": "Ten tinctures. Hold one and click to drink it. Drinking the same tincture again only refreshes its time (no stacking). Wand effects apply to the wand in your hand. With the Flask Charm relic every tincture lasts 50% longer.",
       "ru": "Десять настоек. Возьмите настойку в руку и кликните, чтобы выпить. Если выпить ту же настойку ещё раз, обновится только время (без суммирования). Эффекты для палочки действуют на палочку в руке. С реликвией «Амулет флакона» все настойки действуют на 50% дольше."
      },
      "recipe": null,
      "reactions": null,
      "tags": [
       "tincture"
      ],
      "children": [
       {
        "id": "alchemy.tinctures.steady",
        "kind": "tincture",
        "title": {
         "en": "Steady Hand",
         "ru": "Твёрдая рука"
        },
        "summary": {
         "en": "Held wand: spread -8 degrees for 90 s",
         "ru": "Палочка в руке: разброс -8 градусов на 90 с"
        },
        "icon": "assets/icons/tincture_steady_ui.png",
        "stats": [
         {
          "key": "duration",
          "label": {
           "en": "Duration, s",
           "ru": "Длительность, с"
          },
          "value": "90",
          "vanilla": null
         },
         {
          "key": "spread",
          "label": {
           "en": "Spread of the held wand, degrees",
           "ru": "Разброс жезла в руке, градусы"
          },
          "value": "-8",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Held wand: spread -8 degrees for 90 s. Click to drink.",
         "ru": "Палочка в руке: разброс -8 градусов на 90 с. Клик, чтобы выпить."
        },
        "recipe": {
         "inputs": [
          {
           "title": {
            "en": "Liquid A",
            "ru": "Жидкость A"
           },
           "icon": null
          },
          {
           "title": {
            "en": "Liquid B",
            "ru": "Жидкость B"
           },
           "icon": null
          }
         ],
         "result": {
          "title": {
           "en": "Steady Hand",
           "ru": "Твёрдая рука"
          },
          "icon": "assets/icons/tincture_steady_ui.png"
         },
         "note": {
          "en": "Recipes depend on the world seed: each run pairs the 10 tinctures with 10 different pairs out of 28 possible pairs of the 8 liquids. The same seed gives the same recipes, another seed gives other ones. Recipe notes and the cauldron's list show the pair of this run.",
          "ru": "Рецепты зависят от сида мира: в каждом забеге 10 настоек ставятся в соответствие 10 разным парам из 28 возможных пар 8 жидкостей. Тот же сид даёт те же рецепты, другой сид даёт другие. Записки с рецептами и список у котла показывают пару этого забега."
         }
        },
        "reactions": null,
        "tags": [
         "tincture",
         "alchemy"
        ],
        "children": []
       },
       {
        "id": "alchemy.tinctures.quick",
        "kind": "tincture",
        "title": {
         "en": "Quickening",
         "ru": "Ускорение"
        },
        "summary": {
         "en": "Cast delay and recharge -15 % for 60 s",
         "ru": "Задержка и перезарядка -15 % на 60 с"
        },
        "icon": "assets/icons/tincture_quick_ui.png",
        "stats": [
         {
          "key": "duration",
          "label": {
           "en": "Duration, s",
           "ru": "Длительность, с"
          },
          "value": "60",
          "vanilla": null
         },
         {
          "key": "delay_recharge",
          "label": {
           "en": "Cast delay and recharge, %",
           "ru": "Задержка и перезарядка, %"
          },
          "value": "-15",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Held wand: cast delay and recharge -15 % for 60 s. Click to drink.",
         "ru": "Палочка в руке: задержка и перезарядка -15 % на 60 с. Клик, чтобы выпить."
        },
        "recipe": {
         "inputs": [
          {
           "title": {
            "en": "Liquid A",
            "ru": "Жидкость A"
           },
           "icon": null
          },
          {
           "title": {
            "en": "Liquid B",
            "ru": "Жидкость B"
           },
           "icon": null
          }
         ],
         "result": {
          "title": {
           "en": "Quickening",
           "ru": "Ускорение"
          },
          "icon": "assets/icons/tincture_quick_ui.png"
         },
         "note": {
          "en": "Recipes depend on the world seed: each run pairs the 10 tinctures with 10 different pairs out of 28 possible pairs of the 8 liquids. The same seed gives the same recipes, another seed gives other ones. Recipe notes and the cauldron's list show the pair of this run.",
          "ru": "Рецепты зависят от сида мира: в каждом забеге 10 настоек ставятся в соответствие 10 разным парам из 28 возможных пар 8 жидкостей. Тот же сид даёт те же рецепты, другой сид даёт другие. Записки с рецептами и список у котла показывают пару этого забега."
         }
        },
        "reactions": null,
        "tags": [
         "tincture",
         "alchemy"
        ],
        "children": []
       },
       {
        "id": "alchemy.tinctures.fount",
        "kind": "tincture",
        "title": {
         "en": "Fount",
         "ru": "Родник"
        },
        "summary": {
         "en": "Mana charge +50 % for 90 s",
         "ru": "Набор маны +50 % на 90 с"
        },
        "icon": "assets/icons/tincture_fount_ui.png",
        "stats": [
         {
          "key": "duration",
          "label": {
           "en": "Duration, s",
           "ru": "Длительность, с"
          },
          "value": "90",
          "vanilla": null
         },
         {
          "key": "charge",
          "label": {
           "en": "Mana charge speed, %",
           "ru": "Скорость зарядки маны, %"
          },
          "value": "+50",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Held wand: mana charge speed +50 % for 90 s. Click to drink.",
         "ru": "Палочка в руке: скорость набора маны +50 % на 90 с. Клик, чтобы выпить."
        },
        "recipe": {
         "inputs": [
          {
           "title": {
            "en": "Liquid A",
            "ru": "Жидкость A"
           },
           "icon": null
          },
          {
           "title": {
            "en": "Liquid B",
            "ru": "Жидкость B"
           },
           "icon": null
          }
         ],
         "result": {
          "title": {
           "en": "Fount",
           "ru": "Родник"
          },
          "icon": "assets/icons/tincture_fount_ui.png"
         },
         "note": {
          "en": "Recipes depend on the world seed: each run pairs the 10 tinctures with 10 different pairs out of 28 possible pairs of the 8 liquids. The same seed gives the same recipes, another seed gives other ones. Recipe notes and the cauldron's list show the pair of this run.",
          "ru": "Рецепты зависят от сида мира: в каждом забеге 10 настоек ставятся в соответствие 10 разным парам из 28 возможных пар 8 жидкостей. Тот же сид даёт те же рецепты, другой сид даёт другие. Записки с рецептами и список у котла показывают пару этого забега."
         }
        },
        "reactions": null,
        "tags": [
         "tincture",
         "alchemy"
        ],
        "children": []
       },
       {
        "id": "alchemy.tinctures.stone",
        "kind": "tincture",
        "title": {
         "en": "Stoneskin",
         "ru": "Каменная кожа"
        },
        "summary": {
         "en": "Damage taken -25 % for 60 s",
         "ru": "Получаемый урон -25 % на 60 с"
        },
        "icon": "assets/icons/tincture_stone_ui.png",
        "stats": [
         {
          "key": "duration",
          "label": {
           "en": "Duration, s",
           "ru": "Длительность, с"
          },
          "value": "60",
          "vanilla": null
         },
         {
          "key": "damage_taken",
          "label": {
           "en": "Damage taken, %",
           "ru": "Получаемый урон, %"
          },
          "value": "-25",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Damage you take -25 % for 60 s. Click to drink.",
         "ru": "Получаемый урон -25 % на 60 с. Клик, чтобы выпить."
        },
        "recipe": {
         "inputs": [
          {
           "title": {
            "en": "Liquid A",
            "ru": "Жидкость A"
           },
           "icon": null
          },
          {
           "title": {
            "en": "Liquid B",
            "ru": "Жидкость B"
           },
           "icon": null
          }
         ],
         "result": {
          "title": {
           "en": "Stoneskin",
           "ru": "Каменная кожа"
          },
          "icon": "assets/icons/tincture_stone_ui.png"
         },
         "note": {
          "en": "Recipes depend on the world seed: each run pairs the 10 tinctures with 10 different pairs out of 28 possible pairs of the 8 liquids. The same seed gives the same recipes, another seed gives other ones. Recipe notes and the cauldron's list show the pair of this run.",
          "ru": "Рецепты зависят от сида мира: в каждом забеге 10 настоек ставятся в соответствие 10 разным парам из 28 возможных пар 8 жидкостей. Тот же сид даёт те же рецепты, другой сид даёт другие. Записки с рецептами и список у котла показывают пару этого забега."
         }
        },
        "reactions": null,
        "tags": [
         "tincture",
         "alchemy"
        ],
        "children": []
       },
       {
        "id": "alchemy.tinctures.mend",
        "kind": "tincture",
        "title": {
         "en": "Mending",
         "ru": "Исцеление"
        },
        "summary": {
         "en": "Heals 40 health over 20 s",
         "ru": "Лечит 40 здоровья за 20 с"
        },
        "icon": "assets/icons/tincture_mend_ui.png",
        "stats": [
         {
          "key": "duration",
          "label": {
           "en": "Duration, s",
           "ru": "Длительность, с"
          },
          "value": "20",
          "vanilla": null
         },
         {
          "key": "heal",
          "label": {
           "en": "Healing, hp",
           "ru": "Лечение, hp"
          },
          "value": "40",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Heals 40 hp over 20 s, never above your maximum. Click to drink.",
         "ru": "Лечит 40 здоровья за 20 с, не выше максимума. Клик, чтобы выпить."
        },
        "recipe": {
         "inputs": [
          {
           "title": {
            "en": "Liquid A",
            "ru": "Жидкость A"
           },
           "icon": null
          },
          {
           "title": {
            "en": "Liquid B",
            "ru": "Жидкость B"
           },
           "icon": null
          }
         ],
         "result": {
          "title": {
           "en": "Mending",
           "ru": "Исцеление"
          },
          "icon": "assets/icons/tincture_mend_ui.png"
         },
         "note": {
          "en": "Recipes depend on the world seed: each run pairs the 10 tinctures with 10 different pairs out of 28 possible pairs of the 8 liquids. The same seed gives the same recipes, another seed gives other ones. Recipe notes and the cauldron's list show the pair of this run.",
          "ru": "Рецепты зависят от сида мира: в каждом забеге 10 настоек ставятся в соответствие 10 разным парам из 28 возможных пар 8 жидкостей. Тот же сид даёт те же рецепты, другой сид даёт другие. Записки с рецептами и список у котла показывают пару этого забега."
         }
        },
        "reactions": null,
        "tags": [
         "tincture",
         "alchemy"
        ],
        "children": []
       },
       {
        "id": "alchemy.tinctures.feather",
        "kind": "tincture",
        "title": {
         "en": "Featherfall",
         "ru": "Лёгкое падение"
        },
        "summary": {
         "en": "No fall damage, slow fall (cap 100) for 120 s",
         "ru": "Нет урона от падения, плавное падение (100) 120 с"
        },
        "icon": "assets/icons/tincture_feather_ui.png",
        "stats": [
         {
          "key": "duration",
          "label": {
           "en": "Duration, s",
           "ru": "Длительность, с"
          },
          "value": "120",
          "vanilla": null
         },
         {
          "key": "fall_cap",
          "label": {
           "en": "Fall speed cap",
           "ru": "Предел скорости падения"
          },
          "value": "100",
          "vanilla": null
         }
        ],
        "body": {
         "en": "No fall damage and a slower fall for 120 s. Click to drink.",
         "ru": "Нет урона от падения, падение медленнее, 120 с. Клик, чтобы выпить."
        },
        "recipe": {
         "inputs": [
          {
           "title": {
            "en": "Liquid A",
            "ru": "Жидкость A"
           },
           "icon": null
          },
          {
           "title": {
            "en": "Liquid B",
            "ru": "Жидкость B"
           },
           "icon": null
          }
         ],
         "result": {
          "title": {
           "en": "Featherfall",
           "ru": "Лёгкое падение"
          },
          "icon": "assets/icons/tincture_feather_ui.png"
         },
         "note": {
          "en": "Recipes depend on the world seed: each run pairs the 10 tinctures with 10 different pairs out of 28 possible pairs of the 8 liquids. The same seed gives the same recipes, another seed gives other ones. Recipe notes and the cauldron's list show the pair of this run.",
          "ru": "Рецепты зависят от сида мира: в каждом забеге 10 настоек ставятся в соответствие 10 разным парам из 28 возможных пар 8 жидкостей. Тот же сид даёт те же рецепты, другой сид даёт другие. Записки с рецептами и список у котла показывают пару этого забега."
         }
        },
        "reactions": null,
        "tags": [
         "tincture",
         "alchemy"
        ],
        "children": []
       },
       {
        "id": "alchemy.tinctures.sight",
        "kind": "tincture",
        "title": {
         "en": "Clear Sight",
         "ru": "Ясный взор"
        },
        "summary": {
         "en": "Enemies within 300 px outlined for 120 s",
         "ru": "Враги в 300 пикс. обведены на 120 с"
        },
        "icon": "assets/icons/tincture_sight_ui.png",
        "stats": [
         {
          "key": "duration",
          "label": {
           "en": "Duration, s",
           "ru": "Длительность, с"
          },
          "value": "120",
          "vanilla": null
         },
         {
          "key": "radius",
          "label": {
           "en": "Radius, px",
           "ru": "Радиус, px"
          },
          "value": "300",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Enemies within 300 px are outlined through walls for 120 s. Click to drink.",
         "ru": "Враги в 300 пикселях обведены сквозь стены, 120 с. Клик, чтобы выпить."
        },
        "recipe": {
         "inputs": [
          {
           "title": {
            "en": "Liquid A",
            "ru": "Жидкость A"
           },
           "icon": null
          },
          {
           "title": {
            "en": "Liquid B",
            "ru": "Жидкость B"
           },
           "icon": null
          }
         ],
         "result": {
          "title": {
           "en": "Clear Sight",
           "ru": "Ясный взор"
          },
          "icon": "assets/icons/tincture_sight_ui.png"
         },
         "note": {
          "en": "Recipes depend on the world seed: each run pairs the 10 tinctures with 10 different pairs out of 28 possible pairs of the 8 liquids. The same seed gives the same recipes, another seed gives other ones. Recipe notes and the cauldron's list show the pair of this run.",
          "ru": "Рецепты зависят от сида мира: в каждом забеге 10 настоек ставятся в соответствие 10 разным парам из 28 возможных пар 8 жидкостей. Тот же сид даёт те же рецепты, другой сид даёт другие. Записки с рецептами и список у котла показывают пару этого забега."
         }
        },
        "reactions": null,
        "tags": [
         "tincture",
         "alchemy"
        ],
        "children": []
       },
       {
        "id": "alchemy.tinctures.flame",
        "kind": "tincture",
        "title": {
         "en": "Flameward",
         "ru": "Защита от огня"
        },
        "summary": {
         "en": "Fire immunity for 120 s",
         "ru": "Иммунитет к огню на 120 с"
        },
        "icon": "assets/icons/tincture_flame_ui.png",
        "stats": [
         {
          "key": "duration",
          "label": {
           "en": "Duration, s",
           "ru": "Длительность, с"
          },
          "value": "120",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Fire immunity for 120 s. Click to drink.",
         "ru": "Иммунитет к огню на 120 с. Клик, чтобы выпить."
        },
        "recipe": {
         "inputs": [
          {
           "title": {
            "en": "Liquid A",
            "ru": "Жидкость A"
           },
           "icon": null
          },
          {
           "title": {
            "en": "Liquid B",
            "ru": "Жидкость B"
           },
           "icon": null
          }
         ],
         "result": {
          "title": {
           "en": "Flameward",
           "ru": "Защита от огня"
          },
          "icon": "assets/icons/tincture_flame_ui.png"
         },
         "note": {
          "en": "Recipes depend on the world seed: each run pairs the 10 tinctures with 10 different pairs out of 28 possible pairs of the 8 liquids. The same seed gives the same recipes, another seed gives other ones. Recipe notes and the cauldron's list show the pair of this run.",
          "ru": "Рецепты зависят от сида мира: в каждом забеге 10 настоек ставятся в соответствие 10 разным парам из 28 возможных пар 8 жидкостей. Тот же сид даёт те же рецепты, другой сид даёт другие. Записки с рецептами и список у котла показывают пару этого забега."
         }
        },
        "reactions": null,
        "tags": [
         "tincture",
         "alchemy"
        ],
        "children": []
       },
       {
        "id": "alchemy.tinctures.breath",
        "kind": "tincture",
        "title": {
         "en": "Deep Breath",
         "ru": "Глубокий вдох"
        },
        "summary": {
         "en": "No need for air for 180 s",
         "ru": "Воздух не нужен 180 с"
        },
        "icon": "assets/icons/tincture_breath_ui.png",
        "stats": [
         {
          "key": "duration",
          "label": {
           "en": "Duration, s",
           "ru": "Длительность, с"
          },
          "value": "180",
          "vanilla": null
         }
        ],
        "body": {
         "en": "No need for air for 180 s. Click to drink.",
         "ru": "Воздух не нужен 180 с. Клик, чтобы выпить."
        },
        "recipe": {
         "inputs": [
          {
           "title": {
            "en": "Liquid A",
            "ru": "Жидкость A"
           },
           "icon": null
          },
          {
           "title": {
            "en": "Liquid B",
            "ru": "Жидкость B"
           },
           "icon": null
          }
         ],
         "result": {
          "title": {
           "en": "Deep Breath",
           "ru": "Глубокий вдох"
          },
          "icon": "assets/icons/tincture_breath_ui.png"
         },
         "note": {
          "en": "Recipes depend on the world seed: each run pairs the 10 tinctures with 10 different pairs out of 28 possible pairs of the 8 liquids. The same seed gives the same recipes, another seed gives other ones. Recipe notes and the cauldron's list show the pair of this run.",
          "ru": "Рецепты зависят от сида мира: в каждом забеге 10 настоек ставятся в соответствие 10 разным парам из 28 возможных пар 8 жидкостей. Тот же сид даёт те же рецепты, другой сид даёт другие. Записки с рецептами и список у котла показывают пару этого забега."
         }
        },
        "reactions": null,
        "tags": [
         "tincture",
         "alchemy"
        ],
        "children": []
       },
       {
        "id": "alchemy.tinctures.fortune",
        "kind": "tincture",
        "title": {
         "en": "Fortune",
         "ru": "Удача"
        },
        "summary": {
         "en": "Enemies drop +50 % gold for 120 s",
         "ru": "С врагов +50 % золота на 120 с"
        },
        "icon": "assets/icons/tincture_fortune_ui.png",
        "stats": [
         {
          "key": "duration",
          "label": {
           "en": "Duration, s",
           "ru": "Длительность, с"
          },
          "value": "120",
          "vanilla": null
         },
         {
          "key": "gold",
          "label": {
           "en": "Gold from kills, %",
           "ru": "Золото с убийств, %"
          },
          "value": "+50",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Enemies killed drop +50 % gold for 120 s. Click to drink.",
         "ru": "Убитые враги роняют на 50 % больше золота, 120 с. Клик, чтобы выпить."
        },
        "recipe": {
         "inputs": [
          {
           "title": {
            "en": "Liquid A",
            "ru": "Жидкость A"
           },
           "icon": null
          },
          {
           "title": {
            "en": "Liquid B",
            "ru": "Жидкость B"
           },
           "icon": null
          }
         ],
         "result": {
          "title": {
           "en": "Fortune",
           "ru": "Удача"
          },
          "icon": "assets/icons/tincture_fortune_ui.png"
         },
         "note": {
          "en": "Recipes depend on the world seed: each run pairs the 10 tinctures with 10 different pairs out of 28 possible pairs of the 8 liquids. The same seed gives the same recipes, another seed gives other ones. Recipe notes and the cauldron's list show the pair of this run.",
          "ru": "Рецепты зависят от сида мира: в каждом забеге 10 настоек ставятся в соответствие 10 разным парам из 28 возможных пар 8 жидкостей. Тот же сид даёт те же рецепты, другой сид даёт другие. Записки с рецептами и список у котла показывают пару этого забега."
         }
        },
        "reactions": null,
        "tags": [
         "tincture",
         "alchemy"
        ],
        "children": []
       }
      ]
     },
     {
      "id": "alchemy.note",
      "kind": "info",
      "title": {
       "en": "Recipe note",
       "ru": "Записка с рецептом"
      },
      "summary": {
       "en": "A scrap of paper. Pick it up to read it. Picking up a note reveals ONE recipe of this run you do not know yet, with the two liquids and the tincture shown on screen; the recipe is then also listed above any cauldron.",
       "ru": "Клочок бумаги. Подберите, чтобы прочесть. Подняв записку, вы узнаёте ОДИН ещё неизвестный рецепт этого забега: на экране показываются две жидкости и настойка; рецепт затем виден и в списке над любым котлом."
      },
      "icon": "assets/icons/fa_note.png",
      "stats": [
       {
        "key": "find",
        "label": {
         "en": "World finds per screen",
         "ru": "Находок в мире на экран"
        },
        "value": "1/8",
        "vanilla": null
       }
      ],
      "body": {
       "en": "A scrap of paper. Pick it up to read it.\n\nPicking up a note reveals ONE recipe of this run you do not know yet, with the two liquids and the tincture shown on screen; the recipe is then also listed above any cauldron. Two notes never give the same recipe while unknown ones remain. With all ten known you get \"You already know every recipe\".",
       "ru": "Клочок бумаги. Подберите, чтобы прочесть.\n\nПодняв записку, вы узнаёте ОДИН ещё неизвестный рецепт этого забега: на экране показываются две жидкости и настойка; рецепт затем виден и в списке над любым котлом. Пока остались неизвестные, две записки не дают один и тот же рецепт. Когда известны все десять, вы увидите «Вы уже знаете все рецепты»."
      },
      "recipe": null,
      "reactions": null,
      "tags": [
       "alchemy"
      ],
      "children": []
     }
    ]
   },
   {
    "id": "relics",
    "kind": "branch",
    "title": {
     "en": "Relics",
     "ru": "Реликвии"
    },
    "summary": {
     "en": "Eight relics. Each one works for as long as it is anywhere in your inventory (the quick row or the backpack); the price is an item slot. A relic you already carry is never offered again.",
     "ru": "Восемь реликвий. Каждая действует, пока лежит в любом месте вашего инвентаря (быстрая панель или рюкзак); цена это слот предмета. Реликвию, которую вы уже несёте, больше не предлагают."
    },
    "icon": "assets/icons/heartstone_ui.png",
    "stats": [],
    "body": {
     "en": "Eight relics. Each one works for as long as it is anywhere in your inventory (the quick row or the backpack); the price is an item slot. A relic you already carry is never offered again. Sources: elite death (6%), the world (about 1 per 25 screens), caches, the wanderer and champions (20%).",
     "ru": "Восемь реликвий. Каждая действует, пока лежит в любом месте вашего инвентаря (быстрая панель или рюкзак); цена это слот предмета. Реликвию, которую вы уже несёте, больше не предлагают. Источники: смерть элиты (6%), мир (около 1 на 25 экранов), тайники, странник и чемпионы (20%)."
    },
    "recipe": null,
    "reactions": null,
    "tags": [
     "relic"
    ],
    "children": [
     {
      "id": "relics.whetstone",
      "kind": "relic",
      "title": {
       "en": "Whetstone",
       "ru": "Точильный камень"
      },
      "summary": {
       "en": "Carried: +10 % critical chance",
       "ru": "С собой: +10 % к шансу крита"
      },
      "icon": "assets/icons/whetstone_ui.png",
      "stats": [
       {
        "key": "crit",
        "label": {
         "en": "Critical chance, %",
         "ru": "Шанс крита, %"
        },
        "value": "+10",
        "vanilla": null
       },
       {
        "key": "drop",
        "label": {
         "en": "Drop chance from an elite, %",
         "ru": "Шанс выпадения из элиты, %"
        },
        "value": "6",
        "vanilla": null
       },
       {
        "key": "find",
        "label": {
         "en": "World finds per screen",
         "ru": "Находок в мире на экран"
        },
        "value": "1/25",
        "vanilla": null
       }
      ],
      "body": {
       "en": "Carried: your shots get +10 % critical chance.",
       "ru": "С собой: ваши выстрелы получают +10 % шанса критического удара."
      },
      "recipe": null,
      "reactions": null,
      "tags": [
       "relic"
      ],
      "children": []
     },
     {
      "id": "relics.lodestone",
      "kind": "relic",
      "title": {
       "en": "Lodestone",
       "ru": "Магнитный камень"
      },
      "summary": {
       "en": "Carried: gold within 90 px flies to you",
       "ru": "С собой: золото в 90 пикс. летит к вам"
      },
      "icon": "assets/icons/lodestone_ui.png",
      "stats": [
       {
        "key": "radius",
        "label": {
         "en": "Pull radius, px",
         "ru": "Радиус притяжения, px"
        },
        "value": "90",
        "vanilla": null
       },
       {
        "key": "drop",
        "label": {
         "en": "Drop chance from an elite, %",
         "ru": "Шанс выпадения из элиты, %"
        },
        "value": "6",
        "vanilla": null
       },
       {
        "key": "find",
        "label": {
         "en": "World finds per screen",
         "ru": "Находок в мире на экран"
        },
        "value": "1/25",
        "vanilla": null
       }
      ],
      "body": {
       "en": "Carried: gold nuggets within 90 px fly to you.",
       "ru": "С собой: золотые самородки в 90 пикселях летят к вам."
      },
      "recipe": null,
      "reactions": null,
      "tags": [
       "relic"
      ],
      "children": []
     },
     {
      "id": "relics.heartstone",
      "kind": "relic",
      "title": {
       "en": "Heartstone",
       "ru": "Камень сердца"
      },
      "summary": {
       "en": "Carried: max health +25",
       "ru": "С собой: макс. здоровье +25"
      },
      "icon": "assets/icons/heartstone_ui.png",
      "stats": [
       {
        "key": "hp",
        "label": {
         "en": "Max health",
         "ru": "Максимум здоровья"
        },
        "value": "+25",
        "vanilla": null
       },
       {
        "key": "drop",
        "label": {
         "en": "Drop chance from an elite, %",
         "ru": "Шанс выпадения из элиты, %"
        },
        "value": "6",
        "vanilla": null
       },
       {
        "key": "find",
        "label": {
         "en": "World finds per screen",
         "ru": "Находок в мире на экран"
        },
        "value": "1/25",
        "vanilla": null
       }
      ],
      "body": {
       "en": "Carried: maximum health +25.",
       "ru": "С собой: максимум здоровья +25."
      },
      "recipe": null,
      "reactions": null,
      "tags": [
       "relic"
      ],
      "children": []
     },
     {
      "id": "relics.ward",
      "kind": "relic",
      "title": {
       "en": "Ward Stone",
       "ru": "Камень-оберег"
      },
      "summary": {
       "en": "Carried: negates one hit, recharge 45 s",
       "ru": "С собой: гасит один удар, зарядка 45 с"
      },
      "icon": "assets/icons/ward_ui.png",
      "stats": [
       {
        "key": "recharge",
        "label": {
         "en": "Recharge, s",
         "ru": "Перезарядка, с"
        },
        "value": "45",
        "vanilla": null
       },
       {
        "key": "drop",
        "label": {
         "en": "Drop chance from an elite, %",
         "ru": "Шанс выпадения из элиты, %"
        },
        "value": "6",
        "vanilla": null
       },
       {
        "key": "find",
        "label": {
         "en": "World finds per screen",
         "ru": "Находок в мире на экран"
        },
        "value": "1/25",
        "vanilla": null
       }
      ],
      "body": {
       "en": "Carried: one hit is negated, then it recharges for 45 s. A mark over you shows it is ready.",
       "ru": "С собой: один удар полностью гасится, затем камень заряжается 45 с. Знак над вами показывает готовность."
      },
      "recipe": null,
      "reactions": null,
      "tags": [
       "relic"
      ],
      "children": []
     },
     {
      "id": "relics.pacer",
      "kind": "relic",
      "title": {
       "en": "Pacer's Pebble",
       "ru": "Камешек скорохода"
      },
      "summary": {
       "en": "Carried: movement speed +12 %",
       "ru": "С собой: скорость движения +12 %"
      },
      "icon": "assets/icons/pacer_ui.png",
      "stats": [
       {
        "key": "speed",
        "label": {
         "en": "Movement speed, %",
         "ru": "Скорость движения, %"
        },
        "value": "+12",
        "vanilla": null
       },
       {
        "key": "drop",
        "label": {
         "en": "Drop chance from an elite, %",
         "ru": "Шанс выпадения из элиты, %"
        },
        "value": "6",
        "vanilla": null
       },
       {
        "key": "find",
        "label": {
         "en": "World finds per screen",
         "ru": "Находок в мире на экран"
        },
        "value": "1/25",
        "vanilla": null
       }
      ],
      "body": {
       "en": "Carried: movement speed +12 %, on the ground and in the air.",
       "ru": "С собой: скорость движения +12 % на земле и в воздухе."
      },
      "recipe": null,
      "reactions": null,
      "tags": [
       "relic"
      ],
      "children": []
     },
     {
      "id": "relics.fang",
      "kind": "relic",
      "title": {
       "en": "Leech Fang",
       "ru": "Клык пиявки"
      },
      "summary": {
       "en": "Carried: every 8th kill heals 4",
       "ru": "С собой: каждое 8-е убийство лечит 4"
      },
      "icon": "assets/icons/fang_ui.png",
      "stats": [
       {
        "key": "every",
        "label": {
         "en": "Kills per heal",
         "ru": "Убийств на лечение"
        },
        "value": "8",
        "vanilla": null
       },
       {
        "key": "heal",
        "label": {
         "en": "Heal, hp",
         "ru": "Лечение, hp"
        },
        "value": "4",
        "vanilla": null
       },
       {
        "key": "drop",
        "label": {
         "en": "Drop chance from an elite, %",
         "ru": "Шанс выпадения из элиты, %"
        },
        "value": "6",
        "vanilla": null
       },
       {
        "key": "find",
        "label": {
         "en": "World finds per screen",
         "ru": "Находок в мире на экран"
        },
        "value": "1/25",
        "vanilla": null
       }
      ],
      "body": {
       "en": "Carried: every 8th kill heals 4 health.",
       "ru": "С собой: каждое 8-е убийство лечит 4 здоровья."
      },
      "recipe": null,
      "reactions": null,
      "tags": [
       "relic"
      ],
      "children": []
     },
     {
      "id": "relics.charm",
      "kind": "relic",
      "title": {
       "en": "Flask Charm",
       "ru": "Амулет склянки"
      },
      "summary": {
       "en": "Carried: tinctures last 50 % longer",
       "ru": "С собой: настойки действуют на 50 % дольше"
      },
      "icon": "assets/icons/relics_charm_ui.png",
      "stats": [
       {
        "key": "duration",
        "label": {
         "en": "Tincture duration, %",
         "ru": "Длительность настоек, %"
        },
        "value": "+50",
        "vanilla": null
       },
       {
        "key": "drop",
        "label": {
         "en": "Drop chance from an elite, %",
         "ru": "Шанс выпадения из элиты, %"
        },
        "value": "6",
        "vanilla": null
       },
       {
        "key": "find",
        "label": {
         "en": "World finds per screen",
         "ru": "Находок в мире на экран"
        },
        "value": "1/25",
        "vanilla": null
       }
      ],
      "body": {
       "en": "Carried: tinctures last 50 % longer.",
       "ru": "С собой: настойки действуют на 50 % дольше."
      },
      "recipe": null,
      "reactions": null,
      "tags": [
       "relic"
      ],
      "children": []
     },
     {
      "id": "relics.shard",
      "kind": "relic",
      "title": {
       "en": "Echo Shard",
       "ru": "Осколок эха"
      },
      "summary": {
       "en": "Carried: each kill gives the wand 12 mana",
       "ru": "С собой: каждое убийство даёт палочке 12 маны"
      },
      "icon": "assets/icons/shard_ui.png",
      "stats": [
       {
        "key": "mana",
        "label": {
         "en": "Mana per kill",
         "ru": "Маны за убийство"
        },
        "value": "12",
        "vanilla": null
       },
       {
        "key": "drop",
        "label": {
         "en": "Drop chance from an elite, %",
         "ru": "Шанс выпадения из элиты, %"
        },
        "value": "6",
        "vanilla": null
       },
       {
        "key": "find",
        "label": {
         "en": "World finds per screen",
         "ru": "Находок в мире на экран"
        },
        "value": "1/25",
        "vanilla": null
       }
      ],
      "body": {
       "en": "Carried: each kill restores 12 mana to the held wand.",
       "ru": "С собой: каждое убийство возвращает 12 маны палочке в руке."
      },
      "recipe": null,
      "reactions": null,
      "tags": [
       "relic"
      ],
      "children": []
     }
    ]
   },
   {
    "id": "world",
    "kind": "branch",
    "title": {
     "en": "World",
     "ru": "Мир"
    },
    "summary": {
     "en": "Everything outside the wand and the perk list: shrines with blessings, omen cards, caches, wisps, elite enemies, the properties of biomes, and the places of the Holy Mountain and the wilds.",
     "ru": "Всё, что не относится к палочке и перкам: святилища с благословениями, карты-знамения, тайники, огоньки, элитные враги, свойства биомов и места Святой горы и дикой местности."
    },
    "icon": null,
    "stats": [],
    "body": {
     "en": "Everything outside the wand and the perk list: shrines with blessings, omen cards, caches, wisps, elite enemies, the properties of biomes, and the places of the Holy Mountain and the wilds.",
     "ru": "Всё, что не относится к палочке и перкам: святилища с благословениями, карты-знамения, тайники, огоньки, элитные враги, свойства биомов и места Святой горы и дикой местности."
    },
    "recipe": null,
    "reactions": null,
    "tags": [
     "world"
    ],
    "children": [
     {
      "id": "world.shrines",
      "kind": "place",
      "title": {
       "en": "Shrine",
       "ru": "Святилище"
      },
      "summary": {
       "en": "Offer gold (100 to 400), blood or a flask for a blessing",
       "ru": "Золото (100-400), кровь или склянка за благословение"
      },
      "icon": "assets/icons/fa_shrine.png",
      "stats": [
       {
        "key": "gold",
        "label": {
         "en": "Gold price by depth step",
         "ru": "Цена золотом по ярусу глубины"
        },
        "value": "100, 150, 200, 300, 400",
        "vanilla": null
       },
       {
        "key": "blood",
        "label": {
         "en": "Blood price: max health",
         "ru": "Цена кровью: максимум здоровья"
        },
        "value": "-10",
        "vanilla": null
       },
       {
        "key": "flask",
        "label": {
         "en": "Flask price: cells of one liquid",
         "ru": "Цена флаконом: клеток одной жидкости"
        },
        "value": "500+",
        "vanilla": null
       },
       {
        "key": "kinds",
        "label": {
         "en": "Chance of the price: gold / blood / flask, %",
         "ru": "Шанс цены: золото / кровь / флакон, %"
        },
        "value": "50 / 25 / 25",
        "vanilla": null
       },
       {
        "key": "max",
        "label": {
         "en": "Copies of one blessing at most",
         "ru": "Копий одного благословения не больше"
        },
        "value": "3",
        "vanilla": null
       },
       {
        "key": "find",
        "label": {
         "en": "World finds per screen",
         "ru": "Находок в мире на экран"
        },
        "value": "1/40",
        "vanilla": null
       }
      ],
      "body": {
       "en": "A statue in the biomes (about 1 per 40 screens). Within 60 px it shows ONE offer: a price and a blessing. The interact key pays and gives the blessing, then the shrine goes dark for good. If you cannot pay, you get a refusal and the shrine stays usable.\n\n**Price:** gold 50% (by depth step: 100, 150, 200, 300, 400), blood 25% (max health -10 for good; refused if the maximum would fall under 40; never kills), or a flask 25% (the flask in your hand with 500+ cells of one liquid, which is emptied).\n\n**Blessing:** a passive for the rest of the run, up to 3 copies of each (the numbers add). A shrine never offers one you already hold 3 times. Depth step: 1 in the mines, one more for every Holy Mountain passed, up to 5.",
       "ru": "Статуя в биомах (около 1 на 40 экранов). Вблизи, в 60 px, она показывает ОДНО предложение: цену и благословение. Клавиша взаимодействия платит и даёт благословение, после чего святилище гаснет навсегда. Если платить нечем, вы получите отказ, а святилище останется доступным.\n\n**Цена:** золото 50% (по ярусу глубины: 100, 150, 200, 300, 400), кровь 25% (максимум здоровья -10 навсегда; отказ, если максимум упадёт ниже 40; не убивает) или флакон 25% (флакон в руке с 500+ клеток одной жидкости, он опустошается).\n\n**Благословение:** бонус до конца забега, до 3 копий каждого (числа складываются). Святилище не предложит то, что у вас уже есть 3 раза. Ярус глубины: 1 в шахтах, плюс один за каждую пройденную Святую гору, до 5."
      },
      "recipe": null,
      "reactions": null,
      "tags": [
       "shrine",
       "blessing"
      ],
      "children": [
       {
        "id": "world.shrines.vigor",
        "kind": "blessing",
        "title": {
         "en": "Blessing of Vigor",
         "ru": "Благословение бодрости"
        },
        "summary": {
         "en": "Max health +15 per copy, up to 3 copies",
         "ru": "Макс. здоровье +15 за копию, до 3 копий"
        },
        "icon": "assets/icons/vigor.png",
        "stats": [
         {
          "key": "hp",
          "label": {
           "en": "Max health per copy",
           "ru": "Максимум здоровья за копию"
          },
          "value": "+15",
          "vanilla": null
         },
         {
          "key": "max",
          "label": {
           "en": "Copies at most",
           "ru": "Копий не больше"
          },
          "value": "3",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Max health +15 per blessing.",
         "ru": "Максимум здоровья +15 за каждое благословение."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "blessing",
         "shrine"
        ],
        "children": []
       },
       {
        "id": "world.shrines.focus",
        "kind": "blessing",
        "title": {
         "en": "Blessing of Focus",
         "ru": "Благословение сосредоточения"
        },
        "summary": {
         "en": "Mana charge +12 % per copy, up to 3 copies",
         "ru": "Набор маны +12 % за копию, до 3 копий"
        },
        "icon": "assets/icons/focus.png",
        "stats": [
         {
          "key": "charge",
          "label": {
           "en": "Mana charge per copy, %",
           "ru": "Зарядка маны за копию, %"
          },
          "value": "+12",
          "vanilla": null
         },
         {
          "key": "max",
          "label": {
           "en": "Copies at most",
           "ru": "Копий не больше"
          },
          "value": "3",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Wands charge mana 12 % faster per blessing.",
         "ru": "Палочки набирают ману на 12 % быстрее за каждое благословение."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "blessing",
         "shrine"
        ],
        "children": []
       },
       {
        "id": "world.shrines.haste",
        "kind": "blessing",
        "title": {
         "en": "Blessing of Haste",
         "ru": "Благословение спешки"
        },
        "summary": {
         "en": "Cast delay and recharge -6 % per copy, up to 3",
         "ru": "Задержка и перезарядка -6 % за копию, до 3"
        },
        "icon": "assets/icons/haste.png",
        "stats": [
         {
          "key": "delay",
          "label": {
           "en": "Cast delay and recharge per copy, %",
           "ru": "Задержка и перезарядка за копию, %"
          },
          "value": "-6",
          "vanilla": null
         },
         {
          "key": "max",
          "label": {
           "en": "Copies at most",
           "ru": "Копий не больше"
          },
          "value": "3",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Cast delay and recharge 6 % shorter per blessing.",
         "ru": "Задержка выстрела и перезарядка на 6 % короче за каждое благословение."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "blessing",
         "shrine"
        ],
        "children": []
       },
       {
        "id": "world.shrines.aegis",
        "kind": "blessing",
        "title": {
         "en": "Blessing of the Aegis",
         "ru": "Благословение эгиды"
        },
        "summary": {
         "en": "Damage taken -6 % per copy, up to 3 copies",
         "ru": "Получаемый урон -6 % за копию, до 3 копий"
        },
        "icon": "assets/icons/aegis.png",
        "stats": [
         {
          "key": "damage",
          "label": {
           "en": "Damage taken per copy, %",
           "ru": "Получаемый урон за копию, %"
          },
          "value": "-6",
          "vanilla": null
         },
         {
          "key": "max",
          "label": {
           "en": "Copies at most",
           "ru": "Копий не больше"
          },
          "value": "3",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Damage taken 6 % lower per blessing.",
         "ru": "Получаемый урон на 6 % ниже за каждое благословение."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "blessing",
         "shrine"
        ],
        "children": []
       },
       {
        "id": "world.shrines.stride",
        "kind": "blessing",
        "title": {
         "en": "Blessing of Stride",
         "ru": "Благословение шага"
        },
        "summary": {
         "en": "Movement speed +5 % per copy, up to 3 copies",
         "ru": "Скорость движения +5 % за копию, до 3 копий"
        },
        "icon": "assets/icons/stride.png",
        "stats": [
         {
          "key": "speed",
          "label": {
           "en": "Movement speed per copy, %",
           "ru": "Скорость за копию, %"
          },
          "value": "+5",
          "vanilla": null
         },
         {
          "key": "max",
          "label": {
           "en": "Copies at most",
           "ru": "Копий не больше"
          },
          "value": "3",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Movement speed +5 % per blessing.",
         "ru": "Скорость движения +5 % за каждое благословение."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "blessing",
         "shrine"
        ],
        "children": []
       },
       {
        "id": "world.shrines.edge",
        "kind": "blessing",
        "title": {
         "en": "Blessing of the Edge",
         "ru": "Благословение острия"
        },
        "summary": {
         "en": "Critical chance +5 % per copy, up to 3 copies",
         "ru": "Шанс крита +5 % за копию, до 3 копий"
        },
        "icon": "assets/icons/edge.png",
        "stats": [
         {
          "key": "crit",
          "label": {
           "en": "Critical chance per copy, %",
           "ru": "Шанс крита за копию, %"
          },
          "value": "+5",
          "vanilla": null
         },
         {
          "key": "max",
          "label": {
           "en": "Copies at most",
           "ru": "Копий не больше"
          },
          "value": "3",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Critical chance +5 % per blessing.",
         "ru": "Шанс критического удара +5 % за каждое благословение."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "blessing",
         "shrine"
        ],
        "children": []
       },
       {
        "id": "world.shrines.plenty",
        "kind": "blessing",
        "title": {
         "en": "Blessing of Plenty",
         "ru": "Благословение изобилия"
        },
        "summary": {
         "en": "Gold from kills +15 % per copy, up to 3 copies",
         "ru": "Золото с врагов +15 % за копию, до 3 копий"
        },
        "icon": "assets/icons/plenty.png",
        "stats": [
         {
          "key": "gold",
          "label": {
           "en": "Gold from kills per copy, %",
           "ru": "Золото с убийств за копию, %"
          },
          "value": "+15",
          "vanilla": null
         },
         {
          "key": "max",
          "label": {
           "en": "Copies at most",
           "ru": "Копий не больше"
          },
          "value": "3",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Enemies drop 15 % more gold per blessing.",
         "ru": "С врагов выпадает на 15 % больше золота за каждое благословение."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "blessing",
         "shrine"
        ],
        "children": []
       },
       {
        "id": "world.shrines.renewal",
        "kind": "blessing",
        "title": {
         "en": "Blessing of Renewal",
         "ru": "Благословение обновления"
        },
        "summary": {
         "en": "Heals 1 every 40 s per copy, up to 3 copies",
         "ru": "Лечит 1 каждые 40 с за копию, до 3 копий"
        },
        "icon": "assets/icons/renewal.png",
        "stats": [
         {
          "key": "heal",
          "label": {
           "en": "Heal per copy, hp",
           "ru": "Лечение за копию, hp"
          },
          "value": "+1",
          "vanilla": null
         },
         {
          "key": "every",
          "label": {
           "en": "Every, s",
           "ru": "Каждые, с"
          },
          "value": "40",
          "vanilla": null
         },
         {
          "key": "max",
          "label": {
           "en": "Copies at most",
           "ru": "Копий не больше"
          },
          "value": "3",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Heals 1 health every 40 s per blessing.",
         "ru": "Лечит 1 здоровья каждые 40 с за каждое благословение."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "blessing",
         "shrine"
        ],
        "children": []
       }
      ]
     },
     {
      "id": "world.omens",
      "kind": "branch",
      "title": {
       "en": "Omens",
       "ru": "Знамения"
      },
      "summary": {
       "en": "Twelve omen cards. Hold one and click: it does its job at once and the card is gone. A throw or a kick only moves it. Sources: elite death (10%), the world (about 1 per 12 screens), caches, the wanderer, the hunt board and champions.",
       "ru": "Двенадцать карт-знамений."
      },
      "icon": "assets/icons/reveal_ui.png",
      "stats": [],
      "body": {
       "en": "Twelve omen cards. Hold one and click: it does its job at once and the card is gone. A throw or a kick only moves it. Sources: elite death (10%), the world (about 1 per 12 screens), caches, the wanderer, the hunt board and champions. The draw weight is 3 for every card except Plenty (1).",
       "ru": "Двенадцать карт-знамений. Возьмите карту в руку и кликните: она сразу делает своё дело, и карта исчезает. Бросок или пинок её только сдвигают. Источники: смерть элиты (10%), мир (около 1 на 12 экранов), тайники, странник, доска охоты и чемпионы. Вес выпадения 3 у каждой карты, кроме «Изобилия» (1)."
      },
      "recipe": null,
      "reactions": null,
      "tags": [
       "omen"
      ],
      "children": [
       {
        "id": "world.omens.mending",
        "kind": "omen",
        "title": {
         "en": "Omen of Mending",
         "ru": "Знамение исцеления"
        },
        "summary": {
         "en": "Heals 30 % of your maximum health",
         "ru": "Лечит 30 % максимума здоровья"
        },
        "icon": "assets/icons/mending_ui.png",
        "stats": [
         {
          "key": "heal",
          "label": {
           "en": "Healing, % of max health",
           "ru": "Лечение, % максимума здоровья"
          },
          "value": "30",
          "vanilla": null
         },
         {
          "key": "weight",
          "label": {
           "en": "Draw weight",
           "ru": "Вес при выпадении"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "drop",
          "label": {
           "en": "Drop chance from an elite, %",
           "ru": "Шанс выпадения из элиты, %"
          },
          "value": "10",
          "vanilla": null
         },
         {
          "key": "find",
          "label": {
           "en": "World finds per screen",
           "ru": "Находок в мире на экран"
          },
          "value": "1/12",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Heals 30 % of your maximum health at once. One use: hold it and click.",
         "ru": "Сразу лечит 30 % максимума здоровья. Одно использование: возьмите в руку и кликните."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "omen",
         "card"
        ],
        "children": []
       },
       {
        "id": "world.omens.refill",
        "kind": "omen",
        "title": {
         "en": "Omen of Renewal",
         "ru": "Знамение обновления"
        },
        "summary": {
         "en": "Refills every limited-use spell of the wand",
         "ru": "Возвращает все использования ограниченным заклинаниям"
        },
        "icon": "assets/icons/refill_ui.png",
        "stats": [
         {
          "key": "weight",
          "label": {
           "en": "Draw weight",
           "ru": "Вес при выпадении"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "drop",
          "label": {
           "en": "Drop chance from an elite, %",
           "ru": "Шанс выпадения из элиты, %"
          },
          "value": "10",
          "vanilla": null
         },
         {
          "key": "find",
          "label": {
           "en": "World finds per screen",
           "ru": "Находок в мире на экран"
          },
          "value": "1/12",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Every limited-use spell in your wand gets all its uses back. One use: hold it and click.",
         "ru": "Все заклинания с ограниченным числом применений в палочке снова полны. Одно использование: возьмите в руку и кликните."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "omen",
         "card"
        ],
        "children": []
       },
       {
        "id": "world.omens.bounty",
        "kind": "omen",
        "title": {
         "en": "Omen of Bounty",
         "ru": "Знамение щедрости"
        },
        "summary": {
         "en": "Gold: 10 % of your wallet, from 30 to 300",
         "ru": "Золото: 10 % кошелька, от 30 до 300"
        },
        "icon": "assets/icons/bounty_ui.png",
        "stats": [
         {
          "key": "share",
          "label": {
           "en": "Gold: share of the wallet, %",
           "ru": "Золото: доля кошелька, %"
          },
          "value": "10",
          "vanilla": null
         },
         {
          "key": "range",
          "label": {
           "en": "Gold at least / at most",
           "ru": "Золота не меньше / не больше"
          },
          "value": "30 / 300",
          "vanilla": null
         },
         {
          "key": "weight",
          "label": {
           "en": "Draw weight",
           "ru": "Вес при выпадении"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "drop",
          "label": {
           "en": "Drop chance from an elite, %",
           "ru": "Шанс выпадения из элиты, %"
          },
          "value": "10",
          "vanilla": null
         },
         {
          "key": "find",
          "label": {
           "en": "World finds per screen",
           "ru": "Находок в мире на экран"
          },
          "value": "1/12",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Gold worth 10 % of your wallet (30 to 300) appears at your feet. One use: hold it and click.",
         "ru": "Золото на 10 % вашего кошелька (от 30 до 300) падает вам под ноги. Одно использование: возьмите в руку и кликните."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "omen",
         "card"
        ],
        "children": []
       },
       {
        "id": "world.omens.stasis",
        "kind": "omen",
        "title": {
         "en": "Omen of Stasis",
         "ru": "Знамение стазиса"
        },
        "summary": {
         "en": "Freezes enemies within 250 px for 6 s",
         "ru": "Замораживает врагов в 250 пикс. на 6 с"
        },
        "icon": "assets/icons/stasis_ui.png",
        "stats": [
         {
          "key": "radius",
          "label": {
           "en": "Radius, px",
           "ru": "Радиус, px"
          },
          "value": "250",
          "vanilla": null
         },
         {
          "key": "duration",
          "label": {
           "en": "Duration, s",
           "ru": "Длительность, с"
          },
          "value": "6",
          "vanilla": null
         },
         {
          "key": "weight",
          "label": {
           "en": "Draw weight",
           "ru": "Вес при выпадении"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "drop",
          "label": {
           "en": "Drop chance from an elite, %",
           "ru": "Шанс выпадения из элиты, %"
          },
          "value": "10",
          "vanilla": null
         },
         {
          "key": "find",
          "label": {
           "en": "World finds per screen",
           "ru": "Находок в мире на экран"
          },
          "value": "1/12",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Every enemy within 250 px is frozen for 6 s (not bosses). One use: hold it and click.",
         "ru": "Каждый враг в радиусе 250 пикселей замерзает на 6 с (кроме боссов). Одно использование: возьмите в руку и кликните."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "omen",
         "card"
        ],
        "children": []
       },
       {
        "id": "world.omens.blink",
        "kind": "omen",
        "title": {
         "en": "Omen of the Step",
         "ru": "Знамение шага"
        },
        "summary": {
         "en": "Teleports you toward the aim, up to 250 px",
         "ru": "Переносит к цели, не дальше 250 пикс."
        },
        "icon": "assets/icons/blink_ui.png",
        "stats": [
         {
          "key": "range",
          "label": {
           "en": "Range, px",
           "ru": "Дальность, px"
          },
          "value": "250",
          "vanilla": null
         },
         {
          "key": "weight",
          "label": {
           "en": "Draw weight",
           "ru": "Вес при выпадении"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "drop",
          "label": {
           "en": "Drop chance from an elite, %",
           "ru": "Шанс выпадения из элиты, %"
          },
          "value": "10",
          "vanilla": null
         },
         {
          "key": "find",
          "label": {
           "en": "World finds per screen",
           "ru": "Находок в мире на экран"
          },
          "value": "1/12",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Teleports you toward the aim point, up to 250 px, only into free space. One use: hold it and click.",
         "ru": "Переносит вас к точке прицела, не дальше 250 пикселей и только в свободное место. Одно использование: возьмите в руку и кликните."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "omen",
         "card"
        ],
        "children": []
       },
       {
        "id": "world.omens.reveal",
        "kind": "omen",
        "title": {
         "en": "Omen of Sight",
         "ru": "Знамение зрения"
        },
        "summary": {
         "en": "Clears the fog of war within 600 px for 30 s",
         "ru": "Рассеивает туман в 600 пикс. на 30 с"
        },
        "icon": "assets/icons/reveal_ui.png",
        "stats": [
         {
          "key": "radius",
          "label": {
           "en": "Radius, px",
           "ru": "Радиус, px"
          },
          "value": "600",
          "vanilla": null
         },
         {
          "key": "duration",
          "label": {
           "en": "Duration, s",
           "ru": "Длительность, с"
          },
          "value": "30",
          "vanilla": null
         },
         {
          "key": "weight",
          "label": {
           "en": "Draw weight",
           "ru": "Вес при выпадении"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "drop",
          "label": {
           "en": "Drop chance from an elite, %",
           "ru": "Шанс выпадения из элиты, %"
          },
          "value": "10",
          "vanilla": null
         },
         {
          "key": "find",
          "label": {
           "en": "World finds per screen",
           "ru": "Находок в мире на экран"
          },
          "value": "1/12",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Clears the fog of war within 600 px for 30 s. One use: hold it and click.",
         "ru": "Рассеивает туман войны в радиусе 600 пикселей на 30 с. Одно использование: возьмите в руку и кликните."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "omen",
         "card"
        ],
        "children": []
       },
       {
        "id": "world.omens.smite",
        "kind": "omen",
        "title": {
         "en": "Omen of Wrath",
         "ru": "Знамение гнева"
        },
        "summary": {
         "en": "Up to 12 enemies within 300 px take 60 damage",
         "ru": "До 12 врагов в 300 пикс. получают 60 урона"
        },
        "icon": "assets/icons/smite_ui.png",
        "stats": [
         {
          "key": "targets",
          "label": {
           "en": "Targets at most",
           "ru": "Целей не больше"
          },
          "value": "12",
          "vanilla": null
         },
         {
          "key": "radius",
          "label": {
           "en": "Radius, px",
           "ru": "Радиус, px"
          },
          "value": "300",
          "vanilla": null
         },
         {
          "key": "damage",
          "label": {
           "en": "Electric damage each",
           "ru": "Электрический урон каждому"
          },
          "value": "60",
          "vanilla": null
         },
         {
          "key": "weight",
          "label": {
           "en": "Draw weight",
           "ru": "Вес при выпадении"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "drop",
          "label": {
           "en": "Drop chance from an elite, %",
           "ru": "Шанс выпадения из элиты, %"
          },
          "value": "10",
          "vanilla": null
         },
         {
          "key": "find",
          "label": {
           "en": "World finds per screen",
           "ru": "Находок в мире на экран"
          },
          "value": "1/12",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Up to 12 enemies within 300 px, nearest first, take 60 electric damage. One use: hold it and click.",
         "ru": "До 12 врагов в радиусе 300 пикселей, ближайшие первыми, получают 60 урона электричеством. Одно использование: возьмите в руку и кликните."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "omen",
         "card"
        ],
        "children": []
       },
       {
        "id": "world.omens.shell",
        "kind": "omen",
        "title": {
         "en": "Omen of the Shell",
         "ru": "Знамение панциря"
        },
        "summary": {
         "en": "You take no damage for 5 s",
         "ru": "Вы не получаете урона 5 с"
        },
        "icon": "assets/icons/shell_ui.png",
        "stats": [
         {
          "key": "duration",
          "label": {
           "en": "Duration, s",
           "ru": "Длительность, с"
          },
          "value": "5",
          "vanilla": null
         },
         {
          "key": "weight",
          "label": {
           "en": "Draw weight",
           "ru": "Вес при выпадении"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "drop",
          "label": {
           "en": "Drop chance from an elite, %",
           "ru": "Шанс выпадения из элиты, %"
          },
          "value": "10",
          "vanilla": null
         },
         {
          "key": "find",
          "label": {
           "en": "World finds per screen",
           "ru": "Находок в мире на экран"
          },
          "value": "1/12",
          "vanilla": null
         }
        ],
        "body": {
         "en": "You take no damage for 5 s. One use: hold it and click.",
         "ru": "Вы не получаете урона 5 с. Одно использование: возьмите в руку и кликните."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "omen",
         "card"
        ],
        "children": []
       },
       {
        "id": "world.omens.surge",
        "kind": "omen",
        "title": {
         "en": "Omen of the Surge",
         "ru": "Знамение прилива"
        },
        "summary": {
         "en": "The wand's mana stays full for 12 s",
         "ru": "Мана палочки полная 12 с"
        },
        "icon": "assets/icons/surge_ui.png",
        "stats": [
         {
          "key": "duration",
          "label": {
           "en": "Duration, s",
           "ru": "Длительность, с"
          },
          "value": "12",
          "vanilla": null
         },
         {
          "key": "weight",
          "label": {
           "en": "Draw weight",
           "ru": "Вес при выпадении"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "drop",
          "label": {
           "en": "Drop chance from an elite, %",
           "ru": "Шанс выпадения из элиты, %"
          },
          "value": "10",
          "vanilla": null
         },
         {
          "key": "find",
          "label": {
           "en": "World finds per screen",
           "ru": "Находок в мире на экран"
          },
          "value": "1/12",
          "vanilla": null
         }
        ],
        "body": {
         "en": "The mana of your wand is full and stays full for 12 s. One use: hold it and click.",
         "ru": "Мана палочки полная и остаётся полной 12 с. Одно использование: возьмите в руку и кликните."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "omen",
         "card"
        ],
        "children": []
       },
       {
        "id": "world.omens.feast",
        "kind": "omen",
        "title": {
         "en": "Omen of Plenty",
         "ru": "Знамение изобилия"
        },
        "summary": {
         "en": "Maximum health +10 for good",
         "ru": "Максимум здоровья +10 навсегда"
        },
        "icon": "assets/icons/feast_ui.png",
        "stats": [
         {
          "key": "hp",
          "label": {
           "en": "Max health, for good",
           "ru": "Максимум здоровья, навсегда"
          },
          "value": "+10",
          "vanilla": null
         },
         {
          "key": "weight",
          "label": {
           "en": "Draw weight",
           "ru": "Вес при выпадении"
          },
          "value": "1",
          "vanilla": null
         },
         {
          "key": "drop",
          "label": {
           "en": "Drop chance from an elite, %",
           "ru": "Шанс выпадения из элиты, %"
          },
          "value": "10",
          "vanilla": null
         },
         {
          "key": "find",
          "label": {
           "en": "World finds per screen",
           "ru": "Находок в мире на экран"
          },
          "value": "1/12",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Maximum health +10 for good, and 10 health at once. One use: hold it and click.",
         "ru": "Максимум здоровья +10 навсегда и сразу +10 здоровья. Одно использование: возьмите в руку и кликните."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "omen",
         "card"
        ],
        "children": []
       },
       {
        "id": "world.omens.charm",
        "kind": "omen",
        "title": {
         "en": "Omen of the Friend",
         "ru": "Знамение друга"
        },
        "summary": {
         "en": "Charms the nearest enemy within 200 px for 60 s",
         "ru": "Подчиняет ближайшего врага в 200 пикс. на 60 с"
        },
        "icon": "assets/icons/omens_charm_ui.png",
        "stats": [
         {
          "key": "radius",
          "label": {
           "en": "Radius, px",
           "ru": "Радиус, px"
          },
          "value": "200",
          "vanilla": null
         },
         {
          "key": "duration",
          "label": {
           "en": "Duration, s",
           "ru": "Длительность, с"
          },
          "value": "60",
          "vanilla": null
         },
         {
          "key": "weight",
          "label": {
           "en": "Draw weight",
           "ru": "Вес при выпадении"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "drop",
          "label": {
           "en": "Drop chance from an elite, %",
           "ru": "Шанс выпадения из элиты, %"
          },
          "value": "10",
          "vanilla": null
         },
         {
          "key": "find",
          "label": {
           "en": "World finds per screen",
           "ru": "Находок в мире на экран"
          },
          "value": "1/12",
          "vanilla": null
         }
        ],
        "body": {
         "en": "The nearest enemy within 200 px is charmed for 60 s (not bosses). One use: hold it and click.",
         "ru": "Ближайший враг в радиусе 200 пикселей очарован на 60 с (кроме боссов). Одно использование: возьмите в руку и кликните."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "omen",
         "card"
        ],
        "children": []
       },
       {
        "id": "world.omens.dig",
        "kind": "omen",
        "title": {
         "en": "Omen of the Mole",
         "ru": "Знамение крота"
        },
        "summary": {
         "en": "Clears soft ground within 45 px",
         "ru": "Убирает мягкую землю в 45 пикс."
        },
        "icon": "assets/icons/dig_ui.png",
        "stats": [
         {
          "key": "radius",
          "label": {
           "en": "Radius, px",
           "ru": "Радиус, px"
          },
          "value": "45",
          "vanilla": null
         },
         {
          "key": "weight",
          "label": {
           "en": "Draw weight",
           "ru": "Вес при выпадении"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "drop",
          "label": {
           "en": "Drop chance from an elite, %",
           "ru": "Шанс выпадения из элиты, %"
          },
          "value": "10",
          "vanilla": null
         },
         {
          "key": "find",
          "label": {
           "en": "World finds per screen",
           "ru": "Находок в мире на экран"
          },
          "value": "1/12",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Removes the soft ground within 45 px of you; hard rock stays. One use: hold it and click.",
         "ru": "Убирает мягкую землю в радиусе 45 пикселей вокруг вас; твёрдая порода остаётся. Одно использование: возьмите в руку и кликните."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "omen",
         "card"
        ],
        "children": []
       }
      ]
     },
     {
      "id": "world.caches",
      "kind": "place",
      "title": {
       "en": "Cache",
       "ru": "Тайник"
      },
      "summary": {
       "en": "Opens once: gold 40 to 180, a tincture or egg, an omen or relic",
       "ru": "Открывается раз: золото 40-180, настойка или яйцо, знамение или реликвия"
      },
      "icon": "assets/icons/fa_cache.png",
      "stats": [
       {
        "key": "gold",
        "label": {
         "en": "Gold by depth step",
         "ru": "Золото по ярусу глубины"
        },
        "value": "40, 60, 90, 130, 180",
        "vanilla": null
       },
       {
        "key": "egg",
        "label": {
         "en": "Wisp egg instead of a tincture, %",
         "ru": "Яйцо огонька вместо настойки, %"
        },
        "value": "25",
        "vanilla": null
       },
       {
        "key": "relic",
        "label": {
         "en": "Relic instead of an omen, %",
         "ru": "Реликвия вместо знамения, %"
        },
        "value": "15",
        "vanilla": null
       },
       {
        "key": "find",
        "label": {
         "en": "World finds per screen",
         "ru": "Находок в мире на экран"
        },
        "value": "1/30",
        "vanilla": null
       }
      ],
      "body": {
       "en": "A small chest of the mod (about 1 per 30 screens). The interact key opens it for free, no key needed. It throws out exactly THREE things and stays open and empty for good: gold by depth step (40, 60, 90, 130, 180); one tincture, or with 25% a wisp egg instead; one omen, or with 15% a relic you do not carry instead.",
       "ru": "Небольшой сундук мода (около 1 на 30 экранов). Клавиша взаимодействия открывает его бесплатно, ключ не нужен. Он выбрасывает ровно ТРИ вещи и навсегда остаётся открытым и пустым: золото по ярусу глубины (40, 60, 90, 130, 180); одну настойку или, с шансом 25%, вместо неё яйцо огонька; одно знамение или, с шансом 15%, вместо него реликвию, которой у вас нет."
      },
      "recipe": null,
      "reactions": null,
      "tags": [
       "cache"
      ],
      "children": []
     },
     {
      "id": "world.wisps",
      "kind": "branch",
      "title": {
       "en": "Wisps",
       "ru": "Огоньки"
      },
      "summary": {
       "en": "Four wisps, each hatched from an egg.",
       "ru": "Четыре огонька, каждый вылупляется из яйца."
      },
      "icon": "assets/icons/egg_lantern_ui.png",
      "stats": [],
      "body": {
       "en": "Four wisps, each hatched from an egg. Hold the egg and click: the egg is gone and a wisp follows you for the rest of the run. It flies through walls, cannot be hurt and hurts nothing by touch. You have at most ONE wisp: a new egg replaces the old one. Eggs come from elite death (3%), caches, the wanderer and champions (10%).",
       "ru": "Четыре огонька, каждый вылупляется из яйца. Возьмите яйцо в руку и кликните: яйцо исчезает, а огонёк следует за вами до конца забега. Он летает сквозь стены, его нельзя ранить, и он ничего не ранит при касании. У вас не больше ОДНОГО огонька: новое яйцо заменяет старого. Яйца выпадают из элиты (3%), тайников, у странника и из чемпионов (10%)."
      },
      "recipe": null,
      "reactions": null,
      "tags": [
       "wisp"
      ],
      "children": [
       {
        "id": "world.wisps.lantern",
        "kind": "wisp",
        "title": {
         "en": "Lantern Wisp",
         "ru": "Огонёк-фонарь"
        },
        "summary": {
         "en": "Lights a radius of 180 px around itself",
         "ru": "Освещает 180 пикс. вокруг себя"
        },
        "icon": "assets/icons/egg_lantern_ui.png",
        "stats": [
         {
          "key": "radius",
          "label": {
           "en": "Radius, px",
           "ru": "Радиус, px"
          },
          "value": "180",
          "vanilla": null
         },
         {
          "key": "drop",
          "label": {
           "en": "Drop chance from an elite, %",
           "ru": "Шанс выпадения из элиты, %"
          },
          "value": "3",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Hatches a Lantern Wisp that follows you for the rest of the run and lights a radius of 180 px around itself. A new egg replaces the old wisp. Hold it and click.",
         "ru": "Из него вылупится огонёк-фонарь: до конца забега он следует за вами и освещает круг радиусом 180 пикселей. Новое яйцо заменяет прежнего огонька. Возьмите в руку и кликните."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "wisp",
         "egg"
        ],
        "children": []
       },
       {
        "id": "world.wisps.magpie",
        "kind": "wisp",
        "title": {
         "en": "Magpie Wisp",
         "ru": "Огонёк-сорока"
        },
        "summary": {
         "en": "Gold within 110 px flies to you",
         "ru": "Золото в 110 пикс. летит к вам"
        },
        "icon": "assets/icons/egg_magpie_ui.png",
        "stats": [
         {
          "key": "radius",
          "label": {
           "en": "Radius, px",
           "ru": "Радиус, px"
          },
          "value": "110",
          "vanilla": null
         },
         {
          "key": "drop",
          "label": {
           "en": "Drop chance from an elite, %",
           "ru": "Шанс выпадения из элиты, %"
          },
          "value": "3",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Hatches a Magpie Wisp that follows you for the rest of the run; gold nuggets within 110 px of it fly to you. A new egg replaces the old wisp. Hold it and click.",
         "ru": "Из него вылупится огонёк-сорока: до конца забега он следует за вами, и золотые самородки в радиусе 110 пикселей от него летят к вам. Новое яйцо заменяет прежнего огонька. Возьмите в руку и кликните."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "wisp",
         "egg"
        ],
        "children": []
       },
       {
        "id": "world.wisps.sting",
        "kind": "wisp",
        "title": {
         "en": "Sting Wisp",
         "ru": "Огонёк-жало"
        },
        "summary": {
         "en": "Every 2.5 s shoots a bolt (5 damage) within 140 px",
         "ru": "Каждые 2.5 с стреляет (5 урона) в 140 пикс."
        },
        "icon": "assets/icons/egg_sting_ui.png",
        "stats": [
         {
          "key": "every",
          "label": {
           "en": "Shot every, s",
           "ru": "Выстрел раз в, с"
          },
          "value": "2.5",
          "vanilla": null
         },
         {
          "key": "damage",
          "label": {
           "en": "Damage",
           "ru": "Урон"
          },
          "value": "5",
          "vanilla": null
         },
         {
          "key": "range",
          "label": {
           "en": "Range, px",
           "ru": "Дальность, px"
          },
          "value": "140",
          "vanilla": null
         },
         {
          "key": "drop",
          "label": {
           "en": "Drop chance from an elite, %",
           "ru": "Шанс выпадения из элиты, %"
          },
          "value": "3",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Hatches a Sting Wisp that follows you for the rest of the run; every 2.5 s it shoots a weak bolt (5 damage) at the nearest enemy it can see within 140 px. A new egg replaces the old wisp. Hold it and click.",
         "ru": "Из него вылупится огонёк-жало: до конца забега он следует за вами и каждые 2,5 с стреляет слабым снарядом (5 урона) в ближайшего видимого врага в радиусе 140 пикселей. Новое яйцо заменяет прежнего огонька. Возьмите в руку и кликните."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "wisp",
         "egg"
        ],
        "children": []
       },
       {
        "id": "world.wisps.balm",
        "kind": "wisp",
        "title": {
         "en": "Balm Wisp",
         "ru": "Огонёк-бальзам"
        },
        "summary": {
         "en": "Heals you 1 health every 30 s",
         "ru": "Лечит 1 здоровья каждые 30 с"
        },
        "icon": "assets/icons/egg_balm_ui.png",
        "stats": [
         {
          "key": "heal",
          "label": {
           "en": "Heal, hp",
           "ru": "Лечение, hp"
          },
          "value": "1",
          "vanilla": null
         },
         {
          "key": "every",
          "label": {
           "en": "Every, s",
           "ru": "Раз в, с"
          },
          "value": "30",
          "vanilla": null
         },
         {
          "key": "drop",
          "label": {
           "en": "Drop chance from an elite, %",
           "ru": "Шанс выпадения из элиты, %"
          },
          "value": "3",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Hatches a Balm Wisp that follows you for the rest of the run and heals you 1 health every 30 s. A new egg replaces the old wisp. Hold it and click.",
         "ru": "Из него вылупится огонёк-бальзам: до конца забега он следует за вами и каждые 30 с лечит вас на 1 здоровье. Новое яйцо заменяет прежнего огонька. Возьмите в руку и кликните."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "wisp",
         "egg"
        ],
        "children": []
       }
      ]
     },
     {
      "id": "world.elites",
      "kind": "branch",
      "title": {
       "en": "Elites and champions",
       "ru": "Элита и чемпионы"
      },
      "summary": {
       "en": "Some enemies become elites: stronger, marked with an icon, and worth more.",
       "ru": "Некоторые враги становятся элитными: сильнее, помечены значком и приносят больше."
      },
      "icon": "assets/icons/champion.png",
      "stats": [],
      "body": {
       "en": "Some enemies become elites: stronger, marked with an icon, and worth more. There are 9 affixes and one rarer kind, the champion.",
       "ru": "Некоторые враги становятся элитными: сильнее, помечены значком и приносят больше. Есть 9 свойств и один более редкий вид, чемпион."
      },
      "recipe": null,
      "reactions": null,
      "tags": [
       "elite"
      ],
      "children": [
       {
        "id": "world.elites.how",
        "kind": "info",
        "title": {
         "en": "How elites appear",
         "ru": "Как появляются элитные враги"
        },
        "summary": {
         "en": "Every 30 frames the mod looks at the enemies within 600 px of you (at most 40 per look).",
         "ru": "Каждые 30 кадров мод смотрит на врагов в 600 px от вас (не больше 40 за раз)."
        },
        "icon": null,
        "stats": [
         {
          "key": "chance",
          "label": {
           "en": "Chance for an eligible enemy, %",
           "ru": "Шанс для подходящего врага, %"
          },
          "value": "4",
          "vanilla": null
         },
         {
          "key": "hp",
          "label": {
           "en": "Health ×",
           "ru": "Здоровье ×"
          },
          "value": "1.5",
          "vanilla": null
         },
         {
          "key": "affixes",
          "label": {
           "en": "Affixes",
           "ru": "Свойств"
          },
          "value": "9",
          "vanilla": null
         },
         {
          "key": "scan",
          "label": {
           "en": "Scan radius around the player, px",
           "ru": "Радиус проверки вокруг игрока, px"
          },
          "value": "600",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Every 30 frames the mod looks at the enemies within 600 px of you (at most 40 per look). Each enemy gets ONE roll in its life: 4% (times the setting `elite_rate`, the Hunting grounds biome and a running hunt). Bosses, worms, dragons, ghosts, charmed or very weak enemies and the player's own herd are not eligible.\n\nAn elite has health ×1.5 and ONE of 9 affixes with equal chance. When you kill it: the total gold is 3× what a normal enemy of the same base health drops (if that enemy had vanilla gold), and a 25% chance of a spell card of the mod, fitting the depth. It may also drop a relic (6%), an omen (10%) or a wisp egg (3%).",
         "ru": "Каждые 30 кадров мод смотрит на врагов в 600 px от вас (не больше 40 за раз). Каждый враг за свою жизнь получает ОДИН бросок: 4% (умноженные на настройку `elite_rate`, биом «Охотничьи угодья» и идущую охоту). Не подходят боссы, черви, драконы, призраки, очарованные и очень слабые враги, а также свои для игрока.\n\nУ элитного врага здоровье ×1.5 и ОДНО из 9 свойств с равным шансом. Если вы его убили: суммарное золото в 3 раза больше, чем у обычного врага с тем же базовым здоровьем (если у того было ванильное золото), и шанс 25% на карту заклинания мода по глубине. Также может выпасть реликвия (6%), знамение (10%) или яйцо огонька (3%)."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "elite"
        ],
        "children": []
       },
       {
        "id": "world.elites.swift",
        "kind": "elite",
        "title": {
         "en": "Swift",
         "ru": "Быстрый"
        },
        "summary": {
         "en": "Health x1.5, moves 30 % faster",
         "ru": "Здоровье x1.5, движется на 30 % быстрее"
        },
        "icon": "assets/icons/swift.png",
        "stats": [
         {
          "key": "hp",
          "label": {
           "en": "Health ×",
           "ru": "Здоровье ×"
          },
          "value": "1.5",
          "vanilla": null
         },
         {
          "key": "speed",
          "label": {
           "en": "Speed, %",
           "ru": "Скорость, %"
          },
          "value": "+30",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Health x1.5, moves 30 % faster\n\nMoves 30% faster (walk, run and fly speeds). Health is raised by ×1.5 like every elite.",
         "ru": "Здоровье x1.5, движется на 30 % быстрее\n\nДвижется на 30% быстрее (скорости ходьбы, бега и полёта). Здоровье повышено в 1.5 раза, как у любой элиты."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "elite",
         "affix"
        ],
        "children": []
       },
       {
        "id": "world.elites.armored",
        "kind": "elite",
        "title": {
         "en": "Armored",
         "ru": "Бронированный"
        },
        "summary": {
         "en": "Takes 25 % less projectile damage",
         "ru": "Получает на 25 % меньше урона от снарядов"
        },
        "icon": "assets/icons/armored.png",
        "stats": [
         {
          "key": "projectile",
          "label": {
           "en": "Projectile damage taken, %",
           "ru": "Получаемый урон от снарядов, %"
          },
          "value": "-25",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Takes 25 % less projectile damage\n\nTakes 25% less damage from projectiles.",
         "ru": "Получает на 25 % меньше урона от снарядов\n\nПолучает на 25% меньше урона от снарядов."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "elite",
         "affix"
        ],
        "children": []
       },
       {
        "id": "world.elites.frenzied",
        "kind": "elite",
        "title": {
         "en": "Frenzied",
         "ru": "Неистовый"
        },
        "summary": {
         "en": "Attacks 30 % more often",
         "ru": "Атакует на 30 % чаще"
        },
        "icon": "assets/icons/frenzied.png",
        "stats": [
         {
          "key": "attack",
          "label": {
           "en": "Attack rate, %",
           "ru": "Частота атак, %"
          },
          "value": "+30",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Attacks 30 % more often\n\nAttacks 30% more often: the waits between its attacks are divided by 1.3.",
         "ru": "Атакует на 30 % чаще\n\nАтакует на 30% чаще: паузы между атаками делятся на 1,3."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "elite",
         "affix"
        ],
        "children": []
       },
       {
        "id": "world.elites.regenerating",
        "kind": "elite",
        "title": {
         "en": "Regenerating",
         "ru": "Регенерирующий"
        },
        "summary": {
         "en": "Heals 2 % of its health a second, 3 s after a hit",
         "ru": "Лечит 2 % здоровья в секунду, спустя 3 с после удара"
        },
        "icon": "assets/icons/regenerating.png",
        "stats": [
         {
          "key": "regen",
          "label": {
           "en": "Regeneration, % of health per s",
           "ru": "Регенерация, % здоровья в с"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "still",
          "label": {
           "en": "Starts after no damage, s",
           "ru": "Начинается после покоя, с"
          },
          "value": "3",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Heals 2 % of its health a second, 3 s after a hit\n\nAfter 3 s without taking damage it heals 2% of its maximum health every second until hit again.",
         "ru": "Лечит 2 % здоровья в секунду, спустя 3 с после удара\n\nЧерез 3 с без урона лечит 2% максимума здоровья каждую секунду, пока его снова не ударят."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "elite",
         "affix"
        ],
        "children": []
       },
       {
        "id": "world.elites.volatile",
        "kind": "elite",
        "title": {
         "en": "Volatile",
         "ru": "Взрывной"
        },
        "summary": {
         "en": "Explodes 0.5 s after death: 15 damage, 20 px",
         "ru": "Взрыв через 0.5 с после смерти: 15 урона, 20 пикс."
        },
        "icon": "assets/icons/volatile.png",
        "stats": [
         {
          "key": "damage",
          "label": {
           "en": "Blast damage",
           "ru": "Урон взрыва"
          },
          "value": "15",
          "vanilla": null
         },
         {
          "key": "radius",
          "label": {
           "en": "Blast radius, px",
           "ru": "Радиус взрыва, px"
          },
          "value": "20",
          "vanilla": null
         },
         {
          "key": "delay",
          "label": {
           "en": "Blast after death, s",
           "ru": "Взрыв после смерти, с"
          },
          "value": "0.5",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Explodes 0.5 s after death: 15 damage, 20 px\n\nWhen it dies, 0.5 s later it explodes: 15 damage in a radius of 20 px.",
         "ru": "Взрыв через 0.5 с после смерти: 15 урона, 20 пикс.\n\nПосле смерти через 0.5 с взрывается: 15 урона в радиусе 20 px."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "elite",
         "affix"
        ],
        "children": []
       },
       {
        "id": "world.elites.shielded",
        "kind": "elite",
        "title": {
         "en": "Shielded",
         "ru": "Щитовой"
        },
        "summary": {
         "en": "Energy shield, radius 16 px",
         "ru": "Энергощит радиусом 16 пикс."
        },
        "icon": "assets/icons/shielded.png",
        "stats": [
         {
          "key": "radius",
          "label": {
           "en": "Shield radius, px",
           "ru": "Радиус щита, px"
          },
          "value": "16",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Energy shield, radius 16 px\n\nCarries the vanilla energy shield of the coward, assassin and necrobot enemies (radius 16 px). The shield is gone with the elite.",
         "ru": "Энергощит радиусом 16 пикс.\n\nНосит ванильный энергетический щит трусов, убийц и некроботов (радиус 16 px). Щит пропадает вместе с элитой."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "elite",
         "affix"
        ],
        "children": []
       },
       {
        "id": "world.elites.unyielding",
        "kind": "elite",
        "title": {
         "en": "Unyielding",
         "ru": "Несокрушимый"
        },
        "summary": {
         "en": "One hit takes at most 25 % of its health",
         "ru": "Удар снимает не больше 25 % здоровья"
        },
        "icon": "assets/icons/unyielding.png",
        "stats": [
         {
          "key": "cap",
          "label": {
           "en": "One hit takes at most, % of health",
           "ru": "Один удар забирает не больше, % здоровья"
          },
          "value": "25",
          "vanilla": null
         }
        ],
        "body": {
         "en": "One hit takes at most 25 % of its health\n\nNo single hit takes more than 25% of its maximum health. Damage over time is not capped.",
         "ru": "Удар снимает не больше 25 % здоровья\n\nНи один удар не отнимает больше 25% максимума здоровья. Урон со временем не ограничивается."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "elite",
         "affix"
        ],
        "children": []
       },
       {
        "id": "world.elites.blinking",
        "kind": "elite",
        "title": {
         "en": "Blinking",
         "ru": "Мерцающий"
        },
        "summary": {
         "en": "Hurt: jumps 40 to 90 px, once per 4 s",
         "ru": "Ранен: прыгает на 40-90 пикс., раз в 4 с"
        },
        "icon": "assets/icons/blinking.png",
        "stats": [
         {
          "key": "jump",
          "label": {
           "en": "Jump, px",
           "ru": "Прыжок, px"
          },
          "value": "40–90",
          "vanilla": null
         },
         {
          "key": "wait",
          "label": {
           "en": "Once per, s",
           "ru": "Не чаще раза в, с"
          },
          "value": "4",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Hurt: jumps 40 to 90 px, once per 4 s\n\nWhen hurt, at most once per 4 s, it jumps 40 to 90 px to a free spot in line of sight of its old place. Never into rock, never across a wall; with no such spot it does not blink.",
         "ru": "Ранен: прыгает на 40-90 пикс., раз в 4 с\n\nКогда его ранят, не чаще раза в 4 с, он прыгает на 40–90 px в свободное место, видимое из прежнего. Никогда в камень и не через стену; если места нет, прыжка не будет."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "elite",
         "affix"
        ],
        "children": []
       },
       {
        "id": "world.elites.splitting",
        "kind": "elite",
        "title": {
         "en": "Splitting",
         "ru": "Раздваивающийся"
        },
        "summary": {
         "en": "Splits in two copies with 50 % health",
         "ru": "Делится на две копии с 50 % здоровья"
        },
        "icon": "assets/icons/splitting.png",
        "stats": [
         {
          "key": "hp",
          "label": {
           "en": "Copies' health, %",
           "ru": "Здоровье копий, %"
          },
          "value": "50",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Splits in two copies with 50 % health\n\nOn death two NORMAL copies of the same enemy appear with 50% health. The copies are never elites and drop no gold, cards, relics, omens or eggs.",
         "ru": "Делится на две копии с 50 % здоровья\n\nПосле смерти появляются две ОБЫЧНЫЕ копии того же врага с 50% здоровья. Копии никогда не бывают элитными и не роняют золото, карты, реликвии, знамения и яйца."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "elite",
         "affix"
        ],
        "children": []
       },
       {
        "id": "world.elites.champion",
        "kind": "elite",
        "title": {
         "en": "Champion",
         "ru": "Чемпион"
        },
        "summary": {
         "en": "Health x3, two affixes, a bigger reward; every 12th elite",
         "ru": "Здоровье x3, два свойства, награда больше; каждый 12-й элитный"
        },
        "icon": "assets/icons/champion.png",
        "stats": [
         {
          "key": "hp",
          "label": {
           "en": "Health ×",
           "ru": "Здоровье ×"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "every",
          "label": {
           "en": "Every N-th elite",
           "ru": "Каждый N-й элитный враг"
          },
          "value": "12",
          "vanilla": null
         },
         {
          "key": "affixes",
          "label": {
           "en": "Affixes",
           "ru": "Свойств"
          },
          "value": "2",
          "vanilla": null
         },
         {
          "key": "gold",
          "label": {
           "en": "Gold × of a normal enemy",
           "ru": "Золото × обычного врага"
          },
          "value": "5",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Health x3, two affixes, a bigger reward; every 12th elite\n\nEvery 12th elite becomes a champion when it appears below the first Holy Mountain (depth step 2 or more); a 12th elite in the first biome stays plain and the champion waits for the next one. A champion has health ×3 instead of ×1.5, TWO different affixes, a second marker and a light.\n\nReward: gold in total 5× a normal enemy; ALWAYS one spell card of the mod (when you kill it) and one omen; a relic with 20% and a wisp egg with 10%. On the hunt board it counts as 2 heads. Switch: setting `champions_on`.",
         "ru": "Здоровье x3, два свойства, награда больше; каждый 12-й элитный\n\nКаждый 12-й элитный враг становится чемпионом, если появился ниже первой Святой горы (ярус глубины 2 и больше); 12-й элитный враг в первом биоме остаётся обычной элитой, а чемпион ждёт следующего. У чемпиона здоровье ×3 вместо ×1.5, ДВА разных свойства, второй значок и свет.\n\nНаграда: золота всего в 5 раз больше, чем у обычного врага; ВСЕГДА одна карта заклинания мода (если убили вы) и одно знамение; реликвия с шансом 20% и яйцо огонька с шансом 10%. На доске охоты считается за 2 головы. Выключатель: настройка `champions_on`."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "elite",
         "champion"
        ],
        "children": []
       }
      ]
     },
     {
      "id": "world.biomes",
      "kind": "branch",
      "title": {
       "en": "Biome properties",
       "ru": "Свойства биомов"
      },
      "summary": {
       "en": "When the world is made, each group of biomes that vanilla left without a modifier may get ONE of six properties of the mod with a chance of 15% (times the setting `biome_mod_rate`).",
       "ru": "При создании мира каждая группа биомов, которой ваниль не дала свойство, может получить ОДНО из шести свойств мода с шансом 15% (умноженным на настройку `biome_mod_rate`)."
      },
      "icon": null,
      "stats": [],
      "body": {
       "en": "When the world is made, each group of biomes that vanilla left without a modifier may get ONE of six properties of the mod with a chance of 15% (times the setting `biome_mod_rate`). A vanilla modifier is never replaced. Holy Mountains and boss arenas never get one.",
       "ru": "При создании мира каждая группа биомов, которой ваниль не дала свойство, может получить ОДНО из шести свойств мода с шансом 15% (умноженным на настройку `biome_mod_rate`). Ванильное свойство никогда не заменяется. Святые горы и арены боссов не получают свойств."
      },
      "recipe": null,
      "reactions": null,
      "tags": [
       "biome-modifier"
      ],
      "children": [
       {
        "id": "world.biomes.fa_armory",
        "kind": "place",
        "title": {
         "en": "Forgotten armory",
         "ru": "Забытый арсенал"
        },
        "summary": {
         "en": "Spell cards lie around",
         "ru": "Здесь валяются заклинания"
        },
        "icon": null,
        "stats": [],
        "body": {
         "en": "Forgotten armory: spell cards lie around\n\nAt world creation spell cards are added to the biome's props: each is a card of the level of the place, drawn from the whole spell pool. The chance of a card is tuned against the vanilla prop total of the biome.",
         "ru": "Забытый арсенал: здесь валяются заклинания\n\nПри создании мира в предметы биома добавляются карты заклинаний: каждая это карта уровня этого места, выбранная из всего пула заклинаний. Шанс карты подгоняется под ванильную сумму предметов биома."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "biome-modifier"
        ],
        "children": []
       },
       {
        "id": "world.biomes.fa_hunting_grounds",
        "kind": "place",
        "title": {
         "en": "Hunting grounds",
         "ru": "Охотничьи угодья"
        },
        "summary": {
         "en": "Elites x3 as likely",
         "ru": "Элитные враги в 3 раза вероятнее"
        },
        "icon": null,
        "stats": [
         {
          "key": "mult",
          "label": {
           "en": "Elite chance ×",
           "ru": "Шанс элиты ×"
          },
          "value": "3",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Hunting grounds: more elite enemies",
         "ru": "Охотничьи угодья: больше элитных врагов"
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "biome-modifier"
        ],
        "children": []
       },
       {
        "id": "world.biomes.fa_bountiful",
        "kind": "place",
        "title": {
         "en": "Rich veins",
         "ru": "Богатые жилы"
        },
        "summary": {
         "en": "Enemies carry 50 % more gold",
         "ru": "У врагов на 50 % больше золота"
        },
        "icon": null,
        "stats": [
         {
          "key": "gold",
          "label": {
           "en": "Gold from enemies, %",
           "ru": "Золото с врагов, %"
          },
          "value": "+50",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Rich veins: enemies carry more gold",
         "ru": "Богатые жилы: у врагов больше золота"
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "biome-modifier"
        ],
        "children": []
       },
       {
        "id": "world.biomes.fa_mana_springs",
        "kind": "place",
        "title": {
         "en": "Mana springs",
         "ru": "Источники маны"
        },
        "summary": {
         "en": "The held wand charges mana 30 % faster",
         "ru": "Палочка в руке набирает ману на 30 % быстрее"
        },
        "icon": null,
        "stats": [
         {
          "key": "charge",
          "label": {
           "en": "Mana charge speed, %",
           "ru": "Скорость зарядки маны, %"
          },
          "value": "+30",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Mana springs: wands recharge faster",
         "ru": "Источники маны: палочки заряжаются быстрее"
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "biome-modifier"
        ],
        "children": []
       },
       {
        "id": "world.biomes.fa_quiet",
        "kind": "place",
        "title": {
         "en": "Dead calm",
         "ru": "Мёртвый штиль"
        },
        "summary": {
         "en": "Enemies see you from 30 % less far",
         "ru": "Враги замечают вас на 30 % ближе"
        },
        "icon": null,
        "stats": [
         {
          "key": "range",
          "label": {
           "en": "Enemy detection range, %",
           "ru": "Дальность обнаружения врагами, %"
          },
          "value": "-30",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Dead calm: enemies notice you later",
         "ru": "Мёртвый штиль: враги замечают вас позже"
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "biome-modifier"
        ],
        "children": []
       },
       {
        "id": "world.biomes.fa_swarm",
        "kind": "place",
        "title": {
         "en": "Swarming",
         "ru": "Рой"
        },
        "summary": {
         "en": "More small enemies, each 25 % weaker",
         "ru": "Больше мелких врагов, каждый на 25 % слабее"
        },
        "icon": null,
        "stats": [
         {
          "key": "hp",
          "label": {
           "en": "Enemy health, %",
           "ru": "Здоровье врагов, %"
          },
          "value": "-25",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Swarming: more small enemies, each weaker\n\nMore small enemies appear at world creation, and every enemy there has 25% less health (an elite gets its ×1.5 on the reduced value).",
         "ru": "Рой: больше мелких врагов, но слабее\n\nПри создании мира появляется больше мелких врагов, а у каждого врага там на 25% меньше здоровья (элита получает свой ×1.5 от уменьшенного значения)."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "biome-modifier"
        ],
        "children": []
       }
      ]
     },
     {
      "id": "world.places",
      "kind": "branch",
      "title": {
       "en": "Holy Mountain and places",
       "ru": "Святая гора и места"
      },
      "summary": {
       "en": "The structures of the mod: an exchanger, a sell pit, a hunt board, a wand forge and a wanderer.",
       "ru": "Постройки мода: обменник, яма продажи, доска охоты, кузница жезлов и странник."
      },
      "icon": null,
      "stats": [],
      "body": {
       "en": "The structures of the mod: an exchanger, a sell pit, a hunt board, a wand forge and a wanderer. The exchanger, the hunt board, the forge and the cauldron stand in every Holy Mountain with a shop.",
       "ru": "Постройки мода: обменник, яма продажи, доска охоты, кузница жезлов и странник. Обменник, доска охоты, кузница и котёл стоят в каждой Святой горе с магазином."
      },
      "recipe": null,
      "reactions": null,
      "tags": [
       "place"
      ],
      "children": [
       {
        "id": "world.places.exchanger",
        "kind": "place",
        "title": {
         "en": "Exchanger",
         "ru": "Обменник"
        },
        "summary": {
         "en": "Swap three spell cards for one new card",
         "ru": "Обменивает три заклинания на одно новое"
        },
        "icon": "assets/icons/fa_exchanger.png",
        "stats": [
         {
          "key": "cards",
          "label": {
           "en": "Cards given",
           "ru": "Карт отдаётся"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "result",
          "label": {
           "en": "Cards received",
           "ru": "Карт получается"
          },
          "value": "1",
          "vanilla": null
         },
         {
          "key": "radius",
          "label": {
           "en": "Zone radius, px",
           "ru": "Радиус зоны, px"
          },
          "value": "32",
          "vanilla": null
         }
        ],
        "body": {
         "en": "An altar in every Holy Mountain with a shop, to the left of the first shop item. Put 3 or more free spell cards into its zone (a circle of 32 px): cards that lie loose, are not in a wand or an inventory and are not shop items. The 3 nearest are used up and ONE new card appears on the altar.\n\nLevel of the new card = the highest level of the three. Type = the majority type of the three (no majority: the type of the highest-level card). The card itself is drawn at random from the whole spell pool for that level and type; every exchange at the same altar gives a different card.",
         "ru": "Алтарь в каждой Святой горе с магазином, слева от первого товара. Положите в его зону (круг 32 px) 3 или больше свободных карт заклинаний: карт, которые просто лежат, не в палочке и не в инвентаре и не товары магазина. 3 ближайшие расходуются, а на алтаре появляется ОДНА новая карта.\n\nУровень новой карты равен наивысшему из трёх. Тип это самый частый тип из трёх (если такого нет, тип карты высшего уровня). Сама карта берётся случайно из всего пула заклинаний для этого уровня и типа; каждый обмен на одном алтаре даёт другую карту."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "holy-mountain"
        ],
        "children": []
       },
       {
        "id": "world.places.sellpit",
        "kind": "place",
        "title": {
         "en": "Sell pit",
         "ru": "Яма продажи"
        },
        "summary": {
         "en": "Buys one item, once: flask 25, tincture 60, relic 150 gold",
         "ru": "Покупает один предмет, один раз: склянка 25, настойка 60, реликвия 150"
        },
        "icon": "assets/icons/fa_sellpit.png",
        "stats": [
         {
          "key": "flask",
          "label": {
           "en": "Flask, gold",
           "ru": "Флакон, золото"
          },
          "value": "25",
          "vanilla": null
         },
         {
          "key": "tincture",
          "label": {
           "en": "Tincture, gold",
           "ru": "Настойка, золото"
          },
          "value": "60",
          "vanilla": null
         },
         {
          "key": "relic",
          "label": {
           "en": "Relic, gold",
           "ru": "Реликвия, золото"
          },
          "value": "150",
          "vanilla": null
         },
         {
          "key": "card",
          "label": {
           "en": "Spell card: share of the shop price, %",
           "ru": "Карта заклинания: доля цены в магазине, %"
          },
          "value": "30",
          "vanilla": null
         },
         {
          "key": "wand_max",
          "label": {
           "en": "Wand at most, gold",
           "ru": "Жезл не больше, золото"
          },
          "value": "600",
          "vanilla": null
         },
         {
          "key": "find",
          "label": {
           "en": "World finds per screen",
           "ru": "Находок в мире на экран"
          },
          "value": "1/30",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Sell pit: one item, once\n\nA pit in the world (about 1 per 30 screens). It takes exactly ONE item that you drop or throw onto it, pays a fixed price that is shown over the pit beforehand, and closes for good.\n\n**Prices:** a spell card 30% of its shop price (rounded down to 10, at least 10); a wand 10 + 4 per slot + 30% of the shop prices of its cards, at most 50% of the cheapest vanilla shop price of a wand of that size, and never above 600; a flask 25; a tincture 60; a relic 150. Selling is never better than a shop, so it cannot be farmed.",
         "ru": "Яма продажи: один предмет, один раз\n\nЯма в мире (около 1 на 30 экранов). Она принимает ровно ОДИН предмет, который вы бросите или уроните на неё, платит фиксированную цену, которая заранее показана над ямой, и закрывается навсегда.\n\n**Цены:** карта заклинания 30% цены в магазине (с округлением вниз до 10, не меньше 10); жезл 10 + 4 за слот + 30% цен карт в нём в магазине, не больше 50% самой дешёвой ванильной цены жезла такого размера и никогда не выше 600; флакон 25; настойка 60; реликвия 150. Продажа никогда не выгоднее магазина, так что фармить её нельзя."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "sell-pit"
        ],
        "children": []
       },
       {
        "id": "world.places.hunt",
        "kind": "place",
        "title": {
         "en": "Hunt board",
         "ru": "Доска охоты"
        },
        "summary": {
         "en": "Elites x2.5 as often; 30 gold a head, up to 6 heads",
         "ru": "Элитных в 2.5 раза больше; 30 золота за голову, до 6 голов"
        },
        "icon": "assets/icons/fa_board.png",
        "stats": [
         {
          "key": "mult",
          "label": {
           "en": "Elite chance × during a hunt",
           "ru": "Шанс элиты × во время охоты"
          },
          "value": "2.5",
          "vanilla": null
         },
         {
          "key": "pay",
          "label": {
           "en": "Gold per head × depth step",
           "ru": "Золото за голову × ярус глубины"
          },
          "value": "30",
          "vanilla": null
         },
         {
          "key": "max",
          "label": {
           "en": "Heads paid at most",
           "ru": "Оплачиваемых голов не больше"
          },
          "value": "6",
          "vanilla": null
         },
         {
          "key": "omen_at",
          "label": {
           "en": "Heads for an omen",
           "ru": "Голов для знамения"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "tincture_at",
          "label": {
           "en": "Heads for a tincture",
           "ru": "Голов для настойки"
          },
          "value": "6",
          "vanilla": null
         },
         {
          "key": "champion",
          "label": {
           "en": "Heads for a champion",
           "ru": "Голов за чемпиона"
          },
          "value": "2",
          "vanilla": null
         }
        ],
        "body": {
         "en": "Hunt taken: elites appear 2.5 times as often and every elite you kill counts.\n\nA notice board in every Holy Mountain with a shop (when elites are on). The interact key does two things in turn.\n\n1. **Pays a running hunt:** 30 gold × the depth step per elite head that YOU (or your projectile) killed since the hunt was taken, at most 6 heads; a champion counts as 2. With 3+ heads you also get an omen, with 6 heads a tincture too (a part whose mechanic is off becomes 60 gold × step). Zero heads pays nothing.\n2. **Offers the next hunt:** use the board again to take it, free. Until the next board is used the elite chance is ×2.5 and your heads are counted. One hunt at a time.",
         "ru": "Охота взята: элитные враги встречаются в 2,5 раза чаще, каждый убитый вами элитный враг засчитывается.\n\nДоска объявлений в каждой Святой горе с магазином (когда элита включена). Клавиша взаимодействия делает два дела по очереди.\n\n1. **Платит за идущую охоту:** 30 золота × ярус глубины за каждую голову элиты, убитой ВАМИ (или вашим снарядом) с тех пор, как охота взята, не больше 6 голов; чемпион считается за 2. При 3+ головах вы получаете ещё знамение, при 6 головах ещё и настойку (часть, механика которой выключена, превращается в 60 золота × ярус). Ноль голов не платит ничего.\n2. **Предлагает следующую охоту:** нажмите на доску ещё раз, чтобы взять её бесплатно. Пока вы не воспользуетесь следующей доской, шанс элиты ×2.5, а ваши головы считаются. Одна охота за раз."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "holy-mountain",
         "elite"
        ],
        "children": []
       },
       {
        "id": "world.places.forge",
        "kind": "place",
        "title": {
         "en": "Wand forge",
         "ru": "Кузница палочек"
        },
        "summary": {
         "en": "Improves a held wand up to 3 times, 80 to 360 gold",
         "ru": "Улучшает палочку в руке до 3 раз, 80-360 золота"
        },
        "icon": "assets/icons/fa_forge.png",
        "stats": [
         {
          "key": "price",
          "label": {
           "en": "Price by depth step, gold",
           "ru": "Цена по ярусу глубины, золото"
          },
          "value": "80, 120, 180, 260, 360",
          "vanilla": null
         },
         {
          "key": "max",
          "label": {
           "en": "Forgings per wand",
           "ru": "Улучшений на жезл"
          },
          "value": "3",
          "vanilla": null
         },
         {
          "key": "count",
          "label": {
           "en": "Improvements",
           "ru": "Улучшений в списке"
          },
          "value": "6",
          "vanilla": null
         }
        ],
        "body": {
         "en": "An anvil in every Holy Mountain with a shop. Each anvil offers ONE improvement of a wand, fixed by the world seed and the place and shown as text over the anvil: the name, the change and the price. Use it with a wand in your hand and enough gold: the wand changes once and the anvil is used up for good.\n\nA wand can be forged 3 times in its life. Price = the base price of the depth step (80, 120, 180, 260, 360) × (1 + forgings already on this wand). Every improvement has weight 2, the extra slot 1.",
         "ru": "Наковальня в каждой Святой горе с магазином. Каждая наковальня предлагает ОДНО улучшение жезла, определённое сидом мира и местом и показанное текстом над ней: название, изменение и цену. Воспользуйтесь ею с жезлом в руке и достаточным золотом: жезл меняется один раз, а наковальня расходуется навсегда.\n\nЖезл можно ковать 3 раза за всю жизнь. Цена = базовая цена яруса глубины (80, 120, 180, 260, 360) × (1 + число уже сделанных улучшений этого жезла). Вес каждого улучшения 2, дополнительного слота 1."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "holy-mountain",
         "forge"
        ],
        "children": [
         {
          "id": "world.places.forge.mana",
          "kind": "place",
          "title": {
           "en": "Mana +15 %",
           "ru": "Мана +15 %"
          },
          "summary": {
           "en": "Raises the wand's maximum mana by 15%, but by at least 30.",
           "ru": "Повышает максимум маны жезла на 15%, но не меньше чем на 30."
          },
          "icon": null,
          "stats": [
           {
            "key": "pct",
            "label": {
             "en": "Max mana, %",
             "ru": "Максимум маны, %"
            },
            "value": "+15",
            "vanilla": null
           },
           {
            "key": "min",
            "label": {
             "en": "At least",
             "ru": "Не меньше"
            },
            "value": "+30",
            "vanilla": null
           },
           {
            "key": "weight",
            "label": {
             "en": "Chance weight",
             "ru": "Вес при выборе"
            },
            "value": "2",
            "vanilla": null
           }
          ],
          "body": {
           "en": "Raises the wand's maximum mana by 15%, but by at least 30.",
           "ru": "Повышает максимум маны жезла на 15%, но не меньше чем на 30."
          },
          "recipe": null,
          "reactions": null,
          "tags": [
           "forge",
           "wand"
          ],
          "children": []
         },
         {
          "id": "world.places.forge.charge",
          "kind": "place",
          "title": {
           "en": "Mana charge +15 %",
           "ru": "Зарядка маны +15 %"
          },
          "summary": {
           "en": "Raises the wand's mana charge speed by 15%, but by at least 10.",
           "ru": "Повышает скорость зарядки маны жезла на 15%, но не меньше чем на 10."
          },
          "icon": null,
          "stats": [
           {
            "key": "pct",
            "label": {
             "en": "Mana charge speed, %",
             "ru": "Скорость зарядки маны, %"
            },
            "value": "+15",
            "vanilla": null
           },
           {
            "key": "min",
            "label": {
             "en": "At least",
             "ru": "Не меньше"
            },
            "value": "+10",
            "vanilla": null
           },
           {
            "key": "weight",
            "label": {
             "en": "Chance weight",
             "ru": "Вес при выборе"
            },
            "value": "2",
            "vanilla": null
           }
          ],
          "body": {
           "en": "Raises the wand's mana charge speed by 15%, but by at least 10.",
           "ru": "Повышает скорость зарядки маны жезла на 15%, но не меньше чем на 10."
          },
          "recipe": null,
          "reactions": null,
          "tags": [
           "forge",
           "wand"
          ],
          "children": []
         },
         {
          "id": "world.places.forge.delay",
          "kind": "place",
          "title": {
           "en": "Cast delay -10 %",
           "ru": "Задержка выстрела -10 %"
          },
          "summary": {
           "en": "Shortens the wand's cast delay by 10%, by at least 2 frames; it never goes below -15 frames.",
           "ru": "Сокращает задержку выстрела жезла на 10%, не меньше чем на 2 кадра; ниже -15 кадров она не опускается."
          },
          "icon": null,
          "stats": [
           {
            "key": "pct",
            "label": {
             "en": "Cast delay, %",
             "ru": "Задержка выстрела, %"
            },
            "value": "-10",
            "vanilla": null
           },
           {
            "key": "min",
            "label": {
             "en": "At least, frames",
             "ru": "Не меньше, кадры"
            },
            "value": "-2",
            "vanilla": null
           },
           {
            "key": "floor",
            "label": {
             "en": "Not below, frames",
             "ru": "Не ниже, кадры"
            },
            "value": "-15",
            "vanilla": null
           },
           {
            "key": "weight",
            "label": {
             "en": "Chance weight",
             "ru": "Вес при выборе"
            },
            "value": "2",
            "vanilla": null
           }
          ],
          "body": {
           "en": "Shortens the wand's cast delay by 10%, by at least 2 frames; it never goes below -15 frames.",
           "ru": "Сокращает задержку выстрела жезла на 10%, не меньше чем на 2 кадра; ниже -15 кадров она не опускается."
          },
          "recipe": null,
          "reactions": null,
          "tags": [
           "forge",
           "wand"
          ],
          "children": []
         },
         {
          "id": "world.places.forge.reload",
          "kind": "place",
          "title": {
           "en": "Recharge -10 %",
           "ru": "Перезарядка -10 %"
          },
          "summary": {
           "en": "Shortens the wand's recharge time by 10%, by at least 3 frames; it never goes below -15 frames.",
           "ru": "Сокращает время перезарядки жезла на 10%, не меньше чем на 3 кадра; ниже -15 кадров оно не опускается."
          },
          "icon": null,
          "stats": [
           {
            "key": "pct",
            "label": {
             "en": "Recharge time, %",
             "ru": "Время перезарядки, %"
            },
            "value": "-10",
            "vanilla": null
           },
           {
            "key": "min",
            "label": {
             "en": "At least, frames",
             "ru": "Не меньше, кадры"
            },
            "value": "-3",
            "vanilla": null
           },
           {
            "key": "floor",
            "label": {
             "en": "Not below, frames",
             "ru": "Не ниже, кадры"
            },
            "value": "-15",
            "vanilla": null
           },
           {
            "key": "weight",
            "label": {
             "en": "Chance weight",
             "ru": "Вес при выборе"
            },
            "value": "2",
            "vanilla": null
           }
          ],
          "body": {
           "en": "Shortens the wand's recharge time by 10%, by at least 3 frames; it never goes below -15 frames.",
           "ru": "Сокращает время перезарядки жезла на 10%, не меньше чем на 3 кадра; ниже -15 кадров оно не опускается."
          },
          "recipe": null,
          "reactions": null,
          "tags": [
           "forge",
           "wand"
          ],
          "children": []
         },
         {
          "id": "world.places.forge.spread",
          "kind": "place",
          "title": {
           "en": "Spread -3 degrees",
           "ru": "Разброс -3 градуса"
          },
          "summary": {
           "en": "Reduces the wand's spread by 3 degrees; it never goes below -15 degrees.",
           "ru": "Уменьшает разброс жезла на 3 градуса; ниже -15 градусов он не опускается."
          },
          "icon": null,
          "stats": [
           {
            "key": "step",
            "label": {
             "en": "Spread, degrees",
             "ru": "Разброс, градусы"
            },
            "value": "-3",
            "vanilla": null
           },
           {
            "key": "floor",
            "label": {
             "en": "Not below, degrees",
             "ru": "Не ниже, градусы"
            },
            "value": "-15",
            "vanilla": null
           },
           {
            "key": "weight",
            "label": {
             "en": "Chance weight",
             "ru": "Вес при выборе"
            },
            "value": "2",
            "vanilla": null
           }
          ],
          "body": {
           "en": "Reduces the wand's spread by 3 degrees; it never goes below -15 degrees.",
           "ru": "Уменьшает разброс жезла на 3 градуса; ниже -15 градусов он не опускается."
          },
          "recipe": null,
          "reactions": null,
          "tags": [
           "forge",
           "wand"
          ],
          "children": []
         },
         {
          "id": "world.places.forge.slot",
          "kind": "place",
          "title": {
           "en": "One more slot",
           "ru": "Ещё один слот"
          },
          "summary": {
           "en": "Adds one empty slot to the wand.",
           "ru": "Добавляет жезлу один пустой слот."
          },
          "icon": null,
          "stats": [
           {
            "key": "slots",
            "label": {
             "en": "Slots",
             "ru": "Слотов"
            },
            "value": "+1",
            "vanilla": null
           },
           {
            "key": "from",
            "label": {
             "en": "Offered from depth step",
             "ru": "Предлагается с яруса глубины"
            },
            "value": "3",
            "vanilla": null
           },
           {
            "key": "max",
            "label": {
             "en": "Wand capacity at most",
             "ru": "Вместимость жезла не больше"
            },
            "value": "20",
            "vanilla": null
           },
           {
            "key": "weight",
            "label": {
             "en": "Chance weight",
             "ru": "Вес при выборе"
            },
            "value": "1",
            "vanilla": null
           }
          ],
          "body": {
           "en": "Adds one empty slot to the wand. Offered only from depth step 3 and refused at 20 slots.",
           "ru": "Добавляет жезлу один пустой слот. Предлагается только с яруса глубины 3 и отклоняется при 20 слотах."
          },
          "recipe": null,
          "reactions": null,
          "tags": [
           "forge",
           "wand"
          ],
          "children": []
         }
        ]
       },
       {
        "id": "world.places.wanderer",
        "kind": "place",
        "title": {
         "en": "Wanderer",
         "ru": "Странник"
        },
        "summary": {
         "en": "Trades for a flask (500+ cells), a wand or a keepsake",
         "ru": "Меняет на склянку (500+ клеток), палочку или памятную вещь"
        },
        "icon": "assets/icons/fa_wanderer.png",
        "stats": [
         {
          "key": "flask",
          "label": {
           "en": "Asks: a flask, cells",
           "ru": "Просит флакон, клеток"
          },
          "value": "500+",
          "vanilla": null
         },
         {
          "key": "ask_weights",
          "label": {
           "en": "Chance weights: flask / wand / keepsake",
           "ru": "Веса выбора: флакон / жезл / памятка"
          },
          "value": "3 / 2 / 2",
          "vanilla": null
         },
         {
          "key": "gold_flask",
          "label": {
           "en": "Gold × depth step: flask",
           "ru": "Золото × ярус: флакон"
          },
          "value": "30",
          "vanilla": null
         },
         {
          "key": "gold_wand",
          "label": {
           "en": "Gold × depth step: wand",
           "ru": "Золото × ярус: жезл"
          },
          "value": "150",
          "vanilla": null
         },
         {
          "key": "gold_keep",
          "label": {
           "en": "Gold × depth step: keepsake",
           "ru": "Золото × ярус: памятка"
          },
          "value": "60",
          "vanilla": null
         },
         {
          "key": "find",
          "label": {
           "en": "World finds per screen",
           "ru": "Находок в мире на экран"
          },
          "value": "1/40",
          "vanilla": null
         }
        ],
        "body": {
         "en": "A hooded figure standing on a floor in the biomes (about 1 per 40 screens). Nothing can hurt or push it. Within 40 px it shows what it ASKS and what it GIVES. It asks for ONE thing that you must HOLD when pressing the interact key:\n\n- **A flask** with 500+ cells of the liquid it names (water, oil, blood, slime, whiskey or swamp water) for an omen and 30 gold × depth step;\n- **A wand** (any, taken with its cards) for a relic you do not carry (none left: a wisp egg; wisps off too: 150 gold × step);\n- **A keepsake** (a tincture, an omen or a wisp egg of the mod) for one item of each of the two other kinds (60 gold × step instead for a kind that is switched off).\n\nThe ask and the liquid are fixed by the world seed and the place. A wrong thing in hand takes nothing. After ONE trade the wanderer leaves for good.",
         "ru": "Фигура в капюшоне, стоящая на полу в биомах (около 1 на 40 экранов). Ничто не может её ранить или оттолкнуть. Вблизи, в 40 px, она показывает, что ПРОСИТ и что ДАЁТ. Она просит ОДНУ вещь, которую нужно ДЕРЖАТЬ в руке при нажатии клавиши взаимодействия:\n\n- **Флакон** с 500+ клеток названной жидкости (вода, нефть, кровь, слизь, виски или болотная вода) за знамение и 30 золота × ярус глубины;\n- **Жезл** (любой, вместе с картами) за реликвию, которой у вас нет (если все есть, то яйцо огонька; если и огоньки выключены, то 150 золота × ярус);\n- **Памятку** (настойку, знамение или яйцо огонька мода) за по одной вещи каждого из двух других видов (60 золота × ярус вместо вида, который выключен).\n\nПросьба и жидкость определены сидом мира и местом. Не то в руке ничего не заберёт. После ОДНОГО обмена странник уходит навсегда."
        },
        "recipe": null,
        "reactions": null,
        "tags": [
         "wanderer"
        ],
        "children": []
       }
      ]
     }
    ]
   },
   {
    "id": "codex",
    "kind": "info",
    "title": {
     "en": "Codex",
     "ru": "Кодекс"
    },
    "summary": {
     "en": "Pages: Recipes, Relics, Blessings, Omens, Wisps, Elites, Places.",
     "ru": "Страницы: Рецепты, Реликвии, Благословения, Знамения, Огоньки, Элиты, Места."
    },
    "icon": "assets/icons/fa_codex_btn.png",
    "stats": [
     {
      "key": "pages",
      "label": {
       "en": "Pages",
       "ru": "Страниц"
      },
      "value": "7",
      "vanilla": null
     }
    ],
    "body": {
     "en": "Pages: Recipes, Relics, Blessings, Omens, Wisps, Elites, Places.\n\nA book with its own window: the Codex lists everything of the mod you have found, on seven pages. An entry you have not found shows as ???. Finds are kept between runs; only the recipe pairs are per run. A message \"Codex: <name>\" appears when something new is found, and a dot on the codex button marks what you have not looked at yet. Switch: setting `codex_on`.",
     "ru": "Страницы: Рецепты, Реликвии, Благословения, Знамения, Огоньки, Элиты, Места.\n\nКнига с собственным окном: кодекс перечисляет всё из мода, что вы нашли, на семи страницах. Ненайденная запись показана как ???. Находки сохраняются между забегами; только пары рецептов относятся к забегу. Когда находится что-то новое, появляется сообщение «Кодекс: <название>», а точка на кнопке кодекса отмечает то, что вы ещё не смотрели. Выключатель: настройка `codex_on`."
    },
    "recipe": null,
    "reactions": null,
    "tags": [
     "codex"
    ],
    "children": []
   }
  ]
 }
};
