---
sidebar_position: 14
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

## Uploading Commands

You can use the `uploadsc`, `uploadfile` and `uploadlink` files to upload files. There are a couple of destinations you can upload to:

- **Anonfiles** - Uploads files to https://anonfiles.com.
- **ImgBB** - Uploads images to https://imgbb.com.
- **Imgur** - Uploads images to https://imgur.com.
- **s-ul.eu** - Uploads files to https://s-ul.eu.
- **vgy.me** - Uploads images to https://vgy.me.
- **SXCU** - Uploads files according to a ShareX custom uploader configuration.
> To use this destination, you need to provide your configuration by placing it at `LightningBot/uploader.sxcu`.

For an up-to-date list of supported destinations, you can use the `listdestinations` command.


## Command List

<CommandTable category="Utility" />
