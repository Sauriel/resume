import type { FileSystemTree } from '@webcontainer/api';
import { get, writable } from 'svelte/store';
import test from './container/test';
import empty from './container/empty';

export type Snippet = 'test' | 'empty';

const container = writable<Record<Snippet, FileSystemTree>>({
  test: test,
  empty: empty,
});

const containerStore = {
  set: container.set,
  update: container.update,
  subscribe: container.subscribe,
  get: (snippet: Snippet) => get(container)[snippet],
};

export default containerStore;
