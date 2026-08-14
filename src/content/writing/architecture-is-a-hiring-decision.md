---
title: "Sometimes the best architecture decision is a hiring decision"
description: "The Angular-to-React decision wasn't really about which framework was better."
date: 2026-08-05
draft: false
tags: ["architecture", "hiring", "engineering-leadership", "react"]
---

One of Entropik's early products was built with Angular.

At the time, that wasn't a problem. We had people who knew Angular well, the product was moving, and the team had enough experience to make it work.

The problem showed up later.

We wanted to build more products beyond that first one, and suddenly hiring Angular engineers became much harder. More candidates were moving toward React, and many of the people we wanted to hire were specifically looking for React work.

The question stopped being "Which frontend framework do we prefer?"

It became a question about the organization we wanted to build.

## The existing choice was still working

We weren't switching because Angular had suddenly become unusable.

The existing product was working. The team knew the technology. There was no compelling technical reason to throw everything away.

But we weren't making a decision about only that product anymore.

We were making a decision about the next products and the people we would need to build them.

## Technology has an organizational cost

A technology choice affects more than the codebase.

It affects who you can hire, how quickly new engineers become productive, how concentrated your expertise becomes, and how easily engineers can move between teams.

We had already seen what happens when expertise becomes concentrated.

A technology that is perfectly reasonable for one team can become a constraint when an organization needs to grow around it.

## So we chose React for the coming products

The decision wasn't "React is better than Angular."

It was closer to:

> **React gives us a healthier hiring and team-building path for where we're going next.**

We didn't need to rewrite the existing product just to make the organization consistent. We could keep supporting what already worked while making a different choice for the products that followed.

## The decision I'd make again

I've become more cautious about architecture arguments that only consider the system.

A system exists inside an organization.

People build it. People maintain it. People have to be hired to work on it.

Sometimes the most important constraint on an architecture isn't performance, scale, or elegance.

It's whether you can build a team around it.

The payoff showed up in places I didn't fully expect at the time — a shared component framework once every new product spoke the same language, build times that stopped being someone's personal deployment ritual because the tooling was finally consistent across teams. None of that was the argument for switching. It was just what became possible once the switch was made for the right reason.
