import TelegramBot from "node-telegram-bot-api";
import db from "./db";
import { User } from "./entities/User";

export class UserController {

  private static users: User[] = (db.get('/users') ?? []).map(dbUser => new User(dbUser));

  static getOrCreateUserByMsg(msg: TelegramBot.Message) {
    let user = UserController.users.find(u => u.getId() === msg.chat.id);
    if (!user) user = this.createUser(msg)

    return user;
  }

  static createUser(msg: TelegramBot.Message) {
    let dbUser = (db.get('/users') ?? []).find(dbu => dbu.id === msg.chat.id)
    if (!dbUser) {
      dbUser = {
        id: msg.chat.id,
        name: [msg.chat.first_name, msg.chat.last_name, msg.chat.username].join(' '),
        history: [{ dialog: "reg", phrase: "reg", date: new Date() }],
        tags: [{ name: "dialog", value: "start" }],
        save: [{ name: "dialog", value: "start" }]
      }
      db.push('/users', dbUser);
      db.save();
    }
    
    const user = new User(dbUser);
    this.users.push(user);

    return user;
  }

  static clearUser(user: User) {
    this.users = this.users.filter(u => u !== user)
    user.clear()
    user.clearTags()
  }

  static getUserById(id : number) {
    const user = UserController.users.find(u => u.getId() === id);  
    return user;
  }

}