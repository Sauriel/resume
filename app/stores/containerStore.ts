import { defineStore } from 'pinia';
import type { Snippet } from '~/types';
import helloWorldSnippet from '~/stores/container/helloWorld';

export const useContainerStore = defineStore('container', () => {
  const snippet = ref<Snippet>(helloWorldSnippet);

  return { snippet };
});
