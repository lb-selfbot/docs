---
sidebar_position: 7
description: Execute slash commands at a specific interval.
slug: /features/slash-command-jobs
---

# Slash Command Jobs

Slash command jobs can be used to execute a slash command at a specific interval. You can use the `listscjobs` command to get a list of all current slash command jobs.


:::info
Slash command jobs are saved in your configuration file, so they will persist after restarting LightningBot.
:::

## Creating a job

You can use the `createscjob` command to create a job. Here is an example:

```
[p]createscjob #bot-commands @Dank Memer 24h daily
```

This will create a job that executes the slash command `daily` in the channel `#bot-commands` every day.

If the command you want to execute has options, you can add these as well. Here is an example:

```
[p]createscjob #bot-commands @Dank Memer 24h deposit 1000
```

This is equivalent to executing `/deposit 1000` every day in the channel `#bot-commands`.

After creating a slash command job, you will get a Job ID, which you can use to manage the job. A Job ID looks like this: `88b3fecab818243f3fe656c5bd0ca099`

:::info
Slash command jobs are stored in `LightningBot/SlashCommands/jobs.json`.
:::

## Deleting a job

You can use the `deletescjob` command to delete a job. Here is an example:

```
[p]deletescjob 88b3fecab818243f3fe656c5bd0ca099
```

This will delete the job with the ID `88b3fecab818243f3fe656c5bd0ca099`.

## Editing a job

You can use `setscjobcommand`, `setscjobchannel` and `setscjobinterval` to edit a job. Here is an example:

```
[p]setscjobcommand 88b3fecab818243f3fe656c5bd0ca099 @Dank Memer monthly

[p]setscjobchannel 88b3fecab818243f3fe656c5bd0ca099 #general

[p]setscjobinterval 88b3fecab818243f3fe656c5bd0ca099 12h
```