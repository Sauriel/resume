<template>
  <ul>
    <BlogNavigationItem v-for="post of posts" :key="post._path" :item="post" />
  </ul>
</template>

<script setup lang="ts">
import type { NavItem } from '@nuxt/content';

type Props = {
  content: string;
  items: NavItem[] | undefined;
};

const props = defineProps<Props>();

const { locale } = useI18n();

const posts = computed<NavItem[]>(
  () =>
    props.items
      ?.find((i) => i.title.toLowerCase() === props.content)
      ?.children?.find((i) => i.title.toLowerCase() === locale.value)
      ?.children?.filter((p) => p.draft !== 'true')
      .toReversed() ?? []
);
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
</style>
