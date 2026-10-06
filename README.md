# Maison Null

The studio site, built with Astro and hosted on GitHub Pages.

## Run it locally

You need Node 22.12 or newer.

```
npm install
npm run dev
```

Then open http://localhost:4321.

## Publish on GitHub Pages

1. Create a free GitHub organisation called `maisonnull`. This keeps the studio separate from your personal account.
2. In that organisation, create a public repo named exactly `maisonnull.github.io` and push this folder to its `main` branch.
3. In the repo, go to Settings, then Pages, and set Source to "GitHub Actions".
4. Every push to `main` builds and publishes the site at https://maisonnull.github.io. Progress shows in the Actions tab.

If you use a different organisation or repo name, change `site` (and `base`, for a project repo) in `astro.config.mjs`.

## Everyday edits

- Studio details, contact email and the Tally form ID: `src/config.ts`
- Prices and what each commission includes: `src/commissions.ts`
- Add a project: copy a file in `src/content/work/`, rename it, and edit the details at the top. It appears on the home page and the Work page, and gets its own page automatically. `order` sets its position.

## Custom domain later

Add your domain under Settings, then Pages, then Custom domain, and change `site` in `astro.config.mjs` to match.
