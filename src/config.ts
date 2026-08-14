// src/config.ts
// The one file to edit to make this theme yours. Posts live separately
// in src/content/writing/ since they're markdown, not config data.

export const site = {
  name: "Anoop Soman",
  url: "https://anoopsmn.github.io",
  palette: "warm" as "paper-teal" | "warm" | "slate" | "mono" | "ink" | "forest",
};

// Single source of truth for the "X+ years" figure — it shows up on both
// the home page hero and the About page, and needs to move in lockstep.
export const yearsExperience = "17+";

type NavItem = {
  href: string;
  label: string;
  newTab?: boolean;
};

export const nav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/building", label: "Building" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/resume.pdf", label: "Resume", newTab: true },
];

export const hero = {
  eyebrow: `${yearsExperience} years building products and teams`,
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
  // Set only on tools that have a written /building/<slug> detail page.
  // ToolCard renders the "How it's built →" link only when this is present.
  detailHref?: string;
};

// Published, documented, meant for other people to use — each one has a
// /building/<slug> writeup linked via `detailHref`.
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
    name: "grovepin",
    kind: "Chrome extension",
    description: "Timestamped notes on video — pin a note to a moment, jump straight back to it later.",
    tags: ["video", "notes"],
    links: [{ label: "Web", href: "https://grovepin.umbrova.com" }],
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

// Content for the /building/<slug> detail pages. A section either carries
// real `paragraphs`, or a `placeholder` string shown in dashed-border,
// muted styling by ProjectDetail.astro — used for sections that still need
// a real writeup rather than invented technical detail.
export type ProjectDetailSection =
  | { heading: string; paragraphs: string[] }
  | { heading: string; placeholder: string };

export type ProjectDetailLink =
  | { label: string; href: string }
  | { label: string; placeholder: true };

export type ProjectDetail = {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  tags: string[];
  sections: ProjectDetailSection[];
  links: ProjectDetailLink[];
};

const needsWriteup =
  "[Needs a real writeup — what was the hardest part of building this, and what would you change?]";

