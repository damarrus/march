import bot from "./bot";
import { dialogs } from "./dialogs";
import { UserController } from "./UserController";

dialogs.forEach(dialog => {
  let isError = false;
  dialog.phrases.forEach(phrase => {
    const nextDialog = dialogs.find(d => d.name === phrase.nextDialog)
    if (!nextDialog) {
      isError = true
      console.log(`${dialog.name}-${phrase.buttonData} => ${phrase.nextDialog}`)
    }
  })
  if (dialog.inputPhrase) {
    const nextDialog = dialogs.find(d => d.name === dialog.inputPhrase.nextDialog)
    if (!nextDialog) {
      isError = true
      console.log(`${dialog.name}-inputPhrase => ${dialog.inputPhrase.nextDialog}`)
    }
  }

  if (isError) {
    process.exit(0)
  }
})

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
    } else if (msg.text === "save") {
      user.saveCommand()
      bot.sendMessage(msg.chat.id, "Игра сохранена").then(() => {
        user.scenarioMessageHandler(msg);
      });
    } else if (msg.text === "load") {
      user.loadCommand()
      bot.sendMessage(msg.chat.id, "Игра загружена").then(() => {
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
