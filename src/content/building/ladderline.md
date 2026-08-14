---
name: ladderline
badge: CLI
tagline: "Local-first CLI for engineering managers — 1:1 notes and career-ladder tracking, no dashboard required."
tags: ["eng-management", "local-first"]
sections:
  - heading: "Why I built it"
    paragraphs:
      - "I wanted a way to log evidence of my own (and my reports') work as it happened, without needing a database or a dashboard — just plain files I could read and diff. Review season kept turning into reconstructing months of work from memory, and I wanted the record to already exist by the time that season started."
  - heading: "What I learned"
    paragraphs:
      - "The real lesson was that almost every bug that mattered got caught by actually running the thing, not by reading code — a Windows symlink cache silently breaking colored output, a dashboard race condition from clicking between two people quickly, a doc page describing a command that was never built. None of those would've shown up in review. They showed up because I kept testing from a clean install instead of trusting it already worked."
  - heading: "Technical decisions"
    paragraphs:
      - "Notes live as plain markdown files with YAML frontmatter, one per entry, no database — I wanted something you could grep, diff, or still read five years after the tool stopped being maintained. All the actual logic sits in a layer that only reads and writes files and never touches the terminal, which is what let me test it against real temp directories instead of mocks."
  - heading: "What I'd do differently"
    paragraphs:
      - "I'd build note-logging into the dashboard from the start instead of leaving it CLI-only — right now the dashboard can show you everything you've logged but can't add to it, which is the real gap between what it looks like it should do and what it actually does. I'd also make \"verify from a clean install\" a day-one habit instead of learning it the hard way a few times over."
links:
  - label: GitHub
    href: "https://github.com/umbrova/ladderline"
  - label: Website
    href: "https://www.npmjs.com/package/@umbrova/ladderline"
---
