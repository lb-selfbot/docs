---
sidebar_position: 23
description: Information about the Custom Activity category
slug: /commands/customactivity-commands
---

import CommandTable from '@site/src/components/CommandTable';

# Custom Activity Commands

Custom Activity commands can be used to set a custom activity on your Discord account. If you're using the UI version of LightningBot, you will be able to see a preview of the activity.

## Activity Types

There are 2 types of custom activities that you can set: RPC and Custom Activity.

### RPC (Rich Presence)

RPC activity works by connecting with the Discord app on your computer and sending activity data to it. This means that you will need to have the Discord app running to be able to use RPC. You also need to have a Discord application on the Discord Developer Portal to be able to use RPC. RPC activities only support the "Playing" activity type.

To customize the images of your RPC activity, you can either create a new image in your Discord application or use the link of your image as the image key.

### Custom Activity

Unlike RPC, you don't need to have Discord running or a Discord application to use Custom Activities. Custom Activities are sent directly to Discord's servers, so they will work even if the Discord app is closed. Custom Activities support all activity types: Playing, Listening, Watching, Streaming and Competing. To add custom images, you can use the `cacreateimagekey` command: This will create a key that you can pass to the `calargeimage` and `casmallimage` commands to set the image. Custom Activity, like RPC, also has support for buttons with custom labels and links that will show up on your profile.

:::info
You can use the following variables in the activity fields:

| Variable   | Description                  |
| ---------- | ---------------------------- |
| `$VERSION` | The version of LightningBot. |
| `$UPTIME`  | The uptime of LightningBot.  |

:::

## Command List

<CommandTable category="CustomActivity" />
