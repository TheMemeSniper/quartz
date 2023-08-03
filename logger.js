var colors = require('colors');
var player = require('play-sound')(opts = {})
const parser = require("./parser");
var soundScheme = parser.getSoundScheme(`${process.env.HOME}/.config/quartz/config.json`);
colors.enable()

function info(message){
    console.log(`INFO: ${message}`.blue)
    player.play(`./assets/sounds/${soundScheme}/info.wav`);
}

function warn(message){
    console.log(`WARNING: ${message}`.yellow)
    player.play(`./assets/sounds/${soundScheme}/warning.wav`);
}

function panic(message){
    console.log(`PANIC: ${message}`.red)
    player.play(`./assets/sounds/${soundScheme}/panic.wav`);
}

function chatin(message, username){
    console.log(`<${username}> ${message}`.white)
    player.play(`./assets/sounds/${soundScheme}/chatin.wav`);
}

function chatout(message, username){
    console.log(`<${username}> ${message}`.white)
    player.play(`./assets/sounds/${soundScheme}/chatout.wav`);
}

function message(message){
    console.log(`${message}`.white)
    player.play(`./assets/sounds/${soundScheme}/message.wav`);
}

module.exports = { info, warn, panic, chatout, chatin, message};