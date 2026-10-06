---
title: Recall
year: 2026
medium: AI system design for card disputes
provenance: 2nd place, American Express AI Hackathon 2026
summary: Helps card members recognise charges they've forgotten, using their own card history, so honest confusion doesn't become a dispute.
order: 2
---

## The brief

Many card disputes aren't fraud. They're charges people made and simply don't recognise: a forgotten subscription, a family member's purchase, an odd merchant name from a trip. Existing tools ask the merchant to explain the charge, so they only work where the merchant takes part, which leaves out most small shops.

Recall works from the other side. It rebuilds the card member's own memory of the purchase from the card history the issuer already holds.

> "This looks like airport parking at Changi T3, the same trip as your flight booking on the 12th and your hotel charge in Bangkok."

## The decision

The model is never allowed to be sure.

The worst thing Recall could do is talk someone out of reporting real fraud, so the model only proposes. Every claim has to cite a real transaction. A second model from a different family checks each claim, because two models built the same way tend to make the same mistakes. Plain, rule-based code makes every decision that touches money. When the history is too thin, Recall shows the raw details and says nothing at all. Silence is always an acceptable answer.

## The screen

On the card member's phone, the explanation is worded as a possibility, never a fact. "This isn't mine" sits beside "Yes, this was me" with exactly the same weight, so disputing a charge is never the harder path.
