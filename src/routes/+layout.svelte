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
      <NavItem path="/contact">Präsenz</NavItem>
    </ul>
    <a href="https://github.com/Sauriel/resume" target="_blank" id="source-link">
      <Icon icon="fa6-brands:github" />
    </a>
  </nav>
  <main>
    {#key data.url}
      <div in:fly={{ x: -200, duration: 300, delay: 300 }} out:fly={{ x: 200, duration: 300 }}>
        <slot />
      </div>
    {/key}
  </main>
</div>

<style>
  #app {
    display: grid;
    grid-template-areas:
      '. . .'
      'sidebar menu .'
      'sidebar content .'
      'sidebar . .';
    grid-template-columns: 20rem 1fr 8rem;
    grid-template-rows: 10rem 2rem 1fr 8rem;
    column-gap: 4cap;
    row-gap: 1rem;
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
    grid-area: content;
    background-color: var(--color-dark);
    border-radius: 0.5rem;
    padding: 1rem;
    overflow: hidden;
  }

  main > div {
    height: 100%;
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
