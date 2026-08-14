// src/data/building.ts
// Content for the /building page's tool cards. Long-form project writeups
// for the open-source tools live in src/content/building/ instead — see
// the `building` content collection in src/content.config.ts.
type ToolLink = {
  href: string;
  label: string;
};

export type Tool = {
  name: string;
  kind: string;
  description: string;
  tags: string[];
  links: ToolLink[];
  // Set only on tools that have a written /building/<slug> detail page.
  // ToolCard renders the "How it's built →" link only when this is present.
  detailHref?: string;
};

// Published, documented, meant for other people to use. Most have a
// /building/<slug> writeup linked via `detailHref`, but it's optional —
// pinefold doesn't have one and still belongs here.
export const openSourceTools: Tool[] = [
  {
    name: "hueglint",
    kind: "npm",
    description: "Accessible-by-default heatmap library — color scales that hold contrast and colorblind-safety from the start.",
    tags: ["accessibility", "color"],
    links: [
      { label: "GitHub", href: "https://github.com/umbrova/hueglint" },
      { label: "Web", href: "https://hueglint.umbrova.com" },
    ],
    detailHref: "/building/hueglint",
  },
  {
    name: "ladderline",
    kind: "CLI",
    description: "Local-first CLI for engineering managers — 1:1 notes and career-ladder tracking, no dashboard required.",
    tags: ["eng-management", "local-first"],
    links: [
      { label: "GitHub", href: "https://github.com/umbrova/ladderline" },
      { label: "npm", href: "https://www.npmjs.com/package/@umbrova/ladderline"}
    ],
    detailHref: "/building/ladderline",
  },
  {
    name: "trailvine",
    kind: "npm",
    description: "Draws a curved SVG route through a set of milestones — a framework-agnostic core, with thin bindings for React and vanilla JS. Pick a shape, tune it live, copy the result as code.",
    tags: ["svg", "timeline"],
    links: [
      { label: "GitHub", href: "https://github.com/umbrova/trailvine" },
      { label: "npm", href: "https://www.npmjs.com/package/@trailvine/core" },
      { label: "Web", href: "https://trailvine.umbrova.com" },
    ],
    detailHref: "/building/trailvine",
  },
  {
    name: "pinefold",
    kind: "Astro theme",
    description: "The theme powering this site — six color palettes, a data-driven timeline, content collections, all config-driven. Open source.",
    tags: ["astro", "theme", "open-source"],
    links: [
      { label: "GitHub", href: "https://github.com/anoopsmn/pinefold" },
      { label: "Web", href: "https://pinefold.vercel.app" },
    ],
  },
];

// Smaller, rougher, built mostly for personal use — no writeups.
export const experimentTools: Tool[] = [
  {
    name: "lastleaf",
    kind: "Chrome extension",
    description: "Quietly captures the tabs you close, grouping them by topic into an interactive graph — so the one you actually needed is easy to find again.",
    tags: ["productivity"],
    links: [{ label: "Web", href: "https://lastleaf.umbrova.com" }],
  },
  {
    name: "tracewood",
    kind: "log analysis",
    description: "Turns cryptic server logs into plain-English incident reports — finds the actual root cause, reconstructs a readable timeline, and tells you what to do next.",
    tags: ["logs", "debugging"],
    links: [{ label: "Web", href: "https://tracewood.umbrova.com" }],
  },
  {
    name: "grovepin",
    kind: "Chrome extension",
    description: "Timestamped notes on video — pin a note to a moment, jump straight back to it later.",
    tags: ["video", "notes"],
    links: [{ label: "Web", href: "https://grovepin.umbrova.com" }],
  },
];

export type InProgressItem = {
  name: string;
  kind: string;
  description: string;
  href?: string;
};

export const inProgress: InProgressItem[] = [
 {
    name: "undergrove",
    kind: "local web app",
    description: "Forecasts Jira delivery dates and explains why, entirely on your machine.",
  },
  {
    name: "gladeline",
    kind: "CLI tool / DSL",
    description: "A small language for EMs to record objectives, initiatives, decisions, and risks as structured text — then query and visualize them.",
  },
];

export type Decision = {
  title: string;
  body: string;
  linkLabel?: string;
  href?: string;
};

// Short notes on specific architectural calls, shown in the /building
// page's "Decisions" section. Not a substitute for the full /building/<slug>
// writeups — just enough context to explain the "why" in a couple sentences.
export const decisions: Decision[] = [
  {
    title: "Why hueglint's core is framework-agnostic",
    body: "React wasn't going to be the only place this needed to run, so the palette logic, validation, and CVD-safety guarantees live in a plain TypeScript core — React just passes a palette name through as a prop. A Vue or Svelte binding later means writing a thin wrapper, not re-deriving the color math.",
    linkLabel: "Full breakdown →",
    href: "/building/hueglint",
  },
  {
    title: "Why ladderline has no database",
    body: "Promotion evidence needed to be something I could read, diff, and version — not query. Plain markdown files do that for free. The one place it costs something is search across a lot of history, which a database would make trivial and files make you grep for.",
    linkLabel: "Full writeup →",
    href: "/writing/ladderline-blog-no-database",
  },
  {
    title: "Why I didn't over-engineer these projects early",
    body: "Every one of these started as the smallest version that solved my own problem — hueglint began as one hardcoded palette, ladderline as a single markdown file I appended to by hand. The architecture (core/binding split, no database, whatever) came after the idea proved worth keeping, not before.",
  },
];
