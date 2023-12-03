---
sidebar_position: 1
description: Frequently asked questions about LightningBot.
slug: /support/faq
---

# FAQ

## What is a selfbot?

Check the [Intro](/intro#what-is-a-selfbot) page for more information.

## What is a Discord token and how do I get one?

A selfbot doesn't log into your account with your email and password, but instead uses a token. A token is a unique string of letters and numbers that is used to authenticate your Discord account. Anyone with your token can log into your account, so it's important to keep it safe. You can find your token by following the steps on the [Getting your token](/getting-your-token) page.

## Can I test LightningBot before buying it?

Yes! We offer everyone a free trial so you can test LightningBot yourself for 7 days instead of relying on our words. Your free trial will be activated automatically after creating an account. Check the [License keys](/license-keys) page for more information.

## Is there a list of commands that LightningBot has?

Yes! You can find a list of all commands in the [Commands](/category/commands) section. You will also find information about the help command there.

## Where does LightningBot store data?

Previous versions of LightningBot (before v4.0.0) stored all files in the Documents folder. With the release of v4.0.0, LightningBot became a multi-platform application, so some changes were made to the file structure. LightningBot now stores all files in the following locations:

- Windows: `%AppData%/LightningBot` or `C:\Users\<username>\AppData\Roaming\LightningBot`
- macOS: `~/Library/Application Support/LightningBot`
- Linux: `~/.config/LightningBot` or `$XDG_CONFIG_HOME/LightningBot`

## Can I use environment variables to log in?

You can use the following environment variables to log in:

- `LB_USERNAME`: Your LightningBot username.
- `LB_PASSWORD`: Your LightningBot password.
- `LB_TOKEN`: Your Discord token.

This can be useful if you want to run LightningBot on a server or in a virtualized environment.

## What command-line arguments does LightningBot support?

LightningBot supports the following command-line arguments:

- `-portable`: Run LightningBot in portable mode. This will store all files in the same directory as the executable.
- `-debug`: Enable debug mode. This will enable more verbose logging for the Discord API. These logs can be found in the `LightningBot/LB.log` file. Using debug mode is not recommended unless directed by a staff member.
- `-weblogin`: Semi-internal argument used by the UI. This will open up a browser window to log in to Discord and output the token to the console.
- `-savedtokens`: Semi-internal argument used by the UI. This will output all saved tokens (tokens used by the installed Discord app) to the console.
