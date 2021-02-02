# Grasp the grasp out of your Twitch chat!

This web application helps grasping the most relevant information out of a Twitch chat and is especially useful for mid to large sized chats. *This application is an ongoing project, a [perpetual beta](https://en.wikipedia.org/wiki/Perpetual_beta). You can accompany the development of this tool on the [dialogikTV Twitch channel](https://www.twitch.tv/dialogikTV).*

![grasp Screenshot](https://raw.githubusercontent.com/dialogik-tv/grasp/master/screenshot.png)

## Features

* Automatic relevance detection
  * Broadcaster @mentions
  * First two messages of each chat user (you don't want to miss new chatters!)
  * Greeting formulas like "good morning", "good evening" etc.
  * Shorties like "hi", "hey" or "hello"
  * Messages from roles like Mods, Subs oder VIPs
* [Message picking](#3-picks-right) (add/remove to pick list)
* Mark messages as read/unread using <kbd>Left click</kbd> – so you know which messages you've already seen/responded to etc.
* Userlist with chat message count
* Search messages by username (<kbd>Ctrl</kbd>+<kbd>Left click</kbd> on the search input field to clear user search)
* [Multi language support](#multi-language-support) (DE/EN/FR/ES/IT)

## Basic concept

You can manage your (or any) Twitch chat messages in three columns:

### 1. Chat (left)

All chat messages (currently limited to youngest 100 messages for performance reasons, we'll experiment and develop this).

### 2. Grasp (center)

The above mentioned automatically detected and grasped messages. These can be filtered (using checkboxes or [keyboard shortcuts](#keyboard-shortcuts)).

### 3. Picks (right)

* Any message you <kbd>Alt</kbd> + <kbd>Left click</kbd> from the Chat or the Grasp column will be added to a picks list.
* Messages can be removed from the list using <kbd>Ctrl</kbd> + <kbd>Left click</kbd>.

## Use grasp for your own channel

Simply pass `channel=<your_channel>` (without `<` and `>`) to the URL, e.g. [`https://dialogik-tv.github.io/grasp?channel=dialogikTV`](https://dialogik-tv.github.io/grasp?channel=dialogikTV) and you're ready to go!

## Multi language support

This application currently supports multiple languages for the shorty and haystack/needle relevance concept (see above). Language data is being organized in [`dialogik-tv/grasp-lang`](https://github.com/dialogik-tv/grasp-lang), you can help improving your desired language pack by contributing to that repository.

The following languages are currently supported:

* `de` – German
* `en` – English
* `fr` – French
* `es` – Spanish
* `it` – Italian

Language(s) can be set by passing `&lang=<lang1|lang2|...>`. So the URL for the dialogikTV channel using (a) only French (`fr`) or (b) Spanish and Italian (`es|it`) would be

    (a) https://dialogik-tv.github.io/grasp?channel=dialogikTV&lang=fr
    (b) https://dialogik-tv.github.io/grasp?channel=dialogikTV&lang=es|it

If no lang parameter is passed, `de` is the default lanuage pack.

## Keyboard shortcuts

### Toggle filter settings

* <kbd>Ctrl</kbd>+<kbd>M</kbd> – Toggle mods
* <kbd>Ctrl</kbd>+<kbd>S</kbd> – Toggle subs
* <kbd>Ctrl</kbd>+<kbd>V</kbd> – Toggle VIPs
* <kbd>M</kbd> – Toggle @mentions
* <kbd>Ctrl</kbd>+<kbd>H</kbd> – Toggle haystack needles
* <kbd>H</kbd> – Toggle shorties (`h` because they're small haystack needles...)

### Toggle chat/userlist visibility

* <kbd>C</kbd> – Toggle main chat visibility
* <kbd>U</kbd> – Toggle userlist vibility

# Support

This is a [dialogikTV](https://dialogik.tv) project. You can contact the author of this project via [Twitter (@dialogikTV)](https://twitter.com), [Discord](http://discord.dialogik.tv) or on the [Twitch live channel](https://www.twitch.tv/dialogikTV).
