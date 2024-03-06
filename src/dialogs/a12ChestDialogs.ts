import { ACTION_MESSAGE, DIALOG_IMAGE, DIALOG_MESSAGE } from "../config";
import { Action } from "../entities/Action";
import { Dialog } from "../entities/Dialog";
import { Effect } from "../entities/Effect";
import { Phrase } from "../entities/Phrase";
import { ICON_ACTION, ICON_LOOK, ICON_TADA } from "../icons";

export const chestDialog = new Dialog(
  "chest",
  "Оглядываясь в поисках других интересных занятий, ты вдруг видишь что у столика с сундучком ошиваются два неприятно выглядящих мужика. Один из них, встает прямо перед столом, загораживая его, а второй начинает что-то делать с замком.",
  [
    new Phrase(
      "Приблизиться", "go", ICON_ACTION, 
      [], 
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Видимо это тоже конкурс “Вскрой сундук”, пойду поучаствую!") ])
      ],
      "gameover"
    ),
    new Phrase(
      "Тревога", "alarm", ICON_TADA, 
      [], 
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Стой, преступное отродье!") ])
      ],
      "gameover"
    ),
    new Phrase(
      "Наблюдать", "look", ICON_LOOK, 
      [], 
      [
        new Action([ new Effect(ACTION_MESSAGE, "=", "Пристально наблюдать за происходящим") ])
      ],
      "gameover"
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
 