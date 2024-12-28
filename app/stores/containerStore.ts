import { defineStore } from 'pinia';
import { skeletonSnippet } from './container';
import type { Snippet } from '~/types';

export const useContainerStore = defineStore('container', () => {
  const snippet = ref<Snippet>(skeletonSnippet);

  return { snippet };
});
