const mineflayer = require('mineflayer');
const fs   = require('fs');
const { exec } = require('child_process');

function getConfigData(config){
  var configdata;
  if(!fs.existsSync(config)) {
    throw new Error(`Could not find file ${config}`)
  } else {
      try {
          configdata = JSON.parse(fs.readFileSync(`${config}`, 'utf8'));
        } catch (e) {
          throw new Error(`Configuration file unparsable: ${e}`)
        }
  }

  return configdata
}


function createBot(config, host){

  const configdata = getConfigData(config)

      const hostkey = configdata[host];

      if (hostkey == undefined){
        throw new Error(`Host ${host} not found in configuration file`);
      }

      var bot = mineflayer.createBot({
        host: host,
        port: hostkey.server.port,
        auth: hostkey.server.auth
      })

      return bot
}

function getSoundScheme(config){

  const configdata = getConfigData(config)
  var scheme;

  try {
    scheme = configdata.quartz.soundscheme
  } catch(e){
    if(!fs.existsSync("./assets/sounds/chip")) {
      console.log("Audible notifications unavailable, no sound scheme defined in configuration file and fallback does not exist")
      return "none"
    } else {
      console.log("No sound scheme defined, falling back to chip!")
      console.log(e)
      console.log(configdata)
      return "chip"
    }
  }


  // make sure that the user's sound scheme exists

  if (!fs.existsSync(`./assets/sounds/${scheme}`)){
    if(!fs.existsSync("./assets/sounds/chip")){
      console.log(`Audible notifications unavailable, sound scheme ${scheme} does not exist and fallback does not exist`)
      return "none"
    } else {
      console.log(`Sound scheme ${scheme} does not exist, falling back to chip`)
      return "chip"
    }
  }

  return scheme


}

module.exports = { createBot, getSoundScheme };