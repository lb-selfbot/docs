---
sidebar_position: 8
description: Add features to LightningBot with extensions.
slug: /features/extensions
---

# Extensions

You can write your own extensions to add features to LightningBot. Extensions are written in Golang and can be loaded into LightningBot at runtime. The available packages are listed below:

| Package                                  | Description                      | Link                                                                                             |
| ---------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| `github.com/LightningDev1/discordgo`     | Discord API wrapper              | [https://github.com/LightningDev1/discordgo](https://github.com/LightningDev1/discordgo)         |
| `github.com/LightningDev1/dgc`           | Discordgo command router         | [https://github.com/LightningDev1/dgc](https://github.com/LightningDev1/dgc)                     |
| `github.com/LightningDev1/LB-Extensions` | Interop package for LightningBot | [https://github.com/LightningDev1/LB-Extensions](https://github.com/LightningDev1/LB-Extensions) |
| Golang standard library                  | Libraries included in Golang     | [https://pkg.go.dev/std](https://pkg.go.dev/std)                                                 |

## Creating an extension

You can write your extension code in the `LightningBot/Extensions` folder. Creating a Golang module is not required, but can be useful for easier development. Run these commands to create a new module:

```bash
cd /folder/to/LightningBot/Extensions
go mod init my-extension
go get github.com/LightningDev1/LB-Extensions github.com/LightningDev1/discordgo github.com/LightningDev1/dgc
```

:::note
You can find the location of the LightningBot folder in the FAQ: [Where does LightningBot store data?](/support/faq#where-does-lightningbot-store-data)
:::

### Information

- Any `.go` files in the `LightningBot/Extensions` folder will be loaded as an extension.
- The `Register` function will be called when the extension is loaded. You can use this function to register commands and events.
  - The `Register` function should have the following signature:
    ```go
    func Register(session *discordgo.Session, router *dgc.Router)
    ```
  - The `session` parameter is the Discord session that the bot is using. You can use this to send messages, edit messages, etc.
  - The `router` parameter is the command router that the bot is using. You can use this to register commands and events. Commands registered using this router will be added to LightningBot's command list.
- You can use the `lightningbot` package to interact with LightningBot. See the [Interop Package API](#interop-package-api) section for more information.
- You can use the `discordgo` package to interact with Discord. See the [Discordgo API](https://pkg.go.dev/github.com/LightningDev1/discordgo) for more information.
- You can use the `dgc` package to register commands and events. See the [dgc API](https://pkg.go.dev/github.com/LightningDev1/dgc) for more information.

## Examples

This is an example extension that adds a command to LightningBot. It will respond to the command `[p]hello` with `Hello there!`.

<details>
  <summary>LightningBot/Extensions/hello.go</summary>

```go
package extensions

import (
  "github.com/LightningDev1/dgc"
  "github.com/LightningDev1/discordgo"
)

func Register(session *discordgo.Session, router *dgc.Router) {
  router.StartCategory("Extensions", "Extension commands")
  router.RegisterCmd(&dgc.Command{
    Name:        "hello",
    Description: "Sends a hello message",
    Usage:       "[p]hello",
    Handler:     hello,
  })
}

func hello(ctx *dgc.Ctx) {
  ctx.RespondText("Hello there!")
}
```

</details>

This is an example extension that listens for new messages in a server and sends a notification to the console when a message is received.

<details>
  <summary>LightningBot/Extensions/message-logger.go</summary>

```go
package extensions

import (
  "github.com/LightningDev1/LB-Extensions"

  "github.com/LightningDev1/dgc"
  "github.com/LightningDev1/discordgo"
)

func Register(session *discordgo.Session, router *dgc.Router) {
  session.AddHandler(messageHandler)
}

func messageHandler(s *discordgo.Session, m *discordgo.MessageCreate) {
  if m.GuildID == "838151831086825533" {
    lightningbot.NewConsoleMessage().
      SetTitle("Message Logger Extension").
      AddInfo("Author", m.Author.Username).
      AddInfo("Content", m.Content).
      Show()
  }
}
```

</details>

This is an example extension that adds a command to LightningBot. It will respond to the command `[p]yoda <text>` with the text translated to Yoda language.

Uses `net/url` for URL encoding, `net/http` for API requests, and `encoding/json` for JSON decoding.

<details>
  <summary>LightningBot/Extensions/yoda-translator.go</summary>

```go
package extensions

import (
	"encoding/json"
	"net/http"
	"net/url"

	"github.com/LightningDev1/dgc"
	"github.com/LightningDev1/discordgo"
)

func Register(session *discordgo.Session, router *dgc.Router) {
	router.StartCategory("Extensions", "Extension commands")
	router.RegisterCmd(&dgc.Command{
		Name:        "yoda",
		Description: "Translate text to Yoda language",
		Usage:       "[p]yoda <text>",
		Handler:     yoda,
	})
}

func yoda(ctx *dgc.Ctx) {
	query := url.Values{
		"text": {ctx.Arguments.Raw()},
	}

	resp, err := http.Get("https://api.funtranslations.com/translate/yoda.json?" + query.Encode())
	if err != nil {
		ctx.RespondText("Error: " + err.Error())
		return
	}

	if resp.StatusCode != 200 {
		ctx.RespondText("Error: " + resp.Status)
		return
	}

	var jsonResp map[string]any
	err = json.NewDecoder(resp.Body).Decode(&jsonResp)
	if err != nil {
		ctx.RespondText("Error: " + err.Error())
		return
	}

	if contents, ok := jsonResp["contents"].(map[string]any); ok {
		if translated, ok := contents["translated"].(string); ok {
			ctx.RespondText(translated)
			return
		}
	}

	ctx.RespondText("Error: Invalid response")
}
```

</details>

This is an example extension that modifies the configuration of LightningBot.

<details>
  <summary>LightningBot/Extensions/modify-config.go</summary>

```go
package extensions

import (
	"github.com/LightningDev1/LB-Extensions"
	"github.com/LightningDev1/dgc"
	"github.com/LightningDev1/discordgo"
)

func Register(session *discordgo.Session, router *dgc.Router) {
	router.StartCategory("Extensions", "Extension commands")
	router.RegisterCmd(&dgc.Command{
		Name:        "catactivity",
		Description: "Sets a custom activity for the bot",
		Usage:       "[p]catactivity",
		Handler:     catactivity,
	})
}

func catactivity(ctx *dgc.Ctx) {
	cfg, err := lightningbot.GetConfig()
	if err != nil {
		ctx.RespondText("Error getting config")
		return
	}

	cfg.Activity.Enabled = true
	cfg.Activity.ActivityType = "CustomActivity"
	cfg.Activity.Type = "Watching"
	cfg.Activity.Name = "Cats"
	cfg.Activity.State = "meow"
	cfg.Activity.Details = ""
	cfg.Activity.LargeImage = "mp:external/hx4oX_ltopFSei-tmC5BYEHp2p5Zu-Vw9ERmeOrEgh0/https/media.tenor.com/GOabrbLMl4AAAAAd/plink-cat-plink.gif"
	cfg.Activity.Button1Label = "Click to see cats"
	cfg.Activity.Button1URL = "https://cataas.com/cat"
	cfg.Activity.Button2Label = "Click to see more cats"
	cfg.Activity.Button2URL = "https://cataas.com/cat"

	err = cfg.Save()
	if err != nil {
		ctx.RespondText("Error saving config")
		return
	}

	ctx.RespondText("Saved config")
}
```

</details>

## Interop Package API

### Constants

#### `lightningbot.Version`

The current version of LightningBot.

### Types

#### `lightningbot.Config`

Config is the configuration of LightningBot.

<details>
  <summary>View Config implementation</summary>

```go
type Config struct {
	Account struct {
		LightningBot struct {
			Username string
			Password string
		}
		Discord struct {
			Token string
		}
	}
	Notifications struct {
		Enabled bool
	}
	Snipers struct {
		Blacklist       []string
		ServerBlacklist []string
		GiveawaySniper  struct {
			Sleep      int
			Enabled    bool
			CustomBots []string
		}
		NitroSniper      bool
		PrivnoteSniper   bool
		PokeTwoSniper  struct {
			Enabled      bool
			Channels     []string
			Sleep        int
			RandomSleep  bool
			Timeout      int
			Typing       bool
			CatchRate    int
			FakeActivity bool
		}
		MultiTokenSniper bool
		Tokens           []string
	}
	Webhooks struct {
		NitroSniper      string
		GiveawaySniper   string
		SelfbotDetection string
		StaffDetection   string
		Notifiers        string
		PingDetection    string
		Misc             string
		Sessions         string
	}
	Events struct {
		BanNotifier           bool
		DMNotifier            bool
		DMEditNotifier        bool
		DMDeleteNotifier      bool
		DMTypingNotifier      bool
		MessageDeleteNotifier bool
		DiscordStaffDetection bool
		GhostPingDetection    bool
		SelfbotDetection      bool
		TicketNotifier        bool
		SessionConnected      bool
		SessionDisconnected   bool
	}
	Activity struct {
		Enabled        bool
		ActivityType   string
		Type           string
		ClientID       string
		Name           string
		State          string
		Details        string
		Invitable      bool
		Time           bool
		StreamingURL   string
		LargeImage     string
		LargeImageText string
		SmallImage     string
		SmallImageText string
		Button1Label   string
		Button1URL     string
		Button2Label   string
		Button2URL     string
	}
	UI struct {
		Theme               string
		HideToSystemTray    bool
		RunOnStartup        bool
		RunSelfbotOnStartup bool
	}
	Selfbot struct {
		CommandPrefix        string
		CommandMode          string
		Title                string
		Footer               string
		DeleteResponses      bool
		DeleteResponsesDelay int
		DeleteCommands       bool
		MobileFriendly       bool
		Client               string
		CommandAliases       map[string]string
	}
	Protections struct {
		AntiPhishing      bool
		AntiFriendRequest bool
		AntiMassDM        bool
		ServerProtections struct {
			AntiInvite       bool
			AntiSpam         bool
			AntiUpper        bool
			AntiDelete       bool
			ProtectedServers []string
		}
	}
	AFK struct {
		Enabled         bool
		Delay           int
		RandomDelay     bool
		OnDM            bool
		OnPing          bool
		MustBeInactive  bool
		InactiveTimeout int
		Reply           bool
		Typing          bool
		Message         string
		AI              bool
	}
	Sharing struct {
		SharedUsers            []string
		SharedCategories       []string
		SharedCommands         []string
		ShareAll               bool
		BlockDangerousCommands bool
	}
	Tags map[string]string
}
```

</details>

#### `lightningbot.ConsoleMessage`

ConsoleMessage is a utility to show information in the console.

<details>
  <summary>View ConsoleMessage implementation</summary>

```go
// ConsoleMessage is a utility to show information in the console.
type ConsoleMessage interface {
	// SetTitle sets the title of the message
	SetTitle(title string) ConsoleMessage

	// SetColor sets the color of the message
	// hexColor should be in the format #RRGGBB
	SetColor(hexColor string) ConsoleMessage

	// SetWebhookURL sets the webhook URL to send the message to
	SetWebhookURL(webhookURL string) ConsoleMessage

	// AddInfo adds a key/value pair to the message
	AddInfo(key, value string) ConsoleMessage

	// AddInfoConditional adds a key/value pair to the message if the condition is true
	AddInfoConditional(key, value string, condition bool) ConsoleMessage

	// Show shows the message in the console
	Show()
}
```

</details>

#### `lightningbot.Embed`

Embed is a utility to send embeds to Discord.

<details>
  <summary>View Embed implementation</summary>

```go
// Embed is a utility to send embeds to Discord.
type Embed interface {
	// SetTitle sets the title of the embed
	SetTitle(title string) Embed

	// SetDescription sets the description of the embed
	SetDescription(description string) Embed

	// SetSubtext sets the subtext of the embed
	SetSubtext(subtext string) Embed

	// AddField adds a field to the embed
	AddField(name, value string) Embed

	// SetFooter sets the footer of the embed
	SetFooter(footer string) Embed

	// SetImage sets the image of the embed
	SetImage(imageURL string) Embed

	// SetAuthor sets the author of the embed
	SetAuthor(author string) Embed

	// Send sends the embed to Discord
	Send(ctx *dgc.Ctx) []*discordgo.Message

	// SendWebhook sends the embed to a webhook
	SendWebhook(webhookURL string)
}
```

</details>

### Functions

#### `lightningbot.ClearConsole()`

Clears the console. Works for the native, web and UI console.

<details>
  <summary>Example usage</summary>

```go
import "github.com/LightningDev1/LB-Extensions"

lightningbot.ClearConsole()
```

</details>

#### `lightningbot.Notification(message string)`

Sends a toast notification to the user.

<details>
  <summary>Example usage</summary>

```go
import "github.com/LightningDev1/LB-Extensions"

lightningbot.Notification("Example notification")
```

</details>

#### `lightningbot.LogError(message string)`

Logs an error to the console.

<details>
  <summary>Example usage</summary>

```go
import "github.com/LightningDev1/LB-Extensions"

lightningbot.LogError("Example error")
```

</details>

#### `lightningbot.NewConsoleMessage() lightningbot.ConsoleMessage`

Creates a new console message.

<details>
  <summary>Example usage</summary>

```go
import "github.com/LightningDev1/LB-Extensions"

lightningbot.NewConsoleMessage().
    SetTitle("My Title").
    SetColor("#FF0000").
    SetWebhookURL("https://discord.com/api/webhooks/...").
    AddInfo("Key", "Value").
    AddInfoConditional("Key", value, value != "").
    Show()
```

</details>

#### `lightningbot.NewEmbed() lightningbot.Embed`

Creates a new embed.

<details>
  <summary>Example usage</summary>

```go
import "github.com/LightningDev1/LB-Extensions"

lightningbot.NewEmbed().
    SetTitle("My Title").
    SetDescription("My Description").
    SetSubtext("My Subtext").
    AddField("My Field", "My Value").
    SetFooter("My Footer").
    SetImage("https://example.com/image.png").
    SetAuthor("My Author").
    Send(ctx)
```

</details>
