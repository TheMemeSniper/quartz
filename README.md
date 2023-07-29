# quartz
minimal minecraft java edition client with the purpose of logging in and loading chunks

# installation
clone the repo

run `npm install mineflayer colors`

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