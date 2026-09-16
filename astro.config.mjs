// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Root-level GitHub Pages site (repo renamed to goodlandntcog.github.io), so no `base` path
  // prefix is needed — this would need base: '/Church' if the repo stays named "Church" instead.
  site: 'https://goodlandntcog.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});