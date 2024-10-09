<section id="skills">
  <header>Tech Skills</header>
  {#each skills as skill (skill.id)}
    <Skill {skill} />
  {/each}
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
    display: grid;
    grid-template-areas: 'skill experience';
    column-gap: 1em;
    row-gap: 0.5em;
  }

  header {
    grid-column: 1 / span 2;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    border-bottom: 2px solid var(--color-light);
    margin: 0.5em;
  }

  footer {
    grid-column-start: 2;
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

<script>
  import Skill from '$lib/components/Skill.svelte';
  import { skills } from '$lib/data/skills';
</script>
