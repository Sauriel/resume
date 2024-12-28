<template>
  <UiBlock header="Berufserfahrungen">
    <UiTimedEvents :events="jobs" />
  </UiBlock>
</template>

<script setup lang="ts">
import { jobs } from '~/data/jobs';
</script>
