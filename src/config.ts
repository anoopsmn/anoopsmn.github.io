// src/config.ts
// Site-wide, rarely-changing config. Per-page content lives in src/data/
// (home.ts, building.ts, about.ts); long-form essays and project writeups
// live as markdown in src/content/ (writing/, building/).

export const site = {
  name: "Anoop Soman",
  url: "https://anoopsmn.github.io",
  palette: "warm" as "emerald" | "warm" | "slate" | "mono" | "ink" | "forest",
};

// Single source of truth for the "X+ years" figure — it shows up on both
// the home page hero and the About page, and needs to move in lockstep.
export const yearsExperience = "17+";

type NavItem = {
  href: string;
  label: string;
  newTab?: boolean;
  // Visually secondary: permanently muted (never gets the active-page
  // accent treatment), smaller text, set apart by a divider. For nav items
  // that aren't one of the site's core content pages — currently just
  // Resume, which opens in a new tab and has no in-app "active" state.
  secondary?: boolean;
};

export const nav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/building", label: "Building" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/resume.pdf", label: "Resume", newTab: true, secondary: true },
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
