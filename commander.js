var readline = require('readline');
const logger = require("./logger");
let rl = readline.createInterface(
    process.stdin, process.stdout);


function start(bot){
    rl.on('line', (command) => {
        readline.moveCursor(process.stdout, 0, -1)
        readline.clearScreenDown(process.stdout)
        console.log(`>>> ${command}`)
        if (command === "chat"){
            rl.question("chat> ", bot.chat)
            return
        } else if (command === "list"){
            logger.info("Players online:")
            for (item in bot.players){
                logger.info(item)
            }
        } else if (command === "quit"){
            logger.info("Closing connection")
            bot.quit()
            process.exit()
        } else if (command === "status"){
            logger.info("Player status:")
            logger.info(`Playing as ${bot.username} in dimension ${bot.game.dimension} in gamemode ${bot.game.gameMode}` )
            logger.info(`HP: ${bot.health} | FP: ${bot.food} | SAT: ${bot.foodSaturation}`)
            logger.info(`O2: ${bot.oxygenLevel} | LVL: ${bot.experience.level} | XP: ${bot.experience.points}`)
            logger.info(`World status:`)
            logger.info(`Difficulty: ${bot.game.difficulty}`)
            logger.info(`Ping: ${bot.player.ping}`)
            logger.info(`Raining: ${bot.isRaining}`)
            logger.info(`Is day: ${bot.isDay}`)
            logger.info("Players online:")

            for (item in bot.players){
                logger.info(item)
            }
        } else {
            logger.warn("Unknown command")
        }

      })
}


module.exports = {start}