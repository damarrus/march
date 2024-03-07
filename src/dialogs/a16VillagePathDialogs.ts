import { ACTION_MESSAGE, DIALOG_IMAGE, DIALOG_MESSAGE } from "../config";
import { Action } from "../entities/Action";
import { Condition } from "../entities/Condition";
import { Dialog } from "../entities/Dialog";
import { Effect } from "../entities/Effect";
import { Phrase } from "../entities/Phrase";
import { ICON_ACTION, ICON_AMULET, ICON_APPLY, ICON_CLERIC, ICON_DECLINE, ICON_HAMMER, ICON_MAGE, ICON_MAGIC, ICON_MONEYBAG, ICON_POTION, ICON_PRAY, ICON_PUNCH, ICON_QUESTION, ICON_RAGE, ICON_ROGUE, ICON_START, ICON_STEAL, ICON_WARRIOR } from "../icons";

export const villageLeaveDialog = new Dialog(
  "villageLeave",
  [
    "Бой был тяжелым, но вместе с сэром Олэйджей тебе удалось перебить часть разбойников. Остальные бежали в ужасе перед твоей мощью.",
    "Рыцарь, позвякивая латами, отдает честь и одобрительно отзывается о твоих боевых навыках. Предварительно связав, он приводит оглушенного тобой разбойника в чувство. Тем временем перепуганные жители начинают снова выходить на улицу.",
    "Староста Никтас Заводила дрожащим голосом объявляет, что бандиты похитили нескольких женщин и призовое золото."
  ],
  [
    new Phrase(
      "Вызваться помочь", "help", ICON_APPLY,
      [],
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Ты без промедления говоришь, что готова помочь. Нет ничего важнее спасения несчастных женщин из плена.") ])
      ],
      "villageHelp"
    ),
    new Phrase(
      "Очень жаль, мне пора", "skip", ICON_DECLINE,
      [],
      [
        new Action([ new Effect(DIALOG_IMAGE, "=", "pobeg"), new Effect(ACTION_MESSAGE, "=", "Опять чужие проблемы решать? Нет уж, с тебя достаточно событий за этот день. Пора в дорогу.") ])
      ],
      "epilogue1"
    ),
    new Phrase(
      "Помогу, но за деньгу", "helpForMoney", ICON_MONEYBAG,
      [
        new Condition("steal_prize_effect", "==", 1)
      ],
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Почему бы и не помочь, если тебе заплатят. Почесав затылок, староста неохотно предлагает тебе забрать призовое золото у бандитов в счет награды.") ])
      ],
      "villageHelp"
    ),
    new Phrase(
      "Отдать золото", "sendGold", ICON_MONEYBAG,
      [ new Condition("steal_prize_effect", "==", 1) ],
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Ты делаешь удивленные глаза и спрашиваешь не то ли это золото, что было украдено. Староста, обрадовавшись находке, готов отдать его тебе за помощь со спасением женщин.") ])
      ],
      "villageHelp"
    ),
  ]
)
 
export const villagePalatkiDialog = new Dialog(
  "villagePalatki",
  [
    "Бой был тяжелым, но вместе с сэром Олэйджей тебе удалось перебить часть разбойников. Остальные бежали в ужасе перед твоей мощью.",
    "Рыцарь, позвякивая латами, отдает честь и одобрительно отзывается о твоих боевых навыках. Предварительно связав, он приводит оглушенного тобой разбойника в чувство. Тем временем перепуганные жители начинают снова выходить на улицу.",
    "Староста Никтас Заводила дрожащим голосом объявляет, что бандиты похитили нескольких женщин и призовое золото."
  ],
  [
    new Phrase(
      "Вызваться помочь", "help", ICON_APPLY,
      [],
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Ты без промедления говоришь, что готова помочь. Нет ничего важнее спасения несчастных женщин из плена.") ])
      ],
      "villageHelp"
    ),
    new Phrase(
      "Очень жаль, мне пора", "skip", ICON_DECLINE,
      [],
      [
        new Action([ new Effect(DIALOG_IMAGE, "=", "pobeg"), new Effect(ACTION_MESSAGE, "=", "Опять чужие проблемы решать? Нет уж, с тебя достаточно событий за этот день. Пора в дорогу.") ])
      ],
      "epilogue1"
    ),
    new Phrase(
      "Помогу, но деньгу", "helpForMoney", ICON_MONEYBAG,
      [
        new Condition("steal_prize_effect", "==", 1)
      ],
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Почему бы и не помочь, если тебе заплатят. Почесав затылок, староста неохотно предлагает тебе забрать призовое золото у бандитов в счет награды.") ])
      ],
      "villageHelp"
    ),
    new Phrase(
      "Отдать золото", "sendGold", ICON_MONEYBAG,
      [ new Condition("steal_prize_effect", "==", 1) ],
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Ты делаешь удивленные глаза и спрашиваешь не то ли это золото, что было украдено. Староста, обрадовавшись находке, готов отдать его тебе за помощь со спасением женщин.") ])
      ],
      "villageHelp"
    ),
  ]
)


