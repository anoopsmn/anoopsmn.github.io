---
name: trailvine
badge: npm
tagline: "Draws a curved SVG route through a set of milestones — a framework-agnostic core, with thin bindings for React and vanilla JS. Pick a shape, tune it live, copy the result as code."
tags: ["svg", "timeline"]
sections:
  - heading: "Why I built it"
    paragraphs:
      - "I wanted a way to turn a list of milestones into a visual route without hand-drawing SVG paths every time. trailvine picks up where that manual work left off — pick a shape, tune it against real milestones, and copy the result out as code instead of a static export."
  - heading: "What I learned"
    paragraphs:
      - "Splitting this into a zero-dependency core plus thin bindings for React and vanilla JS paid off more than I expected — the same geometry functions power both, and adding a later feature like hover-to-highlight only needed binding-level changes, no new math. The harder lesson was around testing: a chunk of the interactive behavior (responsive orientation switching, hover-to-highlight) only exists inside a live browser, and my server-rendered tests were quietly not covering any of it. Writing real jsdom-based tests caught a genuinely subtle bug — SVG elements return an SVGAnimatedString object from .className instead of a plain string, which silently broke a regex I was relying on. I wouldn't have caught that from reading the code alone."
  - heading: "Technical decisions"
    paragraphs:
      - "The core has zero runtime dependencies on purpose — the smooth curve is a hand-written Catmull-Rom-to-Bézier conversion rather than a d3-shape import, so consumers aren't pulling in anything they don't need. The layout's band array cycles through index % bands.length instead of having a separate 'alternating' vs 'custom heights' mode — one array, one mechanism, and a longer array just produces a more custom shape for free. Path options are a discriminated union keyed on curve type, so passing a radius to a straight or smooth curve is a compile-time error instead of a silently-ignored field."
  - heading: "What I'd do differently"
    paragraphs:
      - "I published the first version manually before setting up proper release tooling, which meant the very next release had to retrofit versioning under pressure — worth doing that setup before the first publish, not after. I'd also add the browser-only interaction tests from the start rather than after noticing my server-rendered tests weren't actually exercising them; it's an easy gap to miss until you go looking for it specifically."
links:
  - label: GitHub
    href: "https://github.com/umbrova/trailvine"
  - label: Website
    href: "https://trailvine.umbrova.com"
---
