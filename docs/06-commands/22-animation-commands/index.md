---
sidebar_position: 22
description: Information about the Animation category
slug: /commands/animation-commands
---

import CommandTable from '@site/src/components/CommandTable';

# Animation Commands

Animation commands can be used to create animations that edit a message. There are a couple pre-made animations, but you can also create your own animations.

## Custom Animations

To create an animation, you need to create a text file (ending in `.txt`) in the `LightningBot/Animations` folder. Every line of this file will be a separate frame of the animation, like this:

:::note someanimation.txt
```
E
EX
EXA
EXAM
EXAMP
EXAMPL
EXAMPLE
```
:::

To use this animation, you can use the `customanimation` command by passing the name of the file without the `.txt` extension:

```
[p]customanimation someanimation
```



## Command List

<CommandTable category="Animation" />
