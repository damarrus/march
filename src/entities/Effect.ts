import { User } from "./User";

export class Effect {
  public type: string;
  public field: string;
  public value: string | number | boolean;
  public isTag: boolean = false;

  constructor(field: string, type: "=", value: string | boolean);
  constructor(field: string, type: "=", value: string | boolean, isTag: boolean);
  constructor(field: string, type: "=" | "-=" | "+=", value: number);
  constructor(field: string, type: "=" | "-=" | "+=", value: number, isTag: boolean);
  constructor(field: string, type: "=" | "-=" | "+=", value: string);
  constructor(field: string, type: "=" | "-=" | "+=", value: string, isTag: boolean);
  constructor(field: string, type: "=" | "-=" | "+=", value: string | boolean | number, isTag = false) {
    this.type = type
    this.field = field
    this.value = value
    this.isTag = isTag
  }
  
  activate(user: User) {
    if (this.field === 'CLEAR') {
      user.clearTags()
      return;
    }

    const tagValue = user.getTag(this.field)
    const value = this.isTag && typeof this.value === "string" ? user.getTag(this.value) : this.value

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