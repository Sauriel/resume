<script lang="ts">
  import * as monaco from 'monaco-editor';
  import { createEventDispatcher, onMount } from 'svelte';
  import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
  import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
  import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
  import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
  import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

  export let value: string;
  export let lang: string;

  let editor: HTMLDivElement;
  let monacoEditor: monaco.editor.IStandaloneCodeEditor;

  const dispatch = createEventDispatcher<{ change: string }>();

  $: {
    if (monacoEditor) {
      monacoEditor.setValue(value);
    }
  }

  onMount(async () => {
    self.MonacoEnvironment = {
      getWorker: function (_: any, label: string) {
        if (label === 'json') {
          return new jsonWorker();
        }
        if (label === 'css' || label === 'scss' || label === 'less') {
          return new cssWorker();
        }
        if (label === 'html' || label === 'handlebars' || label === 'razor') {
          return new htmlWorker();
        }
        if (label === 'typescript' || label === 'javascript') {
          return new tsWorker();
        }
        return new editorWorker();
      },
    };

    monacoEditor = monaco.editor.create(editor, {
      value: value,
      language: lang,
      theme: 'vs-dark',
      automaticLayout: true,
      minimap: {
        enabled: false,
      },
    });

    monacoEditor.onDidChangeModelContent(() => {
      dispatch('change', monacoEditor.getValue());
    });
  });
</script>

<div bind:this={editor}></div>

<style>
  div {
    min-height: 10vh;
    height: var(--content-height);
  }
</style>
