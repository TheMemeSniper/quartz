const mineflayer = require('mineflayer')
const fs   = require('fs');
const parser   = require('./parser');
var colors = require('colors');
colors.enable()

const confpath = `${process.env.HOME}/.config/quartz/config.json`

const bot = parser.createBot(confpath, process.argv[2])

bot.once("spawn", )


