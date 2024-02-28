import { User } from "./User";

export class InputEffect {
  public type: string;
  public field: string;
  public isNumber: boolean;

  constructor(field: string, type: "=" | "-=" | "+=", isNumber: boolean = false) {
    this.type = type;
    this.field = field;
    this.isNumber = isNumber;
  }
  
  activate(user: User, input: string) {
    const value = this.isNumber ? parseInt(input) : input

    const tagValue = user.getTag(this.field)

    switch (this.type) {
      case "=": user.setTag(this.field, value); return;
      case "+=": {
        if (typeof tagValue === "number" && typeof value === "number") {
          user.setTag(this.field, tagValue + value);
        }
        return;
      }
      case "-=": {
        if (typeof tagValue === "number" && typeof value === "number") {
          user.setTag(this.field, tagValue - value);
        }
        return;
      }
    }
  }


}