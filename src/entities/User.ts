import TelegramBot from "node-telegram-bot-api";
import bot from "../bot";
import db, { DBUser } from "../db";
import { Dialog } from "./Dialog";
import { dialogs } from "../dialogs";
import * as fs from 'fs';
import * as path from 'path';
import { ACTION_MESSAGE, BUTTON_ICON, BUTTON_TEXT, DIALOG_IMAGE, DIALOG_MESSAGE } from "../config";

export class User {
  private dbUser: DBUser
  private prevMessageId: number = 0;
  public isStart: boolean = true;
  public isFirstMessage: boolean = true;
  public dialog: Dialog;

  public tagsObject: { [key: string]: string | boolean | number } = {}

  constructor(dbUser: DBUser) {
    this.dbUser = dbUser;
    this.dialog = dialogs.find((dialog) => dialog.name === this.getTag('dialog'))
    if (!this.dialog) {
      this.clearTags();
      this.dialog = dialogs[0]
      this.setTag('dialog', this.dialog.name)
    }
    this.updateTagsObject()
  }

  public clearTags() {
    this.dbUser.tags = [];
    this.tagsObject = {};
    db.save()
  }

  getTags() {
    return this.dbUser.tags
  }

  public setTag(field: string, value: string | boolean | number) {
    let tag = this.dbUser.tags.find(t => t.name === field);
    if (!tag) {
      tag = { name: field, value }
      this.dbUser.tags.push(tag)
    } else {
      tag.value = value;
    }

    this.updateTagsObject()

    db.save()
  }

  private updateTagsObject() {
    this.tagsObject = this.dbUser.tags.reduce((acc, curr) => {
      acc[curr.name] = curr.value;
      return acc;
    }, {} as { [key: string]: string | boolean | number });
  }

  public getTag(field: string) {
    let tag = this.dbUser.tags.find(t => t.name === field);
    if (!tag) {
      return false;
    } else {
      return tag.value;
    }
  }

  public clearMessageParams() {
    this.dbUser.tags = this.dbUser.tags.filter(tag => 
      tag.name !== ACTION_MESSAGE && 
      tag.name !== DIALOG_MESSAGE && 
      tag.name !== DIALOG_IMAGE &&
      tag.name !== BUTTON_TEXT && 
      tag.name !== BUTTON_ICON 
    )
    db.save()
  }

  public scenarioMessageHandler(msg: TelegramBot.Message | TelegramBot.CallbackQuery) {
    let data = this.getDataFromMessage(msg);

    if (this.isFirstMessage) {
      this.isFirstMessage = false;
      data = ""
    }

    console.log(this.getName(), this.dialog.name, data);

    this.dialog = this.dialog.handle(this, data);
  }

  private getDataFromMessage(msg: TelegramBot.Message | TelegramBot.CallbackQuery) : string {
    let data = '';
    if ('data' in msg && msg.data) {
      data = msg.data;
    } else if ('text' in msg && msg.text) {
      data = msg.text;
    }

    return data;
  }

  public sendMessage(
    text: string, 
    replyMarkup: TelegramBot.InlineKeyboardMarkup = { inline_keyboard: [] },
    removePrevInlineKeyboard = true,
    saveMessage = true,
    imagePath: string = ""
  ) {
    if (!imagePath) {
      return bot.sendMessage(this.getId(), text, { reply_markup: replyMarkup, parse_mode: "HTML" }).then(res => {
        if (this.prevMessageId && removePrevInlineKeyboard) {
          bot.editMessageReplyMarkup({ inline_keyboard: [] }, {
            chat_id: this.getId(),
            message_id: this.prevMessageId
          });
        }
        if (saveMessage) this.prevMessageId = res.message_id;
        
        return this.prevMessageId;
      });
    } else {
      const fileOptions = {
        fileName: path.basename(imagePath),
        contentType: "image/" + path.extname(imagePath)
      }
      return bot.sendPhoto(this.getId(), fs.createReadStream(imagePath), { reply_markup: replyMarkup, parse_mode: "HTML", caption: text }, fileOptions).then(res => {
        if (this.prevMessageId && removePrevInlineKeyboard) {
          bot.editMessageReplyMarkup({ inline_keyboard: [] }, {
            chat_id: this.getId(),
            message_id: this.prevMessageId
          });
        }
        if (saveMessage) this.prevMessageId = res.message_id;
        
        return this.prevMessageId;
      });
    }
    
  }

  private getLastHistory() {
    return this.dbUser.history[this.dbUser.history.length - 1]
  }

  public getId() { return this.dbUser.id; }
  public getName() { return this.dbUser.name; }
  public getPrevMessageId() { return this.prevMessageId; }
  public clear() { this.dbUser.history = [{ id: 1, question: "start", answer: "start", date: new Date() }]; }

}