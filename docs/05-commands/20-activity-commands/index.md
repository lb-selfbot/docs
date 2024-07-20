---
sidebar_position: 20
description: Information about the Activity category
slug: /commands/activity-commands
---

import CommandTable from '@site/src/components/CommandTable';

# Activity Commands

Activity commands can be used to change your Discord status and activity.

## Custom Activity Commands

Custom Activity commands can be used to set a custom activity on your Discord account. If you're using the UI version of LightningBot, you will be able to see a preview of the activity.

### Activity Types

There are 2 types of custom activities that you can set: RPC and Custom Activity.

#### RPC (Rich Presence)

RPC activity works by connecting with the Discord app on your computer and sending activity data to it. This means that you will need to have the Discord app running to be able to use RPC. You also need to have a Discord application on the Discord Developer Portal to be able to use RPC. RPC activities only support the "Playing" activity type.

To customize the images of your RPC activity, you can either create a new image in your Discord application or use the link of your image as the image key.

#### Custom Activity

Unlike RPC, you don't need to have Discord running or a Discord application to use Custom Activities. Custom Activities are sent directly to Discord's servers, so they will work even if the Discord app is closed. Custom Activities support all activity types: Playing, Listening, Watching, Streaming, Competing and Spotify. To add custom images, you can use the `cacreateimagekey` command. This will create a key that you can pass to the `calargeimage` and `casmallimage` commands to set the image. Custom Activity, like RPC, also has support for buttons with custom labels and links that will show up on your profile.

### Custom Activity Platform

Custom Activity supports a variety of platforms for the Playing activity type. You can set the platform using the `caplatform` command. The available platforms are: `Default`, `PS4`, `PS5`, `Xbox`, `Samsung`.


### Activity Presets

Activity presets are a way to save your custom activity settings and load them later. You can manage your presets using the `capresets` command. You can set a built-in preset as your custom activity using the `activitypresets` command.

:::info

You can use dynamic variables in the Custom Activity fields to customize the activity. See the [Variables](/features/variables) page for more information about dynamic variables.

Examples:

- `Using LightningBot $VERSION for $UPTIME`
- `Listening to $SONGNAME by $SONGARTIST`
- `CPU: $CPUPERCENT | RAM: $RAMPERCENT`

:::

## Command List

<CommandTable category="Activity" />
