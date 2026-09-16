import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sermons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sermons' }),
  schema: z.object({
    title: z.string(),
    speaker: z.string(),
    date: z.coerce.date(),
    series: z.string().optional(),
    scripture: z.string().optional(),
    // YouTube video ID (from Sanctuary's stream, or any past service recording), e.g. "dQw4w9WgXcQ"
    youtubeId: z.string().optional(),
    summary: z.string().optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string().optional(),
    summary: z.string().optional(),
  }),
});

export const collections = { sermons, events };
