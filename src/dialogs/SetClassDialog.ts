import { ACTION_MESSAGE, DIALOG_IMAGE, DIALOG_MESSAGE } from "../config";
import { Action } from "../entities/Action";
import { Dialog } from "../entities/Dialog";
import { Effect } from "../entities/Effect";
import { Phrase } from "../entities/Phrase";
import { ICON_DECLINE, ICON_DICE } from "../icons";

export const setClassDialog = new Dialog(
  "setClass", 
  [
    "Уже давно ты путешествуешь и много исходила дорог. Одна их них прямо сейчас ведет тебя в еще неизведанный край. От встречных путников ты узнала, что если следовать дальше по тракту, то к концу дня можно будет добраться до небольшой деревеньки. Хороший вариант, чтобы пополнить припасы и отдохнуть.",
    "А пока, предвкушая встречи с новыми трудностями и опасностями, ты глядишь на свой:",
    "\"Выберите класс персонажа:\""
  ], 
  [
  new Phrase(
    "Воительница", "warrior", ICON_DICE,
    [],
    [ 
      new Action([ 
        new Effect("heroClass", "=", "warrior"),
        new Effect("heroClassName", "=", "Воительница"),
        new Effect("heroClassNameCase1", "=", "Воительницей"),
        new Effect(ACTION_MESSAGE, "=", `Ты глядишь на свой двуручный меч, прозванный Яйцерезом - впрочем если у врага нет яиц, с головой он тоже справится.`),
        new Effect(DIALOG_IMAGE, "=", "druid.png")
      ]),
    ],
    "applySetClass",
  ),
  new Phrase(
    "Жрица", "cleric", ICON_DICE,
    [],
    [ 
      new Action([ 
        new Effect("heroClass", "=", "cleric"),
        new Effect("heroClassName", "=", "Жрица"),
        new Effect("heroClassNameCase1", "=", "Жрицей"),
        new Effect(ACTION_MESSAGE, "=", `Ты глядишь на свой божественный символ, ведь твое оружие божье слово и доброта, но когда и этого мало - удар тяжелой булавой придется кстати.`),
        new Effect(DIALOG_IMAGE, "=", "bard.png")
      ]),
    ],
    "applySetClass",
  ),
  new Phrase(
    "Волшебница", "mage", ICON_DICE,
    [],
    [ 
      new Action([ 
        new Effect("heroClass", "=", "mage"),
        new Effect("heroClassName", "=", "Волшебница"),
        new Effect("heroClassNameCase1", "=", "Волшебницей"),
        new Effect(ACTION_MESSAGE, "=", `Ты глядишь на свой магический фолиант - бесценную книгу, вобравшую в себя все знания известных народов: от метания огненных стрел, до приготовления Вуншпунша.`),
        new Effect(DIALOG_IMAGE, "=", "druid.png")
      ]),
    ],
    "applySetClass",
  ),
  new Phrase(
    "Плутовка", "rogue", ICON_DICE,
    [],
    [ 
      new Action([ 
        new Effect("heroClass", "=", "rogue"),
        new Effect("heroClassName", "=", "Плутовка"),
        new Effect("heroClassNameCase1", "=", "Плутовкой"),
        new Effect(ACTION_MESSAGE, "=", `Ты глядишь на свой острый кинжал, ручной арбалет с парой дюжин болтов, длинную пеньковую веревку с крюком, ломик, набор отмычек, грим, набор шулерских карт - словом обычное содержание любой дамской сумочки.`),
        new Effect(DIALOG_IMAGE, "=", "bard.png")
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
    "Да", "yes", ICON_DICE,
    [],
    [],
    "tavern",
  ),
  new Phrase(
    "Назад", "no", ICON_DECLINE,
    [],
    [
      new Action([
        new Effect("heroClass", "=", ""),
        new Effect("heroClassName", "=", ""),
        new Effect("heroClassNameCase1", "=", ""),
        new Effect(DIALOG_MESSAGE, "=", "\"Выберите класс персонажа:\""),
        new Effect(DIALOG_IMAGE, "=", ""),
      ]),
    ],
    "setClass",
  ),
])