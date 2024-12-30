<template>
  <section>
    <ClientOnly>
      <nav>
        <button
          v-for="snippet of snippets"
          :key="snippet.label"
          @click="() => loadSnippet(snippet)"
        >
          {{ snippet.label }}
        </button>
      </nav>
      <div id="editor">
        <UiAccordion icon="ion:logo-html5" title="HTML">
          <MonacoEditor :value="containerStore.snippet.html" lang="html" @change="onHtmlChange" />
        </UiAccordion>
        <UiAccordion icon="ion:logo-css3" title="CSS">
          <MonacoEditor :value="containerStore.snippet.css" lang="css" @change="onCssChange" />
        </UiAccordion>
        <UiAccordion icon="ion:logo-javascript" title="JS">
          <MonacoEditor
            :value="containerStore.snippet.script"
            lang="javascript"
            @change="onJsChange"
          />
        </UiAccordion>
      </div>
      <header>
        <button v-if="hasUpdate" @click="applyUpdate">
          reload
          <Icon name="ic:baseline-sync-problem" />
        </button>
      </header>
      <iframe ref="iframe" title="Snippet Preview" />
    </ClientOnly>
  </section>
</template>

<script setup lang="ts">
import { WebContainer } from '@webcontainer/api';
import { containerFiles, snippets } from '~/stores/container';
import type { Snippet } from '~/types';

const containerStore = useContainerStore();

let webcontainerInstance: WebContainer;

const iframe = ref<HTMLIFrameElement>();

const htmlUpdate = ref<string | null>(null);
const cssUpdate = ref<string | null>(null);
const jsUpdate = ref<string | null>(null);

const hasUpdate = computed<boolean>(
  () => !!htmlUpdate.value || !!cssUpdate.value || !!jsUpdate.value
);

onMounted(initContainer);

containerStore.$subscribe(async (_mutation, state) => {
  if (webcontainerInstance) {
    await webcontainerInstance.fs.writeFile('index.html', state.snippet.html);
    await webcontainerInstance.fs.writeFile('styles.css', state.snippet.css);
    await webcontainerInstance.fs.writeFile('script.js', state.snippet.script);
  }
});

async function initContainer() {
  console.log('booting container ...');
  webcontainerInstance = await WebContainer.boot();
  console.log('mounting files ...');
  await webcontainerInstance.mount(containerFiles);

  const exitCode = await installDependencies();
  if (exitCode !== 0) {
    throw new Error('Installation failed');
  }

  startDevServer();
}

async function loadSnippet(snippet: Snippet) {
  containerStore.snippet = snippet;
}

async function installDependencies(): Promise<number> {
  console.log('installing dependencies ...');
  const installProcess = await webcontainerInstance.spawn('npm', ['install']);

  // installProcess.output.pipeTo(
  //   new WritableStream({
  //     write(data) {
  //       console.log(data);
  //     },
  //   })
  // );
  return installProcess.exit;
}

async function startDevServer() {
  console.log('starting dev server ...');
  await webcontainerInstance.spawn('npm', ['run', 'serve-watch']);

  webcontainerInstance.on('error', (e) => console.error(e));
  webcontainerInstance.on('preview-message', (m) => console.info(m));

  webcontainerInstance.on('server-ready', (port, url) => {
    console.log(`server running on: "${url}""`);
    iframe.value!.src = url;
  });
}

function onHtmlChange(event: string) {
  htmlUpdate.value = event;
}

function onCssChange(event: string) {
  cssUpdate.value = event;
}

function onJsChange(event: string) {
  jsUpdate.value = event;
}

function applyUpdate() {
  if (htmlUpdate.value) {
    webcontainerInstance.fs.writeFile('index.html', htmlUpdate.value);
    htmlUpdate.value = null;
  }
  if (cssUpdate.value) {
    webcontainerInstance.fs.writeFile('styles.css', cssUpdate.value);
    cssUpdate.value = null;
  }
  if (jsUpdate.value) {
    webcontainerInstance.fs.writeFile('script.js', jsUpdate.value);
    jsUpdate.value = null;
  }
}
</script>

<style scoped>
section {
  display: grid;
  grid-template-areas:
    'snippets snippets'
    'editor topbar'
    'editor iframe';
  grid-template-rows: auto auto 1fr;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  gap: 1rem;
}

nav {
  grid-area: snippets;
  border-radius: 0.5rem;
  background-color: var(--color-dark--darker);
  display: flex;
  align-items: center;
}

iframe {
  grid-area: iframe;
  border: 1px solid var(--color-dark--lighter);
  border-top: none;
  width: 100%;
  height: 100%;
}

#editor {
  grid-area: editor;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
}

header {
  grid-area: topbar;
  height: 2rem;
  padding: 0.25rem 0.5rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background-color: var(--color-dark--darker);
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

button {
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-transform: uppercase;
  cursor: pointer;
}

button:hover {
  color: var(--color-primary);
}
</style>
