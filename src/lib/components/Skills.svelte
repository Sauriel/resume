<section id="skills">
  <header>Tech Skills</header>
  <div class="skill-list">
    {#each sortedSkills as skill (skill.id)}
      <Skill {skill} />
    {/each}
  </div>
  <footer>
    <span>1 Jahr</span>
    <span>2 Jahre</span>
    <span>3+ Jahre</span>
    <span>5+ Jahre</span>
    <span>10+ Jahre</span>
  </footer>
</section>

<style>
  #skills {
    --exp-width: 10em;
  }
  .skill-list {
    display: grid;
    grid-template-areas: 'skill experience';
    grid-template-columns: auto var(--exp-width);
    column-gap: 1em;
    row-gap: 0.5em;
    max-height: 360px;
    overflow-x: auto;
  }

  header {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    border-bottom: 2px solid var(--color-light);
    margin: 0.5em;
  }

  footer {
    width: var(--exp-width);
    margin-top: 0.5em;
    margin-left: auto;
    margin-right: calc(0.5em + (2 * var(--scrollbar-width)));
    display: flex;
    justify-content: space-between;
  }

  footer > span {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    text-align: end;
    rotate: 200deg;
    translate: -1em;
  }
</style>

<script lang="ts">
  import Skill from '$lib/components/Skill.svelte';
  import { skills } from '$lib/data/skills';
  import { type Skill as SkillType } from '$lib/types';

  $: sortedSkills = skills.toSorted(sortSkills);

  function sortSkills(a: SkillType, b: SkillType): number {
    return a.name.localeCompare(b.name);
  }
</script>
