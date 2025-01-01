<template>
  <li>
    <NuxtLink :to="item._path">
      {{ item.title }}
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import type { NavItem } from '@nuxt/content';

type Props = {
  item: NavItem;
};

defineProps<Props>();
</script>

<style scoped>
a {
  color: var(--color-light);
  text-decoration: none;
}

a:hover {
  color: var(--color-light--darker);
}

a.router-link-exact-active {
  color: var(--color-primary);
}

a.router-link-exact-active:hover {
  color: var(--color-primary--darker);
}
</style>
