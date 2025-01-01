<template>
  <div>
    <UiBlock v-if="isBlogIndex" :header="$t('blog.header')">
      <ContentNavigation v-slot="{ navigation }">
        <BlogPreviews :items="navigation" content="blog" />
      </ContentNavigation>
    </UiBlock>
    <section v-else id="blog-post">
      <NuxtPage />
      <nav>
        <ContentNavigation v-slot="{ navigation }">
          <BlogNavigation :items="navigation" content="blog" />
        </ContentNavigation>
      </nav>
    </section>
  </div>
</template>

<script setup lang="ts">
defineI18nRoute(false);

const route = useRoute();
const { locale } = useI18n();

const isBlogIndex = computed<boolean>(() => route.fullPath === '/blog');

watch(locale, (newValue, oldValue) => {
  const newPath = route.fullPath.replace(`/${oldValue}/`, `/${newValue}/`);
  navigateTo(newPath);
});
</script>

<style scoped>
#blog-post {
  display: grid;
  grid-template-areas: 'post nav';
  grid-template-columns: 1fr 15vw;
  height: var(--main-content-height);
}

#blog-post > * {
  height: 100%;
  overflow-y: auto;
}

#blog-post > nav {
  grid-area: nav;
}
</style>
