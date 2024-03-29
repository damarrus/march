import bot from "./bot";
import { UserController } from "./UserController";

bot.on('message', (msg) => {
  try {
    // const chatId = msg.chat.id;
    let user = UserController.getOrCreateUserByMsg(msg);

    if (msg.text === "clear") {
      UserController.clearUser(user)
      user = UserController.getOrCreateUserByMsg(msg);
      bot.sendMessage(msg.chat.id, "Данные очищены").then(() => {
        user.scenarioMessageHandler(msg);
      });
    } else {
      user.scenarioMessageHandler(msg);
    }
    
    // if (user) {
    //   user.messageHandler(msg);
    // } else {
    //   bot.sendMessage(chatId, "Вы кто такие? Я вас не звал!");
    // }
  } catch (e) {
    console.error(e);
  }
});

bot.on("callback_query", (query) => {
  try {
    const chatId = query.from.id;
    const user = UserController.getUserById(chatId);
    
    if (user) {
      user.scenarioMessageHandler(query);
    } else {
      bot.sendMessage(chatId, "Вы кто такие? Я вас не звал!");
    }
  } catch (e) {
    console.error(e);
  }
});
