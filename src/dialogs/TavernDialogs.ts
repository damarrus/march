import { ACTION_MESSAGE, DIALOG_IMAGE, DIALOG_MESSAGE } from "../config";
import { Action } from "../entities/Action";
import { Dialog } from "../entities/Dialog";
import { Effect } from "../entities/Effect";
import { Phrase } from "../entities/Phrase";
import { ICON_WALKING, ICON_SUNRISE, ICON_SCROLL, ICON_BEER, ICON_CHEESE, ICON_COOKIE, ICON_CUCUMBER, ICON_GLASS, ICON_PORK, ICON_WINE, ICON_SAKE, ICON_TADA, ICON_DANCE, ICON_PARTY, ICON_MONEYBAG, ICON_HOUSE } from "../icons";

export const tavernDialog = new Dialog(
    "toTavern", 
    [
      "Наконец, после долгого пути ты можешь присесть за столик и отдохнуть."
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
      "В меню ты видишь следующие блюда:",
    ], 
    [
    new Phrase(
      "Вино и сыр", "wine_and_cheese", ICON_WINE + ICON_CHEESE,
      [],
      [ 
        new Action([ 
          new Effect(ACTION_MESSAGE, "=", `Винишка и сырную тарелку, пожалуйста;`),
          new Effect(DIALOG_IMAGE, "=", ""),
          new Effect("alcohol_effect", "+=", 1),
          new Effect(DIALOG_IMAGE, "=", "wine"),
        ]),
      ],
      "exploreTavern",
    ),
    new Phrase(
      "Пиво и жареная свинина", "beer_and_pork", ICON_BEER + ICON_PORK,
      [],
      [ 
        new Action([ 
            new Effect(ACTION_MESSAGE, "=", `Пинту пива и жареного порося с яблоком для начала;`),
            new Effect(DIALOG_IMAGE, "=", ""),
            new Effect("alcohol_effect", "+=", 1),
            new Effect(DIALOG_IMAGE, "=", "beer"),
          ]),
      ],
      "exploreTavern",
    ),
    new Phrase(
      "Водка с огурчиками", "vodka_and_cucumber", ICON_SAKE + ICON_CUCUMBER,
      [],
      [ 
        new Action([ 
            new Effect(ACTION_MESSAGE, "=", `Водочки мне холодненькой, чтоб прям из погребка, да соленых огурчиков на закусь;`),
            new Effect(DIALOG_IMAGE, "=", ""),
            new Effect("alcohol_effect", "+=", 2),
            new Effect(DIALOG_IMAGE, "=", "vodka"),
          ]),
      ],
      "exploreTavern",
    ),
    new Phrase(
      "Молоко с печеньем", "milk_and_cookie", ICON_GLASS + ICON_COOKIE,
      [],
      [ 
        new Action([ 
            new Effect(ACTION_MESSAGE, "=", `А можно ли мне молочка с печеньицем?`),
            new Effect(DIALOG_IMAGE, "=", ""),
            new Effect(DIALOG_IMAGE, "=", "milk"),
          ]),
      ],
      "exploreTavern",
    )    
  ])

  export const exploreTavernDialog = new Dialog(
    "exploreTavern", 
    [
      "Употребив еду и напитки по назначению, оглядываешь окружающих, с целью поинтересоваться, почему деревня так нарядно выглядит.",
       "За соседним столиком сидит неочень опрятный мужчина, похоже это свинопас.",
    ], 
    [
    new Phrase(
      "Подойти", "toYarik", ICON_WALKING,
      [],
      [
        new Action([
          new Effect(DIALOG_IMAGE, "=", "yarik"),
        ]),
      ],
      "toYarik",
    )    
  ])

  export const yarikDialog = new Dialog(
    "toYarik", 
    [
      "Ты интересуешься у сидящего рядом свинопаса представившегося Йариком, почему деревня так нарядно выглядит. Он, вдоволь поковырявшись в носу, поведал тебе, что завтра они будут отмечать праздник Триединой - покровительницы всех женщин (молодых, зрелых и пожилых).",
      "Ожидается пир с веселыми танцами и интересными конкурсами, за которые можно даже получить денежный приз. Ты решаешь:"
    ], 
    [
    new Phrase(
      "Остаться на праздник и поучаствовать в конкурсах", "party", ICON_PARTY + ICON_DANCE,
      [],
      [ 
        new Action([ 
            new Effect("tavern_party_effect", "=", 1),
        ]),
      ],
      "babkaDialog",
    ),
    new Phrase(
      "Пойти своей дорогой, как только рассветет", "away", ICON_WALKING + ICON_SUNRISE,
      [],
      [ 
        new Action([ 
            new Effect("tavern_away_effect", "=", 1),
        ]),
      ],
      "babkaDialog",
    ),
    new Phrase(
      "Украсть призовой фонд", "steal_prize", ICON_MONEYBAG,
      [],
      [ 
        new Action([ 
            new Effect("tavern_steal_prize_effect", "=", 1),
        ]),
      ],
      "babkaDialog",
    ),
    new Phrase(
      "Навсегда поселиться здесь", "settle", ICON_HOUSE,
      [],
      [ 
        new Action([ 
            new Effect("tavern_settle_effect", "=", 1),
        ]),
      ],
      "babkaDialog",
    )
  ])
 