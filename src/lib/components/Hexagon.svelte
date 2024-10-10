<div class={`hexagon ${className}`} style="--hex-size: {size};">
  <slot />
</div>

<style>
  .hexagon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-light--darker);
    width: var(--hex-size);
    height: var(--hex-size);
    clip-path: polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%);
  }
</style>

<script lang="ts">
  export let size = '100px';
  let className = '';
  export { className as class };
</script>
