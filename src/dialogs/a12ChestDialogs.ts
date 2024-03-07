import { ACTION_MESSAGE, DIALOG_IMAGE, DIALOG_MESSAGE } from "../config";
import { Action } from "../entities/Action";
import { Condition } from "../entities/Condition";
import { Dialog } from "../entities/Dialog";
import { Effect } from "../entities/Effect";
import { Phrase } from "../entities/Phrase";
import { ICON_ACTION, ICON_LOOK, ICON_ALARM, ICON_CLERIC, ICON_MAGE, ICON_ROGUE, ICON_STRENGTH, ICON_WARRIOR, ICON_WALKING, ICON_SHUSHING } from "../icons";

export const chestDialog = new Dialog(
  "chest",//12.1
  "Оглядываясь в поисках других интересных занятий, ты вдруг видишь что у столика с сундучком ошиваются два неприятно выглядящих мужика. Один из них, встает прямо перед столом, загораживая его, а второй начинает что-то делать с замком.",
  [
    new Phrase(
      "Приблизиться", "go", ICON_ACTION, 
      [], 
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Видимо это тоже конкурс “Вскрой сундук”, пойду поучаствую!") ])
      ],
      "chestAlarmOrGo"
    ),
    new Phrase(
      "Поднять тревогу", "alarm", ICON_ALARM, 
      [], 
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Стой, преступное отродье!") ])
      ],
      "chestAlarmOrGo"
    ),
    new Phrase(
      "Наблюдать", "look", ICON_LOOK, 
      [], 
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Пристально наблюдать за происходящим") ])
      ],
      "chestLook"
    ),
    new Phrase(
      "Уйти", "away", ICON_ACTION, 
      [], 
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Не мое дело, пора уже в путь") ])
      ],
      "underAttack"
    ),
    
  ]
)

export const underAttackDialog = new Dialog(
  "underAttack",
  "Уже приближаясь к выходу из деревни, ты слышишь звуки боя. Повернув за угол, ты видишь, что прямо у ворот закованный в броню рыцарь с огромным щитом и молотом бьется против толпы каких-то вооруженных оборванцев. В ту же секунду начинают бить в набат - похоже на деревню напали разбойники. Один из нападавших замечает тебя и заорав что-то бессвязное бросается вперед, нацелив на тебя саблю.",
  [
    new Phrase(
      "Убежать", "leave", ICON_ACTION, 
      [], 
      [
        new Action([ 
          new Effect(ACTION_MESSAGE, "=", "Да ну нахер! Уворачиваясь от атак опасного дурака, ты бежишь в противоположную сторону, пока наконец не понимаешь, что от деревни ты уже далеко, а за тобой никто не гонится."),
          new Effect(DIALOG_IMAGE, "=", "pobeg")
        ])
      ],
      "epilogue1"
    ),
    new Phrase(
      "Обезвредить", "stun", ICON_STRENGTH, 
      [], 
      [
        new Action([ new Effect(DIALOG_IMAGE, "=", "oleja"), new Effect(ACTION_MESSAGE, "=", "Уклонившись, ты слегка бьешь его рукоятью меча/булавы/кинжала в висок и разбойник валится на землю.") ])
      ],
      "villageLeave"
    ),
    new Phrase(
      "Убивай-убиВАЙ-УБИВАЙ", "warrior", ICON_WARRIOR, 
      [ new Condition("heroClass", "==", "warrior") ], 
      [
        new Action([ new Effect(DIALOG_IMAGE, "=", "oleja"),new Effect(ACTION_MESSAGE, "=", "Они знали на что шли. Выхватив Рафаэлло, ты атакуешь бандитов.") ])
      ],
      "villageLeave"
    ),
    new Phrase(
      "Пустить огненный шар", "mage", ICON_MAGE, 
      [ new Condition("heroClass", "==", "mage") ], 
      [
        new Action([ new Effect(DIALOG_IMAGE, "=", "oleja"),new Effect(ACTION_MESSAGE, "=", "Они знали на что шли. Создав огненный шар, ты запускаешь его во врагов.") ])
      ],
      "villageLeave"
    ),
    new Phrase(
      "ВО ИМЯ СВЕТА!", "cleric", ICON_CLERIC, 
      [ new Condition("heroClass", "==", "cleric") ], 
      [
        new Action([ new Effect(DIALOG_IMAGE, "=", "oleja"),new Effect(ACTION_MESSAGE, "=", "Они знали на что шли. Божья кара и булава опускаются на головы противников.") ])
      ],
      "villageLeave"
    ),
    new Phrase(
      "Расстрелять издалека", "rogue", ICON_ROGUE, 
      [ new Condition("heroClass", "==", "rogue") ], 
      [
        new Action([ new Effect(DIALOG_IMAGE, "=", "oleja"),new Effect(ACTION_MESSAGE, "=", "Они знали на что шли. Спрятавшись в кустах, ты стреляешь в разбойников из арбалета. Но очень аккуратно, вдруг заметят…") ])
      ],
      "villageLeave"
    ),
  ]
)



export const stealChestDialog = new Dialog(
  "stealChest", 
  [
    "Зайдя за одну из палаток, ты начинаешь осторожно красться к столику, где стоит призовой сундучок. Когда до него остается всего несколько метров, ты замечаешь что с противоположной стороны к нему крадется еще двое мужиков сомнительного вида.",
  ], 
  [
    new Phrase(
      "Помочь", "help", ICON_SHUSHING, 
      [new Condition("heroClass", "==", "rogue")], 
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Работники ножа и топора, объединяйтесь! Ты, убедившись что они тебя видят, показываешь им несколько воровских жестов, предлагая сотрудничество.") ])
      ],
      "chestHelp"
    ),
    new Phrase(
      "Поднять тревогу", "alarm", ICON_ALARM, 
      [], 
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Стой, преступное отродье!") ])
      ],
      "chestAlarmOrGo"
    ),
    new Phrase(
      "Наблюдать", "look", ICON_LOOK, 
      [], 
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Пристально наблюдать за происходящим") ])
      ],
      "chestLook"
    ),
    new Phrase(
      "Уйти", "away", ICON_ACTION, 
      [],
      [
        new Action([ new Effect(DIALOG_IMAGE, "=", "oleja"), new Effect(ACTION_MESSAGE, "=", "Пахнет жареным, пора убираться из деревни.") ])
      ],
      "underAttack"
    ),
])
 