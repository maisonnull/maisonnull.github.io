---
title: Pinch
year: 2026
medium: React, Node, Gemini, Web Audio
provenance: "Build With AI: Basics 2026 (Devpost)"
result: Submitted
decision: It never guesses an amount.
summary: "Interviews your grandparent while they cook, so \"a pinch\", \"a splash\" and \"until it smells right\" get pinned down while their hands are still in the pot."
order: 4
link: https://pinch-htpl.onrender.com
linkLabel: Try Pinch
---

## The brief

Family recipes often live only in someone's head, written down as "a pinch" or "until it smells right". Most recipe apps record first and sort it out afterwards, and by the time they notice an amount is vague, the cook has left the kitchen.

Pinch asks during the cooking. After each step, it either stays quiet because the step is clear, or asks one follow-up question, out loud and in big text. At the end you get a printable, notebook-style card with her words, her reasons, and an honest "Still unknown" list.

## The decision

It never guesses an amount.

> The butter amount was never said, so it stays unknown.

Gemini decides what to ask. Plain server code checks every amount, number and quote on the card against what the cook actually said. Anything it can't trace back to her words becomes "amount unknown", so the card never invents a measurement she didn't give.

## Questions are rationed on purpose

Nobody wants to be interrupted every ten seconds while cooking. Pinch allows at most one question per step and three per session, enforced by the app rather than left to the model. If the AI service is down, it falls back to notes mode, which still saves her exact words.
