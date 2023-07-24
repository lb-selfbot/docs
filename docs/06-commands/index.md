---
sidebar_position: 6
slug: /category/commands
---

import DocCardList from '@theme/DocCardList';

# Commands

Commands are the main way of interacting with LightningBot. Commands are messages that you send inside Discord with a specific format. They start with a prefix, usually abbreviated as `[p]`, followed by the command name, and then any arguments. For example, the command to play a Spotify song is `[p]splay <song name>`. You can change your prefix, but it is `!` by default.

Command arguments are enclosed with `<>` if they are required, and `[]` if they are optional. For example, song name argument in `[p]splay <song name>` is required, but the content argument in `[p]slistenalong [content]` is optional.

:::info
The `[p]slistenalong` command sends a Spotify listen along invite if you are currently listening to Spotify. The content argument is an optional message that will be sent along with the invite.
:::

:::tip
Some commands may have arguments that are surrounded by quotation marks, like the optionpoll command: `[p]optionpoll <"question"> <"option1"> <"option2">`. This is because the command will not work if the arguments contain spaces, so you need to surround them with quotation marks. Here is an example of how you would use the optionpoll command: `[p]optionpoll "What is your favorite color?" "Red" "Blue"`.
:::

## Help Command

To see a list of all commands, run `[p]help`. You can also get more information about a specific command or category by running `[p]help [name]`, and if there are multiple pages of commands, you can go to the next page by running `[p]help [name] [page]`.

---

## Command Categories

Select a category below for documentation about the commands in that category.

<DocCardList />
