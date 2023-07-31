var readline = require('readline');
const logger = require("./logger");
const pathfinder = require('./pathfinding');
const { exitCode } = require('process');
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
            logger.info(`At position ${bot.entity.position}`)
            logger.info(`HP: ${bot.health} | FP: ${bot.food} | SAT: ${bot.foodSaturation}`)
            logger.info(`O2: ${bot.oxygenLevel} | LVL: ${bot.experience.level} | XP: ${bot.experience.points}`)
            logger.info(`World status:`)
            logger.info(`Difficulty: ${bot.game.difficulty}`)
            logger.info(`Ping: ${bot.player.ping}`)
            logger.info(`Raining: ${bot.isRaining}`)
            logger.info(`Is day: ${bot.time.isDay}`)
            logger.info("Players online:")

            for (item in bot.players){
                logger.info(item)
            }
        } else if (command === "goto") {
            logger.warn("Pathfinding is an experimental feature and may cause death.")
            logger.warn("Additionally, pathfinding is very limited and often gets stuck.")
            logger.warn("For the safety of structures around you, the pathfinder has had block destruction disabled.")
            logger.warn("If you wish to quit, type 'quit' into the prompt below.")
            rl.question("goto> ", (coords) => {
                if (coords == "quit") return
                try{
                    pathfinder.goToBlock(coords.split(" "), bot)
                    logger.info("Navigating...")
                } catch (e) {
                    logger.warn("Pathfinding error!!!")
                    logger.warn(e)
                }
                
            })
        } else if (command === "eval") {
            rl.question("eval> ", (code) => {
                try{
                    logger.info("Evaluating...")
                    eval(code)
                } catch (e) {
                    logger.warn(e)
                }
                
            })
        } else if (command === "pos") {
          logger.info(`Player is currently at position ${bot.entity.position} in dimension ${bot.game.dimension}`)  
        } else {
            logger.warn("Unknown command")
        }

      })
}


module.exports = {start}