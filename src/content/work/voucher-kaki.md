---
title: Voucher Kaki
year: 2026
medium: Python, React, Leaflet on OneMap
provenance: Finalist, SimplifyNext IGNITE Agentic AI Hackathon 2026
summary: Conversational search for the 11,301 eateries in Singapore that accept CDC vouchers, in four languages.
order: 1
link: https://simplify-ai-hackathon.vercel.app
linkLabel: Try Voucher Kaki
---

## The brief

The person using a CDC voucher is often older, often on a small phone, and usually looking for one dish near home. Voucher Kaki lets them type or say what they feel like eating, in English, 中文, Bahasa Melayu or தமிழ், and finds eateries nearby that take the voucher. Results are ranked by relevance and walking distance, with a deliberate nudge toward independent shops over chains.

Nearly half of the eateries in the data, 5,321 of them, are not hawker stalls. Most people have no idea how many cafés and restaurants accept the voucher, and that gap was the whole reason to build it.

## The decision

Google ratings were fully built into the product, then removed on purpose.

> A partial ratings column doesn't inform every result. It puts a 4.5 next to a blank, and people pick the number.

Many of the small shops in the data have no Google listing at all. Showing ratings would have quietly sent people back to the famous places, which is the opposite of what the product is for. Removing them from the ranking alone wasn't enough, because the bias would still reach people through their eyes. The only fix was not to show the number. A test now checks that ratings stay absent.

## Built to degrade, not break

When it can't find enough matches, it says what it gave up to fill the list, such as widening the search to 3 km, instead of silently showing worse results. Behind that sits a second AI provider if the first fails, a second map if the first goes down, and keyword search underneath everything. All 76 planning areas in Singapore resolve with no network at all.

It runs with zero Python dependencies and needs no API key for the map or for geocoding.
