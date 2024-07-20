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
[p]createscjob daily-getter #bot-commands @Dank Memer 24h daily
```

This will create a job that executes the slash command `daily` in the channel `#bot-commands` every day.

If the command you want to execute has options, you can add these as well. Here is an example:

```
[p]createscjob daily-deposit #bot-commands @Dank Memer 24h deposit 1000
```

This is equivalent to executing `/deposit 1000` every day in the channel `#bot-commands`.

You can manage the slash command job using the name you provided.

## Deleting a job

You can use the `deletescjob` command to delete a job. Here is an example:

```
[p]deletescjob daily-deposit
```

This will delete the job with the name `daily-deposit`.

## Editing a job

You can use `setscjobcommand`, `setscjobchannel` and `setscjobinterval` to edit a job. Below are some examples:

```
[p]setscjobcommand daily-deposit @Dank Memer monthly

[p]setscjobchannel daily-deposit #general

[p]setscjobinterval daily-deposit 12h
```