export const villageHelpDialog = new Dialog(
  "villageHelp",
  [
    "Пока ты беседуешь с Никтосом, старый алкаш Вэйван Синий, отхлебывая из своей бездонной бутылки, материт кого-то “кто опять за старое взялся”. Пленный бандит пытается вымолить у сэра Олэйджи помилование. А местные просто встревоженно обсуждают все слухи, касающиеся разбойников."
  ],
  [
    new Phrase(
      "Допрос бандита", "dopros", ICON_PUNCH,
      [],
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Прикрикнув на бандита, чтобы перестал скулить, ты начинаешь задавать ему вопросы о местоположении логова разбойников и их предводителе. Напуганный пленник рассказывает, что их главаря зовут капитан Абус и логово находится в примерно в полудне пути от деревни, в лесу.") ])
      ],
      "villageAfter"
    ),
    new Phrase(
      "Поговорить с Вэйваном", "vaivan", ICON_QUESTION,
      [],
      [
        new Action([ new Effect(DIALOG_IMAGE, "=", "vovan"), new Effect(ACTION_MESSAGE, "=", "Окатывая тебя ужаснейшим перегаром, Вэйван рассказывает, что раньше был пиратом и плавал под парусом капитана Абуса. Бандиты что напали на деревню, это его банда. Дав примерное местоположение их лагеря и сказав, что раньше Абус любил поединки, старый морской волк начинает жаловаться на свою работу, но ты уже перестаешь слушать и уходишь.") ])
      ],
      "villageAfter"
    ),
    new Phrase(
      "Поспрашивать местных", "mestnie", ICON_QUESTION,
      [],
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Почему бы и не помочь, если тебе заплатят. Почесав затылок, староста неохотно предлагает тебе забрать призовое золото у бандитов в счет награды.") ])
        ,new Action([ new Effect(DIALOG_IMAGE, "=", "babkabad"),  ], [ new Condition("babka", "<=", 1) ]),
        new Action([ new Effect(DIALOG_IMAGE, "=", "babka"),  ], [ new Condition("babka", ">=", 2) ]),
      ],
      "villageMestnie"
    ),
  ]
)

export const villageMestnieDialog = new Dialog(
  "villageMestnie",
  [
    "Ты отправляешься к старой мудрице. Она живет не очень далеко и ты, следуя информации от местных, быстро находишь ее хижину. Когда ты подходишь к ней, то понимаешь что знаешь это старушку - это та самая бабуля, котенок которой залез вчера на дерево. Он тоже здесь, греется на солнышке. Бабка похоже тоже тебя узнает:"
  ],
  [
    new Phrase(
      "Продолжить", "question1", ICON_START,
      [
        
      ],
      [
        new Action(
          [
            new Effect(ACTION_MESSAGE, "=", "Сухо спросив, что тебе нужно, она показывает в направлении,  где должен быть  разбойничий лагерь и, демонстративно подхватив на руки котенка, заходит в дом громко хлопнув дверью.") 
          ],
          [
            new Condition("babka", "<=", 1)
          ]
        ),
        new Action(
          [ 
            new Effect(ACTION_MESSAGE, "=", "Радостно поздоровавшись, она с готовностью рассказывает тебе, где могут скрываться разбойники и, попросив подождать, убегает в хижину. Вернувшись, она протягивает тебе амулет. Раз в день, ты можешь призвать его силу и что бы ты не хотела сделать, все обязательно получится."),
            new Effect("babkaAmulet", "=", true)
          ],
          [
            new Condition("babka", ">=", 2)
          ]
        )
      ],
      "villageAfter"
    ),
  ]
)


