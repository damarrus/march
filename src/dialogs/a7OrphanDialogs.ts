import { ACTION_MESSAGE, DIALOG_IMAGE, DIALOG_MESSAGE } from "../config";
import { Action } from "../entities/Action";
import { Condition } from "../entities/Condition";
import { Dialog } from "../entities/Dialog";
import { Effect } from "../entities/Effect";
import { Phrase } from "../entities/Phrase";
import { ICON_ACTION, ICON_BACK, ICON_COCKEREL, ICON_HIT, ICON_PRAY, ICON_SORRY, ICON_TOKEN } from "../icons";

export const orphanDialog = new Dialog(
  "orphan",
  [
    "Ты чувствуешь, что кто-то слегка похлопывает тебя по руке и обернувшись видишь маленького мальчика, который жалобным голосом спрашивает.",
    "Тетечка, а у вас не будет лишнего жетона? Мне всего один нужен, чтобы купить “Сладкого петушка”. А отец Иоанн за два жетона мне не отдает.",
    `У тебя есть {contestTokens}${ICON_TOKEN}`
  ],
  [
    new Phrase(
      `Дать 1${ICON_TOKEN} мальчику`, "1token", "",
      [
        new Condition("contestTokens", ">=", 1)
      ],
      [
        new Action([ 
          new Effect("contestTokens", "-=", 1), 
          new Effect("orphanDone", "=", true),
          new Effect("orphanTokens", "=", 1),
          new Effect(ACTION_MESSAGE, "=", "- Спасибо огромное, тетечка! Наконец-то я смогу купить “Сладкий петушок”."),
          new Effect(DIALOG_MESSAGE, "=", "Чем бы еще заняться?"),
        ])
      ],
      "contestChoise"
    ),
    new Phrase(
      `Дать 2${ICON_TOKEN} мальчику`, "2token", "",
      [
        new Condition("contestTokens", ">=", 2)
      ],
      [
        new Action([ 
          new Effect("contestTokens", "-=", 2), 
          new Effect("orphanDone", "=", true),
          new Effect("orphanTokens", "=", 2),
          new Effect(ACTION_MESSAGE, "=", "- Спасибо огромное, тетечка! Наконец-то я смогу купить “Сладкий петушок”."),
          new Effect(DIALOG_MESSAGE, "=", "Чем бы еще заняться?")
        ])
      ],
      "contestChoise"
    ),
    new Phrase(
      `Дать 3${ICON_TOKEN} мальчику`, "3token", "",
      [
        new Condition("contestTokens", ">=", 3)
      ],
      [
        new Action([ 
          new Effect("contestTokens", "-=", 3), 
          new Effect("orphanDone", "=", true),
          new Effect("orphanTokens", "=", 3),
          new Effect(ACTION_MESSAGE, "=", "- Ого, я тогда вместо “Петушка” медвежонка себе куплю! Спасибо вам огромное, красивая тетенька!"),
          new Effect(DIALOG_MESSAGE, "=", "Чем бы еще заняться?"),
        ])
      ],
      "contestChoise"
    ),
    new Phrase(
      `Дать 4${ICON_TOKEN} мальчику`, "4token", "",
      [
        new Condition("contestTokens", ">=", 4)
      ],
      [
        new Action([ 
          new Effect("contestTokens", "-=", 4), 
          new Effect("orphanDone", "=", true),
          new Effect("orphanTokens", "=", 4),
          new Effect(ACTION_MESSAGE, "=", "- Ого, я тогда вместо “Петушка” медвежонка себе куплю! Спасибо вам огромное, красивая тетенька!"),
          new Effect(DIALOG_MESSAGE, "=", "Чем бы еще заняться?"),
        ])
      ],
      "contestChoise"
    ),
    new Phrase(
      `Дать 5${ICON_TOKEN} мальчику`, "5token", "",
      [
        new Condition("contestTokens", ">=", 5)
      ],
      [
        new Action([ 
          new Effect("contestTokens", "-=", 5), 
          new Effect("orphanDone", "=", true),
          new Effect("orphanTokens", "=", 5),
          new Effect(ACTION_MESSAGE, "=", "- Ого, я тогда вместо “Петушка” медвежонка себе куплю! Спасибо вам огромное, красивая тетенька!"),
          new Effect(DIALOG_MESSAGE, "=", "Чем бы еще заняться?")
        ])
      ],
      "contestChoise"
    ),
    new Phrase(
      `Отдать все ${ICON_TOKEN} мальчику`, "alltoken", "",
      [
        new Condition("contestTokens", ">=", 6)
      ],
      [
        new Action([ 
          new Effect("orphanTokens", "=", "contestTokens"),
          new Effect("contestTokens", "=", 0), 
          new Effect("orphanDone", "=", true),
          new Effect(ACTION_MESSAGE, "=", "- Сколько?! Я…Спасибо вам огромное, госпожа сударыня!"),
          new Effect(DIALOG_MESSAGE, "=", "Чем бы еще заняться?")
        ])
      ],
      "contestChoise"
    ),
    new Phrase(
      `Дать мальчику поджопник`, "hit", ICON_HIT,
      [
        new Condition("contestTokens", ">", 0)
      ],
      [
        new Action([ 
          new Effect("orphanDone", "=", true),
          new Effect(ACTION_MESSAGE, "=", "- Ай! За что?! - мальчик в слезах убегает прочь."),
          new Effect(DIALOG_MESSAGE, "=", "Чем бы еще заняться?")

        ])
      ],
      "contestChoise"
    ),
    new Phrase(
      `Вежливо отказать мальчику`, "sorry", ICON_SORRY,
      [
        new Condition("contestTokens", "==", 0)
      ],
      [
        new Action([ 
          new Effect("orphanDone", "=", true),
          new Effect(ACTION_MESSAGE, "=", "- Извини, но я их уже потратила... - мальчик расстроился и ушел"),
          new Effect(DIALOG_MESSAGE, "=", "Чем бы еще заняться?")
        ])
      ],
      "contestChoise"
    ),
    new Phrase(
      `Вернуть покупки`, "refund", ICON_BACK,
      [
        new Condition("buyedByTokens", "==", true)
      ],
      [
        new Action(
          [ 
            new Effect("contestTokens", "+=", 7), 
            new Effect("itemHealingPotion", "=", false),
          ],
          [ new Condition("itemHealingPotion", "==", true) ]
        ),
        new Action(
          [ 
            new Effect("contestTokens", "+=", 5), 
            new Effect("itemBear", "=", false),
          ],
          [ new Condition("itemBear", "==", true) ]
        ),
        new Action(
          [ 
            new Effect("contestTokens", "+=", 3), 
            new Effect("itemCockerel", "=", false),
          ],
          [ new Condition("itemCockerel", "==", true) ]
        ),
        new Action(
          [ 
            new Effect("itemWreath", "+=", 2), 
            new Effect("itemWreath", "=", false),
          ],
          [ new Condition("itemWreath", "==", true) ]
        ),
        new Action([ 
          new Effect(ACTION_MESSAGE, "=", `Вы вернули все купленные предметы. Теперь у вас есть {contestTokens}${ICON_TOKEN}`),
          new Effect("buyedByTokens", "=", false)
        ])
      ],
      "orphan"
    ),
    new Phrase(
      "Дать петушка", "giveCockerel", ICON_COCKEREL,
      [ new Condition("itemCockerel", "==", true) ],
      [
        new Action([ 
          new Effect("itemCockerel", "=", false),
          new Effect("orphanDone", "=", true),
          new Effect(ACTION_MESSAGE, "=", "Вы правда просто так отдаете? Спасибо большое, тетечка, вы лучшая! - мальчик, прыгая от радости, убегает."),
          new Effect(DIALOG_MESSAGE, "=", "Чем бы еще заняться?")
        ])
      ],
      "contestChoise"
    ),
    new Phrase(
      "Дать медвежонка", "giveBear", ICON_COCKEREL,
      [ new Condition("itemBear", "==", true) ],
      [
        new Action([ 
          new Effect("itemBear", "=", false),
          new Effect("orphanDone", "=", true),
          new Effect(ACTION_MESSAGE, "=", "Вы правда просто так отдаете? Спасибо большое, тетечка, вы лучшая! - мальчик, прыгая от радости, убегает."),
          new Effect(DIALOG_MESSAGE, "=", "Чем бы еще заняться?")
        ])
      ],
      "contestChoise"
    ),
    new Phrase(
      "Договориться со священником", "otec", ICON_PRAY,
      [ new Condition("itemCockerel", "==", false), new Condition("contestTokens", ">=", 3) ],
      [
        new Action([ 
          new Effect("contestTokens", "-=", 3),
          new Effect("orphanDone", "=", true),
          new Effect(ACTION_MESSAGE, "=", "Несчастное дитя! Возможно получится договориться, чтобы ему отдали леденец задаром.\n\nВы договориваетесь со священником и он соглашается отдать петушка малышу.\n\n- Спасибо тетенька!"),
          new Effect(DIALOG_MESSAGE, "=", "Чем бы еще заняться?"),
        ])
      ],
      "contestChoise"
    ),
    new Phrase(
      "Я скоро вернусь", "wait", ICON_ACTION,
      [],
      [
        new Action([ 
          new Effect("orphanWait", "=", true),
          new Effect(DIALOG_MESSAGE, "=", "Чем бы еще заняться?"),
        ])
      ],
      "contestChoise"
    )
  ]
)
 