---
category: Architecture
date: 2026-10-30
description: Our search for video conferencing took us from an
  open-source project to an implementation partner and finally to a
  commercial API. Each step changed what we knew about the problem.
draft: false
tags:
- architecture
- open-source
- build-vs-buy
- delivery
title: We tried open source, brought in experts, and eventually bought a
  solution
---

We wanted to add video conferencing to our product. The first option we
explored was an open-source project that already did much of what we
needed.

It seemed like a sensible place to start. The core functionality
existed, we could inspect the implementation, and we wouldn't have to
build a conferencing system from scratch.

But there was a practical problem. We needed to make progress within our
product timeline, and getting answers to our questions through the
project's community was taking longer than we could afford.

That wasn't necessarily a problem with the project. Open-source
maintainers have their own commitments, and support isn't always
immediate, especially when a project is maintained alongside other work.

Our timeline, however, wasn't going to wait.

## We looked for people who knew the system

Rather than abandon the approach immediately, we looked for a company
with experience implementing the same open-source technology.

We found a team in Sri Lanka that knew the system well. The team was
helpful, and they made a genuine effort to keep things moving.

Unfortunately, they were working through a difficult period in their
country. Communication and progress were affected, despite their efforts
to stay engaged.

It was a reminder that choosing an implementation partner isn't just
about finding the right technical expertise. The surrounding
circumstances matter too, and sometimes they're outside anyone's
control.

We still needed to deliver the feature.

## We changed the question

At that point, we started looking at commercial products we could
integrate rather than continuing to make the original approach work.

We found 100ms, a video API provider that offered the capabilities we
needed, and that gave us a more practical path to implementation.

We could focus on integrating video conferencing into our product
instead of spending more time working through the underlying
infrastructure and its dependencies.

That was the direction we eventually took.

## What the experience changed for me

Initially, we were asking a technical question: could we use an
open-source project to add video conferencing?

As the work progressed, the more important question became whether that
route could get us to a working product within the time we had.

Those are different questions.

Open source can be an excellent choice. It gives you flexibility and
control, and it can avoid costs associated with commercial products. But
the code itself is only part of the equation. You also need to account
for integration effort, expertise, support, operational ownership and
the time required to resolve problems.

Hiring experts can bridge some of those gaps, but it doesn't remove
every dependency. A capable partner still has its own constraints and
commitments.

A commercial product brings a different set of trade-offs, including
pricing and dependence on a vendor. In return, it may offer a clearer
integration path and reduce the amount of infrastructure we need to own.

None of these options is automatically the right one.

## Build versus buy isn't a one-time decision

What I take from this experience is that we shouldn't become attached to
the first approach just because we've already invested time in it.

We started with open source because it looked like a sensible option. We
tried working with people who knew it well. When that still wasn't
getting us where we needed to go, we reconsidered the approach and found
a commercial product.

Each step gave us more information about the real cost of getting the
capability into our product.

In hindsight, I would evaluate the alternatives earlier and compare them
against the same criteria: time to deliver, integration effort, total
cost, reliability, support and the amount of infrastructure we'd have to
maintain ourselves.

The cheapest licence isn't necessarily the cheapest solution. And the
most flexible technology isn't necessarily the fastest route to a
reliable feature.

Sometimes the right decision is to own the implementation. Sometimes
it's to use open source. And sometimes it's to pay for a product that
lets the team focus on the problem the customer actually cares about.
