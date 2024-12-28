import { defineCollection, z } from 'astro:content';
import { ObsidianMdLoader } from 'astro-loader-obsidian';

const blog = defineCollection({
  loader: ObsidianMdLoader({
    base: process.env.OBSIDIAN_BLOG_DIRECTORY,
  }),
});

export const collections = { blog };
