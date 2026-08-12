// src/config.ts
// The one file to edit to make this theme yours. Posts live separately
// in src/content/writing/ since they're markdown, not config data.

export const site = {
  name: "Anoop Soman",
  url: "https://anoopsmn.github.io",
  palette: "warm" as "paper-teal" | "warm" | "slate" | "mono" | "ink" | "forest",
};

type NavItem = {
  href: string;
  label: string;
  newTab?: boolean;
};

export const nav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/building", label: "Building" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About me" },
  { href: "/resume.pdf", label: "Resume", newTab: true },
];

export const hero = {
  eyebrow: "15+ years building products and teams",
  headlineLine1: "ENGINEERING",
  headlineLine2: "LEADER",
  lede: "Building customer-facing products and the teams behind them — from writing the code myself to scaling an engineering org 3x. Lately, back to shipping hands-on: the tools below are what I've been building on the side.",
  initials: "AS",
  avatarImage: "./avatar.png",
  buildingTileText: "hueglint, ladderline, tracewood, and more",
  writingTileText: "Notes on shipping, extracted from real work",
};

export const focusAreas: string[] = [
  "Engineering leadership",
  "Team building",
  "Systems design",
  "Developer tooling",
];
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
};

export const tools: Tool[] = [
  {
    name: "hueglint",
    kind: "npm",
    description: "Accessible-by-default heatmap library — color scales that hold contrast and colorblind-safety from the start.",
    tags: ["accessibility", "color"],
    links: [
      { label: "GitHub", href: "https://github.com/umbrova/hueglint" },
      { label: "Web", href: "https://hueglint.umbrova.com" },
    ],
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
},
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
    name: "pinefold",
    kind: "Astro theme",
    description: "The theme powering this site — six color palettes, a data-driven timeline, content collections, all config-driven. Open source.",
    tags: ["astro", "theme", "open-source"],
    links: [
      { label: "GitHub", href: "https://github.com/anoopsmn/pinefold" },
      { label: "Web", href: "https://pinefold.vercel.app" },
    ],
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

type FooterLink = {
  label: string;
  href: string;
};

export const footerLinks: FooterLink[] = [
  { label: "GitHub", href: "https://github.com/anoopsmn" },
  { label: "LinkedIn", href: "https://linkedin.com/in/anoopsoman" },
  { label: "Twitter", href: "https://twitter.com/anpsmn" },
  { label: "Email", href: "mailto:anpsmn@gmail.com" },
  { label: "Resume", href: "/resume.pdf" },
];

export type TimelineEntry = {
  date: string;
  title: string;
};

// Any number of entries works — layoutTimelinePoints() spaces them evenly
// and alternates high/low bands regardless of count.
export const timeline: TimelineEntry[] = [
  { date: "2008", title: "Raw Engineering · Senior Web Engineer — Started building customer-facing products" },
  { date: "2012", title: "Railsdata · Senior Software Engineer — Grew into senior engineering, owning delivery on enterprise platforms" },
  { date: "2017", title: "Railsdata · Technical Analyst — Expanded into technical leadership and system-level problem solving" },
  { date: "2019", title: "Entropik · Frontend Architect — Owned system-level technical decisions" },
  { date: "2022", title: "Entropik · Associate Director of Engineering — Led teams across multiple products" },
  { date: "2024", title: "Entropik · Director of Engineering — Scaled the org from 20 to 65+" },
  { date: "2025", title: "Independent · Builder — Went hands-on again, exploring modern AI-assisted development" },
  { date: "2026", title: "Open Source · Builder — Building tools and small products in the open" },
];
