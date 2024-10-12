<label use:tooltip={{ text: skill.tooltip, position: 'right' }} for={`skill-${skill.id}`}>
  {skill.name}
</label>
<div class="experience">
  <div title="1 Jahr" class:filled={skill.experience >= 1}></div>
  <div title="2 Jahre" class:filled={skill.experience >= 2}></div>
  <div title="3+ Jahre" class:filled={skill.experience >= 3}></div>
  <div title="5+ Jahre" class:filled={skill.experience >= 5}></div>
  <div title="10+ Jahre" class:filled={skill.experience >= 10}></div>
  <meter class="sr-only" id={`skill-${skill.id}`} value={skill.experience} min="0" max="10"></meter>
</div>

<style>
  label {
    text-align: right;
  }

  .experience {
    height: 1em;
    display: flex;
    justify-content: space-between;
    gap: 0.25em;
  }

  .experience > div {
    flex: 1 0 auto;
    display: inline-block;
    height: 1em;
    border: 2px solid var(--color-light);
  }

  .experience > div.filled {
    background-color: var(--color-light);
  }
</style>

<script lang="ts">
  import { tooltip } from '$lib/actions/tooltip';
  import type { Skill } from '$lib/types';

  export let skill: Skill;
</script>
