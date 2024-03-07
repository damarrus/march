import { ACTION_MESSAGE, DIALOG_IMAGE, DIALOG_MESSAGE } from "../config";
import { Action } from "../entities/Action";
import { Dialog } from "../entities/Dialog";
import { Effect } from "../entities/Effect";
import { Phrase } from "../entities/Phrase";
import { ICON_ACTION, ICON_INTELLECT, ICON_SLEEP, ICON_START, ICON_STEAL, ICON_STRENGTH } from "../icons";

export const sleepDialog = new Dialog(
  "sleep",
  "Решив что на сегодня достаточно приключений, ты отправляешь спать в приготовленный для тебя трактирщиком номер.",
  [
    new Phrase("Идти спать", "goSleep", ICON_SLEEP, [], [ new Action([ new Effect(DIALOG_IMAGE, "=", "nikitos") ])], "nextDay")
  ]
)

export const nextDayDialog = new Dialog(
  "nextDay",
  [
    "На следующий день, ты просыпаешься от громких криков с улицы. Выйдя из таверны и протерев заспанные глаза, ты видишь что в центре деревенской площади на постаменте стоит тучный мужчина, судя по богатой одежде - деревенский староста, громко кричащий в жестяной рупор:",
    "- Эй, скорей! Все на праздник, будите родных, будите друзей! Будем праздновать скорей!",
  ],
  [
    new Phrase("Продолжить", "continue", ICON_START, [], [new Action([ new Effect(DIALOG_IMAGE, "=", "gnom") ])], "gnome")
  ]
)

export const gnomDialog = new Dialog(
  "gnome",
  [
    "К не в меру инициативному лидеру подходит, зевая, лысый гном и жалобным голосом пытается возразить:",
    "- Уважаемый Никтос, но ведь такая рань! Нам бы начать после полудня, а не сейча...",
    "- Мне похуй, Михель! Я так чувствую."
  ],
  [
    new Phrase("Продолжить", "continue", ICON_START, [], [], "gnomeNext")
  ]
)


export const gnomNextDialog = new Dialog(
  "gnomeNext",
  [
    "Поняв, что спорить с дураком бесполезно, жители начинают разбредаться по уже приготовленным палаткам с конкурсами, где можно заработать призовые жетоны. Собравший больше всего жетонов, как пояснил староста, и будет объявлен победителем праздника.",
  ],
  [
    new Phrase("Продолжить", "continue", ICON_START, [], [new Action([ new Effect(DIALOG_IMAGE, "=", "holiday_city") ])], "contestChoise")
  ]
)

