const mineflayer = require('mineflayer')
const fs   = require('fs');
var configdata;


function createBot(config, host){
    if(!fs.existsSync(config)) {
        throw new Error(`Could not find file ${config}`)
      } else {
          try {
              configdata = JSON.parse(fs.readFileSync(`${config}`, 'utf8'));
            } catch (e) {
              throw new Error(`Configuration file unparsable: ${e}`)
            }
      }

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

module.exports = { createBot };