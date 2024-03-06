import { ACTION_MESSAGE, DIALOG_IMAGE, DIALOG_MESSAGE } from "../config";
import { Action } from "../entities/Action";
import { Condition } from "../entities/Condition";
import { Dialog } from "../entities/Dialog";
import { Effect } from "../entities/Effect";
import { Phrase } from "../entities/Phrase";
import { ICON_ACTION, ICON_CLERIC, ICON_MAGE, ICON_ROGUE, ICON_STRENGTH, ICON_WARRIOR } from "../icons";

export const underAttackDialog = new Dialog(
  "underAttack",
  "Уже приближаясь к выходу из деревни, ты слышишь звуки боя. Повернув за угол, ты видишь, что прямо у ворот закованный в броню рыцарь с огромным щитом и молотом бьется против толпы каких-то вооруженных оборванцев.В ту же секунду начинают бить в набат - похоже на деревню напали разбойники. Один из нападавших замечает тебя и заорав что-то бессвязное бросается вперед, нацелив на тебя саблю.",
  [
    new Phrase(
      "Убежать", "leave", ICON_ACTION, 
      [], 
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Да ну нахер! Уворачиваясь от атак опасного дурака, ты бежишь в противоположную сторону, пока наконец не понимаешь, что от деревни ты уже далеко, а за тобой никто не гонится.") ])
      ],
      "gameover"
    ),
    new Phrase(
      "Обезвредить", "stun", ICON_STRENGTH, 
      [], 
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Уклонившись, ты слегка бьешь его рукоятью меча/булавы/кинжала в висок и разбойник валится на землю.") ])
      ],
      "gameover"
    ),
    new Phrase(
      "Убивай-убиВАЙ-УБИВАЙ", "warrior", ICON_WARRIOR, 
      [ new Condition("heroClass", "==", "warrior") ], 
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Они знали на что шли. Выхватив оружие Рафаэлло ты атакуешь бандитов.") ])
      ],
      "gameover"
    ),
    new Phrase(
      "Шаман баяна!", "mage", ICON_MAGE, 
      [ new Condition("heroClass", "==", "mage") ], 
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Они знали на что шли. Летят в ебальник фаерболы.") ])
      ],
      "gameover"
    ),
    new Phrase(
      "ВО ИМЯ СВЕТА!", "cleric", ICON_CLERIC, 
      [ new Condition("heroClass", "==", "cleric") ], 
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Они знали на что шли. Божья кара и булава опускаются на головы противника.") ])
      ],
      "gameover"
    ),
    new Phrase(
      "Ты об этом пожалеешь!", "rogue", ICON_ROGUE, 
      [ new Condition("heroClass", "==", "rogue") ], 
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Они знали на что шли. И они умерли, даже не успев моргнуть.") ])
      ],
      "gameover"
    ),
  ]
)
 