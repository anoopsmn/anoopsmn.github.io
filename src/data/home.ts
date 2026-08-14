// src/data/home.ts
// Content for the home page (hero, focus areas, and the flat home-page
// timeline — see src/data/about.ts for the About page's chaptered version).
import { yearsExperience } from "../config";

export const hero = {
  eyebrow: `${yearsExperience} years building products and teams`,
  headlineLine1: "ENGINEERING",
  headlineLine2: "LEADER",
  lede: "Building customer-facing products and the teams behind them — from writing the code myself to scaling an engineering org 3x. Lately, back to shipping hands-on: the tools below are what I've been building on the side.",
  initials: "AS",
  avatarImage: "./avatar.png",
  buildingTileText: "Open-source tools, experiments, and things I'm building to learn.",
  writingTileText: "Notes on shipping, extracted from real work",
};

export const focusAreas: string[] = [
  "Engineering leadership",
  "Org & team design",
  "Systems design",
  "Developer tooling",
];

export type TimelineEntry = {
  date: string;
  title: string;
};

// A short, narrative version of the About page's fuller journeyChapters
// (src/data/about.ts) — role only, no company names, fewer stops. Any
// number of entries works — layoutTimelinePoints() spaces them evenly and
// alternates high/low bands regardless of count.
export const timeline: TimelineEntry[] = [
  { date: "2008", title: "Engineer — Started building customer-facing products." },
  { date: "2012", title: "Senior Engineer — Built and delivered enterprise platforms." },
  { date: "2019", title: "Frontend Architect — Started owning system-level technical decisions." },
  { date: "2022", title: "Engineering Leadership — Moved from systems to teams." },
  { date: "2024", title: "Director — Scaled engineering from 20 → 65+." },
  { date: "2025", title: "Builder again — Returned to building, end to end." },
];

export const buildingNowIntro =
  "I stepped back into hands-on development to build things I wanted to understand — and to see what modern AI-assisted development feels like from the builder's side.";

export type BuildingNowItem = {
  name: string;
  badge: string;
  description: string;
  href: string;
};

// A curated, one-line-per-item summary for the homepage's Building Now
// list — kept as its own copy (like about.ts's `projects`) rather than
// reusing openSourceTools directly, since trailvine's full /building
// description runs two sentences and doesn't fit a one-line list row.
export const buildingNow: BuildingNowItem[] = [
  {
    name: "hueglint",
    badge: "npm",
    description: "Accessible-by-default heatmap library — color scales that hold contrast and colorblind-safety from the start.",
    href: "/building/hueglint",
  },
  {
    name: "ladderline",
    badge: "CLI",
    description: "Local-first CLI for engineering managers — 1:1 notes and career-ladder tracking, no dashboard required.",
    href: "/building/ladderline",
  },
  {
    name: "trailvine",
    badge: "npm",
    description: "Draws a curved SVG route through a set of milestones — a framework-agnostic core, with thin bindings for React and vanilla JS.",
    href: "/building/trailvine",
  },
];
