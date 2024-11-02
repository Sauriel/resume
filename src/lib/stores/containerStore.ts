import type { FileSystemTree } from '@webcontainer/api';
import { get, writable } from 'svelte/store';
import test from './container/test';

export type Snippet = 'test';

const container = writable<Record<Snippet, FileSystemTree>>({
  test: test,
});

const containerStore = {
  set: container.set,
  update: container.update,
  subscribe: container.subscribe,
  get: (snippet: Snippet) => get(container)[snippet],
};

export default containerStore;
