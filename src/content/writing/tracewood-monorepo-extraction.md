---
title: "Getting Tracewood out of the monorepo without losing its history"
description: "How I pulled one app out of a shared repo, kept its real commit history intact, and the specific way the Vercel redeploy button lied to me about it."
date: 2026-07-18
draft: false
tags: ["git", "vercel", "monorepo", "deployment"]
---

The thing I actually cared about, going in, wasn't the code moving. Code moves easily. It was whether the commit history would survive the trip, or whether I'd end up with a new repo whose entire past was one commit that says "initial import" and quietly erases every decision that got the app to where it was.

A plain copy-paste does exactly that. So does zipping the folder and dropping it somewhere new. Either way you get working code and a repo with amnesia.

git filter-repo is the tool most people point to for this, and it's a good one, except it's a Python script, and the machine I was working on had one of those fake Python stubs Windows ships that errors the moment you try to actually run anything through it. No pip, no real interpreter, nothing to install it into. I didn't want to go install a whole language runtime just to run one command once. What git actually has built in, no extra software required, is `git subtree split --prefix=apps/tracewood`, run against a throwaway clone so the real working repo never gets touched. It rewrites history so that folder becomes the new root, and it does this using nothing but git itself.

It worked. Twenty-nine real commits came out the other side — merges, the original scaffold commit, everything — not one flattened lump. That part I'd braced for trouble on turned out fine.

## the thing I actually got tripped up by

What I hadn't braced for was smaller and dumber. The app's own package.json still listed a dependency on a shared internal package, an AI provider abstraction meant to let the app fall back across Anthropic, OpenAI, and Gemini if one was down. Except the actual code, the real `api/explain.ts` file, never called that abstraction at all. It imported the Anthropic SDK directly and called it, plainly, with no fallback logic anywhere. The shared package existed. Nothing used it. The README, though, still described the fallback system in detail, complete with a little architecture diagram, as if it were live.

So the dependency got dropped, the README got rewritten to say what the code actually does instead of what someone once meant for it to do, and the `.env.example` lost three environment variables nothing ever read. None of this was a git problem. It was a "the docs were describing an app that used to be planned differently" problem, and it would have followed the app into its new home if nobody caught it.

There was also no CI anywhere in the original repo — not for this app, not for anything else in it — so that got added from scratch rather than moved.

## the redeploy button that remembered the wrong thing

Once the new repo existed and Vercel's project was pointed at it, I clicked Redeploy on the most recent existing deployment, expecting it to just rebuild from wherever the connection now pointed. The build log came back cloning the *old* monorepo. Not the new repo. The old one, in full, all three of its packages listed in scope, and it failed at the end looking for a `dist` folder in a place that made sense for the old structure and not the new one.

Vercel's Git settings page showed the correct repo connected. That part hadn't lied. What had happened was narrower: redeploying an existing deployment entry rebuilds from whatever source that specific entry originally recorded, not from whatever the project is connected to right now. An old deployment carries its own frozen reference to where it came from. Changing the connection doesn't retroactively rewrite that.

The fix was almost insultingly simple once I understood what was actually stale — an empty commit, pushed to force a deployment that has no choice but to originate from the current connection:

```
git commit --allow-empty -m "chore: trigger fresh deployment from standalone repo"
git push
```

That one built clean, cloned the right repo, found `dist` where it expected to, and went live. There were still a handful of harmless TypeScript complaints about `process` not being a recognized name in one file — the build finished anyway, the site worked when I actually used it, and I left those alone rather than chasing a fix for something that wasn't breaking anything.
