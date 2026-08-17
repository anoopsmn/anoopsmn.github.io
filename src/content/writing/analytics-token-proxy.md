---
title: "Where does an API token live when your client is a public zip file?"
description: "Why anonymized usage counters for a browser extension get proxied through a serverless endpoint instead of calling the analytics backend directly."
date: 2026-07-06
draft: false
tags: ["browser-extensions", "privacy", "security", "chrome-extension"]
category: Architecture
---

The moment I wanted even a rough signal — is anyone besides me actually opening this thing — I ran into a problem I hadn't thought through at all: where does the credential live.

## The shape of the problem

A browser extension isn't a normal client. Ship a web app and the JavaScript that reaches someone's browser is the output of a build process you control, served from infrastructure you control, with secrets you can rotate on your own schedule. A Chrome extension is closer to handing source code directly to strangers. The zip that gets uploaded to the Web Store is, functionally, public. Anyone curious enough can download it, unzip it, and read every line that runs. There's no server sitting between "what I wrote" and "what a stranger can inspect" — the packaged extension *is* the artifact people install, forever, until they update.

So the naive version of "track anonymous install and usage counts" — call the analytics backend directly from the extension, using whatever bearer token that backend's API wants — falls apart the second you think about where that token would sit. I'd picked a hosted Redis instance for this, cheap and the data model is just incrementing counters, and its REST API wants a token in the request headers, same as most of these services do. Put that token in the extension's bundled JS and you've shipped a working credential to every install, with no realistic way to rotate it short of pushing a new version and hoping people update fast. Anyone who bothered to grep the bundle would have write access to your counters. Best case, someone pollutes your numbers for fun. Worse case, depending on what else that token can reach, it's an actual foothold.

## What I almost shipped

I noticed this mid-implementation, not before. I'd already sketched a `trackEvent` function that POSTed straight to the Redis REST endpoint, and it was only when I went to actually paste the token into the client code that it stopped feeling like a detail and started feeling wrong — not "insecure" in some abstract audit-checklist sense, wrong in the much more direct sense of, I am about to type a secret into a file that gets published.

## What actually sits between the extension and the counters

The fix ended up small. A serverless function sits between the extension and the real analytics store. The extension has no idea Redis exists — it knows one thing, a URL read from an environment variable at build time (still carrying the name `PLASMO_PUBLIC_ANALYTICS_URL`, a leftover from an earlier framework I'd since moved off, never worth renaming), pointing at a proxy endpoint. It POSTs an event name — `install`, `tab_buried`, `tab_rescued`, a daily `dau` ping — as the entire body. Just the event name, nothing attached to it that could identify who sent it or what they were looking at.

The proxy is the only thing holding the real credential, because the proxy is the only thing that never leaves infrastructure I control. It checks the event name against a small allowlist, increments a counter, returns. The extension doesn't even do anything with the response — if the request fails, `trackEvent` swallows the error and moves on. Analytics breaking is not a reason to break the product.

None of this is a novel pattern. It's the same shape as "don't put your Stripe secret key in a mobile app," just less talked about for browser extensions specifically — maybe because extensions still get treated like small, low-stakes software by a lot of the people building them. Mine included, right up until I almost shipped the token.

## What it costs

There's a real cost here and it's not really latency — an extra hop before a fire-and-forget POST doesn't matter to anything. It's that there's a second codebase now, deployed and versioned on its own schedule, small as it is. A second thing that can be down when the extension needs it, a second place a bug can hide. Hosting is close to free at the volume a handful of counters produce, so that part barely registers. Complexity is the actual bill, and for something as low-stakes as install counts, paying it felt obvious. I'd think harder about it for anything where the extra round trip actually mattered.
