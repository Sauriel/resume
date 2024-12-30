<template>
  <UiBlock header="Ausbildung">
    <UiTimedEvents :events="education" />
  </UiBlock>
</template>

<script setup lang="ts">
import { education } from '~/data/education';
</script>
