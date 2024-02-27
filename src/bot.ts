import * as fs from 'fs';
import TelegramBot from "node-telegram-bot-api";

const token = fs.readFileSync('bot_token', 'utf8').trim();
const bot = new TelegramBot(token, {polling: true, filepath: false});

export default bot;