export const villageAfterDialog = new Dialog(
  "villageAfter",
  [
    "Не мешкая, ты отправляешься к лесному логову разбойников.",
    "Уже начинает вечереть, когда ты видишь среди деревьев проблески костров. Как будешь действовать?"
  ],
  [
    new Phrase(
      "Подкрасться и напасть", "hide", ICON_STEAL,
      [],
      [],
      "villageHide"
    ),
    new Phrase(
      "Вызову Абуса на поединок", "call", ICON_RAGE,
      [],
      [new Action([ new Effect(DIALOG_IMAGE, "=", "abus")]),],
      "villageCallAbuse"
    ),
    new Phrase(
      "Со мной удача, просто зайду в лагерь", "amulet", ICON_AMULET,
      [
        new Condition("babkaAmulet", "==", true)
      ],
      [],
      "villageAmulet"
    ),
  ]
)


export const villageHideDialog = new Dialog(
  "villageHide",
  [
    "Незаметно вырубив бандита-часового, тебе удается прокрасться в лагерь.",
    "Практически все разбойники пьяны - они отмечают успешный налет и уже изрядно надрались. Идеальный момент для атаки - ты издаешь боевой клич и как ураган обрушиваешься на злодеев. Выбежавший из шатра Абус приказывает банде остановить тебя. Начинается танец со смертью под аккомпанемент воплей умирающих врагов и под:"
  ],
  [
    new Phrase(
      "Katy Perry - California Girls", "katy", "",
      [],
      [],
      "villageHide2"
    ),
    new Phrase(
      "Dope - Die motherfuker, die!", "dope", "",
      [],
      [],
      "villageHide2"
    ),
    new Phrase(
      "Witcher - Steel for Humans", "witcher", "",
      [],
      [],
      "villageHide2"
    ),
    new Phrase(
      "Kilogramm - Хащ-Хащ", "kilogramm", "",
      [],
      [],
      "villageHide2"
    ),
  ]
)


export const villageHide2Dialog = new Dialog(
  "villageHide2",
  [
    "Наконец, ты оглядываешься и больше не видишь вокруг живых или способных оказать сопротивление врагов. Тяжело дыша ты опускаешься на землю и…",
  ],
  [
    new Phrase(
      "Выпить зелье", "potion", ICON_POTION,
      [
        new Condition("itemHealingPotion", "==", true)
      ],
      [
        new Action([
          new Effect(ACTION_MESSAGE, "=", "...выпив зелье лечения, наблюдаешь как раны твои начинают затягиваться.\n\nБанда больше не представляет угрозы и ты освобождаешь пленных крестьянок, которые радостно обнимают тебя и благодарят за спасение. Ты предлагаешь им погрузить все добро и похищенное золото в лагере на стоящих здесь лошадей и вернуться в деревню. Где тебя, без сомнения, будут славить за уничтожение ужасного Абуса и его банды.")
          ,new Effect(DIALOG_IMAGE, "=", "klirik_light"), 
        ])
      ],
      "epilogue2"
    ),
    new Phrase(
      "Использовать амулет", "amulet", ICON_AMULET,
      [
        new Condition("babkaAmulet", "==", true)
      ],
      [
        new Action([
          new Effect(ACTION_MESSAGE, "=", "...призвав силу амулета, наблюдаешь как раны твои начинают затягиваться.\n\nБанда больше не представляет угрозы и ты освобождаешь пленных крестьянок, которые радостно обнимают тебя и благодарят за спасение. Ты предлагаешь им погрузить все добро и похищенное золото в лагере на стоящих здесь лошадей и вернуться в деревню. Где тебя, без сомнения, будут славить за уничтожение ужасного Абуса и его банды.")
          ,new Effect(DIALOG_IMAGE, "=", "klirik_light"),
        ])
      ],
      "epilogue2"
    ),
    new Phrase(
      "Продолжить", "continue", ICON_START,
      [
        new Condition("itemHealingPotion", "==", false),
        new Condition("babkaAmulet", "==", false)
      ],
      [
        new Action([
          new Effect(ACTION_MESSAGE, "=", "...теряешь сознание.\n\nТы приходишь в себя от громких криков с улицы. Оглядевшись, ты понимаешь что находишься в своем номере в таверне “Арарат”. Неужели все это тебе приснилось? Но выйдя на улицу, ты видишь ликующую толпу, восхваляющую тебя за уничтожение ужасного Абуса и его банды.")
          ,new Effect(DIALOG_IMAGE, "=", "klirik_light"),
        ])
      ],
      "epilogue2"
    ),
  ]
)

