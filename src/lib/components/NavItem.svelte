<li>
  <a href={path} class:active={$page.url.pathname === path}>
    <slot />
  </a>
</li>

<style>
  li > a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 1em;
    text-decoration: none;
    color: var(--color-light);
    transition: all 0.4s ease-in-out;
  }

  li > a:hover {
    background-color: var(--color-light);
    color: var(--color-dark);
  }

  li > a:active,
  li > a:focus {
    color: var(--color-primary--lighter);
  }

  li > a.active {
    color: var(--color-primary);
  }
</style>

<script lang="ts">
  import { page } from '$app/stores';

  export let path: string;
</script>
