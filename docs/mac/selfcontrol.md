---
icon: lucide/timer-off
tags:
  - Mac
  - Website blocker
  - Free
---

# :lucide-timer-off: SelfControl on Mac

!!! abstract "Role"

    block distracting websites for a set period, free.

SelfControl is a free, open-source Mac app. You choose a blocklist and a duration, then start. Until the timer ends, those sites stay blocked, even if you restart your Mac or delete the app. It is maintained by volunteers and development is slow, so check its site for the current macOS requirements before relying on it.

[Visit SelfControl :lucide-external-link:](https://selfcontrolapp.com){ .md-button .md-button--primary target="_blank" rel="noopener" }

## :lucide-layout-list: At a glance

| | |
| --- | --- |
| :lucide-laptop: **Platform** | macOS only. Version 4.0.2 needs OS X 10.10 or later. |
| :lucide-wallet: **Cost** | Free and open source under the GPL. |
| :lucide-ban: **Ending early** | You cannot. Restarting or deleting the app does not end a block. |
| :lucide-users: **Maintenance** | A volunteer project run mostly by one person, so support replies can be slow. |

## :lucide-settings: How it works

- Add domain names to a blocklist and set a duration. Admin authorization is needed to start.
- Allowlist mode blocks everything except the entries you list.
- You can save and reopen blocklists.
- Blocking works by server, so a broad domain can block unrelated services and subdomains may need adding.
- It has no built-in scheduling. Third-party command-line tools add it.

## :lucide-triangle-alert: Good to know

- VPNs and proxies interfere. Disconnect partial VPNs while a block runs.
- Firefox with DNS over HTTPS can make blocks unreliable. Restart Firefox after you start one.
- Do not update the app during a block.
- Blocks over 24 hours are hidden and discouraged.
- The maintainers say some bypasses exist.
- Test with a short block before a long one.
- There is no iPhone version. The FAQ suggests a phone lock box with a timer.

## :lucide-list-checks: Suggested setup

1. Add the few sites that cost you the most time to the blocklist.
2. Start with a short session to see how it behaves on your Mac.
3. Remember there is no way to end a running session early, so set durations you can live with.
4. Raise the duration once the routine feels easy.

Because it only blocks websites, add another tool if apps are part of the problem.
