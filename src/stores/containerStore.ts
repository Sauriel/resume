import { writable } from 'svelte/store';
import { skeletonSnippet } from './container';
import type { Snippet } from '../types/types';

const containerStore = writable<Snippet>(skeletonSnippet);

export default containerStore;
