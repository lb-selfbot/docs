---
sidebar_position: 7
description: Information about the Event Reactions category
slug: /commands/eventreaction-commands
---

import CommandTable from '@site/src/components/CommandTable';

# Event Reaction Commands

Event Reaction commands are commands that can do something when a specific event happens. For example, you can make the bot time out a user when they mention you.

You will also find the AFK mode in this category. For more information about the AFK mode, see the [AFK Mode](/features/afk-mode) page.

## Event reactions

Event reactions are stored in the configuration file, so they will persist after restarting the bot. You can create, view and delete event reactions using the commands below.

You can use multiple event reactions of the same type if they have different arguments. For example, you can create 2 keyword notifiers: One for the word "lightningbot" and one for the word "discord".

## Usage

The examples below use the `keywordnotifier` event reaction, but you can use any event reaction instead.

- To toggle an event reaction, use the command as follows:
  ```
  [p]keywordnotifier toggle "lightningbot" #general-chat
  ```
- To list all event reactions, use the command as follows:
  ```
  [p]keywordnotifier list
  ```
- To clear all event reactions, use the command as follows:
  ```
  [p]keywordnotifier clear
  ```

## Command List

<CommandTable category="EventReactions" />
