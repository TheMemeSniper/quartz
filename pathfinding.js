const pathfinder = require('mineflayer-pathfinder').pathfinder
const Movements = require('mineflayer-pathfinder').Movements
const { GoalBlock } = require('mineflayer-pathfinder').goals

function goToBlock(coordinates, bot){
    bot.loadPlugin(pathfinder)
    const defaultMove = new Movements(bot)
    defaultMove.canDig = false

    bot.pathfinder.setMovements(defaultMove)
    bot.pathfinder.setGoal(new GoalBlock(coordinates[0], coordinates[1], coordinates[2]))

    

}

module.exports = { goToBlock }