---
title: "QA shouldn't be the last line of defense"
description: "What I learned when tight sprint timelines turned every release into a fight between development, QA, and product."
date: 2026-08-15
draft: false
tags: ["engineering-leadership", "quality", "delivery", "teams"]
category: Leadership
---

There was a pattern I saw repeatedly during sprint delivery.

Development would run late.

QA would get the build with very little time left.

QA would find issues and say, "No-go."

Developers would get frustrated because they had already been working under a tight deadline.

Product would get stuck in the middle. If QA said no, there was pressure from delivery. If the PM said go and something broke, there was pressure from everyone else.

And then we'd do it again the next sprint.

## I had a bias too

I had spent most of my career as a developer.

So when QA said no-go, my first instinct was often to understand why development hadn't been given enough time rather than asking why QA had been given so little time.

That bias took me longer to recognize than I'd like to admit.

From the development side, it felt like QA had very little time and was still finding reasons to stop a release.

From the QA side, they were being asked to validate a product after most of the available time had already been consumed.

Both sides had a point.

The process was the problem.

## We were treating QA as the final gate

The more I looked at it, the more obvious it became that we were asking QA to compensate for everything that happened earlier in the sprint.

A feature was developed.

It took longer than expected.

The build reached QA late.

QA had a small window to test everything.

If they found bugs, there wasn't enough time left to fix and retest them.

So the pressure moved to the next person.

Eventually someone had to say yes or no.

That person was often QA.

But the quality problem had started much earlier.

## Quality had to move left

The solution wasn't to simply give QA more time.

That helped, but it didn't solve the underlying problem.

We had to change how the work reached QA in the first place.

Product needed to think more in iterations.

Instead of taking a large feature and trying to finish the whole thing in one go, we could break it into smaller useful pieces.

Development needed to own more of the quality before handing work over.

Unit tests and developer validation couldn't be something we did only because QA needed them.

And QA needed to spend its time on the things where it added the most value: broader product validation, integration, end-to-end scenarios, and the cases that are difficult to catch during development.

## The goal wasn't fewer bugs

This wasn't about creating a process where QA would never find a bug.

QA finding a bug is useful.

The problem is when the first meaningful opportunity to find that bug comes at the very end of the sprint, when everyone is already under pressure.

By then, a small bug can become a release problem.

A release problem becomes a people problem.

And a people problem becomes an argument about who caused the delay.

That's how a normal engineering process turns into daily firefighting.

## Everyone needed to think about the product

The biggest change wasn't a testing technique.

It was ownership.

Product needed to think about how a feature could be delivered incrementally.

Developers needed to think beyond whether their code worked locally.

QA needed to be involved early enough to understand what was being built, rather than being handed a finished build at the last possible moment.

And as a manager, I needed to stop looking at the situation through only the developer's lens.

Once people started thinking about the product rather than only their part of the process, the conversations became much easier.

## The lesson

The problem wasn't that QA was too slow.

It wasn't that developers were careless.

It wasn't even that the sprint was too short.

We had designed a process where every team was forced to compensate for the team before it.

When everyone is firefighting, every team looks like the bottleneck from someone else's perspective.

QA shouldn't be the last line of defense. That's most of why customer-reported defects ended up dropping by more than a third over the following year — not because QA got stricter, but because far fewer problems were still waiting to be found by the time a build actually reached them.