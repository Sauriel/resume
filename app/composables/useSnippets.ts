import helloWorldSnippet from '~/stores/container/helloWorld';
import hexGridSnippet from '~/stores/container/hexGrid';
import type { Snippet } from '~/types/index';

export default function useSnippets() {
  const snippets = ref<Snippet[]>([helloWorldSnippet, hexGridSnippet]);

  return {
    snippets,
  };
}
