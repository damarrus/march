import { ICON_ACTION, ICON_BEER, ICON_DECLINE, ICON_DICE, ICON_LOOK, ICON_QUESTION, ICON_START } from "./icons";
import { Action } from "./entities/Action";
import { Condition } from "./entities/Condition";
import { Dialog } from "./entities/Dialog";
import { Phrase } from "./entities/Phrase";
import { Effect } from "./entities/Effect";
import { ACTION_MESSAGE, CLEAR, DIALOG_IMAGE, DIALOG_MESSAGE, INPUT_PHRASE } from "./config";
import { InputPhrase } from "./entities/InputPhrase";
import { InputEffect } from "./entities/InputEffect";

export const dialogs = [
  
  new Dialog("start",  "Начало игры", 
    [
      new Phrase(
        "Начать игру",  "startGame", ICON_START, 
        [], 
        [
          new Action([ 
            new Effect("gold", "=", 100), 
            new Effect("beerPrice", "=", 10),
            new Effect(DIALOG_IMAGE, "=", "tavern.png") 
          ])
        ], 
        "setName" 
      )
    ]
  ),

  new Dialog("setName", "Как меня зовут? (введите имя персонажа)", 
    new InputPhrase(new InputEffect("heroName", "="), [], "setClass")
  ),

  new Dialog("setClass", 
    [
      "Вас зовут {heroName}",
      "Вы просыпаетесь в таверне после вечеринки.",
      "Ты: Ох, я же самая великая... (выберите класс персонажа):"
    ], 
    [
    new Phrase(
      "Друидка", "druid", ICON_DICE,
      [],
      [ 
        new Action([ 
          new Effect("heroClass", "=", "druid"),
          new Effect("heroClassName", "=", "Друидка"),
          new Effect("str", "=", 5),
          new Effect("dex", "=", 5),
          new Effect("con", "=", 5),
          new Effect("int", "=", 5),
          new Effect("wis", "=", 5),
          new Effect("chr", "=", 5),
          new Effect(ACTION_MESSAGE, "=", `Ты: ...<b>{heroClassName}</b>! Животные, природа, туда-сюда. Ясно!`),
          new Effect(DIALOG_IMAGE, "=", "druid.png") 
        ]),
      ],
      "tavern",
    ),
    new Phrase(
      "Бардесса", "bard", ICON_DICE,
      [],
      [ 
        new Action([ 
          new Effect("heroClass", "=", "druid"),
          new Effect("heroClassName", "=", "Бардесса"),
          new Effect("str", "=", 5),
          new Effect("dex", "=", 5),
          new Effect("con", "=", 5),
          new Effect("int", "=", 5),
          new Effect("wis", "=", 5),
          new Effect("chr", "=", 5),
          new Effect(ACTION_MESSAGE, "=", `Ты: ...<b>{heroClassName}</b>! Песни, пляски, туда-сюда. Ясно!`),
          new Effect(DIALOG_IMAGE, "=", "bard.jpg") 
        ]),
      ],
      "tavern",
    ),
  ]),

  new Dialog("tavern", "Похоже я нахожусь в таверне.", 
    [
      new Phrase(
        "Оглядеться", "look", ICON_LOOK,
        [ 
          new Condition("tavernLooked", "==", false) 
        ],
        [ 
          new Action(
            [ 
              new Effect("tavernSale", "=", true), 
              new Effect(ACTION_MESSAGE, "=", `Ты видишь табличку "Скидки всем девушкам 50%"`),
              new Effect(DIALOG_MESSAGE, "=", `Ох, как же голова трещит`) 
            ], 
            [ new Condition("wis", ">=", 4) ], 
            [ 
              new Effect(ACTION_MESSAGE, "=", `Ты не замечаешь ничего не обычного`),
              new Effect(DIALOG_MESSAGE, "=", `Ох, как же голова трещит`) 
            ]
          ),
          new Action([ new Effect("tavernLooked", "=", true) ])
        ],
        "tavern"
      ),
      new Phrase("Заказать пива", "beer", ICON_BEER,
        [
          new Condition("beerBuyed", "==", false)
        ],
        [], 
        "tavernBeer"
      ),
      new Phrase("Встать", "standup", ICON_ACTION, [],[], "gameover")
    ]
  ), 
  
  new Dialog("tavernBeer", 
    [
      "Ты: Эй, бармен, принеси мне пива!",
      "Бармен: {beerPrice} золотых...",
      "(у вас есть {gold} золотых)"
    ], 
    [
    new Phrase("Скидка?", "sale", ICON_QUESTION,
      [ 
        new Condition("tavernSale", "==", true),
        new Condition("saidAboutSale", "==", false),
      ],
      [ 
        new Action([ 
          new Effect("saidAboutSale", "=", true),
          new Effect("beerPrice", "=", 5),
          new Effect(ACTION_MESSAGE, "=", `Ты: Я видела у вас объявление о скидке для дам :)`),
          new Effect(DIALOG_MESSAGE, "=", "Бармен: Какие все внимательные сегодня :( Так и быть, {beerPrice} золотых."),
        ]),
      ],
      "tavernBeer",
    ),
    new Phrase("Беру ({beerPrice}з)", "buyBeer", ICON_BEER,
      [],
      [ 
        new Action([ 
          new Effect("gold", "-=", "beerPrice", true),
          new Effect("beerBuyed", "=", true),
          new Effect(DIALOG_MESSAGE, "=", "После бокальчика тебе стало гораздо лучше.\n(у вас осталось {gold} золотых)"),
        ]),
      ],
      "tavern",
    ),
    new Phrase("Отказаться", "decline", ICON_DECLINE,
      [],
      [ 
        new Action([ 
          new Effect(DIALOG_MESSAGE, "=", `Ох, как же голова трещит`) 
        ]),
      ],
      "tavern",
    ),
  ]),

  new Dialog("gameover", "Продолжение следует...", 
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

]
