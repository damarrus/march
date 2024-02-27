import TelegramBot from "node-telegram-bot-api";
import { User } from "./User";
import { Condition } from "./Condition";
import { Action } from "./Action";
import { Dialog } from "./Dialog";

export class Phrase {
  public buttonText: string;
  public buttonData: string;
  public buttonIcon: string;
  public conditionsToShow: Condition[] = [];
  public actions: Action[];
  public nextDialog: string;

  constructor(buttonText: string, buttonData: string, buttonIcon: string, conditions: Condition[], actions: Action[], nextDialog: string) {
    this.buttonText = buttonText;
    this.buttonData = buttonData;
    this.buttonIcon = buttonIcon;
    this.conditionsToShow = conditions;
    this.actions = actions;
    this.nextDialog = nextDialog;
  }

  isShow(user: User) {
    let result = true;
    for (let i = 0; i < this.conditionsToShow.length; i++) {
      if (!this.conditionsToShow[i].check(user)) {
        result = false;
        break;
      }
    }
    return result;
  }

  activate(user: User) {
    this.actions.forEach(action => {
      action.activate(user);
    })
  }
}