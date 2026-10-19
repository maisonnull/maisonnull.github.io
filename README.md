# Maison Null

A design house in Singapore. It designs websites and apps people enjoy using, then builds them so they keep working.

Live at **[maisonnull.github.io](https://maisonnull.github.io)**.

## Concepts

Unsolicited redesign concepts. Not affiliated with or endorsed by the brands shown.

| Concept | Live |
| --- | --- |
| Maison Francis Kurkdjian, an online boutique centred on Baccarat Rouge 540 | [mn-mfk.pages.dev](https://mn-mfk.pages.dev) |
| Supergreen, an ordering site with a build-your-own bowl | [mn-supergreen.pages.dev](https://mn-supergreen.pages.dev) |
| Song Lang Garden, a first website for a Katong plant nursery | [mn-songlang.pages.dev](https://mn-songlang.pages.dev) |

## The site

Built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

```sh
npm ci
npm run dev      # local preview
npm run build    # outputs to dist/
```

| Path | What it holds |
| --- | --- |
| `src/config.ts` | Studio settings: Tally form ID, call booking link, GoatCounter code |
| `src/data/samples.ts` | The work shown on the home page |
| `src/pages/` | Home, work, studio, commissions and contact pages |
| `src/components/Device.astro` | Browser and phone frames that scroll a full-page screenshot on hover |
| `src/components/BriefFrame.astro` | The blank frame where visitors type a brief; it is kept in the browser and carried into the contact form |

Enquiries go through a [Tally](https://tally.so) form on `/contact`. Visits are counted with [GoatCounter](https://www.goatcounter.com), which uses no cookies.
