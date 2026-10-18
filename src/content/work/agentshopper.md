---
title: AgentShopper
year: 2026
medium: Python, Streamlit, OpenAI
provenance: NUS LifeHack 2026, Rezolve AI challenge (team of three)
result: Submitted
decision: It has to prove it worked.
summary: "Turns an ordinary product catalogue into content AI shopping assistants can understand and recommend, then shows a product moving from \"never showed up\" to the top of the list."
order: 5
link: https://agentshopper.streamlit.app/
linkLabel: Try AgentShopper
---

## The brief

People are starting to shop by asking an AI assistant instead of typing into a search box. A question like "lightweight shoes for a half marathon in humid weather, under S$200" needs facts most product pages never state, so those products quietly never get recommended.

AgentShopper takes a catalogue file, scores how ready it is for AI shoppers, lists exactly which facts are missing, and writes content for each product: who it suits, who it doesn't, and how it compares with the real products beside it. Built with a team of three; Nathan led the engineering and AI reasoning.

## The decision

It has to prove it worked.

> Vela Aero 9: not surfaced at all, then #2.

Instead of claiming the new content is better, the app searches the catalogue twice, once with the original content and once with the new, over exactly the same products, and puts the two result lists side by side. Hard requirements like a S$200 budget are enforced in code, so the AI can't talk a S$219 shoe into the results.

## A made-up spec can't get in

Every fact the AI extracts has to appear word for word in that product's own text, or it's thrown away. Claims that can't be backed by a real fact are flagged for human review instead of published.
