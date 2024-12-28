<template>
  <div ref="editor" />
</template>

<script setup lang="ts">
import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

type Props = {
  value: string;
  lang: string;
};

type Emits = {
  (e: 'change', payload: string): void;
};

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const editor = ref<HTMLDivElement>();

let monacoEditor: monaco.editor.IStandaloneCodeEditor;

onUpdated(() => {
  if (monacoEditor) {
    monacoEditor.setValue(props.value);
  }
});

onMounted(() => {
  if (!monacoEditor) {
    self.MonacoEnvironment = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

    monacoEditor = monaco.editor.create(editor.value!, {
      value: props.value,
      language: props.lang,
      theme: 'vs-dark',
      automaticLayout: true,
      minimap: {
        enabled: false,
      },
    });

    monacoEditor.onDidChangeModelContent(() => {
      emit('change', monacoEditor.getValue());
    });
  }
});
</script>

<style scoped>
div {
  min-height: 10vh;
  height: var(--content-height);
}
</style>
