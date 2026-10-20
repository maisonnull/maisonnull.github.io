import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Design samples: interfaces shown to illustrate what the studio can design.
// A sample with a brand is an unsolicited redesign concept, not client work.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    kind: z.string(),      // e.g. "Mobile web app"
    sector: z.string(),    // who it is for
    summary: z.string(),
    decision: z.string(),  // the design decision that shaped it
    order: z.number(),
    brand: z.string().optional(), // set for an unsolicited redesign of a real brand
    live: z.string().url().optional(), // the live concept site
  }),
});

export const collections = { work };
