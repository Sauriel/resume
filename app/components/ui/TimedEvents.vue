<template>
  <div class="events">
    <UiTimedEvent v-for="(event, index) of events" :key="index" :event="event" />
  </div>
</template>

<script setup lang="ts">
import type { TimedEventEntry } from '~/types/types';

type Props = {
  events: TimedEventEntry[];
};

defineProps<Props>();
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  max-height: var(--block-content-height);
}
</style>
