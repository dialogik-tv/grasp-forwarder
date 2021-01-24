# Grasp the grasp out of your Twitch chat!

This web application helps grasping the most relevant information out of a Twitch chat and is especially useful for mid and large sized chats.

![grasp Screenshot](https://raw.githubusercontent.com/dialogik-tv/grasp/master/screenshot.png)

## Features

* Automatic relevance detection
  * Broadcaster @mentions
  * First two messages of each chat user (you don't want to miss new chatters!)
  * Greeting formulas like "Guten Abend" (German for "good evening")
  * Shorties like "hi, "hey" or "hello"
  * Messages from roles like Mods, Subs oder VIPs
* Message picking (add/remove to pick list)
* Mark messages as read/unread – so you know which messages you've already seen/responded to etc.
* Userlist with chat message count
* Search messages by username

_<sup>*</sup> currently only available in German language_

## Basic concept

You can manage your (or any) Twitch chat messages in three columns:

1. **Chat:** All chat messages (currently limited to youngest 100 messages for performance reasons, we'll experiment and develop this).
2. **Grasp:** The above mentioned automatically detected and grasped messages. These can be filtered (using checkboxes or [keyboard shortcuts](#keyboard-shortcuts)).
3. **Picks:**
  * Any message you <kbd>Alt</kbd> + <kbd>Left click</kbd> from the Chat or the Grasp column will be added to a picks list.
  * Messages can be removed from the list using <kbd>Ctrl</kbd> + <kbd>Left click</kbd>.

All messages can be marked read/unread by using <kbd>Left click</kbd>.

## Use grasp for your own channel

Simply pass `channel=<your_channel>` to the URL [`https://dialogik-tv.github.io/grasp?channel=<your_channel>`](https://dialogik-tv.github.io/grasp?channel=<your_channel>) and you're ready to go!

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