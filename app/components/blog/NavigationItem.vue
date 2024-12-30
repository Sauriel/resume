<template>
  <li>
    <NuxtLink :to="item._path">{{ item.title }}</NuxtLink>
    <small>{{ item.date }}</small>
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
a,
a:active,
a:visited {
  color: white;
}

a:hover,
a:active:hover,
a:visited:hover {
  color: gray;
}

a.router-link-exact-active {
  color: red;
}

a.router-link-exact-active:hover {
  color: darkred;
}
</style>
