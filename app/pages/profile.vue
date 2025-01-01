<template>
  <div>
    <UiBlock :header="$t('profile.header')">
      <ContentDoc :path="path" />
    </UiBlock>
    <UiBlock :header="$t('contact.header')">
      <Contact />
    </UiBlock>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const path = computed(() => `/${locale.value}/profile`);
</script>
