---
sidebar_position: 3
description: Information about LightningBot's snipers.
slug: /features/snipers
---

# Snipers

## Nitro Sniper

The nitro sniper will automatically claim nitro gifts sent in any channel you can access.

![Nitro Sniper](./img/nitro-sniper.png)

## Giveaway Sniper

The giveaway sniper will automatically enter giveaways sent in any channel you can access.

![Giveaway Sniper](./img/giveaway-sniper.png)

You will also get a notification when you win a giveaway:

![Giveaway Sniper - Won Giveaway](./img/giveaway-won.png)

In the configuration settings, you can change a couple of settings for the giveaway sniper:

- **Giveaway Sniper Sleep** - The amount of time to wait before entering a giveaway after it is sent. This is to prevent you from getting banned from a server for entering giveaways too quickly.
- **Blacklist** - A list of words that, if found in the giveaway prize, will prevent the sniper from entering the giveaway.
- **Server Blacklist** - A list of server IDs that the sniper will not enter giveaways in. This list is also used by the nitro sniper.

### Custom Bots

You can also configure the giveaway sniper to enter giveaways sent by custom bots. To do this, you need to add the bot's ID to the **Custom Bots** list. You can find the bot's ID by enabling developer mode in Discord and right clicking on the bot's name.

## Privnote Sniper

The privnote sniper will automatically open privnote links sent in any channel you can access and save the contents so you can read them.

![Privnote Sniper](./img/privnote-sniper.png)

## PokéTwo Sniper

The PokéTwo sniper will automatically catch Pokémon that spawn in the channels you specify using AI to detect the Pokémon.

![PokéTwo Sniper](./img/poketwo-sniper.png)

In the configuration settings, you can change a couple of settings for the PokéTwo sniper:

- **Timeout** - The minimum amount of time the sniper will wait before catching another Pokémon.
- **Sleep** - The amount of time the sniper will wait before catching a Pokémon after it spawns.
- **Random Sleep** - If the sniper should wait a random amount of time before catching a Pokémon after it spawns. The **Sleep** setting will be used as the maximum amount of time to wait.
- **Typing** - If enabled, you will appear to be typing when the sniper catches a Pokémon.
- **Fake Activity** - If enabled, the sniper will occasionally send random PokéTwo commands to appear active.
- **Catch Rate** - The percentage of Pokémon the sniper will attempt to catch. The higher the percentage, the more Pokémon the sniper will attempt to catch.
- **Channels** - A list of channels that the sniper will catch Pokémon in. The sniper will only catch Pokémon in these channels.
- **Catch Language** - The language the sniper will use to catch Pokémon. The available languages are English, Japanese, Japanese (Transliterated), German and French.

:::info

More information about the AI used to detect Pokémon can be found [here](https://github.com/LightningDev1/PokeTwo-AI).

:::

## Multi-Token Sniper

The multi-token sniper allows you to use multiple Discord accounts to snipe nitro gifts and giveaways. To do this, add the tokens of the accounts you want to use to the **Tokens** list in the config. You must restart the bot for changes to this list to take effect.
