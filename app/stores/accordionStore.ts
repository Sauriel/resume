import { defineStore } from 'pinia';

export const useAccordionStore = defineStore('accordion', () => {
  const count = ref(0);

  return { count };
});
