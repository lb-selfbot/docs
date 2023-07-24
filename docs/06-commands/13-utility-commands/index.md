---
sidebar_position: 13
description: Information about the Utility category
slug: /commands/utility-commands
---

import CommandTable from '@site/src/components/CommandTable';

# Utility Commands

Utility commands are a collection of various commands that can be used for a variety of purposes. You can use them to translate text, get information about your system, calculate math expressions and more.

### Send Interval

The `sendinterval` command can be used to repeatedly send a message to a channel. Here is an example of how to use it:

```
[p]sendinterval 3600 20 "!bump"
```

This will send the message `!bump` to the current channel every 3600 seconds (1 hour) for 20 times.

If you want the message to be deleted after sending, you can also add the `DELETE` or `INSTANT_DEL` flag to the command. Here is an example:

```
[p]sendinterval 3600 20 "!bump" DELETE
```

## Command List

<CommandTable category="Utility" />
