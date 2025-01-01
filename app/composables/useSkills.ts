import type { Skill } from '~/types';

export default function useSkills() {
  const { t } = useI18n();

  const skills = computed<Skill[]>(() => [
    {
      id: 'html',
      name: t('sidebar.skills.skill.html.label'),
      experience: 10,
      tooltip: t('sidebar.skills.skill.html.tooltip'),
    },
    {
      id: 'css',
      name: t('sidebar.skills.skill.css.label'),
      experience: 10,
      tooltip: t('sidebar.skills.skill.css.tooltip'),
    },
    {
      id: 'sass',
      name: t('sidebar.skills.skill.sass.label'),
      experience: 10,
      tooltip: t('sidebar.skills.skill.sass.tooltip'),
    },
    {
      id: 'javascript',
      name: t('sidebar.skills.skill.js.label'),
      experience: 10,
      tooltip: t('sidebar.skills.skill.js.tooltip'),
    },
    {
      id: 'rest',
      name: t('sidebar.skills.skill.rest.label'),
      experience: 10,
    },
    {
      id: 'git',
      name: t('sidebar.skills.skill.git.label'),
      experience: 10,
      tooltip: t('sidebar.skills.skill.git.tooltip'),
    },
    {
      id: 'illustrator',
      name: t('sidebar.skills.skill.illustrator.label'),
      experience: 10,
    },
    {
      id: 'photoshop',
      name: t('sidebar.skills.skill.photoshop.label'),
      experience: 10,
    },
    {
      id: 'typescript',
      name: t('sidebar.skills.skill.ts.label'),
      experience: 5,
      tooltip: t('sidebar.skills.skill.ts.tooltip'),
    },
    {
      id: 'node',
      name: t('sidebar.skills.skill.node.label'),
      experience: 5,
      tooltip: t('sidebar.skills.skill.node.tooltip'),
    },
    {
      id: 'electron',
      name: t('sidebar.skills.skill.electron.label'),
      experience: 5,
    },
    {
      id: 'vue',
      name: t('sidebar.skills.skill.vue.label'),
      experience: 3,
      tooltip: t('sidebar.skills.skill.vue.tooltip'),
    },
    {
      id: 'graphql',
      name: t('sidebar.skills.skill.graphql.label'),
      experience: 3,
      tooltip: t('sidebar.skills.skill.graphql.tooltip'),
    },
    {
      id: 'vitest',
      name: t('sidebar.skills.skill.vitest.label'),
      experience: 3,
    },
    {
      id: 'nuxt',
      name: t('sidebar.skills.skill.nuxt.label'),
      experience: 2,
    },
    {
      id: 'vite',
      name: t('sidebar.skills.skill.vite.label'),
      experience: 2,
      tooltip: t('sidebar.skills.skill.vite.tooltip'),
    },
    {
      id: 'docker',
      name: t('sidebar.skills.skill.docker.label'),
      experience: 2,
    },
    {
      id: 'svelte',
      name: t('sidebar.skills.skill.svelte.label'),
      experience: 1,
      tooltip: t('sidebar.skills.skill.svelte.tooltip'),
    },
    {
      id: 'cypress',
      name: t('sidebar.skills.skill.cypress.label'),
      experience: 1,
    },
    {
      id: 'astro',
      name: t('sidebar.skills.skill.astro.label'),
      experience: 1,
    },
    {
      id: 'jquery',
      name: t('sidebar.skills.skill.jquery.label'),
      experience: 5,
    },
    {
      id: 'acrobat',
      name: t('sidebar.skills.skill.acrobat.label'),
      experience: 10,
    },
    {
      id: 'indesign',
      name: t('sidebar.skills.skill.indesign.label'),
      experience: 10,
    },
    {
      id: 'java',
      name: t('sidebar.skills.skill.java.label'),
      experience: 5,
      tooltip: t('sidebar.skills.skill.java.tooltip'),
    },
    {
      id: 'csharp',
      name: t('sidebar.skills.skill.csharp.label'),
      experience: 1,
    },
    {
      id: 'rust',
      name: t('sidebar.skills.skill.rust.label'),
      experience: 1,
      tooltip: t('sidebar.skills.skill.rust.tooltip'),
    },
    {
      id: 'unix',
      name: t('sidebar.skills.skill.unix.label'),
      experience: 10,
    },
    {
      id: 'wsl',
      name: t('sidebar.skills.skill.wsl.label'),
      experience: 3,
    },
    {
      id: 'sql',
      name: t('sidebar.skills.skill.sql.label'),
      experience: 5,
      tooltip: t('sidebar.skills.skill.sql.tooltip'),
    },
    {
      id: 'mongo',
      name: t('sidebar.skills.skill.mongo.label'),
      experience: 5,
    },
    {
      id: 'bootstrap',
      name: t('sidebar.skills.skill.bootstrap.label'),
      experience: 5,
    },
    {
      id: 'unity',
      name: t('sidebar.skills.skill.unity.label'),
      experience: 3,
    },
    {
      id: 'agile',
      name: t('sidebar.skills.skill.agile.label'),
      experience: 5,
      tooltip: t('sidebar.skills.skill.agile.tooltip'),
    },
    {
      id: 'angular',
      name: t('sidebar.skills.skill.angular.label'),
      experience: 2,
    },
  ]);

  return {
    skills,
  };
}
