<div id="app">
  <Sidebar />
  <nav>
    <ul>
      <NavItem path="/">
        <Icon icon="fa6-solid:house" />
      </NavItem>
      <NavItem path="/profile">Kurzprofil</NavItem>
      <NavItem path="/jobs">Berufserfahrungen</NavItem>
      <NavItem path="/education">Ausbildung</NavItem>
    </ul>
    <a href="https://github.com/Sauriel/resume" target="_blank" id="source-link">
      <Icon icon="fa6-brands:github" />
    </a>
  </nav>
  <main>
    {#key data.url}
      <div in:fly={{ y: -200, duration: 300, delay: 300 }} out:fly={{ y: 200, duration: 300 }}>
        <slot />
      </div>
    {/key}
  </main>
</div>

<style>
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
</style>

<script lang="ts">
  import '../styles/base.css';
  import '@fontsource-variable/open-sans';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Icon from '@iconify/svelte';
  import NavItem from '$lib/components/NavItem.svelte';
  import { fly } from 'svelte/transition';
  import type { PageData } from './$types';

  export let data: PageData;
</script>
