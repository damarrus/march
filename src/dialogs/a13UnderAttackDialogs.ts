import { ACTION_MESSAGE, DIALOG_IMAGE, DIALOG_MESSAGE } from "../config";
import { Action } from "../entities/Action";
import { Condition } from "../entities/Condition";
import { Dialog } from "../entities/Dialog";
import { Effect } from "../entities/Effect";
import { Phrase } from "../entities/Phrase";
import { ICON_ACTION, ICON_CLERIC, ICON_CLOCK, ICON_EYE, ICON_FIRE, ICON_FORK, ICON_KNIFE, ICON_MAGE, ICON_MAGIC, ICON_MONEYBAG, ICON_NURCE, ICON_PRAY, ICON_PRAY2, ICON_RAGE, ICON_REMORSE, ICON_ROGUE, ICON_RUN, ICON_SHIELD, ICON_STRENGTH, ICON_WARRIOR } from "../icons";

export const chestHelpDialog = new Dialog(
  "chestHelp",
  "Мужики переглянувшись кивают тебе и жестами говорят ждать сигнала. Буквально через минуту, с другой стороны площади раздается громкий свист и несколько человек в толпе выхватывают оружие. В ту же секунду начинают бить в набат, а перепуганные жители спешат убраться с улицы - похоже на деревню напали разбойники.",
  [
    new Phrase(
      "Воровская честь.", "aye", ICON_FORK + ICON_EYE, 
      [], 
      [
        new Action([ new Effect(DIALOG_IMAGE, "=", "rogues"), new Effect(ACTION_MESSAGE, "=", "Ты и твои подельники бросаетесь к сундучку. Пока ты помогаешь одному нести сундук, другой следит, чтобы не было хвоста. Втроем вы добираетесь до другого конца деревни. Бой остался далеко позади.") ])
      ],
      "thievPath"
    ),
    new Phrase(
      "Искупление.", "remorse", ICON_REMORSE, 
      [], 
      [
        new Action([ 
          new Effect(ACTION_MESSAGE, "=", "Ты чувствуешь, что поступаешь неправильно. Для совести ты была редким собеседником. Но ведь все еще можно изменить."),
          new Effect("remorse_effect", "=", 1)
        ]),        
      ],
      "ebkaRogue"
    ),
  ]
)

export const chestAlarmOrGoDialog = new Dialog(
  "chestAlarmOrGo",
  "Мужики, поняв что их заметили, выхватывают ножи и громко свистят. С другой стороны площади им отвечает такой же свист и еще несколько человек в толпе выхватывают оружие. В ту же секунду начинают бить в набат, а перепуганные жители спешат убраться с улицы - похоже на деревню напали разбойники.",
  [
    new Phrase(
      "К бою", "leave1", ICON_WARRIOR, 
      [new Condition("heroClass", "==", "warrior")], 
      [],
      "ebkaWar"
    ),
    new Phrase(
      "К бою", "leave2", ICON_MAGE, 
      [new Condition("heroClass", "==", "mage")], 
      [],
      "ebkaMage"
    ),
    new Phrase(
      "К бою", "leave3", ICON_ROGUE, 
      [new Condition("heroClass", "==", "rogue")], 
      [],
      "ebkaRogue"
    ),
    new Phrase(
      "К бою", "leave4", ICON_CLERIC, 
      [new Condition("heroClass", "==", "cleric")], 
      [],
      "ebkaCleric"
    ),
  ]
)

export const chestLookDialog = new Dialog(
  "chestLook",
  [
    "Пристально глядя на злоумышленников, ты слышишь как кто-то в толпе кричит:",
    "- \"Воры, грабеж! Домушники!\"",
    "Мужики, поняв что их заметили, выхватывают ножи и громко свистят. С другой стороны площади им отвечает такой же свист и еще несколько человек в толпе выхватывают оружие. В ту же секунду начинают бить в набат, а перепуганные жители спешат убраться с улицы - похоже на деревню напали разбойники.",
  ],
  [
    new Phrase(
      "К бою", "leave1", ICON_WARRIOR, 
      [new Condition("heroClass", "==", "warrior")], 
      [],
      "ebkaWar"
    ),
    new Phrase(
      "К бою", "leave2", ICON_MAGE, 
      [new Condition("heroClass", "==", "mage")], 
      [],
      "ebkaMage"
    ),
    new Phrase(
      "К бою", "leave3", ICON_ROGUE, 
      [new Condition("heroClass", "==", "rogue")], 
      [],
      "ebkaRogue"
    ),
    new Phrase(
      "К бою", "leave", ICON_CLERIC, 
      [new Condition("heroClass", "==", "cleric")], 
      [],
      "ebkaCleric"
    ),
  ]
)



export const ebkaWarDialog = new Dialog(
  "ebkaWar", 
  [], 
  [
    new Phrase(
      "Стена щитов!", "shield_wall", ICON_SHIELD + ICON_SHIELD + ICON_SHIELD, 
      [], 
      [
        new Action([ new Effect(DIALOG_IMAGE, "=", "oleja"), new Effect(ACTION_MESSAGE, "=", "Громко отдавая приказы растерявшимся деревенским ополченцам, ты строишь их в боевой порядок. Вместе вы начинаете теснить разбойников.") ])
      ],
      "villagePalatki"
    ),
    new Phrase(
      "Я - ярость!", "rage", ICON_RAGE, 
      [], 
      [
        new Action([ new Effect(DIALOG_IMAGE, "=", "oleja"), new Effect(ACTION_MESSAGE, "=", "Твой боевой рев разносится над деревней. Рафаэлло со свистом рассекает воздух, когда ты обрушиваешься на разбойников словно стальной вихрь.") ])
      ],
      "villagePalatki"
    ), 
    new Phrase(
      "Не мой бой.", "pisya", ICON_RUN, 
      [], 
      [
        new Action([ new Effect(DIALOG_IMAGE, "=", "pobeg"), new Effect(ACTION_MESSAGE, "=", "Тактически будет разумней отступить из деревни. Ты разнесешь по пути весть о том, что тут хозяйничают разбойники и, возможно, еще вернешься с подкреплением. Да, так и будет.") ])
      ],
      "epilogue1"
    ),   
])

