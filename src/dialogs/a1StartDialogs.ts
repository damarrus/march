import { ACTION_MESSAGE, CLEAR, DIALOG_IMAGE, DIALOG_MESSAGE } from "../config";
import { Action } from "../entities/Action";
import { Dialog } from "../entities/Dialog";
import { Effect } from "../entities/Effect";
import { Phrase } from "../entities/Phrase";
import { ICON_APPLY, ICON_CLERIC, ICON_DECLINE, ICON_DICE, ICON_MAGE, ICON_ROGUE, ICON_START, ICON_WALKING, ICON_WARRIOR } from "../icons";

export const startDialog = new Dialog(
  "start", [
    "Список команд для отладки (просто вводим их в чат в любой момент):",
    "clear - очистить все данные и начать игру заново",
    "save - сохраняет текущий прогресс. Повторный вызов перезапишет сохранение",
    "load - загружает сохраненный прогресс",
  ], [
    new Phrase(
      "Начать игру.", "start", ICON_START, 
      [],
      [
        new Action([ 
          new Effect("damage_received", "=", 0),
          new Effect("alcohol_effect", "=", 0),
          new Effect("contestTokens", "=", 0),
          new Effect("doneContests", "=", 0),
          new Effect("gold", "=", 0),
          new Effect("steal_prize_effect", "=", 0),
          new Effect("remorse_effect", "=", 0),
          new Effect("babka", "=", 0),
          new Effect(DIALOG_IMAGE, "=", "plash"),
        ])
      ], 
      "setClass"
    )
  ])

export const setClassDialog = new Dialog(
  "setClass", 
  [
    "Уже давно ты путешествуешь и много исходила дорог. Одна их них прямо сейчас ведет тебя в еще неизведанный край. От встречных путников ты узнала, что если следовать дальше по тракту, то к концу дня можно будет добраться до небольшой деревеньки. Хороший вариант, чтобы пополнить припасы и отдохнуть.",
    "А пока, предвкушая встречи с новыми трудностями и опасностями, ты глядишь на свой:",
  ], 
  [
  new Phrase(
    "Двуручный меч", "warrior", ICON_WARRIOR,
    [],
    [ 
      new Action([ 
        new Effect("heroClass", "=", "warrior"),
        new Effect("heroClassName", "=", "Воительница"),
        new Effect("heroClassNameCase1", "=", "Воительницей"),
        new Effect(ACTION_MESSAGE, "=", `Ты глядишь на свой двуручный меч, прозванный Рафаэлло - один удар, вместо тысячи слов.`),
        new Effect(DIALOG_IMAGE, "=", "warrior")
      ]),
    ],
    "applySetClass",
  ),
  new Phrase(
    "Божественный символ и булаву", "cleric", ICON_CLERIC,
    [],
    [ 
      new Action([ 
        new Effect("heroClass", "=", "cleric"),
        new Effect("heroClassName", "=", "Жрица"),
        new Effect("heroClassNameCase1", "=", "Жрицей"),
        new Effect(ACTION_MESSAGE, "=", `Ты глядишь на свой божественный символ, ведь твое оружие божье слово и доброта, но когда и этого мало - удар тяжелой булавой придется кстати.`),
        new Effect(DIALOG_IMAGE, "=", "klirik")
      ]),
    ],
    "applySetClass",
  ),
  new Phrase(
    "Магический фолиант", "mage", ICON_MAGE,
    [],
    [ 
      new Action([ 
        new Effect("heroClass", "=", "mage"),
        new Effect("heroClassName", "=", "Волшебница"),
        new Effect("heroClassNameCase1", "=", "Волшебницей"),
        new Effect(ACTION_MESSAGE, "=", `Ты глядишь на свой магический фолиант - бесценную книгу, вобравшую в себя все знания известных народов: от метания огненных стрел, до приготовления Вуншпунша.`),
        new Effect(DIALOG_IMAGE, "=", "mage_2")
      ]),
    ],
    "applySetClass",
  ),
  new Phrase(
    "Воровской набор", "rogue", ICON_ROGUE,
    [],
    [ 
      new Action([ 
        new Effect("heroClass", "=", "rogue"),
        new Effect("heroClassName", "=", "Плутовка"),
        new Effect("heroClassNameCase1", "=", "Плутовкой"),
        new Effect(ACTION_MESSAGE, "=", `Ты глядишь на свой острый кинжал, ручной арбалет с парой дюжин болтов, длинную пеньковую веревку с крюком, ломик, набор отмычек, грим, набор шулерских карт - словом обычное содержание любой дамской сумочки.`),
        new Effect(DIALOG_IMAGE, "=", "rogue")
      ]),
    ],
    "applySetClass",
  ),
  
])

export const applySetClassDialog = new Dialog(
  "applySetClass", 
  "Вы действительно хотите стать {heroClassNameCase1}?", 
  [
  new Phrase(
    "Да", "yes", ICON_APPLY,
    [],
    [
      new Action([
        new Effect(DIALOG_IMAGE, "=", "tavern2"),
      ]),
    ],
    "toVillage",
  ),
  new Phrase(
    "Назад", "no", ICON_DECLINE,
    [],
    [
      new Action([
        new Effect("heroClass", "=", ""),
        new Effect("heroClassName", "=", ""),
        new Effect("heroClassNameCase1", "=", ""),
        new Effect(DIALOG_IMAGE, "=", ""),
      ]),
    ],
    "setClass",
  ),
])

export const villageDialog = new Dialog(
  "toVillage", 
  [
    "К концу дня ты достигаешь деревни. Тебя встречают красивые, аккуратные домики, украшенные лентами и цветами заборчики и фонари главной улицы. Но усталость берет свое и ты стремишься в таверну “Арарат”.",
  ], 
  [
  new Phrase(
    "Зайти в таверну", "toTavern", ICON_WALKING,
    [],
    [
      new Action([
        new Effect(DIALOG_IMAGE, "=", "barmen"),
      ]),
    ],
    "toTavern",
  )    
])

export const gameOverDialog = new Dialog("gameover", "Продолжение следует...", 
    [
      new Phrase(
        "Начать заново", "again", ICON_START,
        [],
        [ 
          new Action([ 
            new Effect(CLEAR, "=", true),
          ]),
        ],
        "start",
      )
    ]
  )