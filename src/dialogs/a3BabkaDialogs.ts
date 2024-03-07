import { ACTION_MESSAGE, DIALOG_IMAGE, DIALOG_MESSAGE } from "../config";
import { Action } from "../entities/Action";
import { Condition } from "../entities/Condition";
import { Dialog } from "../entities/Dialog";
import { Effect } from "../entities/Effect";
import { Phrase } from "../entities/Phrase";
import { ICON_JUMP, ICON_PUNCH, ICON_HAND_WAVE, ICON_BACON, ICON_WALKING } from "../icons";

export const babkaDialog = new Dialog(
    "babkaDialog", 
    [
      "Оставив Йарика дальше изучать содержимое носопырки, ты выходишь на улицу и видишь, что возле высокого дерева причитая стоит старушка, глядя вверх. На одной из веток сидит испуганный котенок и жалобно мяукает, глядя на бабулю.",
    ], 
    [
    new Phrase(
        "Бабка виновата! Получай", "punch_babka", ICON_PUNCH,        
        [],
        [ 
            new Action([ 
              new Effect(ACTION_MESSAGE, "=", `Хорошенько размахнувшись, ты впечатываешь кулак в челюсть старухи, вырубая ее. Довольно крякнув, ты собираешься сказать котенку, что опасность миновала. Однако, повернувшись в его сторону, видишь лишь летящий на тебя яростный, но неимоверно очаровательный клубочек зубов и когтей. Малыш, ловко приземлившись тебе прямо на лицо, начинает царапаться и кусаться, после чего спрыгивает на землю, встав между тобой и бессознательной старушкой и грозно шипит.`),
              new Effect(DIALOG_IMAGE, "=", "babka")
            ]),
        ],
        "epicFailure",
    ),
    new Phrase(
        "Запрыгнуть на ветку", "jump1", ICON_JUMP,
        [
            new Condition("heroClass", "==", "rogue"),
            new Condition("alcohol_effect", "==", 2)
        ],
        [ 
            new Action([ 
              new Effect(ACTION_MESSAGE, "=", `Выпитый алкоголь дает о себе знать и ты менее удачно, чем планировала, совершаешь свой акробатический этюд. Однако тебе удалось допрыгнуть до ветки, на которой сидел котенок. Впрочем только для того, чтобы просто на ней повиснуть. Кисун пользуясь моментом, использует тебя как импровизированную веревку и, порядком изодрав твой плащ, спускается вниз к ожидающей его хозяйке.`),
              new Effect(DIALOG_IMAGE, "=", "upal")
            ]),
        ],
        "halfFailure",
    ),
    new Phrase(
        "Запрыгнуть на ветку", "jump2", ICON_JUMP,
        [
            new Condition("heroClass", "==", "rogue"),
            new Condition("alcohol_effect", "<", 2)
        ],
        [
          new Action( [ new Effect(DIALOG_IMAGE, "=", "catmagic") ])
        ],
        "success",
    ),
    new Phrase(
        "Запрыгнуть на ветку", "jump3", ICON_JUMP,
        [
            new Condition("heroClass", "!=", "rogue"),
            new Condition("alcohol_effect", "==", 1)
        ],
        [ 
            new Action([ 
              new Effect(ACTION_MESSAGE, "=", `Выпитый алкоголь дает о себе знать и ты менее удачно, чем планировала, совершаешь свой акробатический этюд. Однако тебе удалось допрыгнуть до ветки, на которой сидел котенок. Впрочем только для того, чтобы просто на ней повиснуть. Кисун пользуясь моментом, использует тебя как импровизированную веревку и, порядком изодрав твой плащ, спускается вниз к ожидающей его хозяйке.`),
              new Effect(DIALOG_IMAGE, "=", "upal")
            ]),
        ],
        "halfFailure",
    ),
    new Phrase(
        "Запрыгнуть на ветку", "jump4", ICON_JUMP,
        [
            new Condition("heroClass", "!=", "rogue"),
            new Condition("alcohol_effect", "==", 0)
        ],
        [ 
            new Action([ 
              new Effect(ACTION_MESSAGE, "=", `Как тигр, как барс взмываешь ты ловким прыжком на ветку и, подхватив котенка, также сноровисто спрыгиваешь вниз к ожидающей его хозяйке.`),
              new Effect(DIALOG_IMAGE, "=", "catmagic")
            ]),
        ],
        "success",
    ),
    new Phrase(
        "Запрыгнуть на ветку", "jump5", ICON_JUMP,
        [
            new Condition("heroClass", "!=", "rogue"),
            new Condition("alcohol_effect", "==", 2)
        ],
        [ 
            new Action([ 
              new Effect(ACTION_MESSAGE, "=", `Похоже выпитая водка оказалась сильнее твоих акробатических навыков. Нога подкашивается и ты впечатываешься носом прямо в древесный ствол. Даже вниз проехалась слегка. Испугавшийся котенок с жалобным писком соскальзывает с ветки и падает прямо тебе на голову, попутно вонзив в нее свои коготки. Бабулька сразу же подхватывает его на руки и, возмущенно ругаясь на “пришлую пьянчугу”, спешит убраться прочь. `),
              new Effect(DIALOG_IMAGE, "=", "upal")
            ]),
        ],
        "failure",
    ),
    new Phrase(
        "Использовать телекинез", "telekinesis1", ICON_HAND_WAVE,
        [ 
            new Condition("heroClass", "==", "mage"),
            new Condition("alcohol_effect", "==", 2)
        ],
        [ 
            new Action([ 
              new Effect(ACTION_MESSAGE, "=", `“Фокус-покус, чары-мары!” произносишь ты заплетающимся языком. Водка и спирт - отличная алхимическая основа при варке эликсиров, но страшная вещь при прочтении заклинаний. Увы, но несчастная бабуля убедилась в этом на своем горьком опыте - взлетев метра полтора в воздух, она тут же рухнула на землю, громко завопив. Котенок, видя что ты творишь с его хозяйкой, воинственно мяукает и  прыгает прямо тебе на лицо. Слегка тебя поцарапав, он спрыгивает на землю, встав между тобой и охающей старушкой и грозно шипит.`),
              new Effect(DIALOG_IMAGE, "=", "magicfail")
            ]),
        ],
        "failure",
    ),
    new Phrase(
        "Использовать телекинез", "telekinesis2", ICON_HAND_WAVE,
        [ 
            new Condition("heroClass", "==", "mage"),
            new Condition("alcohol_effect", "==", 1)
        ],
        [ 
            new Action([ 
              new Effect(ACTION_MESSAGE, "=", `Пробормотав заклинание и стараясь сконцентрироваться на нем после выпитого алкоголя, ты силой мысли ловко подхватываешь котенка и начинаешь спускать его вниз. Но на середине пути заклинание резко заканчивается и ты, успев в последний момент вытянуть руки, ловишь перепуганного малыша, прежде чем он упадет на землю.`),
              new Effect(DIALOG_IMAGE, "=", "magicfail")
            ]),
        ],
        "halfFailure",
    ),
    new Phrase(
        "Использовать телекинез", "telekinesis3", ICON_HAND_WAVE,
        [ 
            new Condition("heroClass", "==", "mage"),
            new Condition("alcohol_effect", "==", 0)
        ],
        [ 
            new Action([ 
              new Effect(ACTION_MESSAGE, "=", `Пробормотав заклинание, ты силой мысли ловко подхватываешь бедняжку и спускаешь его прямо в руки к ожидающей его хозяйке.`),
              new Effect(DIALOG_IMAGE, "=", "catchcat")
            ]),
        ],
        "success",
    ),
    new Phrase(
        "Приманить беконом", "bacon", ICON_BACON,
        [],
        [ 
            new Action([ 
              new Effect(ACTION_MESSAGE, "=", `Вкуснейший аромат разносится по улице. Только что жалобно плакавший кисуля, нетерпеливо облизнувшись, ловко спускается по стволу вниз и мяукая подбегает к тебе. Протянув ему бекон, ты смотришь как он с аппетитом проглатывает его и довольно мурчит.`),
              new Effect(DIALOG_IMAGE, "=", "catchcat")
            ]),
        ],
        "success",
    ),
    new Phrase(
        "Пусть бабка разбирается сама", "away1", ICON_WALKING,
        [],
        [
          new Action([ 
            new Effect(DIALOG_IMAGE, "=", "babkabad")
          ]),
        ],
        "sleep",
    )     
  ])

