import TelegramBot from "node-telegram-bot-api";
import { Phrase } from "./Phrase";
import { User } from "./User";
import { dialogs } from "../dialogs";
import template from 'string-template';
import { InputPhrase } from "./InputPhrase";
import { ACTION_MESSAGE, BUTTON_ICON, BUTTON_TEXT, DIALOG_IMAGE, DIALOG_MESSAGE } from "../config";
import * as fs from 'fs';

export class Dialog {
  public name: string;
  public textArray: string[];
  public phrases: Phrase[] = [];
  public inputPhrase: InputPhrase = null;

  constructor(name: string, text: string, phrases: Phrase[]);
  constructor(name: string, text: string[], phrase: Phrase[]);
  constructor(name: string, text: string, phrase: Phrase);
  constructor(name: string, text: string[], phrase: Phrase);
  constructor(name: string, text: string, inputPhrase: InputPhrase);
  constructor(name: string, text: string[], inputPhrase: InputPhrase);
  constructor(name: string, text: string | string[], phrases: Phrase[] | Phrase | InputPhrase) 
  {
    this.name = name;
    this.textArray = typeof text === "string" ? [text] : text;
    if (phrases instanceof InputPhrase) {
      this.inputPhrase = phrases;
    } else {
      this.phrases = phrases instanceof Phrase ? [phrases] : phrases;
    }
  }

  handle(user: User, data: string): Dialog {
    const dialog = user.getCurrentDialog();
    console.log(dialog.name, data);
    user.addHistory(dialog.name, data);

    let phrase: Phrase | InputPhrase;

    if (this.inputPhrase) {
      phrase = this.inputPhrase;
      phrase.activate(user, data);
    } else {
      phrase = this.phrases.find(r => r.buttonData === data);
      if (phrase instanceof Phrase === false) {
        console.log(`Phrase not found`)
        this.sendDialogMessage(user)
        return this;
      }

      user.clearMessageParams();
      phrase.activate(user);
      user.setTag(BUTTON_TEXT, phrase.buttonText)
      user.setTag(BUTTON_ICON, phrase.buttonIcon)
    }

    
    const nextDialog = dialogs.find(dialog => dialog.name === phrase.nextDialog);
    if (nextDialog.name !== user.getTag('dialog')) user.setTag('dialog', nextDialog.name)
    
    nextDialog.sendDialogMessage(user, !!this.inputPhrase)

    return nextDialog
  }

  sendDialogMessage(user: User, isInput: boolean = false) {
    const imageName = user.getTag(DIALOG_IMAGE)
    let imagePath = imageName ? `${process.cwd()}/images/${imageName}` : ""
    if (imagePath) {
      if (fs.existsSync(imagePath + ".jpg")) {
        imagePath = imagePath + ".jpg";
      } else if (fs.existsSync(imagePath + ".jpeg")) {
        imagePath = imagePath + ".jpeg";
      } else if (fs.existsSync(imagePath + ".png")) {
        imagePath = imagePath + ".png";
      } else {
        imagePath = ""
      }
    }

    user.sendMessage(this.getText(user), this.getButtons(user), !isInput, true, imagePath);
  }

  getText(user: User) {
    console.log(user.getTags())
    let text = "";
    const buttonText = user.getTag(BUTTON_TEXT);
    const buttonIcon = user.getTag(BUTTON_ICON);
    if (buttonText && buttonIcon) {
      text += `${buttonIcon} <u>${buttonText}</u>\n\n`
    }

    const dialogMessage = user.getTag(DIALOG_MESSAGE);
    const actionMessage = user.getTag(ACTION_MESSAGE);
    if (actionMessage) text += actionMessage + "\n \n"

    text += dialogMessage ? dialogMessage : this.textArray.join("\n\n");
    text = template(text, user.tagsObject)
    return text
  }

  getButtons(user: User): TelegramBot.InlineKeyboardMarkup {
    const buttons = this.phrases
      .filter(row => row.isShow(user))
      .map(row => ([{ text: row.buttonIcon + " " + template(row.buttonText, user.tagsObject), callback_data: row.buttonData }]))

    return { inline_keyboard: buttons }
  }
  
}