export const villageCallAbuseDialog = new Dialog(
  "villageCallAbuse",
  [
    "Быстро вырубив бандита-часового, ты без проблем заходишь прямо в лагерь. Разбойники не сразу тебя замечают - они отмечают успешный налет и уже изрядно надрались. На тебя обращают внимание, лишь когда ты громко кричишь имя Абуса, вызывая его на поединок.",
    "Выбежавший из шатра Абус яростно вращая глазами выхватывает меч и орет:",
    "- Все назад! Я сам покажу этой женщине, где ее место!",
  ],
  [
    new Phrase(
      "Вступить в бой", "warrior", ICON_WARRIOR,
      [ new Condition("heroClass", "==", "warrior") ],
      [ new Action([ 
        new Effect(ACTION_MESSAGE, "=", "Широко размахнувшись Рафаэлло, ты встаешь в боевую стойку. Подняв над головой меч, капитан снова яростно орет и бросается на тебя. Начинается танец со смертью под аккомпанемент звона стали, воплей Абуса и:") 
      ])],
      "villageCallAbuse2"
    ),
    new Phrase(
      "Вступить в бой", "cleric", ICON_CLERIC,
      [ new Condition("heroClass", "==", "cleric") ],
      [ new Action([ 
        new Effect(ACTION_MESSAGE, "=", "Да свершится суд божий! Взвесив в руке булаву, ты шепчешь молитву. Подняв над головой меч, капитан снова яростно орет и бросается на тебя. Начинается танец со смертью под аккомпанемент звона стали, воплей Абуса и:") 
      ])],
      "villageCallAbuse2"
    ),
    new Phrase(
      "Вступить в бой", "mage", ICON_MAGE,
      [ new Condition("heroClass", "==", "mage") ],
      [ new Action([ 
        new Effect(ACTION_MESSAGE, "=", "Проговорив заклинание, ты призываешь шаровую молнию в своей руке. Подняв над головой меч, капитан снова яростно орет и бросается на тебя. Начинается танец со смертью под аккомпанемент звона стали, треска заклинаний, воплей Абуса и:") 
      ])],
      "villageCallAbuse2"
    ),
    new Phrase(
      "Вступить в бой", "rogue", ICON_ROGUE,
      [ new Condition("heroClass", "==", "rogue") ],
      [ new Action([ 
        new Effect(ACTION_MESSAGE, "=", "Зарядив арбалет, во вторую руку ты берешь свой острый кинжал. Подняв над головой меч, капитан яростно орет и бросается на тебя. Начинается танец со смертью под аккомпанемент звона стали, воплей Абуса и:") 
      ])],
      "villageCallAbuse2"
    ),
  ]
)

export const villageCallAbuse2 = new Dialog(
  "villageCallAbuse2",
  "",
  [
    new Phrase(
      "Katy Perry - California Girls", "katy", "",
      [],
      [],
      "villageCallAbuse3"
    ),
    new Phrase(
      "Dope - Die motherfuker, die!", "dope", "",
      [],
      [],
      "villageCallAbuse3"
    ),
    new Phrase(
      "Witcher - Steel for Humans", "witcher", "",
      [],
      [],
      "villageCallAbuse3"
    ),
    new Phrase(
      "Kilogramm - Хащ-Хащ", "kilogramm", "",
      [],
      [],
      "villageCallAbuse3"
    ),
  ]
)


export const villageCallAbuse3 = new Dialog(
  "villageCallAbuse3",
  "Так гораздо веселее!",
  [
    new Phrase(
      "Продолжить", "warrior", ICON_START,
      [ new Condition("heroClass", "==", "warrior") ],
      [],
      "villageCallAbuseWarrior"
    ),
    new Phrase(
      "Продолжить", "cleric", ICON_START,
      [ new Condition("heroClass", "==", "cleric") ],
      [],
      "villageCallAbuseCleric"
    ),
    new Phrase(
      "Продолжить", "mage", ICON_START,
      [ new Condition("heroClass", "==", "mage") ],
      [],
      "villageCallAbuseMage"
    ),
    new Phrase(
      "Продолжить", "rogue", ICON_START,
      [ new Condition("heroClass", "==", "rogue") ],
      [],
      "villageCallAbuseRogue"
    ),
  ]
)

