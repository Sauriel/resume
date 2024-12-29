<template>
  <div>
    <nav>
      <ContentNavigation v-slot="{ navigation }">
        <BlogNavigation :items="navigation" content="blog" />
      </ContentNavigation>
    </nav>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
defineI18nRoute(false);
</script>

<style scoped>
/* ToDo: Add style content */
</style>
