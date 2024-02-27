import { User } from "./User";
import { Condition } from "./Condition";
import { Effect } from "./Effect";

export class Action {
  public conditions: Condition[] = [];
  public successEffects: Effect[] = [];
  public failedEffects: Effect[] = [];

  constructor(successEffects: Effect[], conditions: Condition[] = [], failedEffects: Effect[] = []) {
    this.successEffects = successEffects;
    this.conditions = conditions;
    this.failedEffects = failedEffects;
  }

  activate(user: User) {
    let result = true;
    for (let i = 0; i < this.conditions.length; i++) {
      if (!this.conditions[i].check(user)) {
        result = false;
        break;
      }
    }

    if (result) {
      this.successEffects.forEach(se => {
        se.activate(user);
      });
    } else {
      this.failedEffects.forEach(fe => {
        fe.activate(user);
      });
    }
  }
}