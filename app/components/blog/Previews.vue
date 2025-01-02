<template>
  <div id="blog-postings">
    <BlogPreviewItem v-for="post of posts" :key="post._path" :item="post" />
  </div>
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
#blog-postings {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: var(--block-content-height);
  overflow-y: auto;
}
</style>
