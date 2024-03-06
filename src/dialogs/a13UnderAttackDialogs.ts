import { ACTION_MESSAGE, DIALOG_IMAGE, DIALOG_MESSAGE } from "../config";
import { Action } from "../entities/Action";
import { Condition } from "../entities/Condition";
import { Dialog } from "../entities/Dialog";
import { Effect } from "../entities/Effect";
import { Phrase } from "../entities/Phrase";
import { ICON_ACTION, ICON_CLERIC, ICON_MAGE, ICON_ROGUE, ICON_STRENGTH, ICON_WARRIOR } from "../icons";

export const chestAlarmOrGoDialog = new Dialog(
  "chestAlarmOrGo",
  "Мужики, поняв что их заметили, выхватывают ножи и громко свистят. С другой стороны площади им отвечает такой же свист и еще несколько человек в толпе выхватывают оружие. В ту же секунду начинают бить в набат, а перепуганные жители спешат убраться с улицы - похоже на деревню напали разбойники.",
  [
    new Phrase(
      "К бою", "leave", ICON_WARRIOR, 
      [new Condition("heroClass", "==", "warrior")], 
      [],
      "ebkaWar"
    ),
    new Phrase(
      "К бою", "leave", ICON_MAGE, 
      [new Condition("heroClass", "==", "mage")], 
      [],
      "ebkaWar"
    ),
    new Phrase(
      "К бою", "leave", ICON_ROGUE, 
      [new Condition("heroClass", "==", "rogue")], 
      [],
      "ebkaWar"
    ),
    new Phrase(
      "К бою", "leave", ICON_CLERIC, 
      [new Condition("heroClass", "==", "cleric")], 
      [],
      "ebkaWar"
    ),
  ]
)

export const chestLookDialog = new Dialog(
  "chestLook",
  [
    "Пристально глядя на злоумышленников, ты слышишь как кто-то в толпе кричит:",
    "   - \"Воры, грабеж! Тревога!\"",
    "Мужики, поняв что их заметили, выхватывают ножи и громко свистят. С другой стороны площади им отвечает такой же свист и еще несколько человек в толпе выхватывают оружие. В ту же секунду начинают бить в набат, а перепуганные жители спешат убраться с улицы - похоже на деревню напали разбойники.",
  ],
  [
    new Phrase(
      "К бою", "leave", ICON_WARRIOR, 
      [new Condition("heroClass", "==", "warrior")], 
      [],
      "ebkaWar"
    ),
    new Phrase(
      "К бою", "leave", ICON_MAGE, 
      [new Condition("heroClass", "==", "mage")], 
      [],
      "ebkaWar"
    ),
    new Phrase(
      "К бою", "leave", ICON_ROGUE, 
      [new Condition("heroClass", "==", "rogue")], 
      [],
      "ebkaWar"
    ),
    new Phrase(
      "К бою", "leave", ICON_CLERIC, 
      [new Condition("heroClass", "==", "cleric")], 
      [],
      "ebkaWar"
    ),
  ]
)



export const ebkaWarDialog = new Dialog(
  "ebkaWar", 
  [
    "Бабуля благодарит за помощь и протягивает тебе две золотых монеты.",
    "Довольная собой можешь отправиться в таверну отдыхать"
  ], 
  [
  new Phrase(
      "В таверну", "away5", ICON_WALKING,
      [],
      [
          new Action([
          new Effect("gold", "+=", 2),
          ]),
      ],
      "sleep",
      )   
])

export const ebkaClericDialog = new Dialog(
  "ebkaCleric", 
  [
    "Бабуля благодарит за помощь и протягивает тебе две золотых монеты.",
    "Довольная собой можешь отправиться в таверну отдыхать"
  ], 
  [
  new Phrase(
      "В таверну", "away5", ICON_WALKING,
      [],
      [
          new Action([
          new Effect("gold", "+=", 2),
          ]),
      ],
      "sleep",
      )   
])

export const ebkaMageDialog = new Dialog(
  "ebkaMage", 
  [
    "Бабуля благодарит за помощь и протягивает тебе две золотых монеты.",
    "Довольная собой можешь отправиться в таверну отдыхать"
  ], 
  [
  new Phrase(
      "В таверну", "away5", ICON_WALKING,
      [],
      [
          new Action([
          new Effect("gold", "+=", 2),
          ]),
      ],
      "sleep",
      )   
])

export const ebkaRogueDialog = new Dialog(
  "ebkaRogue", 
  [
    "Бабуля благодарит за помощь и протягивает тебе две золотых монеты.",
    "Довольная собой можешь отправиться в таверну отдыхать"
  ], 
  [
  new Phrase(
      "В таверну", "away5", ICON_WALKING,
      [],
      [
          new Action([
          new Effect("gold", "+=", 2),
          ]),
      ],
      "sleep",
      )   
])
 