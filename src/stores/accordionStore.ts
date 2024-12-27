import { writable } from 'svelte/store';

const accordionStore = writable<number>(0);

export default accordionStore;
