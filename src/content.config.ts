// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const writing = defineCollection({
  // The old API inferred "read markdown files from this folder"
  // automatically from `type: "content"`. The new API makes that explicit
  // via a `loader` — here, `glob` just means "find files matching this
  // pattern in this folder," but the same mechanism could load from a
  // remote API or database instead, which is the actual point of the
  // redesign — collections aren't tied to local files anymore.
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    // Single-value, explicit per post — deliberately not derived from
    // `tags`, since a post's tags can span more categories than it belongs
    // to for filtering purposes.
    category: z.enum(["Engineering", "Leadership", "Architecture", "Building", "AI"]),
    // Hand-picked for the homepage's Recent Writing section, which shows a
    // fixed, curated set rather than the most recent N posts. The /writing
    // index page ignores this and always shows everything by recency.
    featured: z.boolean().default(false),
    // Separate from `featured` above — a different, independently-curated
    // set shown in the /writing index page's own Featured section.
    writingFeatured: z.boolean().default(false),
  }),
});

// A section either carries real `paragraphs`, or a `placeholder` string —
// rendered in dashed-border, muted styling by ProjectDetail.astro for
// sections that still need a real writeup.
const buildingSection = z.union([
  z.object({ heading: z.string(), paragraphs: z.array(z.string()) }),
  z.object({ heading: z.string(), placeholder: z.string() }),
]);

const buildingLink = z.union([
  z.object({ label: z.string(), href: z.string() }),
  z.object({ label: z.string(), placeholder: z.literal(true) }),
]);

const building = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/building" }),
  schema: z.object({
    name: z.string(),
    badge: z.string(),
    tagline: z.string(),
    tags: z.array(z.string()),
    sections: z.array(buildingSection),
    links: z.array(buildingLink),
  }),
});

export const collections = { writing, building };