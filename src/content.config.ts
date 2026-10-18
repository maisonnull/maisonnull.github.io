import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Design samples: interfaces shown to illustrate what the studio can design.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    kind: z.string(),      // e.g. "Mobile web app"
    sector: z.string(),    // who it is for
    summary: z.string(),
    decision: z.string(),  // the design decision that shaped it
    order: z.number(),
  }),
});

export const collections = { work };
