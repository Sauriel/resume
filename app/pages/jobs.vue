<template>
  <UiBlock :header="$t('jobs.header')">
    <UiTimedEvents :events="jobs" />
  </UiBlock>
</template>

<script setup lang="ts">
const { jobs } = useJobs();
</script>
