---
title: Lead Time
year: 2026
medium: Python, React, open-model AI
provenance: Winner, Business + AI track, ForgeHacks Online 2026
result: Track winner
decision: It grades its own forecasts.
summary: Shows small food businesses in Singapore which overseas food trends are heading their way, whether their kitchen can make them, and how to price, stock and launch them first.
order: 1
link: https://lead-time-cjnn.onrender.com
linkLabel: Try Lead Time
---

## The brief

Food trends usually blow up overseas first. Lead Time watches weekly search interest for 22 foods across seven markets, works out how long each one has historically taken to reach Singapore, and tells a small food business which trends are heading its way.

For each food it gives a verdict (Go, Go but late, Wait and watch, or Skip) and checks whether the kitchen can actually make it. Then it helps with the launch: a suggested price and margin, when to bulk order, a launch offer with its break-even, and a dated posting plan.

## The decision

It grades its own forecasts, and shows the results even when they aren't flattering.

> Of 4 arrival forecasts that could be strictly checked, 1 fell inside its window.

Every calculation takes an "as of" date, and a test makes sure no future data leaks in, so the app can be rewound to any past week and checked against what really happened. When past arrivals are too uneven to predict, it says "Wait and watch" instead of inventing a date.

## The model doesn't get the last word

An open model judges what the kitchen can make and drafts the launch copy, but every answer is schema-checked. Anything with dates, links, quantities or popularity claims the data doesn't support is rejected and rewritten. All the numbers come from plain Python, and if every model is down, labelled offline rules take over.
