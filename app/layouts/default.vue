<template>
  <div id="app">
    <Sidebar />
    <nav>
      <ul>
        <NavItem v-for="page of pageLinks" :key="page.path" :item="page">
          <Icon v-if="page.icon" :name="page.icon" />
          <span v-else-if="page.label">{{ page.label }}</span>
        </NavItem>
      </ul>
      <div class="right-nav">
        <UiLanguageSwitch />
        <a id="source-link" href="https://github.com/Sauriel/resume" target="_blank">
          <Icon name="fa6-brands:github" />
        </a>
      </div>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import '@fontsource-variable/open-sans';
import '~/styles/base.css';
import type { NavEntry } from '~/types';

const pageLinks: NavEntry[] = [
  {
    page: 'index',
    icon: 'fa6-solid:house',
  },
  {
    page: 'profile',
    label: 'Kurzprofil',
  },
  {
    page: 'blog',
    path: '/blog',
    label: 'Blog',
  },
  {
    page: 'projects',
    label: 'Projekte',
  },
  {
    page: 'snippets',
    label: 'Code Snippets',
  },
  {
    page: 'jobs',
    label: 'Berufserfahrungen',
  },
  {
    page: 'education',
    label: 'Ausbildung',
  },
  {
    page: 'conferences',
    label: 'Konferenzen',
  },
];
</script>

<style scoped>
#app {
  --top-whitespace: 10rem;
  --menu-height: 2rem;
  --app-grid-row-gap: 1rem;
  --bottom-whitespace: 8rem;

  display: grid;
  grid-template-areas:
    '. . .'
    'sidebar menu .'
    'sidebar content .'
    'sidebar . .';
  grid-template-columns: 20rem 1fr 8rem;
  grid-template-rows: var(--top-whitespace) var(--menu-height) 1fr var(--bottom-whitespace);
  column-gap: 3rem;
  row-gap: var(--app-grid-row-gap);
  height: 100dvh;
}

nav {
  grid-area: menu;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-dark);
  border-radius: 0.5rem;
  overflow: hidden;
}

nav > ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 1em;
  height: 100%;
}

.right-nav {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1em;
}

main {
  --padding: 1rem;
  --main-content-height: calc(
    100dvh -
      (
        var(--top-whitespace) + var(--menu-height) + var(--bottom-whitespace) +
          (3 * var(--app-grid-row-gap)) + (2 * var(--padding))
      )
  );
  grid-area: content;
  background-color: var(--color-dark);
  border-radius: 0.5rem;
  padding: var(--padding);
  overflow: hidden;
}

main > div {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
}

#source-link {
  text-decoration: none;
  color: var(--color-light);
  transition: all 0.4s ease-in-out;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25em;
  aspect-ratio: 1;
}

#source-link:hover {
  background-color: var(--color-light);
  color: var(--color-dark);
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s ease-in-out;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
