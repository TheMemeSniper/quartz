const mineflayer = require('mineflayer')
const fs = require('fs');
const parser = require('./parser');
const jobs = require("./jobs")
const logger = require("./logger");
const commander = require("./commander")
var readline = require('readline');

const confpath = `${process.env.HOME}/.config/quartz/config.json`

const bot = parser.createBot(confpath, process.argv[2])
logger.info("Connecting to server")

bot.on("entityHurt", (entity) => {
  console.log("here")
  if (entity.type === 'player') {
    if (entity.username == bot.username) {
      logger.panic("Player was hurt, disconnecting!!!")
      process.exit(100)
    }
  }
})


bot.on("spawn", () => {
  logger.info("Player spawned");
})

bot.on("death", () => {
  logger.panic("Player has died")
})

bot.on("health", () => {
  logger.warn(`Health/Food updated: HP: ${bot.health} | FP: ${bot.food}`)
})

bot.on('message', (message, username) => {
  if (username === bot.username) {
    logger.chatout(message, username)
  } else if (username in bot.players) {
    logger.chatin(message, username)
  } else {
    logger.message(message.toAnsi())
  }
})


bot.on('login', () => {
  logger.info("Player has logged in")
  commander.start(bot);
})

bot.on("kicked", (reason) => {
  logger.panic(`Bot kicked from server: ${reason}`)
  process.exit(3)
})

