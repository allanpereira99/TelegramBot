import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
dotenv.config()

const bot = new TelegramBot(process.env.BOT_TOKEN, {
	polling: true
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `Welcome ${msg.from.first_name}`, {reply_to_message_id: msg.message_id});
});
