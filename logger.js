var colors = require('colors');
var player = require('play-sound')(opts = {})
colors.enable()

function info(message){
    console.log(`INFO: ${message}`.blue)
    player.play("./assets/sounds/info.wav");
}

function warn(message){
    console.log(`WARNING: ${message}`.yellow)
    player.play("./assets/sounds/warning.wav");
}

function panic(message){
    console.log(`PANIC: ${message}`.red)
    player.play("./assets/sounds/panic.wav");
}

function chatin(message, username){
    console.log(`<${username}> ${message}`.white)
    player.play("./assets/sounds/chatin.wav");
}

function chatout(message, username){
    console.log(`<${username}> ${message}`.white)
    player.play("./assets/sounds/chatout.wav");
}

function message(message){
    console.log(`${message}`.white)
    player.play("./assets/sounds/message.wav");
}

module.exports = { info, warn, panic, chatout, chatin, message};