export const epicFailureDialog = new Dialog(
    "epicFailure", 
    [
        "Тебя знатно потрепали, придется отправиться залечивать раны в таверну"
    ], 
    [
    new Phrase(
      "В таверну", "away2", ICON_WALKING,
      [],
      [
        new Action([
          new Effect("damage_received", "+=", 2),
          new Effect("babka", "=", 0),
          new Effect(DIALOG_IMAGE, "=", "hotel")
        ]),
      ],
      "sleep",
    )    
  ])

  export const failureDialog = new Dialog(
    "failure", 
    [
        "Цель достигнута, но какой ценой...",
        "Пожалуй хватит на сегодня приключений, пора немного отдохнуть.",
    ], 
    [
    new Phrase(
        "В таверну", "away3", ICON_WALKING,
        [],
        [
            new Action([
            new Effect("damage_received", "+=", 1),
            new Effect("babka", "=", 1),
            new Effect(DIALOG_IMAGE, "=", "hotel")
            ]),
        ],
        "sleep",
        )   
  ])

  export const halfFailureDialog = new Dialog(
    "halfFailure", 
    [
        "Бабуля благодарит за помощь и протягивает тебе золотую монету.",
        "Немного потрепанная, но довольная можешь отправиться отдыхать",
    ], 
    [
    new Phrase(
        "В таверну", "away4", ICON_WALKING,
        [],
        [
            new Action([
            new Effect("gold", "+=", 1),
            new Effect("babka", "=", 2),
            new Effect(DIALOG_IMAGE, "=", "hotel")
            ]),
        ],
        "sleep",
        )   
  ])

  export const successDialog = new Dialog(
    "success", 
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
              new Effect("babka", "=", 3),
              new Effect(DIALOG_IMAGE, "=", "hotel")
              
            ]),
        ],
        "sleep",
        )   
  ])

  
 