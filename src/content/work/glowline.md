---
title: Glowline
kind: Web app / consumer health
sector: People holding a nearly empty bottle, deciding whether to buy it again. Built for the YouCam API Skin AI hackathon
summary: A skincare tracker that answers one question, is this product actually working, by comparing your skin only against your own first check-in and refusing to call noise progress.
decision: Say "we cannot tell yet" before saying anything that is not true.
order: 2
---

## The brief

A serum costs between thirty and a hundred and twenty dollars and takes four to twelve weeks to show anything. In that time nobody can tell a real change from bad bathroom lighting, or "this isn't working" from "I keep forgetting to use it". So people quit early, or keep buying on hope.

## The design

The landing asks the question in four words and shows why a one-day skin grade lies: the same face, three minutes apart, under three kinds of light. Then it shows how a bottle is judged over time.

The insights board leads with a verdict in plain words, such as keep going, power through, change one variable, fix adherence or come back, and puts the evidence underneath it: the trend against your own noise floor, each concern, how often you actually used the product, and what each point of improvement cost.

> Below 60% logged use, the verdict is not "this failed". It is "we cannot tell yet".

## The details

- **You against you.** Your first check-in is the only comparison that matters, never a population average.
- **A noise floor of your own.** Glowline measures how much your scores wobble between repeat photos, and calls anything inside that band no change.
- **Time it takes.** A retinol is not judged on day three. Each concern carries its own response window.
- **More than one bottle.** A serum and a retinoid run on different clocks, each with its own baseline and verdict.
