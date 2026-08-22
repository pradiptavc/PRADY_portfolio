import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    thesis: z.string(),
    summary: z.string(),
    year: z.string(),
    role: z.string(),
    team: z.string(),
    duration: z.string(),
    theme: z.enum(['light', 'dark', 'warm']),
    accent: z.string(),
    order: z.number(),
    next: z.string(),
    stats: z.array(z.object({ value: z.string(), label: z.string() })),
    chapters: z.array(z.object({ id: z.string(), label: z.string() })).optional(),
    prototype: z.object({
      url: z.url(),
      title: z.string(),
      reviewed: z.boolean(),
    }).optional(),
    disclosure: z.string().optional(),
  }),
});

export const collections = { work };
