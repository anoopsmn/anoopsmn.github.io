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
};

export const nav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/building", label: "Building" },
  { href: "/writing", label: "Writing" },
];

export const hero = {
  eyebrow: "15+ years building products and teams",
  headlineLine1: "ENGINEERING",
  headlineLine2: "LEADER",
  lede: "Building customer-facing products and the teams behind them — from writing the code myself to scaling an engineering org 3x. Lately, back to shipping hands-on: the tools below are what I've been building on the side.",
  initials: "AS",
  avatarImage: "https://picsum.photos/id/349/100/100",
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
  { name: "Jira CLI", kind: "CLI tool", description: "Query and update Jira tickets from the terminal without opening the browser." },
  { name: "Gladeline", kind: "DSL / site generator", description: "A small grammar for describing a site's content and structure, compiling to a real Astro project." },
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
  { date: "2008", title: "Started as a web engineer, building customer-facing products" },
  { date: "2012", title: "Grew into a senior engineering role, leading delivery on enterprise platforms" },
  { date: "2019", title: "Became a frontend architect, owning system-level technical decisions" },
  { date: "2022", title: "Stepped into people leadership, running delivery across multiple teams" },
  { date: "2024", title: "Scaled an engineering org 3x as Director of Engineering" },
  { date: "2025", title: "Went hands-on again, building independent projects end to end" },
  { date: "2026", title: "Started building tools in the open" },
];