<Block header="Ausbildung">
  <TimedEvents events={education} />
</Block>

<script lang="ts">
  import Block from '$lib/components/Block.svelte';
  import TimedEvents from '$lib/components/TimedEvents.svelte';
  import { education } from '$lib/data/education';
</script>
