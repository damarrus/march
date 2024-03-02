import { ACTION_MESSAGE, DIALOG_IMAGE, DIALOG_MESSAGE } from "../config";
import { Action } from "../entities/Action";
import { Condition } from "../entities/Condition";
import { Dialog } from "../entities/Dialog";
import { Effect } from "../entities/Effect";
import { InputEffect } from "../entities/InputEffect";
import { InputPhrase } from "../entities/InputPhrase";
import { Phrase } from "../entities/Phrase";
import { ICON_ACTION, ICON_HAMMER, ICON_INTELLECT, ICON_QUESTION, ICON_SLEEP, ICON_START, ICON_STEAL, ICON_STRENGTH, ICON_WARRIOR } from "../icons";

export const contestChoiseDialog = new Dialog(
  "contestChoise",
  [
    "Оглядевшись, ты видишь что в одной из ближайших палаток установлен аппарат, называемый “Силомером”. Над другой палаткой виднеется табличка с надписью “Загадки”. На столике перед самой дальней палаткой ты видишь небольшой сундучок - приз победителю праздника. Чем хочешь заняться?",
  ],
  [
    new Phrase("Продолжу путь дальше", "continue", ICON_ACTION, [], [], "napadenie?"),
    new Phrase("Иду к \"Силомеру\"", "strength", ICON_STRENGTH, [], [], "strengthContest"),
    new Phrase("Иду к \"Загадкам\"", "intellect", ICON_INTELLECT, [], [], "intellectContest"),
    new Phrase("Украду сундучок", "steal", ICON_STEAL, [], [], "napadenie?"),
  ]
)

export const strengthContestDialog = new Dialog(
  "strengthContest",
  "Конкурс проводит местный кузнец Стэнтин, по прозвищу Конь. Не переставая вещать о том, что когда-нибудь общество сможет построить лучший мир где все равны, он поясняет правила конкурса - берешь здоровенный молот и чем сильнее ударишь по аппарату, тем выше взлетит грузик внутри него и тем больше призовых жетонов можно заработать.",
  [
    new Phrase(
      "Ударить кулаком", "warriorHit", ICON_WARRIOR, 
      [
        new Condition("heroClass","==", "warrior")
      ], 
      [
        new Action([ 
          new Effect("contestTokens", "+=", 3),
          new Effect("strengthContestResult", "=", 3),
          new Effect("doneContests", "+=", 1),
          new Effect("strengthContestDone", "=", true),
          new Effect(ACTION_MESSAGE, "=", "Зачем тебе молот, если твои кулаки еще тяжелее?!"),
        ]),
        new Action(
          [ new Effect(DIALOG_MESSAGE, "=", "С одним конкурсом закончили. Может глянуть на другие?"), ],
          [ new Condition("doneContests", "==", 1) ]
        ),
        new Action(
          [ new Effect(DIALOG_MESSAGE, "=", "Интересно, чем еще можно заняться на этом празднике?"), ],
          [ new Condition("doneContests", "==", 2) ]
        ),
      ], "contestChoise"
    ),
    new Phrase(
      "Ударить молотом", "hit", ICON_HAMMER, 
      [], 
      [
        new Action(
          [ 
            new Effect("contestTokens", "+=", 1),
            new Effect("strengthContestResult", "=", 1),
            new Effect(ACTION_MESSAGE, "=", "Знания - сила. И все же, сидя над магическими свитками мышцы не накачаешь. Ты опускаешь молот на аппарат изо всех своих сил (не тех, что знания, а тех других), но грузик внутри долетает лишь до половины. Стэнтин Конь ободряюще похлопывает тебя по плечу и протягивает 1 жетон, за спортивный азарт."),
          ],
          [ new Condition("heroClass", "==", "mage") ],
          [ 
            new Effect("contestTokens", "+=", 2),
            new Effect("strengthContestResult", "=", 2),
            new Effect(ACTION_MESSAGE, "=", "Подняв молот над головой, ты с силой опускаешь его вниз прямо на аппарат. Грузик внутри “Силомера” подлетает до самого верха и раздается мелодичный звон. Звучат одобряющие возгласы, кто-то даже начинает аплодировать. Конь Стэнтин с улыбкой протягивает тебе 2 жетона за успешное прохождение испытания силы."),
          ],
        ),
        new Action([ new Effect("doneContests", "+=", 1), new Effect("strengthContestDone", "=", true) ]),
        new Action(
          [ new Effect(DIALOG_MESSAGE, "=", "С одним конкурсом закончили. Может глянуть на другие?"), ],
          [ new Condition("doneContests", "==", 1) ]
        ),
        new Action(
          [ new Effect(DIALOG_MESSAGE, "=", "Интересно, чем еще можно заняться на этом празднике?"), ],
          [ new Condition("doneContests", "==", 2) ]
        ),
      ], "contestChoise"
    ),
    new Phrase(
      "Пойти к загадкам", "toIntellect", ICON_INTELLECT, 
      [
        new Condition("intellectContestDone", "==", false)
      ], 
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Пойду-ка лучше загадки поотгадываю.") ])
      ], "intellectContest"
    ),
    new Phrase(
      "Ску-у-ка", "skip", ICON_SLEEP, 
      [], 
      [
        new Action([
          new Effect("strengthContestResult", "=", 0),
          new Effect("doneContests", "+=", 1),
          new Effect("strengthContestDone", "=", true),
        ])
      ], 
      "contestChoise"
    )
  ]
)

