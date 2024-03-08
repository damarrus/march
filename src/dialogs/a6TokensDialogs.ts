import { ACTION_MESSAGE, DIALOG_IMAGE, DIALOG_MESSAGE } from "../config";
import { Action } from "../entities/Action";
import { Condition } from "../entities/Condition";
import { Dialog } from "../entities/Dialog";
import { Effect } from "../entities/Effect";
import { InputEffect } from "../entities/InputEffect";
import { InputPhrase } from "../entities/InputPhrase";
import { Phrase } from "../entities/Phrase";
import { ICON_ACTION, ICON_BEAR, ICON_COCKEREL, ICON_HAMMER, ICON_INTELLECT, ICON_POTION, ICON_QUESTION, ICON_SLEEP, ICON_START, ICON_STEAL, ICON_STRENGTH, ICON_TOKEN, ICON_WARRIOR, ICON_WREATH } from "../icons";

export const tokensDialog = new Dialog(
  "tokensChange",
  [
    "Перед шатром, где обменивают жетоны на различные призы, ты видишь двух мужчин. Один из них деревенский священник, судя по рясе, уже практически отталкивает второго от шатра.",
    "- Это я отец Иоанн! Это мой сан, я священник, Дэн! А у тебя просто сын. Пожалуйста, не зови себя больше отцом Дэном, люди путаться начинают.",
    "Продолжая протестовать Дэн все же решает оставить Иоанна в покое и удаляется, попутно пнув нищего с табличкой “Прошу меня содержать, потому как работать я не могу, ибо не желаю. Без всякого уважения, Ворчун Мишелье”",
    "После того, как ты наконец интересуешься у Иоанна, какие награды можно купить за жетоны, он протягивает тебе список призов:",
    `У тебя есть {contestTokens}${ICON_TOKEN}`
  ],
  [
    new Phrase(
      `Зелье лечения 7${ICON_TOKEN}`, "healingPotion", ICON_POTION,
      [],
      [
        new Action(
          [
            new Effect("contestTokens", "-=", 7),
            new Effect("itemHealingPotion", "=", true),
            new Effect("buyedByTokens", "=", true),
            new Effect(DIALOG_MESSAGE, "=", `Ты купила зелье лечения. У тебя осталось {contestTokens}${ICON_TOKEN}`)
          ],
          [
            new Condition("contestTokens", ">=", 7)
          ],
          [
            new Effect(DIALOG_MESSAGE, "=", `У тебя недостаточно ${ICON_TOKEN}. У тебя есть {contestTokens}${ICON_TOKEN}`)
          ]
        ),
      ],
      "tokensChange"
    ),
    new Phrase(
      `Плюшевый медвежонок 5${ICON_TOKEN}`, "bear", ICON_BEAR,
      [],
      [
        new Action(
          [
            new Effect("contestTokens", "-=", 5),
            new Effect("itemBear", "=", true),
            new Effect("buyedByTokens", "=", true),
            new Effect(DIALOG_MESSAGE, "=", `Ты купила медвежонка. У тебя осталось {contestTokens}${ICON_TOKEN}`)
          ],
          [
            new Condition("contestTokens", ">=", 5)
          ],
          [
            new Effect(DIALOG_MESSAGE, "=", `У тебя недостаточно ${ICON_TOKEN}. У тебя есть {contestTokens}${ICON_TOKEN}`)
          ]
        ),
      ],
      "tokensChange"
    ),
    new Phrase(
      `Леденец \"Сладкий петушок\" 3${ICON_TOKEN}`, "cockerel", ICON_COCKEREL,
      [],
      [
        new Action(
          [
            new Effect("contestTokens", "-=", 3),
            new Effect("itemCockerel", "=", true),
            new Effect("buyedByTokens", "=", true),
            new Effect(DIALOG_MESSAGE, "=", `Ты купила леденец "Сладкий петушок". У тебя осталось {contestTokens}${ICON_TOKEN}`)
          ],
          [
            new Condition("contestTokens", ">=", 3)
          ],
          [
            new Effect(DIALOG_MESSAGE, "=", `У тебя недостаточно ${ICON_TOKEN}. У тебя есть {contestTokens}${ICON_TOKEN}`)
          ]
        ),
      ],
      "tokensChange"
    ),
    new Phrase(
      `Венок из полевых цветов 2${ICON_TOKEN}`, "wreath", ICON_WREATH,
      [],
      [
        new Action(
          [
            new Effect("contestTokens", "-=", 2),
            new Effect("itemWreath", "=", true),
            new Effect("buyedByTokens", "=", true),
            new Effect(DIALOG_MESSAGE, "=", `Ты купила венок из полевых цветов. У тебя осталось {contestTokens}${ICON_TOKEN}`)
          ],
          [
            new Condition("contestTokens", ">=", 2)
          ],
          [
            new Effect(DIALOG_MESSAGE, "=", `У тебя недостаточно ${ICON_TOKEN}. У тебя есть {contestTokens}${ICON_TOKEN}`)
          ]
        ),
      ],
      "tokensChange"
    ),
    new Phrase( 
      `Уйти`, "orphan", ICON_ACTION, 
      [ new Condition("orphanMeet", "==", false) ], 
      [ new Action([ new Effect("orphanMeet", "=", true) ])], 
      "orphan" 
    ),
    new Phrase( 
      `Уйти`, "back", ICON_ACTION, 
      [ new Condition("orphanMeet", "==", true) ], 
      [], 
      "contestChoise" 
    ),
  ]
)
