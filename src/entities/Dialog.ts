import TelegramBot from "node-telegram-bot-api";
import { Phrase } from "./Phrase";
import { User } from "./User";
import { dialogs } from "../dialogs";
import template from 'string-template';

export class Dialog {
  public name: string;
  public textArray: string[];
  public rows: Phrase[] = [];

  constructor(name: string, text: string, rows: Phrase[]);
  constructor(name: string, text: string[], rows: Phrase[]);
  constructor(name: string, text: string | string[], rows: Phrase[]) {
    this.name = name;
    this.textArray = typeof text === "string" ? [text] : text;
    this.rows = rows;
  }

  handle(user: User, data: string): Dialog {
    console.log(user.dialog.name, data)

    if (user.dialog === dialogs[0] && data !== "startGame") {
      this.sendDialogMessage(user)
      return this;
    }

    const row = this.rows.find(r => r.buttonData === data);
    if (!row) {
      // let text = "Произошла ошибка \n\n" + this.getText(user)
      this.sendDialogMessage(user)
      return this;
    }

    user.clearMessageParams();
    row.activate(user);
    user.setTag("buttonText", row.buttonText)
    user.setTag("buttonIcon", row.buttonIcon)
    const nextDialog = dialogs.find(dialog => dialog.name === row.nextDialog);
    if (nextDialog.name !== user.getTag('dialog')) {
      user.setTag('dialog', nextDialog.name)
    }
    
    nextDialog.sendDialogMessage(user)

    return nextDialog
  }

  sendDialogMessage(user: User) {
    const imageName = user.getTag('dialogImage')
    const imagePath = imageName ? `${process.cwd()}/images/${imageName}` : ""

    user.sendMessage(this.getText(user), this.getButtons(user), true, true, imagePath);
  }

  getText(user: User) {
    console.log(user.getTags())
    let text = "";
    const buttonText = user.getTag("buttonText");
    const buttonIcon = user.getTag("buttonIcon");
    if (buttonText && buttonIcon) {
      text += `${buttonIcon} <u>${buttonText}</u>\n\n`
    }

    const dialogMessage = user.getTag("dialogMessage");
    const actionMessage = user.getTag("actionMessage");
    if (actionMessage) text += actionMessage + "\n \n"

    text += dialogMessage ? dialogMessage : this.textArray.join("\n\n");
    text = template(text, user.tagsObject)
    return text
  }

  getButtons(user: User): TelegramBot.InlineKeyboardMarkup {
    const buttons = this.rows
      .filter(row => row.isShow(user))
      .map(row => ([{ text: row.buttonIcon + " " + template(row.buttonText, user.tagsObject), callback_data: row.buttonData }]))

    return { inline_keyboard: buttons }
  }
  
}