const mineflayer = require('mineflayer')
const fs = require('fs');
const parser = require('./parser');
const jobs = require("./jobs")
var colors = require('colors');
colors.enable()

const confpath = `${process.env.HOME}/.config/quartz/config.json`

const bot = parser.createBot(confpath, process.argv[2])

bot.on("spawn", () => {
  console.log("INFO: Bot connected to the server".blue)
})

bot.on('entityHurt', (entity) => {
  if (entity.type === 'player') {
    if (entity.username == bot.username) {
      console.log("PANIC: Player was hurt, disconnecting!!!".red)
      process.exit(1)
    }
  }
})


