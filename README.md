# quartz
minimal minecraft java edition client with the purpose of logging in and loading chunks

# installation
clone the repo

run `npm install`

# configuration

in `~/.config/quartz/`, make a new file called `config.json`.

example configuration:

```
{
  "localhost": {
    "server": {
      "port": 25565,
      "auth": "microsoft"
    },
    "locations": {
      "500, 188, -328": {}
    }
  }
}
```

# usage

`node main.js <host ip> [--viewer]`

`--viewer` starts the prismarine web viewer at port 3000 on localhost. as of writing this, prismarine-viewer does not support 1.19+.
see the following issues:
https://github.com/PrismarineJS/prismarine-viewer/issues/321
https://github.com/PrismarineJS/prismarine-viewer/issues/399

# console

quartz has a console you can use for minimal interactions, like chat and checking your status.

commands so far:
```
quit - close connection to server and exit quartz
chat - open prompt for talking to public chat and running commands
status - display status of yourself and the world around you
```