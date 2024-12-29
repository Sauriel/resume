import { resolve } from 'node:path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    'nuxt-og-image',
    '@nuxt/fonts',
    '@nuxt/image',
    'nuxt-rebundle',
    'nuxt-time',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxt/content',
    '@nuxtjs/i18n',
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    typedPages: true,
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  nitro: {
    routeRules: {
      '/snippets': {
        headers: {
          'Cross-Origin-Embedder-Policy': 'require-corp',
          'Cross-Origin-Opener-Policy': 'same-origin',
        },
      },
    },
  },
  content: {
    sources: {
      blog: {
        driver: 'fs',
        prefix: '/blog',
        base: resolve(
          __dirname,
          '../../../../mnt/c/Users/s_dru/Dropbox/Aus Arbeit/Obsidian Vault/Blog/posts'
        ),
      },
    },
    navigation: {
      fields: ['date', 'language', 'description'],
    },
  },
  i18n: {
    locales: [
      { code: 'de', language: 'de-DE', name: 'deutsch' },
      { code: 'en', language: 'en-US', name: 'english' },
    ],
    defaultLocale: 'de',
  },
});
