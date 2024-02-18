---
sidebar_position: 9
description: Use dynamic variables to customize LightningBot.
slug: /features/variables
---

# Variables

LightningBot has a variety of dynamic variables that you can use to customize parts of the bot to your liking. These variables can be used in Custom Activity fields, the title and the footer of embeds, and in the AFK message. The variables are replaced with their corresponding values when the bot sends a message or sets the activity.

| Variable             | Description                                                                                  | Example           |
| -------------------- | -------------------------------------------------------------------------------------------- | ----------------- |
| `$VERSION`           | The current version of LightningBot.                                                         |                   |
| `$DATE`              | The current local date.                                                                      |                   |
| `$TIME`              | The current local time.                                                                      |                   |
| `$UPTIME`            | The bot's uptime.                                                                            |                   |
| `$USEDCOMMANDS`      | The number of commands you have used.                                                        |                   |
| `$TOTALCOMMANDS`     | The total number of commands available.                                                      |                   |
| `$EXTENSIONS`        | The number of extensions you have loaded.                                                    |                   |
| `$SERVERS`           | The number of servers the you're in.                                                         |                   |
| `$FRIENDS`           | The number of friends you have.                                                              |                   |
| `$AVATAR`            | Your avatar. Can be used as an image key for Custom Activity.                                |                   |
| `$OS`                | The operating system of your PC.                                                             |                   |
| `$ARCH`              | The architecture of your PC.                                                                 |                   |
| `$CPU`               | The name of your CPU.                                                                        |                   |
| `$RAMUSAGE`          | The amount of RAM being used in GB.                                                          |                   |
| `$RAMPERCENT`        | The percentage of RAM being used.                                                            |                   |
| `$DISKUSAGE`         | The amount of disk space being used in GB.                                                   |                   |
| `$DISKPERCENT`       | The percentage of disk space being used.                                                     |                   |
| `$SONGNAME`          | The name of the song you are listening to.                                                   |                   |
| `$SONGARTIST`        | The artist of the song you are listening to.                                                 |                   |
| `$SONGALBUM`         | The album of the song you are listening to.                                                  |                   |
| `$SONGDURATION`      | The duration of the song you are listening to.                                               |                   |
| `$SONGCOVER`         | The cover of the song you are listening to. Can be used as an image key for Custom Activity. |                   |
| `$SONGLINK`          | The link to the song you are listening to.                                                   |                   |
| `$WEATHER(LOCATION)` | The current weather in the specified location.                                               | `$WEATHER(Paris)` |
| `$TEMPC(LOCATION)`   | The current temperature in Celsius.                                                          | `$TEMPC(Paris)`   |
| `$TEMPF(LOCATION)`   | The current temperature in Fahrenheit.                                                       | `$TEMPF(Paris)`   |
