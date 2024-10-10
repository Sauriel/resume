<div id="app">
  <Sidebar />
  <nav>Navbar</nav>
  <main>
    <slot />
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
    background-color: var(--color-dark);
    border-radius: 0.5rem;
  }

  main {
    grid-area: content;
    background-color: var(--color-dark);
    border-radius: 0.5rem;
    padding: 1rem;
  }
</style>

<script lang="ts">
  import '../styles/base.css';
  import '@fontsource-variable/open-sans';
  import Sidebar from '$lib/components/Sidebar.svelte';
</script>