export const intellectContestDialog = new Dialog(
  "intellectContest",
  [
    "Подойдя к ведущему, которым оказывается лысый гном, говоривший со старостой и представившийся Михелем Писакой, ты интересуешься правилами конкурса. Они довольно просты - нужно всего лишь отгадать загадку. Зачем-то сказав, что скоро он напишет книгу и прославится, дворф протягивает тебе листок с загадкой. О чем в ней идет речь?",
    "“Мы и меч, но мы и щит.\nЕсли кто-то замолчит, то умрем\nНо снова живы, когда песня зазвучит.\nПод водою нет совсем,\nЗдесь нас ровно двадцать семь.”\n"
  ],
  [
    new Phrase(
      "Я знаю ответ! (ввод)", "inputAnswer", ICON_INTELLECT,
      [],
      [
        new Action([
          new Effect("intellectContestResult", "=", 4),
        ])
      ],
      "intellectContestInput"
    ),
    new Phrase(
      "Варианты ответа?", "inputAnswer", ICON_QUESTION,
      [],
      [
        new Action([
          new Effect("intellectContestResult", "=", 3),
        ])
      ],
      "intellectContestVariants"
    ),
  ]
)

export const intellectContestInputDialog = new Dialog(
  "intellectContestInput",
  [
    "Это... (введите в чат ответ)"
  ],
  new InputPhrase(
    new InputEffect("intellectContestAnswer", "="), 
    [
      new Action([ new Effect("intellectContestCorrectInput", "=", true) ], [ new Condition("intellectContestAnswer", "==", "слово") ]),
      new Action([ new Effect("intellectContestCorrectInput", "=", true) ], [ new Condition("intellectContestAnswer", "==", "Слово") ]),
      new Action([ new Effect("intellectContestCorrectInput", "=", true) ], [ new Condition("intellectContestAnswer", "==", "слова") ]),
      new Action([ new Effect("intellectContestCorrectInput", "=", true) ], [ new Condition("intellectContestAnswer", "==", "Слова") ]),
      new Action([ new Effect("intellectContestCorrectInput", "=", true) ], [ new Condition("intellectContestAnswer", "==", "СЛОВО") ]),
      new Action([ new Effect("intellectContestCorrectInput", "=", true) ], [ new Condition("intellectContestAnswer", "==", "СЛОВА") ]),
      new Action([ new Effect("intellectContestCorrectInput", "=", true) ], [ new Condition("intellectContestAnswer", "==", "слава") ]),
      new Action([ new Effect("intellectContestCorrectInput", "=", true) ], [ new Condition("intellectContestAnswer", "==", "Cлава") ]),
      new Action(
        [ 
          new Effect("intellectContestResult", "=", 4),
          new Effect("intellectContestDone", "=", true),
          new Effect(ACTION_MESSAGE, "=", "Слишком просто. Это - СЛОВА!"),
          new Effect(DIALOG_MESSAGE, "=", "В толпе слышатся фразы “Мудрейшая явилась!”, “Она гений!”. Михель с гордостью вручает тебе 4 жетона и поздравляет с успешным прохождением испытания.")
        ],
        [ new Condition("intellectContestCorrectInput", "==", true) ],
        [
          new Effect("intellectContestResult", "=", 3),
          new Effect(ACTION_MESSAGE, "=", "Может быть это - {intellectContestAnswer}?..\n\nКхм, к сожалению нет. Давайте я дам вам варианты ответов.")
        ]
      ),
      new Action([ new Effect("tryIntellectContestInput", "=", true) ])
    ], 
    "intellectContestVariants"
  )
)

