<template>
  <div class="hexagon" :style="`--hex-size: ${size}; --hex-color: ${color}`">
    <slot />
  </div>
</template>

<script setup lang="ts">
type Props = {
  size?: string;
  color?: string;
};

const { size = '100px', color = 'var(--color-light--darker)' } = defineProps<Props>();
</script>

<style scoped>
.hexagon {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--hex-color);
  width: var(--hex-size);
  height: var(--hex-size);
  clip-path: polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%);
}
</style>
