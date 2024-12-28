<template>
  <section id="skills">
    <header>Tech Skills</header>
    <div class="skill-list">
      <SidebarSkill v-for="skill of sortedSkills" :key="skill.id" :skill="skill" />
    </div>
    <footer>
      <span>1 Jahr</span>
      <span>2 Jahre</span>
      <span>3+ Jahre</span>
      <span>5+ Jahre</span>
      <span>10+ Jahre</span>
    </footer>
  </section>
</template>

<script setup lang="ts">
import { skills } from '~/data/skills';
import type { Skill } from '~/types';

function sortSkills(a: Skill, b: Skill): number {
  return a.name.localeCompare(b.name);
}

const sortedSkills = computed<Skill[]>(() => skills.toSorted(sortSkills));
</script>

<style scoped>
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
