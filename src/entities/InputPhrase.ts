import TelegramBot from "node-telegram-bot-api";
import { User } from "./User";
import { Condition } from "./Condition";
import { Action } from "./Action";
import { Dialog } from "./Dialog";
import { Effect } from "./Effect";
import { InputEffect } from "./InputEffect";

export class InputPhrase {
  public inputEffect: InputEffect;
  public actions: Action[];
  public nextDialog: string;

  constructor(inputEffect: InputEffect, actions: Action[], nextDialog: string) {
    this.inputEffect = inputEffect;
    this.nextDialog = nextDialog;
    this.actions = actions;
  }

  activate(user: User, input: string) {
    this.inputEffect.activate(user, input);
    this.actions.forEach(action => {
      action.activate(user);
    })
  }
}