export const projectDetails: Record<string, ProjectDetail> = {
hueglint: {
    slug: "hueglint",
    name: "hueglint",
    badge: "npm",
    tagline: "Accessible-by-default heatmap library — color scales that hold contrast and colorblind-safety from the start.",
    tags: ["accessibility", "color", "typescript"],
    sections: [
      {
        heading: "Why I built it",
        paragraphs: [
          "Most heatmap libraries just pick colors that look nice. Which is a problem, because the entire job of a heatmap is using color to stand in for a number — and something like 1 in 12 men have some form of color vision deficiency. Red-to-green is the default almost everywhere I looked. It's also close to the worst possible choice for that group.",
          "So a bad palette isn't really a style preference. It's a bug. And once I saw it that way, \"make it configurable, off by default\" stopped making sense. Nobody opts into accessibility. They just don't.",
        ],
      },
      {
        heading: "What I learned",
        paragraphs: [
          "Avoiding red-green isn't enough by itself. Value has to come through lightness, not hue — lightness is the one thing that survives grayscale, low vision, most forms of color blindness, all at once. That killed my first instinct, which was to just hand-pick five colors that looked good together.",
          "Ended up using five published, peer-reviewed palettes through d3-scale-chromatic instead of writing my own. Cividis exists specifically because someone proved, in an actual paper, that it holds up under every major form of CVD. Trying to redo that math myself would've just been ego.",
        ],
      },
      {
        heading: "Technical decisions",
        paragraphs: [
          "Two packages — a framework-agnostic core, and a thin React layer on top. Every bit of the actual palette logic lives in core: validation, the scale functions, the CVD guarantees. React doesn't touch color at all. It just passes a palette name down as a prop.",
          "Diff mode was its own problem. A regular low-to-high scale doesn't work when a value can go negative or positive off a baseline — you need something diverging. And the obvious diverging choice, the one basically everyone uses, is red-to-blue or red-to-green. Which is exactly what I was trying to get away from in the first place. Went with purple-to-orange instead.",
        ],
      },
      {
        heading: "What I'd do differently",
        paragraphs: [
          "The early mockups had hexbin and Voronoi cell shapes next to the plain square grid. Only the square grid actually shipped. If I did it again I'd either build all three before calling it v1, or just not put shapes I hadn't built yet into a mockup — showing something that doesn't exist is still a kind of promise, even by accident.",
          "Diff mode never got wired into the same touch-target protection the regular grid has on small screens. So a diff chart on a phone just renders every cell at whatever size it gets. Nothing's broken, exactly. It's just sitting there.",
        ],
      },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/umbrova/hueglint" },
      { label: "Website", href: "https://hueglint.umbrova.com" },
    ],
  },
 ladderline: {
  slug: "ladderline",
  name: "ladderline",
  badge: "CLI",
  tagline: "Local-first CLI for engineering managers — 1:1 notes and career-ladder tracking, no dashboard required.",
  tags: ["eng-management", "local-first"],
  sections: [
    {
      heading: "Why I built it",
      paragraphs: [
        "I wanted a way to log evidence of my own (and my reports') work as it happened, without needing a database or a dashboard — just plain files I could read and diff. Review season kept turning into reconstructing months of work from memory, and I wanted the record to already exist by the time that season started.",
      ],
    },
    {
      heading: "What I learned",
      paragraphs: [
        "The real lesson was that almost every bug that mattered got caught by actually running the thing, not by reading code — a Windows symlink cache silently breaking colored output, a dashboard race condition from clicking between two people quickly, a doc page describing a command that was never built. None of those would've shown up in review. They showed up because I kept testing from a clean install instead of trusting it already worked.",
      ],
    },
    {
      heading: "Technical decisions",
      paragraphs: [
        "Notes live as plain markdown files with YAML frontmatter, one per entry, no database — I wanted something you could grep, diff, or still read five years after the tool stopped being maintained. All the actual logic sits in a layer that only reads and writes files and never touches the terminal, which is what let me test it against real temp directories instead of mocks.",
      ],
    },
    {
      heading: "What I'd do differently",
      paragraphs: [
        "I'd build note-logging into the dashboard from the start instead of leaving it CLI-only — right now the dashboard can show you everything you've logged but can't add to it, which is the real gap between what it looks like it should do and what it actually does. I'd also make \"verify from a clean install\" a day-one habit instead of learning it the hard way a few times over.",
      ],
    },
  ],
  links: [
    { label: "GitHub", href: "https://github.com/umbrova/ladderline" },
    { label: "Website", href: "https://www.npmjs.com/package/@umbrova/ladderline"},
  ],
},
trailvine: {
    slug: "trailvine",
    name: "trailvine",
    badge: "npm",
    tagline: "Draws a curved SVG route through a set of milestones — a framework-agnostic core, with thin bindings for React and vanilla JS. Pick a shape, tune it live, copy the result as code.",
    tags: ["svg", "timeline"],
    sections: [
      {
        heading: "Why I built it",
        paragraphs: [
          "I wanted a way to turn a list of milestones into a visual route without hand-drawing SVG paths every time. trailvine picks up where that manual work left off — pick a shape, tune it against real milestones, and copy the result out as code instead of a static export.",
        ],
      },
      {
        heading: "What I learned",
        paragraphs: [
          "Splitting this into a zero-dependency core plus thin bindings for React and vanilla JS paid off more than I expected — the same geometry functions power both, and adding a later feature like hover-to-highlight only needed binding-level changes, no new math. The harder lesson was around testing: a chunk of the interactive behavior (responsive orientation switching, hover-to-highlight) only exists inside a live browser, and my server-rendered tests were quietly not covering any of it. Writing real jsdom-based tests caught a genuinely subtle bug — SVG elements return an SVGAnimatedString object from .className instead of a plain string, which silently broke a regex I was relying on. I wouldn't have caught that from reading the code alone.",
        ],
      },
      {
        heading: "Technical decisions",
        paragraphs: [
          "The core has zero runtime dependencies on purpose — the smooth curve is a hand-written Catmull-Rom-to-Bézier conversion rather than a d3-shape import, so consumers aren't pulling in anything they don't need. The layout's band array cycles through index % bands.length instead of having a separate 'alternating' vs 'custom heights' mode — one array, one mechanism, and a longer array just produces a more custom shape for free. Path options are a discriminated union keyed on curve type, so passing a radius to a straight or smooth curve is a compile-time error instead of a silently-ignored field.",
        ],
      },
      {
        heading: "What I'd do differently",
        paragraphs: [
          "I published the first version manually before setting up proper release tooling, which meant the very next release had to retrofit versioning under pressure — worth doing that setup before the first publish, not after. I'd also add the browser-only interaction tests from the start rather than after noticing my server-rendered tests weren't actually exercising them; it's an easy gap to miss until you go looking for it specifically.",
        ],
      },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/umbrova/trailvine" },
      { label: "Website", href: "https://trailvine.umbrova.com" },
    ],
  },
};

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

// Data for the /about page. Kept separate from `timeline` above since the
// About page's Journey section groups stops into chapters, rather than the
// single flat list the home page shows.
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
  // Subset of `tools` above, with descriptions tuned for the About page's
  // narrower framing — kept as its own list rather than filtering `tools`
  // so the copy here can stay independent of the /building page.
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
