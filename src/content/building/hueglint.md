---
name: hueglint
badge: npm
tagline: "Accessible-by-default heatmap library — color scales that hold contrast and colorblind-safety from the start."
tags: ["accessibility", "color", "typescript"]
sections:
  - heading: "Why I built it"
    paragraphs:
      - "Most heatmap libraries just pick colors that look nice. Which is a problem, because the entire job of a heatmap is using color to stand in for a number — and something like 1 in 12 men have some form of color vision deficiency. Red-to-green is the default almost everywhere I looked. It's also close to the worst possible choice for that group."
      - "So a bad palette isn't really a style preference. It's a bug. And once I saw it that way, \"make it configurable, off by default\" stopped making sense. Nobody opts into accessibility. They just don't."
  - heading: "What I learned"
    paragraphs:
      - "Avoiding red-green isn't enough by itself. Value has to come through lightness, not hue — lightness is the one thing that survives grayscale, low vision, most forms of color blindness, all at once. That killed my first instinct, which was to just hand-pick five colors that looked good together."
      - "Ended up using five published, peer-reviewed palettes through d3-scale-chromatic instead of writing my own. Cividis exists specifically because someone proved, in an actual paper, that it holds up under every major form of CVD. Trying to redo that math myself would've just been ego."
  - heading: "Technical decisions"
    paragraphs:
      - "Two packages — a framework-agnostic core, and a thin React layer on top. Every bit of the actual palette logic lives in core: validation, the scale functions, the CVD guarantees. React doesn't touch color at all. It just passes a palette name down as a prop."
      - "Diff mode was its own problem. A regular low-to-high scale doesn't work when a value can go negative or positive off a baseline — you need something diverging. And the obvious diverging choice, the one basically everyone uses, is red-to-blue or red-to-green. Which is exactly what I was trying to get away from in the first place. Went with purple-to-orange instead."
  - heading: "What I'd do differently"
    paragraphs:
      - "The early mockups had hexbin and Voronoi cell shapes next to the plain square grid. Only the square grid actually shipped. If I did it again I'd either build all three before calling it v1, or just not put shapes I hadn't built yet into a mockup — showing something that doesn't exist is still a kind of promise, even by accident."
      - "Diff mode never got wired into the same touch-target protection the regular grid has on small screens. So a diff chart on a phone just renders every cell at whatever size it gets. Nothing's broken, exactly. It's just sitting there."
links:
  - label: GitHub
    href: "https://github.com/umbrova/hueglint"
  - label: Website
    href: "https://hueglint.umbrova.com"
---
