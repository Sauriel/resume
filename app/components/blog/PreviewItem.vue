<template>
  <article>
    <NuxtLink :to="item._path">
      <header>
        <h2>{{ item.title }}</h2>
        <time :datetime="publishedDate.toISOString()">
          {{ publishedDateFormatted }}
        </time>
      </header>
      <p>{{ item.description }}</p>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
import type { NavItem } from '@nuxt/content';

type Props = {
  item: NavItem;
};

const props = defineProps<Props>();

const { locale } = useI18n();

const publishedDate = computed<Date>(
  () => new Date(Date.parse(`${props.item.date}T00:00:00.000Z`))
);

const publishedDateFormatted = computed<string>(() =>
  publishedDate.value.toLocaleString(locale.value, { month: 'long', year: 'numeric' })
);
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
  border-bottom: 2px solid var(--color-primary);
}

a {
  color: var(--color-light);
  text-decoration: none;
}

a:hover {
  opacity: 0.8;
}

time {
  white-space: nowrap;
  font-size: 0.8rem;
  color: var(--color-light--darker);
}

p {
  color: var(--color-light--darker);
}
</style>
