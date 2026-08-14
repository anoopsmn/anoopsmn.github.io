// src/data/about.ts
import { yearsExperience } from "../config";
import type { Tool } from "./building";

// Data for the /about page. Kept separate from `timeline` in home.ts since
// the About page's Journey section groups stops into chapters, rather than
// the single flat list the home page shows.
export const about = {
  roleLine: "Engineering leader. Builder. Curious about how things work.",
  shortVersion:
    `${yearsExperience} years building software and leading engineering teams — from writing code to scaling a 65+ person org, and back to hands-on building. Currently exploring AI-assisted development and what engineering looks like when implementation gets cheap.`,

  // Each chapter renders as its own flat single-row timeline (see
  // about.astro) — a straight connector with stops below it, not the home
  // page's alternating subway-map component. Stops carry role/achievement
  // as separate fields rather than a combined TimelineEntry title, since
  // this layout stacks them as distinct lines instead of wrapping one string.
  journeyChapters: [
    {
      title: "Engineering",
      items: [
        { date: "2008", role: "Raw Engineering · Senior web engineer", achievement: "Customer-facing apps" },
        { date: "2012", role: "Railsdata · Senior software engineer", achievement: "Enterprise web platforms" },
        { date: "2018", role: "Railsdata · Technical analyst", achievement: "Enterprise platforms" },
      ],
    },
    {
      title: "Architecture & leadership",
      items: [
        { date: "2019", role: "Entropik · Frontend architect", achievement: "Owned system-level decisions" },
        { date: "2022", role: "Entropik · Associate director", achievement: "Delivery across 2 SaaS products" },
        { date: "2024", role: "Entropik · Director of engineering", achievement: "Scaled org 20 → 65+" },
      ],
    },
    {
      title: "Building again",
      items: [
        { date: "2025", role: "Independent · Builder", achievement: "Hands-on again, end to end" },
        { date: "2026", role: "Open source · Builder", achievement: "Building tools in the open" },
      ],
    },
  ],
  journeyCaption:
    "As teams grow, the hardest problems stop being technical — they become about clarity, ownership, and communication.",

  beliefs: [
    {
      title: "Context over instructions",
      description: "Give people the goal and the constraints, and they'll usually make better calls than a manager deciding everything for them.",
    },
    {
      title: "Systems over heroics",
      description: "If a release keeps needing someone to stay late and save it, that's not heroism — it's a system that needs fixing.",
    },
    {
      title: "Ownership beats process",
      description: "Process should make good decisions easier, not replace judgment.",
    },
    {
      title: "Speed needs direction",
      description: "Moving fast isn't useful if it's in the wrong direction.",
    },
    {
      title: "Build leaders, not dependencies",
      description: "The best sign a leader is doing their job: more things can happen without them.",
      span: true,
    },
  ],

  // "Lessons" section (#learned). Most entries pair a pull-quote with a
  // couple sentences of context; the two debt/simplicity entries are short
  // enough to stand as a single paragraph with no separate quote line.
  lessons: [
    {
      title: "0→1 needs a different operating system",
      quote: "Ship first. Add guardrails when the cost of not having them becomes real.",
      body: "Early in one product line, getting something into customers' hands mattered more than a polished process — and that was the right call. As the product and team grew, those same habits started creating friction, and we had to add ownership, guardrails and visibility we didn't need before.",
    },
    {
      title: "Remote management exposes weak communication",
      quote: "Remote work doesn't create communication problems. It exposes the ones that were already there.",
      body: "Managing a distributed team through remote hiring and onboarding meant things I used to solve through proximity had to become explicit — written context, clear ownership, and regular visibility, instead of hallway conversations.",
    },
    {
      title: "Visibility isn't the same as more meetings",
      quote: "If a meeting exists mainly to prove work is happening, something's probably wrong.",
      body: "Introducing a pod-based delivery model was partly about clearer ownership and visibility across teams. But visibility can quietly turn into ceremony — standups are useful when they surface blockers and decisions, not when they become a status report nobody asked for.",
    },
    {
      title: "Scaling means changing how you lead",
      quote: "The job shifted from making decisions to creating the conditions for good ones.",
      body: "What worked when I was close to every technical call stopped working once I was responsible for multiple teams and products. Scaling meant fewer dependencies on me, and more on clear ownership and people who could decide well without me in the room.",
    },
    {
      title: "Technical debt isn't automatically bad",
      body: "Sometimes taking on debt is the right business decision. The problem isn't debt — it's pretending it doesn't exist.",
    },
    {
      title: "Simplicity is an engineering feature",
      body: "Every abstraction, service, dependency and process has a cost. I try to ask whether the complexity is buying us something worth paying for. If not, remove it.",
    },
    {
      title: "Leadership sometimes means making difficult decisions",
      quote: "Leadership isn't only about helping people succeed. Sometimes it's about making the decisions nobody wants to make.",
      body: "Part of leading through the org's harder stretches meant making difficult calls about team size when the business needed it. Those decisions don't get easier by avoiding them — they get more honest by owning them, communicating clearly, and taking responsibility for what follows.",
    },
  ] as { title: string; quote?: string; body: string }[],

  buildingIntro:
    "After years focused on leadership, I stepped back into hands-on development — partly because I missed building, and partly to understand what modern software development feels like from the builder's side.",
  // Subset of `openSourceTools`/`experimentTools` (see src/data/building.ts),
  // with descriptions tuned for the About page's narrower framing — kept as
  // its own list rather than filtering those so the copy here can stay
  // independent of the /building page.
  projects: [
    {
      name: "hueglint",
      kind: "npm",
      description: "Accessible-by-default heatmap library — CVD-safe color palettes, keyboard navigation, ARIA data table, diff-mode comparison, axe-core gated CI.",
      tags: ["accessibility", "color"],
      links: [
        { label: "GitHub", href: "https://github.com/umbrova/hueglint" },
        { label: "Web", href: "https://hueglint.umbrova.com" },
      ],
    },
    {
      name: "ladderline",
      kind: "CLI",
      description: "Local-first CLI for engineering managers — logs work as it happens, builds a grounded case for promotion cycles.",
      tags: ["eng-management", "local-first"],
      links: [
        { label: "GitHub", href: "https://github.com/umbrova/ladderline" },
        { label: "npm", href: "https://www.npmjs.com/package/@umbrova/ladderline" },
      ],
    },
    {
      name: "trailvine",
      kind: "npm",
      description: "SVG timeline and route generator — framework-agnostic core, thin bindings for React and vanilla JS.",
      tags: ["svg", "timeline"],
      links: [
        { label: "GitHub", href: "https://github.com/umbrova/trailvine" },
        { label: "npm", href: "https://www.npmjs.com/package/@trailvine/core" },
        { label: "Web", href: "https://trailvine.umbrova.com" },
      ],
    },
  ] as Tool[],

  aiLine: "I use AI coding assistants for exploration, prototyping, implementation, tests, and docs — but I don't outsource engineering judgment to them.",
  aiQuote: "AI can produce code. It doesn't own the engineering decision.",

  techCaption: "Tools I reach for often, or that I stay close enough to to make good calls about — not a certification list.",
  tech: ["React", "TypeScript", "Next.js", "Node.js", "Hono", "PostgreSQL", "AWS", "Docker", "CI/CD"],
  techSecondary: ["Architecture", "Design systems", "Developer experience", "Observability", "Performance"],

  now: [
    { label: "Building", value: "Open-source tools and small products" },
    { label: "Learning", value: "System design, AI-assisted coding, developer tooling" },
    { label: "Exploring", value: "AI-assisted development, agentic workflows" },
    { label: "Thinking about", value: "Staying fast as teams grow" },
  ],

  personalLine:
    "Kerala-born, Mumbai-raised, Bangalore-settled. I've been a Liverpool supporter since 2005–06, so I've seen my share of rebuilds, comebacks, and good times. These days, I'm also learning a whole new kind of patience — raising a three-year-old daughter.",

  closerQuote: "Are we building something worth building?",
};
