// The one file to edit to make this theme yours. Posts live separately
// in src/content/writing/ since they're markdown, not config data.

export const site = {
  name: "Erika Mustermann",
  url: "https://example.github.io",
  palette: "emerald" as "emerald" | "warm" | "slate" | "mono" | "ink" | "forest",
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
  eyebrow: "Software engineer",
  headlineLine1: "YOUR",
  headlineLine2: "HEADLINE",
  lede: "One or two sentences about what you build and what you're looking for.",
  initials: "EM",
  avatarImage: "/avatar.png",
  buildingTileText: "A short summary of your projects",
  writingTileText: "A short summary of your writing",
};

export const focusAreas: string[] = ["Focus area one", "Focus area two", "Focus area three"];

export type Tool = {
  name: string;
  kind: string;
  description: string;
  tags: string[];
  links: { href: string; label: string }[];
};

export const tools: Tool[] = [
  {
    name: "sample-project",
    kind: "npm library",
    description: "Replace this with a real project. Description shows up on the Building page as a card.",
    tags: ["example", "placeholder"],
    links: [{ label: "GitHub", href: "https://github.com/example/sample-project" }],
  },
];

export type InProgressItem = {
  name: string;
  kind: string;
  description: string;
  href?: string;
};

export const inProgress: InProgressItem[] = [];

export type FooterLink = { label: string; href: string };

export const footerLinks: FooterLink[] = [
  { label: "GitHub", href: "https://github.com/example" },
  { label: "Email", href: "mailto:you@example.com" },
  { label: "Resume", href: "/resume.pdf" },
];

export type TimelineEntry = { date: string; title: string };

export const timeline: TimelineEntry[] = [
  { date: "20XX", title: "First milestone" },
  { date: "20XX", title: "Second milestone" },
  { date: "20XX", title: "Third milestone" },
];