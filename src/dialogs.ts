import { ICON_ACTION, ICON_BEER, ICON_DECLINE, ICON_DICE, ICON_LOOK, ICON_QUESTION, ICON_START } from "./icons";
import { Action } from "./entities/Action";
import { Condition } from "./entities/Condition";
import { Dialog } from "./entities/Dialog";
import { Phrase } from "./entities/Phrase";
import { Effect } from "./entities/Effect";

export const dialogs = [
  
  new Dialog("start", "Начало игры", [
    new Phrase("Начать игру", "startGame", ICON_START, [], [new Action([ 
      new Effect("gold", "=", 100), 
      new Effect("beerPrice", "=", 10),
      new Effect("dialogImage", "=", "tavern.png") 
    ])], "setClass" )
  ]),

  new Dialog("setClass", 
    [
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
          new Effect("actionMessage", "=", `Ты: ...<b>{heroClassName}</b>! Животные, природа, туда-сюда. Ясно!`),
          new Effect("dialogImage", "=", "druid.png") 
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
          new Effect("actionMessage", "=", `Ты: ...<b>{heroClassName}</b>! Песни, пляски, туда-сюда. Ясно!`),
          new Effect("dialogImage", "=", "bard.jpg") 
        ]),
      ],
      "tavern",
    ),
  ]),

  new Dialog("tavern", "Похоже я нахожусь в таверне.", [
    new Phrase(
      "Оглядеться", "look", ICON_LOOK,
      [ 
        new Condition("tavernLooked", "==", false) 
      ],
      [ 
        new Action(
          [ 
            new Effect("tavernSale", "=", true), 
            new Effect("actionMessage", "=", `Ты видишь табличку "Скидки всем девушкам 50%"`),
            new Effect("dialogMessage", "=", `Ох, как же голова трещит`) 
          ], 
          [ new Condition("wis", ">=", 4) ], 
          [ 
            new Effect("actionMessage", "=", `Ты не замечаешь ничего не обычного`),
            new Effect("dialogMessage", "=", `Ох, как же голова трещит`) 
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
    [
      
    ], 
    "tavernBeer"),
    new Phrase("Встать", "standup", ICON_ACTION, [],[], "gameover")
  ]), 
  
  new Dialog("tavernBeer", 
    [
      "Ты: Эй, бармен, принеси мне пива!",
      "Бармен: {beerPrice} золотых...",
      "(у вас есть {gold} золотых)"
    ], 
    [
    new Phrase(
      "Скидка?", "sale", ICON_QUESTION,
      [ 
        new Condition("tavernSale", "==", true),
        new Condition("saidAboutSale", "==", false),
      ],
      [ 
        new Action([ 
          new Effect("saidAboutSale", "=", true),
          new Effect("beerPrice", "=", 5),
          new Effect("actionMessage", "=", `Ты: Я видела у вас объявление о скидке для дам :)`),
          new Effect("dialogMessage", "=", "Бармен: Какие все внимательные сегодня :( Так и быть, {beerPrice} золотых."),
        ]),
      ],
      "tavernBeer",
    ),
    new Phrase(
      "Беру ({beerPrice}з)", "buyBeer", ICON_BEER,
      [],
      [ 
        new Action([ 
          new Effect("gold", "-=", "beerPrice", true),
          new Effect("beerBuyed", "=", true),
          new Effect("dialogMessage", "=", "После бокальчика тебе стало гораздо лучше.\n(у вас осталось {gold} золотых)"),
        ]),
      ],
      "tavern",
    ),
    new Phrase(
      "Отказаться", "decline", ICON_DECLINE,
      [],
      [ 
        new Action([ 
          new Effect("dialogMessage", "=", `Ох, как же голова трещит`) 
        ]),
      ],
      "tavern",
    ),
  ]),

  new Dialog("gameover", "Продолжение следует...", [
    new Phrase(
      "Начать заново", "again", ICON_START,
      [],
      [ 
        new Action([ 
          new Effect("CLEAR", "=", true),
        ]),
      ],
      "start",
    )
  ])

]
