---
title: "The accessibility claims I almost shipped before they were true"
description: "Building an accessibility-first library taught me that the docs describing your accessibility claims are just as load-bearing as the code, and just as easy to get quietly wrong."
date: 2026-07-27
draft: false
tags: ["accessibility", "documentation", "testing", "engineering-practice"]
---

The part of hueglint that almost went wrong wasn't in the code. It was a Markdown file. I was writing the accessibility documentation page — the one page whose entire job is to tell someone doing a real compliance review exactly what's true — and I nearly shipped it describing three features as done when they weren't built yet.

## How it happened

Early in the project I'd written down, in a spec, a full list of accessibility requirements: keyboard navigation, a screen-reader-friendly data table, respecting `prefers-reduced-motion`, supporting `forced-colors` and `prefers-contrast`, and a spoken summary read before the full data table. Over several development phases, most of that list got built and tested. Some of it didn't, at least not yet.

When I sat down to write the actual accessibility docs page, I worked from the spec, not from the shipped code. The spec didn't distinguish between "decided" and "done." So the first draft of that page listed all five things as if they were equally real: the keyboard navigation that had real tests behind it, sitting in the same bullet list as the reduced-motion support that existed only as a paragraph in a planning document.

None of it was made up, which was almost the problem — it all sounded exactly like something hueglint would do. I read it twice before I caught anything.

## Not the same as a bad code comment

A wrong code comment misleads one developer reading that one file. A wrong claim on an accessibility page misleads someone doing due diligence — a compliance audit, a procurement checklist, someone deciding whether they can legally use this library for a project with real accessibility requirements. The entire value of citing specific, numbered WCAG success criteria (1.4.1, 1.4.3, 2.1.1, 4.1.2) instead of a vague "we care about accessibility" banner is that it's supposed to be checkable. A checkable claim that's actually false is worse than a vague one, because it invites trust it hasn't earned.

## It happened again, the other direction

The first time I caught it, the fix was straightforward: split the page into what's actually implemented and tested versus what's genuinely still planned, and say so plainly. That felt like it solved the problem. It didn't, entirely.

A few weeks later, I built the three "planned" features for real: reduced-motion support, the forced-colors/contrast handling, and the spoken summary generator. I updated the docs page to move them from "planned" to "done" — and almost immediately realized the page's closing line still said "the planned items aren't covered by tests yet," which was now backwards. The claim had drifted out of sync with reality a second time, in the exact same file, just in the opposite direction: now it was *underselling* what the library actually did.

That's when the real fix became obvious: the problem was never really about writing the sentence correctly once. It was that a document describing a moving codebase will always drift out of sync with it, in either direction, unless something forces the two to stay aligned. Cut this sentence entirely, end the paragraph one line earlier at "just in the opposite direction.

## Tests, not memory

The real fix was making every accessibility claim on that page correspond to a specific, automated test — `axe-core` running in continuous integration on every change, plus targeted unit tests for the specific behaviors (does a cell get a forced-colors-safe stroke, does the reduced-motion media query actually suppress the animation). The docs page now ends with a plain statement of that fact, and it's true in a way that doesn't depend on anyone remembering to re-check it later: if a future change breaks one of these behaviors, the test suite fails before the code ships, not after a docs page quietly goes stale next to it.

I expected the hard part to be color math and ARIA wiring. Some of it was. I didn't expect the docs page to be the thing that actually got away from me twice.