import { ACTION_MESSAGE, DIALOG_IMAGE, DIALOG_MESSAGE } from "../config";
import { Action } from "../entities/Action";
import { Dialog } from "../entities/Dialog";
import { Effect } from "../entities/Effect";
import { Phrase } from "../entities/Phrase";
import { ICON_SCROLL, ICON_BEER, ICON_CHEESE, ICON_COOKIE, ICON_CUCUMBER, ICON_GLASS, ICON_PORK, ICON_VINE } from "../icons";

export const tavernDialog = new Dialog(
    "toTavern", 
    [
      "К концу дня ты достигаешь деревни. Тебя встречают красивые, аккуратные домики, украшенные лентами и цветами заборчики и фонари главной улицы. Но усталость берет свое и ты стремишься в таверну “Арарат”. Наконец, после долгого пути ты можешь присесть за столик и отдохнуть.",
      "В таверне сейчас людно. В камине потрескивает огонь, вокруг снует галдящий народ, обсуждая свои дела, а музыканты играют приятные мелодии. От раздумий тебя отвлекает громкий голос официанта, протягивающего меню:",
      "\"Чего изволите, мадама?\""
    ], 
    [
    new Phrase(
      "Меню", "menu", ICON_SCROLL,
      [],
      [],
      "setDish",
    )    
  ])

  export const setDishDialog = new Dialog(
    "setDish", 
    [
      "В меню ты видишь следующие варианты:",
    ], 
    [
    new Phrase(
      "Вино и сыр:", "vine_and_cheese", ICON_VINE + ICON_CHEESE,
      [],
      [ 
        new Action([ 
          new Effect(ACTION_MESSAGE, "=", `Винишка и сырную тарелку, пожалуйста;`),
          new Effect(DIALOG_IMAGE, "=", ""),
          new Effect("alcohol_effect", "+=", 1),
        ]),
      ],
      "toYarik",
    ),
    new Phrase(
      "Пиво и жареная свинина:", "beer_and_pork", ICON_BEER + ICON_PORK,
      [],
      [ 
        new Action([ 
            new Effect(ACTION_MESSAGE, "=", `Пинту пива и жареного порося с яблоком для начала;`),
            new Effect(DIALOG_IMAGE, "=", ""),
            new Effect("alcohol_effect", "+=", 1),
          ]),
      ],
      "toYarik",
    ),
    new Phrase(
      "Водка с огурчиками:", "vodka_and_cucumber", ICON_GLASS + ICON_CUCUMBER,
      [],
      [ 
        new Action([ 
            new Effect(ACTION_MESSAGE, "=", `Водочки мне холодненькой, чтоб прям из погребка, да соленых огурчиков на закусь;`),
            new Effect(DIALOG_IMAGE, "=", ""),
            new Effect("alcohol_effect", "+=", 2),
          ]),
      ],
      "toYarik",
    ),
    new Phrase(
      "Молоко с печеньем:", "milk_and_cookie", ICON_GLASS + ICON_COOKIE,
      [],
      [ 
        new Action([ 
            new Effect(ACTION_MESSAGE, "=", `А можно ли мне молочка с печеньицем?`),
            new Effect(DIALOG_IMAGE, "=", ""),
          ]),
      ],
      "toYarik",
    )    
  ])

  export const yarikDialog = new Dialog(
    "toYarik", 
    [
      "Употребив еду и напитки по назначению, ты интересуешься у сидящего рядом свинопаса представившегося Йариком, почему деревня так нарядно выглядит. Он, вдоволь поковырявшись в носу, поведал тебе, что завтра они будут отмечать праздник Триединой - покровительницы всех женщин (молодых, зрелых и пожилых).",
    ], 
    [
    new Phrase(
        "Да", "yes", ICON_BEER,
        [],
        [],
        "setClass",
    ),  
  ])
 