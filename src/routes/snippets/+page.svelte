<section>
  <nav>
    {#each snippets as snippet (snippet.label)}
      <button on:click={() => loadSnippet(snippet)}>{snippet.label}</button>
    {/each}
  </nav>
  <div id="editor">
    <Accordion icon="ion:logo-html5" title="HTML">
      <MonacoEditor value={$containerStore.html} lang="html" on:change={onHtmlChange} />
    </Accordion>
    <Accordion icon="ion:logo-css3" title="CSS">
      <MonacoEditor value={$containerStore.css} lang="css" on:change={onCssChange} />
    </Accordion>
    <Accordion icon="ion:logo-javascript" title="JS">
      <MonacoEditor value={$containerStore.script} lang="javascript" on:change={onJsChange} />
    </Accordion>
  </div>
  <header>
    {#if hasUpdate}
      <button on:click={applyUpdate}>
        reload
        <Icon icon="ic:baseline-sync-problem" />
      </button>
    {/if}
  </header>
  <iframe bind:this={iframe} title="Snippet Preview"></iframe>
</section>

<style>
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

<script lang="ts">
  import { WebContainer } from '@webcontainer/api';
  import type { PageData } from './$types';
  import containerStore from '$lib/stores/containerStore';
  import { onDestroy, onMount } from 'svelte';
  import MonacoEditor from '$lib/components/MonacoEditor.svelte';
  import Accordion from '$lib/components/Accordion.svelte';
  import Icon from '@iconify/svelte';
  import { containerFiles, snippets } from '$lib/stores/container';
  import type { Snippet } from '$lib/types';
  import { get } from 'svelte/store';

  export let data: PageData;

  let iframe: HTMLIFrameElement;

  let webcontainerInstance: WebContainer;

  let htmlUpdate: string | null = null;
  let cssUpdate: string | null = null;
  let jsUpdate: string | null = null;

  $: hasUpdate = !!htmlUpdate || !!cssUpdate || !!jsUpdate;

  onMount(initContainer);

  const unsubscribe = containerStore.subscribe(async (snippet) => {
    if (webcontainerInstance) {
      await webcontainerInstance.fs.writeFile('index.html', snippet.html);
      await webcontainerInstance.fs.writeFile('styles.css', snippet.css);
      await webcontainerInstance.fs.writeFile('script.js', snippet.script);
    }
  });

  async function initContainer() {
    console.log('booting container ...');
    webcontainerInstance = await WebContainer.boot();
    console.log('mounting files ...');
    await webcontainerInstance.mount(containerFiles);

    // await loadSnippet(get(containerStore));

    const exitCode = await installDependencies();
    if (exitCode !== 0) {
      throw new Error('Installation failed');
    }

    startDevServer();
  }

  async function loadSnippet(snippet: Snippet) {
    // await webcontainerInstance.fs.writeFile('index.html', snippet.html);
    // await webcontainerInstance.fs.writeFile('styles.css', snippet.css);
    // await webcontainerInstance.fs.writeFile('script.js', snippet.script);
    containerStore.set(snippet);
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
      iframe.src = url;
    });
  }

  function onHtmlChange(event: CustomEvent<string>) {
    htmlUpdate = event.detail;
  }

  function onCssChange(event: CustomEvent<string>) {
    cssUpdate = event.detail;
  }

  function onJsChange(event: CustomEvent<string>) {
    jsUpdate = event.detail;
  }

  function applyUpdate() {
    if (htmlUpdate) {
      webcontainerInstance.fs.writeFile('index.html', htmlUpdate);
      htmlUpdate = null;
    }
    if (cssUpdate) {
      webcontainerInstance.fs.writeFile('styles.css', cssUpdate);
      cssUpdate = null;
    }
    if (jsUpdate) {
      webcontainerInstance.fs.writeFile('script.js', jsUpdate);
      jsUpdate = null;
    }
  }

  onDestroy(unsubscribe);
</script>
