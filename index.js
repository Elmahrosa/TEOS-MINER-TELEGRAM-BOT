// Main bot entry point
require('dotenv').config();
const { Telegraf } = require('telegraf');
const fs = require('fs');
const path = require('path');

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

// Load all commands
type = '.js'
fs.readdirSync('./commands').forEach(file => {
    if (file.endsWith(type)) {
        const command = require(`./commands/${file}`);
        command(bot);
    }
});

bot.launch();
console.log('TEOS Miner Bot is running...');