<template>
  <ul>
    <BlogNavigationItem v-for="post of posts" :key="post._path" :item="post" />
  </ul>
</template>

<script setup lang="ts">
import type { NavItem } from '@nuxt/content';

type Props = {
  content: string;
  items: NavItem[];
};

const props = defineProps<Props>();

const { locale } = useI18n();

const posts = computed<NavItem[]>(
  () =>
    props.items
      .find((i) => i.title.toLowerCase() === props.content)
      ?.children?.find((i) => i.title.toLowerCase() === locale.value)?.children ?? []
);
</script>

<style scoped>
/* ToDo: Add style content */
</style>
