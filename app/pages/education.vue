<template>
  <UiBlock :header="$t('education.header')">
    <UiTimedEvents :events="education" />
  </UiBlock>
</template>

<script setup lang="ts">
const { education } = useEducation();
</script>
