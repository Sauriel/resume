<section>
  <header>
    <h1>{header}</h1>
  </header>
  <div class="hexline">
    <Hexagon size="2rem" color="white">
      <Hexagon size="calc(2rem - 6px)" color="black">
        <Hexagon size="0.75rem" color="red" />
      </Hexagon>
    </Hexagon>
    <div class="line"></div>
  </div>
  <div class="content">
    <slot />
  </div>
</section>

<style>
  section {
    --block-header-height: 3rem;
    --block-grid-gap: 1rem;
    display: grid;
    grid-template-areas:
      'hexline header'
      'hexline content';
    grid-template-columns: var(--block-header-height) 1fr;
    gap: var(--block-grid-gap);
  }

  header {
    grid-area: header;
  }

  h1 {
    font-size: 2em;
    text-transform: uppercase;
  }

  .hexline {
    grid-area: hexline;
    padding-top: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hexline > :global(.hexagon) {
    z-index: 2;
  }

  .line {
    position: relative;
    width: 2px;
    height: 100%;
    background-color: var(--color-light);
  }

  .line::before {
    content: '';
    display: block;
    position: absolute;
    top: -1rem;
    width: 2px;
    height: 2rem;
    background-color: var(--color-light);
  }

  .content {
    grid-area: content;
    padding-bottom: var(--block-grid-gap);
    --block-content-height: calc(
      var(--main-content-height) - (var(--block-header-height) + (2 * var(--block-grid-gap)))
    );
  }
</style>

<script lang="ts">
  import Hexagon from '$lib/components/Hexagon.svelte';

  export let header: string;
</script>
