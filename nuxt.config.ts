import { resolve } from 'node:path';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n';

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
  css: ['./app/styles/base.css'],
  app: {
    head: {
      title: 'Sauriel.net',
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  vite: {
    plugins: [
      VueI18nPlugin.vite({
        include: [resolve(__dirname, './app/locales/**')],
      }),
    ],
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
      fields: ['draft', 'date', 'language', 'description'],
    },
    markdown: {
      anchorLinks: false,
    },
  },
  i18n: {
    locales: [
      { code: 'de', language: 'de-DE', name: 'deutsch' },
      { code: 'en', language: 'en-US', name: 'english' },
    ],
    defaultLocale: 'de',
    vueI18n: './i18n.config.ts',
  },
});
