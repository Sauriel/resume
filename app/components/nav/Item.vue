<template>
  <li>
    <NuxtLink :to="to">
      <slot />
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import type { NavEntry } from '~/types';

type Props = {
  item: NavEntry;
};

const props = defineProps<Props>();

const localePath = useLocalePath();

const to = computed(() => props.item.path ?? localePath(props.item.page));
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

li > a.router-link-active {
  color: var(--color-primary);
}
</style>