export const intellectContestVariantsDialog = new Dialog(
  "intellectContestVariants",
  "Варианты ответов: птицы, слова, зубы, буквы",
  [
    new Phrase(
      "Какая я умница!", "continue", ICON_ACTION,
      [ new Condition("intellectContestDone", "==", true) ],
      [ 
        new Action([ 
          new Effect("doneContests", "+=", 1),
          new Effect("intellectContestDone", "=", true),
        ]),
        new Action(
          [ new Effect(DIALOG_MESSAGE, "=", "С одним конкурсом закончили. Может глянуть на другие?"), ],
          [ new Condition("doneContests", "==", 1) ]
        ),
        new Action(
          [ new Effect(DIALOG_MESSAGE, "=", "Интересно, чем еще можно заняться на этом празднике?"), ],
          [ new Condition("doneContests", "==", 2) ]
        ),
      ],
      "contestChoise"
    ),
    new Phrase(
      "Птицы", "birds", "", 
      [ new Condition("intellectContestBirdsVariant", "==", false), new Condition("intellectContestDone", "==", false) ],
      [
        new Action([ 
          new Effect("intellectContestBirdsVariant", "=", true),
          new Effect(DIALOG_MESSAGE, "=", "Неправильно! Попробуй ещё раз.")
        ]),
        new Action([ new Effect("intellectContestResult", "=", 1) ], [ new Condition("intellectContestResult", "==", 2)]),
        new Action([ new Effect("intellectContestResult", "=", 2) ], [ new Condition("intellectContestResult", "==", 3)]),
      ],
      "intellectContestVariants"
    ),
    new Phrase(
      "Слова", "words", "", 
      [ new Condition("intellectContestDone", "==", false) ],
      [
        new Action([ 
          new Effect("intellectContestDone", "=", true),
          new Effect("contestTokens", "+=", "intellectContestResult"),
          new Effect("doneContests", "+=", 1),
        ]),
        new Action(
          [ new Effect(ACTION_MESSAGE, "=", "Похоже ты удивила жителей своим острым умом и сообразительностью. Они восторженно шепчутся, а ведущий награждает тебя 3 жетонами") ], 
          [ new Condition("intellectContestResult", "==", 3)]
        ),
        new Action(
          [ new Effect(ACTION_MESSAGE, "=", "Упорство должно быть вознаграждено. Михель жмет тебе руку и протягивает 2 жетона") ], 
          [ new Condition("intellectContestResult", "==", 2)]
        ),
        new Action(
          [ new Effect(ACTION_MESSAGE, "=", "Упорство должно быть вознаграждено. Михель жмет тебе руку и протягивает 1 жетон") ], 
          [ new Condition("intellectContestResult", "==", 1)]
        ),
        new Action(
          [ new Effect(DIALOG_MESSAGE, "=", "С одним конкурсом закончили. Может глянуть на другие?"), ],
          [ new Condition("doneContests", "==", 1) ]
        ),
        new Action(
          [ new Effect(DIALOG_MESSAGE, "=", "Интересно, чем еще можно заняться на этом празднике?"), ],
          [ new Condition("doneContests", "==", 2) ]
        ),
      ],
      "contestChoise"
    ),
    new Phrase(
      "Зубы", "tooth", "", 
      [ new Condition("intellectContestToothVariant", "==", false), new Condition("intellectContestDone", "==", false) ],
      [
        new Action([ 
          new Effect("intellectContestToothVariant", "=", true),
          new Effect(DIALOG_MESSAGE, "=", "Неправильно! Попробуй ещё раз.")
        ]),
        new Action([ new Effect("intellectContestResult", "=", 1) ], [ new Condition("intellectContestResult", "==", 2)]),
        new Action([ new Effect("intellectContestResult", "=", 2) ], [ new Condition("intellectContestResult", "==", 3)]),
      ],
      "intellectContestVariants"
    ),
    new Phrase(
      "Буквы", "letters", "", 
      [ new Condition("intellectContestLettersVariant", "==", false), new Condition("intellectContestDone", "==", false) ],
      [
        new Action([ 
          new Effect("intellectContestLettersVariant", "=", true),
          new Effect(DIALOG_MESSAGE, "=", "Неправильно! Попробуй ещё раз.")
        ]),
        new Action([ new Effect("intellectContestResult", "=", 1) ], [ new Condition("intellectContestResult", "==", 2)]),
        new Action([ new Effect("intellectContestResult", "=", 2) ], [ new Condition("intellectContestResult", "==", 3)]),
      ],
      "intellectContestVariants"
    ),
  ]
)