export const ebkaClericDialog = new Dialog(
  "ebkaCleric", 
  [], 
  [
    new Phrase(
      "Заупокойная молитва.", "pray", ICON_PRAY, 
      [], 
      [
        new Action([ new Effect(DIALOG_IMAGE, "=", "oleja"), new Effect(ACTION_MESSAGE, "=", "Аки пастух разит волков, что вредят стаду его, так и ты разишь булавой супостатов, громко читая молитву. С каждым взмахом оружие вспыхивает божественным светом, ослепляя разбойников.") ])
      ],
      "villagePalatki"
    ), 
    new Phrase(
      "Я несу исцеление.", "nurce", ICON_NURCE, 
      [], 
      [
        new Action([ new Effect(DIALOG_IMAGE, "=", "oleja"), new Effect(ACTION_MESSAGE, "=", "Прикоснувшись к божественному символу, ты творишь исцеляющие заклинания, поддерживая раненых бойцов и помогая им без устали теснить разбойников.") ])
      ],
      "villagePalatki"
    ), 
    new Phrase(
      "Помолясь, дети мои.", "pray2", ICON_PRAY2, 
      [], 
      [
        new Action([ new Effect(DIALOG_IMAGE, "=", "oleja"), new Effect(ACTION_MESSAGE, "=", "Прошептав молитву, ты призываешь силы Света и благословляешь ближайших ополченцев. Воодушевленные помощью свыше, деревенские воители храбро бросаются на врага, давая тебе возможность убраться из деревни.") ])
      ],
      "villagePalatki"
    ),   
])

export const ebkaMageDialog = new Dialog(
  "ebkaMage", 
  [], 
  [
    new Phrase(
      "Магическая поддержка.", "clock", ICON_CLOCK, 
      [], 
      [
        new Action([ new Effect(DIALOG_IMAGE, "=", "oleja"), new Effect(ACTION_MESSAGE, "=", "Прочитав заклинание, ты словно подчиняешь себе ход времени вокруг разбойников. Их движения становятся медлительными и неуклюжими, давая ополченцам шанс быстро расправиться с врагом.") ])
      ],
      "villagePalatki"
    ),
    new Phrase(
      "Ярость стихий.", "fire", ICON_FIRE, 
      [], 
      [
        new Action([ new Effect(DIALOG_IMAGE, "=", "oleja"), new Effect(ACTION_MESSAGE, "=", "Что могут мечи, против молний и огненных шаров? Открыв свой фолиант, ты громоподобным голосом читаешь заклинание, обрушивающее на бандитов град огненных стрел.") ])
      ],
      "villagePalatki"
    ),
    new Phrase(
      "Телепортируюсь!", "teleport", ICON_MAGIC, 
      [], 
      [
        new Action([ new Effect(DIALOG_IMAGE, "=", "pobeg"), new Effect(DIALOG_IMAGE, "=", "pobeg"), new Effect(ACTION_MESSAGE, "=", "Кажется тут не место начитанным и образованным людям. Пробормотав короткое заклинание, ты оказываешься за пределами деревни.") ])
      ],
      "epilogue1"
    ),     
])

export const ebkaRogueDialog = new Dialog(
  "ebkaRogue", 
  [], 
  [
    new Phrase(
      "Все твое теперь мое", "money_bag", ICON_MONEYBAG, 
      [
        // new Condition("steal_prize_effect", "==", 1),
        // new Condition("remorse_effect", "==", 0),
      ], 
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Одним движением ты выхватываешь дымовую шашку и бросаешь ее на землю. Поднимается облако дыма, смешанное с дорожной пылью из-за дерущихся людей. Не теряя ни секунды,  ты подбегаешь к сундуку и сбиваешь непрочный замок рукоятью кинжала. Забрав лежащий там увесистый мешочек золотых монет, ты думаешь что делать дальше? Вокруг все еще продолжается драка.") ])
      ],
      "ebkaRogue2"
    ),   
])

export const ebkaRogueDialog2 = new Dialog(
  "ebkaRogue2", 
  [], 
  [   
    new Phrase(
      "Удар из тени", "knife", ICON_KNIFE, 
      [], 
      [
        new Action([ new Effect(DIALOG_IMAGE, "=", "oleja"), new Effect(ACTION_MESSAGE, "=", "Твои движения молниеносны. Сжимая в одной руке кинжал, а во второй арбалет, то скрываясь между палаток и ближайших кустов, то появляясь снова за спинами разбойников, ты разишь их одного за другим.") ])
      ],
      "villagePalatki"
    ), 
    new Phrase(
      "Рвем когти!", "professional", ICON_RUN, 
      [], 
      [
        new Action([ new Effect(DIALOG_IMAGE, "=", "pobeg"), new Effect(ACTION_MESSAGE, "=", "Воспользовавшись суматохой, ты ловко скрываешься между палаток и, прячась в тенях, добираешься до другого конца деревни. Бой остался далеко позади.") ])
      ],
      "epilogue1"
    ),  
])

