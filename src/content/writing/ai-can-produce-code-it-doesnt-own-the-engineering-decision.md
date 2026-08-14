---
title: "AI can produce code. It doesn't own the engineering decision."
description: "AI-assisted development makes implementation cheaper. That changes where engineering judgment matters."
date: 2026-08-10
draft: false
tags: ["ai", "engineering", "software-development"]
---

I've been using AI coding assistants much more seriously over the last year — not just for autocomplete, but for exploration, prototyping, architecture discussions, implementation, tests, documentation, most of what goes into shipping something on my own independent projects.

It's changed how quickly I can go from an idea to something running.

But it has also made something else clearer.

## Writing code was never the whole job

A lot of software development is deciding what code should exist in the first place.

Should this feature exist?

Should this be a separate service?

Do we need a database here?

Is this abstraction actually useful?

What happens when this fails?

Will someone understand this six months from now?

AI can help answer some of these questions.

It can also confidently give you a bad answer.

## Generated code can look finished

That's probably the most dangerous part.

The code compiles.

The tests pass.

The UI looks right.

Everything appears done.

But the implementation may still be wrong.

The architecture might not fit.

The error handling might be incomplete.

The abstraction might be unnecessary — one of my own libraries went through a rewrite because an AI-suggested abstraction looked clean in isolation and fell apart the moment a second consumer needed something slightly different from it.

The generated code doesn't know what your product is trying to become.

You do.

## I've found myself reviewing more, not less

Using AI effectively requires a different kind of attention.

You need to understand the output well enough to challenge it.

That means understanding the underlying system.

It means knowing where the risky parts are.

It means being comfortable throwing away a solution that looks perfectly reasonable.

The speed is great.

But speed makes bad decisions cheaper too.

## The bottleneck moves

If implementation becomes significantly cheaper, something else becomes the bottleneck.

Maybe it's deciding what to build.

Maybe it's verification.

Maybe it's product judgment.

Maybe it's architecture.

I don't know exactly where that settles yet — that's part of what I'm actually trying to find out by building things myself again instead of just reading about it. But the part I'm sure of hasn't changed: AI can produce code. It doesn't own the engineering decision. Someone still has to decide whether the thing it produced should exist.