export const villageCallAbuseWarrior = new Dialog(
  "villageCallAbuseWarrior",
  "Здоровяк силен, но не сильнее тебя. При очередной атаке бандита ты вкладываешь в ответный удар всю свою мощь. Клинки скрещиваются и Абус, отшатывается от удара Рафаэлло - этой заминки более чем достаточно. Прокрутив в руках меч, ты:",
  [
    new Phrase(
      "Пронзаешь им врага", "hit", ICON_WARRIOR,
      [],
      [ new Action([ new Effect(ACTION_MESSAGE, "=", "Вложив в удар всю силу, ты вгоняешь клинок по самую рукоятку в грудь негодяя. Издав булькающий звук, он удивленно смотрит на тебя и, пробормотав что-то невероятно сексистское, валится на землю.") ])],
      "villageCallAbuse4"
    ),
    new Phrase(
      "Оглушаешь врага рукоятью", "stun", ICON_HAMMER,
      [],
      [ new Action([ new Effect(ACTION_MESSAGE, "=", "Ты крепко бьешь бандита по голове, отправляя его в нокаут. Падая он также ударяется лицом прямо о камень, к твоему большому удовольствию. Ты ставишь ногу на бессознательного противника.") ])],
      "villageCallAbuse4"
    ),
  ]
)

export const villageCallAbuseCleric = new Dialog(
  "villageCallAbuseCleric",
  "Здоровяк силен, но с тобой Господь. При очередной атаке бандита ты призываешь ослепляющий столб света. Абус, закрывая глаза, отшатывается - этой заминки более чем достаточно. Размахнувшись булавой, ты:",
  [
    new Phrase(
      "Покарать врага", "hit", ICON_CLERIC,
      [],
      [ new Action([ new Effect(ACTION_MESSAGE, "=", "Вложив в удар всю силу, ты опускаешь оружие на голову негодяя. Раздается громкий треск. Абус удивленно смотрит на тебя и, пробормотав что-то невероятно сексистское, валится на землю.") ])],
      "villageCallAbuse4"
    ),
    new Phrase(
      "Оглушаешь врага рукоятью", "stun", ICON_HAMMER,
      [],
      [ new Action([ new Effect(ACTION_MESSAGE, "=", "Ты крепко бьешь бандита по голове рукоятью, отправляя его в нокаут. Падая он также ударяется лицом прямо о камень, к твоему большому удовольствию. Ты ставишь ногу на бессознательного противника.") ])],
      "villageCallAbuse4"
    ),
  ]
)

export const villageCallAbuseMage = new Dialog(
  "villageCallAbuseMage",
  "Здоровяк силен, но ты носитель тайных знаний. При очередной атаке бандита ты призываешь саму силу земли. Ноги Абуса начинают вязнуть в появившемся под ними зыбучем песке - этой заминки более чем достаточно. Громко произнеся заклинание, ты:",
  [
    new Phrase(
      "Похоронить врага", "hit", ICON_MAGE,
      [],
      [ new Action([ new Effect(ACTION_MESSAGE, "=", "Абуса начинает все глубже засасывать вглубь песков. И под конец, когда его голова уже готова скрыться под землей, он отчаянно орет что-то невероятно сексистское, после чего пропадает навеки.") ])],
      "villageCallAbuse4"
    ),
    new Phrase(
      "Оглушаешь врага", "stun", ICON_HAMMER,
      [],
      [ new Action([ new Effect(ACTION_MESSAGE, "=", "Превращаешь зыбучий песок в твердый гранит. Из земли вверх вылетает каменный столб, который отправляет негодяя в нокаут. Ты ставишь ногу на бессознательного противника.") ])],
      "villageCallAbuse4"
    ),
  ]
)

