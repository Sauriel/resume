import { writable } from 'svelte/store';
import type { Snippet } from '$lib/types';
import { skeletonSnippet } from './container';

const containerStore = writable<Snippet>(skeletonSnippet);

export default containerStore;
