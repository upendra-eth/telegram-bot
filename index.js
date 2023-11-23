require('dotenv').config()
const {TOKEN} = process.env
const telegramBot = require('node-telegram-bot-api')
const bot = new telegramBot(TOKEN, {polling:true})
bot.on('message',(message) => {
let chat_id = message.from.id;
bot.sendMessage(chat_id,message.text)
})

