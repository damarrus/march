import TelegramBot from "node-telegram-bot-api";
import { User } from "./User";

export class Condition {
  public type: string;
  public field: string;
  public value: string | number | boolean;
  public isTag: boolean;
  constructor(field: string, type: "==" | "!=", value: string);
  constructor(field: string, type: "==", value: boolean);
  constructor(field: string, type: "==" | "!=" | ">" | ">=" | "<" | "<=", value: number);

  constructor(field: string, type: string, value: string | boolean | number, isTag = false) {
    this.type = type
    this.field = field
    this.value = value
    this.isTag = isTag
  }

  check(user: User) {
    const tagValue = user.getTag(this.field)
    const value = this.isTag && typeof this.value === "string" ? user.getTag(this.value) : this.value

    if (tagValue === false) return value === false;

    switch (this.type) {
      case "==": return tagValue === value
      case "!=": return tagValue !== value
      case ">": return tagValue > value
      case "<": return tagValue < value
      case ">=": return tagValue >= value
      case "<=": return tagValue <= value
    }
  }
}

