import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    medium: z.string(),
    provenance: z.string(),
    summary: z.string(),
    order: z.number(),
    link: z.string().optional(),
    linkLabel: z.string().optional(),
  }),
});

export const collections = { work };
