<Block header="Berufserfahrungen">
  <TimedEvents events={jobs} />
</Block>

<script lang="ts">
  import Block from '$lib/components/Block.svelte';
  import TimedEvents from '$lib/components/TimedEvents.svelte';
  import { jobs } from '$lib/data/jobs';
</script>
