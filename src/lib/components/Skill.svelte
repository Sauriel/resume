<label for={`skill-${skill.id}`}>{skill.name}</label>
<div class="experience">
  <div title="1 year" class:filled={skill.experience >= 1}></div>
  <div title="2 years" class:filled={skill.experience >= 2}></div>
  <div title="3+ years" class:filled={skill.experience >= 3}></div>
  <div title="5+ years" class:filled={skill.experience >= 5}></div>
  <div title="10+ years" class:filled={skill.experience >= 10}></div>
  <meter class="sr-only" id={`skill-${skill.id}`} value={skill.experience} min="0" max="10"></meter>
</div>

<style>
  label {
    text-align: right;
  }

  .experience {
    --local-data-width: 1.75em;
    height: 1em;
    width: calc(6 * var(--local-data-width));
    display: flex;
    justify-content: space-between;
  }

  .experience > div {
    flex: 0 0 auto;
    display: inline-block;
    height: 1em;
    width: var(--local-data-width);
    border: 2px solid var(--color-light);
  }

  .experience > div.filled {
    background-color: var(--color-light);
  }
</style>

<script lang="ts">
  import type { Skill } from '$lib/data/skills';

  export let skill: Skill;
</script>
