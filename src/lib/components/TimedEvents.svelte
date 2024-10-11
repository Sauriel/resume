<div class="events">
  {#each events as event, index (index)}
    <TimedEvent {event} />
  {/each}
</div>

<style>
  .events {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>

<script lang="ts">
  import type { TimedEventEntry } from '$lib/types';
  import TimedEvent from '$lib/components/TimedEvent.svelte';

  export let events: TimedEventEntry[];
</script>
