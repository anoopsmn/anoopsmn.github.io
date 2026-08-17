---
title: "Technical debt isn't automatically bad"
description: "Technical debt gets talked about as something engineering teams should eliminate. Sometimes taking it on is exactly the right decision."
date: 2026-08-06
draft: false
tags: ["engineering", "architecture", "technical-debt"]
category: Engineering
---

"Technical debt" is usually used as a warning.

We have too much of it.

We need to pay it down.

We shouldn't have taken that shortcut.

All true sometimes.

But I've become less convinced that technical debt itself is the problem.

## Sometimes the shortcut is the right decision

Imagine you're trying to find out whether customers actually want something.

You could spend three months building the perfect architecture.

Or you could build something in two weeks that answers the question.

If the second option works, you've learned something valuable.

If nobody wants it, you've saved ten weeks.

That's not necessarily bad engineering.

It's a trade-off.

## The important word is conscious

The dangerous technical debt is the debt nobody knows about.

A shortcut becomes a problem when:

- nobody remembers why it exists
- nobody owns it
- it blocks future work
- it creates recurring failures
- or everyone assumes someone else will fix it

That's different from saying:

> "We know this isn't ideal. We're doing it because we need to learn something first."

At least then the trade-off is visible.

## Debt has an interest rate

Some technical debt is cheap.

You can live with it for months without much impact.

Other debt makes every future change harder.

If every new feature requires touching the same fragile piece of code, the interest rate is high.

That's the debt you should probably pay down.

The trick is knowing the difference — and it's usually a five-minute conversation, not a formal audit. Which piece of code came up in the last three postmortems? That's your answer.

## Business decisions and engineering decisions aren't separate

I've also learned that engineering teams sometimes talk about technical debt as if the only valid decision is the technically clean one.

Real products don't work that way.

There are customers.

Deadlines.

Revenue.

Experiments.

Competitors.

Sometimes the business needs something now. Cutting customer-reported defects by a third over a year didn't come from refusing every shortcut — it came from being explicit about which corners we were cutting and adding a release gate before the riskiest ones shipped.

The engineering job is not to prevent every shortcut.

It's to make the trade-off visible and understand what we're buying with it. Debt you wrote down and can name isn't really debt anymore — it's a decision. It's the debt nobody can explain that costs you.
