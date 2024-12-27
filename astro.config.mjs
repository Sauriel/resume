// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        'fa6-brands': ['*'],
        'fa6-solid': ['*'],
      },
    }),
    svelte(),
  ],
  server: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
    },
  },
  vite: {
    ssr: {
      noExternal: ['monaco-editor'],
    },
    server: {
      headers: {
        'Cross-Origin-Embedder-Policy': 'require-corp',
        'Cross-Origin-Opener-Policy': 'same-origin',
      },
    },
  },
});
