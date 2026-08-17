---
title: "Two permissions sitting in a manifest that nothing in the code used"
description: "A routine store rejection on an unrelated extension turned into a habit of reading permission manifests skeptically — which is how a broad host permission and a scripting permission with no code behind them got found."
date: "2026-07-10"
draft: false
tags: ["browser-extensions", "security", "chrome-extension", "code-review"]
category: Engineering
---

A different extension I'd shipped earlier got flagged during review — nothing to do with permissions, a metadata violation, too many product names crammed into the description field trying to be helpful about compatibility. Fixed it, got it published. But it left me with the habit of actually reading through a manifest line by line before submitting the next thing, instead of trusting that whatever I'd typed months earlier was still accurate.

It wasn't.

## What the permissions were still asking for

The manifest requested `scripting` and a host permission of `<all_urls>` — the broadest grant there is, access to every page a person visits. Chrome's own review guidance isn't subtle about this pairing. `<all_urls>` combined with `scripting` means an extension can inject arbitrary code into any page, anywhere, and it's the single most scrutinized combination in the store for exactly that reason. Reviewers look hard at it. So do the security researchers who spend their time reading extension source for a living.

Nothing in the codebase called `chrome.scripting.executeScript`. Nothing called `insertCSS`. There was no `content_scripts` entry in the manifest at all. I went looking for what these permissions were actually *for*, and the answer turned out to be a toast notification component, written early on, meant to pop up a small confirmation whenever a tab got captured. It lived in the source tree. It had styling, it had props, it looked more or less finished at a glance. It had just never been wired into the build — not registered as a content script, not included in the bundler's entry points, never injected from the background script at runtime. Dead code that happened to still be requesting live access to every website a user visits.

## Why nobody removes a permission

I don't think this happened through one bad decision. It's the kind of thing that accumulates — you're building a feature, you add the permission it'll need before you've actually finished wiring it up, you get pulled onto something else, the feature quietly stops being a priority, and the permission just stays. Nobody removes a permission on its own initiative, because removing one isn't a task that shows up anywhere. Nothing errors. No test fails. The manifest keeps asking for access the code stopped needing, or maybe never got around to needing, and it sits there indefinitely unless somebody goes looking specifically for the mismatch between what's requested and what's used.

Finding it wasn't clever, just slow. I went through the permission list one entry at a time and asked what line of code actually uses this one — grepping for the relevant API calls, checking whether any content script was even registered anywhere. Some were easy to account for: `tabs` reads titles and URLs and listens for tabs opening and closing, `storage` is where everything gets persisted locally, `alarms` runs the daily compression job. `scripting` and the host permission were the two that came back with nothing.

## What it costs to actually remove it

The fix itself took maybe ten minutes once the problem was found — delete a file, remove two lines from the manifest, rebuild, confirm nothing else referenced any of it. Finding the problem took a lot longer, because it meant going through the manifest skeptically instead of assuming it still matched the code.

What this costs going forward is optionality. If tab-capture confirmations come back at some point, that's not just a code change anymore — it's a code change plus a new permission request plus another review cycle, on a store that already moves slower on broad-permission asks than narrow ones. Keeping the permission around "just in case" would have preserved that optionality for free, at least in terms of my own engineering time later. It wouldn't have been free for the people installing it, though — they'd have been granting access nothing used yet, for a feature that might not come back at all.
