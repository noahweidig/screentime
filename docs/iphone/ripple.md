---
icon: lucide/waves
tags:
  - iPhone
  - Lock
---

# :lucide-waves: Ripple on iPhone

!!! abstract "Role"

    add scheduled blocks on top of Screen Time with an 8 digit code someone else holds.

Ripple uses Apple's Screen Time framework (FamilyControls, ManagedSettings and DeviceActivity). It is aimed at parents who find the 4 digit Screen Time passcode too easy to guess, and at adults who tap Ignore Limit too often.

[Visit Ripple :lucide-external-link:](https://ripplefocus.github.io/){ .md-button .md-button--primary target="_blank" rel="noopener" }

## :lucide-layout-list: At a glance

| | |
| --- | --- |
| :lucide-smartphone: **Platforms** | iPhone with iOS 16 or later. Also on Android. |
| :lucide-wallet: **Cost** | Free. No ads. |
| :lucide-shield: **Privacy** | Works locally with no account and no network requests. |
| :lucide-download: **Install** | IPA from the website or GitHub Releases, installed by sideloading. It is not on the App Store yet. |

## :lucide-settings: How it works

- Blocks start and end on schedule through a DeviceActivity extension, so the app does not need to stay open.
- It can stop apps from being deleted while rules are active.
- Timing uses the phone's uptime clock, so changing the date or time does not end a block.
- Ending a block early needs an 8 digit parent or friend code, or waiting through a 15 minute cooldown.

## :lucide-triangle-alert: Good to know

- Sideloaded apps need to be signed again from time to time, depending on the tool you use.
- The app is new and maintained by a small team.

## :lucide-list-checks: Suggested setup

1. Set up Screen Time first, as described on the [iPhone overview](index.md).
2. Install Ripple and allow Screen Time access when asked.
3. Choose the apps to block and the hours they are allowed.
4. Hand the unlock code to someone you trust.
