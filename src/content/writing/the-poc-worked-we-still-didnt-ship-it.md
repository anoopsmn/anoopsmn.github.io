---
category: Leadership
date: 2026-10-24
description: A technically promising proof of concept can still be the
  wrong investment. We learned to bring commercial feasibility into the
  conversation earlier.
draft: false
tags:
- engineering
- poc
- vendor-evaluation
- decision-making
title: The POC worked. We still didn't ship it.
---

---
title: "The POC worked. We still didn't ship it."
description: "A technically promising proof of concept can still be the wrong investment. We learned to bring commercial feasibility into the conversation earlier."
date: 2026-10-24
draft: false
tags: ["engineering", "poc", "vendor-evaluation", "decision-making"]
category: Leadership
---

We had a problem we wanted to solve. We needed to capture mouse movements on third-party websites and turn them into heatmaps, mouse maps and scroll maps.

The challenge was getting our tracking script onto those websites.

One option was a browser extension, but we weren't convinced that people would install one just to participate in a survey. We worked with research panels where participants were often sent to external websites as part of the survey flow. Adding an installation step felt like unnecessary friction.

An iframe wasn't a reliable option either, since many websites restrict being embedded that way.

We started looking at alternatives and came across a session-sharing solution that seemed promising.

## The technical fit looked possible

The product didn't support everything we needed out of the box, but the vendor was willing to add the missing capabilities over the next few sprints.

We started the discussions, worked through the technical requirements and checked whether the approach would work for our use case. From our side, we did the work needed to evaluate the solution.

It looked like we had a viable path forward.

Then the cost came into the picture.

The proposal was ultimately rejected because the commercial terms didn't work for us. The technical investigation had helped establish that the solution could work, but that wasn't enough to get it approved.

We didn't ship the solution.

## What we should have checked earlier

Looking back, the mistake wasn't doing a POC. We needed to investigate whether this approach could solve a real technical problem.

The mistake was allowing the technical investigation to progress without establishing a realistic commercial range first.

We should have had an early conversation about the likely cost, what budget was available, and whether there was room to negotiate. We didn't need a final contract before starting technical work, but we did need to know whether the proposal had a reasonable chance of being approved.

That would have helped us decide how much engineering time to invest.

Instead, we got far enough technically to see a path forward, only to discover that the business wasn't going to take it.

## How I'd approach it now

When evaluating a third-party solution, I'd want three conversations to happen early, even if they run in parallel.

First, can it solve the problem? That's the technical question.

Second, can we afford it? We need an indicative price, a realistic budget range and an understanding of what negotiation might achieve.

Third, does the solution make sense for the product? Even a technically sound, affordable option might introduce a dependency or limitation that isn't worth accepting.

The depth of the POC should depend on the answers to all three, not just the first.

There will always be uncertainty at the beginning. Vendors may not know the final price until they understand the requirements, and technical feasibility may be unclear until we've tested something. That's fine. The point isn't to eliminate uncertainty before starting. It's to identify the uncertainties that could kill the project and address them early.

The experience changed the order in which I'd approach this kind of evaluation: establish a plausible commercial range early, then decide how much technical effort the opportunity warrants. A POC can prove that something is possible, but it shouldn't be the first time the team discovers whether the business can realistically proceed.