export const villageCallAbuseRogue = new Dialog(
  "villageCallAbuseRogue",
  "Здоровяк силен, но ты проворнее. (дописать)",
  [
    new Phrase(
      "Добить врага", "hit", ICON_WARRIOR,
      [],
      [ new Action([ new Effect(ACTION_MESSAGE, "=", "Вложив в удар всю силу, ты опускаешь оружие на голову негодяя. Раздается громкий треск. Абус удивленно смотрит на тебя и, пробормотав что-то невероятно сексистское, валится на землю.") ])],
      "villageCallAbuse4"
    ),
    new Phrase(
      "Оглушить врага", "stun", ICON_HAMMER,
      [],
      [ new Action([ new Effect(ACTION_MESSAGE, "=", "Ты крепко бьешь бандита по голове рукоятью, отправляя его в нокаут. Падая он также ударяется лицом прямо о камень, к твоему большому удовольствию. Ты ставишь ногу на бессознательного противника.") ])],
      "villageCallAbuse4"
    ),
  ]
)

export const villageCallAbuse4 = new Dialog(
  "villageCallAbuse4",
  "Бандиты, видя твое неоспоримое превосходство, бросают оружие и, освободив женщин, сдаются в плен. Крестьянки помогают тебе связать разбойников, после чего ты посылаешь одну из женщин за ополченцами и сэром Олэйджей Стеной.",
  [
    new Phrase(
      "Продолжить", "continue", ICON_START,
      [],
      [new Action([ new Effect(DIALOG_IMAGE, "=", "klirik_light"),])],
      "epilogue2"
    ),
  ]
)

export const villageAmuletDialog = new Dialog(
  "villageAmulet",
  [
    "Призвав силу амулета, ты чувствуешь как все сомнения, что были в мыслях, улетают прочь.",
    "Направляясь в лагерь, ты видишь бандита-часового, прислонившегося к дереву. Кажется еще минуту назад он оглядывался по сторонам, но сейчас уже просто спит на посту. Проход свободен.",
    "В самом лагере ты видишь пьяных разбойников - они отмечают успешный налет и уже изрядно надрались. На тебя обращают внимание, лишь когда ты вежливо откашлявшись интересуешься, где можно найти капитана Абуса. В это время сам капитан выходит из палатки. Ты улыбаешься ему и его банде и вежливо просишь:"
  ],
  [
    new Phrase(
      "Перебить друг друга", "continue1", ICON_PUNCH,
      [],
      [],
      "villageAmuletAfter1"
    ),
    new Phrase(
      "Перестать совершать преступления.", "continue2", ICON_PRAY,
      [],
      [],
      "villageAmuletAfter2"
    ),
  ]
)

export const villageAmuletAfter1Dialog = new Dialog(
  "villageAmuletAfter1",
  [
    "Абус, громко захохотав, приказывает схватить тебя. Однако ему возражает другой бандит, с которым потом начинает спорить третий. Слово за слово и все разбойники бросаются друг на друга с оружием. Непринужденно подойдя к сидящим под деревом пленным крестьянкам, ты быстро вскрываешь замки от их кандалов. За это время бой в лагере утихает - бандиты перебили друг друга.",
    "Банда больше не представляет угрозы, а крестьянки радостно обнимают тебя и благодарят за спасение. Ты предлагаешь им погрузить все добро и похищенное золото в лагере на стоящих здесь лошадей и вернуться в деревню. Где тебя, без сомнения, будут славить за уничтожение ужасного Абуса и его банды.",
  ],
  [
    new Phrase(
      "Продолжить", "continue", ICON_START,
      [],
      [new Action([ new Effect(DIALOG_IMAGE, "=", "klirik_light"),])],
      "epilogue2"
    ),
  ]
)

export const villageAmuletAfter2Dialog = new Dialog(
  "villageAmuletAfter2",
  [
    "Ты начинаешь стыдить разбойников за совершенные ими злодеяния и призываешь искупить свои грехи, помогая жителям деревни. От твоей проникновенной речи даже сам капитан Абус со стыдом смотрит на пленных крестьянок. Отперев их кандалы, он объявляет что больше он и его люди не будут убивать, грабить и отпускать сексистские шутки. Ошарашенные крестьянки кланяются тебе и благодарят за спасение.",
    "Банда больше не представляет угрозы, даже наоборот. Ты предлагаешь бывшим бандитам и освобожденным женщинам погрузить все добро в лагере на стоящих здесь лошадей и вернуться в деревню. Где тебя, без сомнения, будут славить за поистине чудесное решение бандитского вопроса.",
  ],
  [
    new Phrase(
      "Продолжить", "continue", ICON_START,
      [],
      [new Action([ new Effect(DIALOG_IMAGE, "=", "bard"),])],
      "epilogue4"
    ),
  ]
)
