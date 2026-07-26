---
title: "Making colorblind-safe the default, not the option"
description: "Why I couldn't just 'pick nice colors' for a heatmap library, and what it actually took to make CVD-safe, perceptually uniform palettes the only choice instead of a checkbox."
date: 2026-07-26
draft: false
tags: ["accessibility", "data-visualization", "color-science", "typescript"]
---

The hardest part of building hueglint wasn't the rendering engine, the keyboard navigation, or the responsive layout math. It was accepting that picking colors by eye wasn't actually an option here.

## The red-green problem

A heatmap's entire job is to let color stand in for a number. If two visually different values render as the same color to a meaningful fraction of your users, the chart is lying to them — not in some edge case, but in its primary function. About 1 in 12 men have some form of color vision deficiency. A red-to-green scale, the single most common heatmap default I could find anywhere, is close to the worst possible choice for that group: red and green are exactly the pair that collapses for deuteranopia and protanopia, the most common forms of CVD.

So the palette stopped being a style choice for me. It's closer to a correctness bug — like dividing by zero. Once I saw it that way, making it opt-in wasn't really an option anymore. Nobody opts in.

## Lightness, not hue

It's not enough for a palette to merely *avoid* red-green. It has to encode value through *lightness*, not hue alone, because lightness is the one channel that survives grayscale, low vision, and most forms of color blindness simultaneously. That's what "perceptually uniform" means in practice: as a value increases, the color should get monotonically lighter or darker in a way a human eye perceives as even steps, not just mathematically even RGB steps (which don't correspond to how eyes actually perceive brightness).

This ruled out the easy path of hand-picking five nice-looking hex codes. I ended up shipping five specific, published, perceptually-uniform scales — viridis, plasma, cividis, magma, inferno — via `d3-scale-chromatic` rather than inventing my own. Cividis specifically exists because of a peer-reviewed paper proving it's readable under every major form of color vision deficiency. Reinventing that math myself would have been arrogance dressed as effort.

## Core and React, split on purpose

hueglint ships two packages: a framework-agnostic core and a thin React binding. The palette logic — validation, the actual color scale functions, the CVD-safety guarantees — lives entirely in core. React never touches a color value directly; it just passes a palette name through as a prop and lets core do the real work.

If the color logic had leaked into the React package, a Vue adapter later would've meant duplicating it — and probably getting it wrong in a slightly different way each time. Core owns it. React just passes a name through.

## Diff mode almost broke the rule

Comparing two datasets — this week versus last week — needed its own palette, because a sequential scale (low-to-high) doesn't work for a value that can be negative *or* positive relative to a baseline. Diverging scales are the standard answer, and the standard diverging scale nearly everyone reaches for is red-to-blue or red-to-green. Red is doing exactly the thing I'd spent the rest of the library trying to avoid.

I ended up using a purple-to-orange diverging scale instead, specifically because it holds up under the same CVD conditions the sequential palettes were chosen for. It's a smaller, subtler decision than the headline "five CVD-safe palettes" story, but it's the one place where I nearly let a convention back in through the side door. If I'd defaulted to what every other diff view uses without checking it against the same constraint I'd applied everywhere else, the "accessible by default" claim would have had a real hole in it, just in a feature most people wouldn't think to test.