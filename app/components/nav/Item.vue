<template>
  <li>
    <NuxtLink :to="path" :class="{ active: isActive }">
      <slot />
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import type { ValidPath } from '~/types';

type Props = {
  path: ValidPath;
};

const { path } = defineProps<Props>();

const route = useRoute();

const isActive = computed<boolean>(() => path === route.path);
</script>

<style scoped>
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
