<section>
  <div id="editor">
    <Accordion icon="ion:logo-html5" title="HTML">
      <MonacoEditor value={snippet['index.html'].file.contents} lang="html" />
    </Accordion>
    <Accordion icon="ion:logo-css3" title="CSS">
      <MonacoEditor value={snippet['styles.css'].file.contents} lang="css" />
    </Accordion>
    <Accordion icon="ion:logo-javascript" title="JS">
      <MonacoEditor value={snippet['script.js'].file.contents} lang="javascript" />
    </Accordion>
  </div>
  <iframe bind:this={iframe} title="Snippet Preview"></iframe>
</section>

<style>
  section {
    display: flex;
    height: 100%;
    gap: 0.5rem;
  }

  #editor,
  iframe {
    width: 50%;
    height: 100%;
  }

  iframe {
    border: none;
  }

  #editor {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    overflow-y: auto;
  }
</style>

<script lang="ts">
  import { WebContainer } from '@webcontainer/api';
  import type { PageData } from './$types';
  import containerStore from '$lib/stores/containerStore';
  import { onMount } from 'svelte';
  import MonacoEditor from '$lib/components/MonacoEditor.svelte';
  import Accordion from '$lib/components/Accordion.svelte';

  export let data: PageData;

  let iframe: HTMLIFrameElement;

  let webcontainerInstance: WebContainer;

  let snippet = containerStore.get('empty');

  onMount(initContainer);

  async function initContainer() {
    console.log('booting container ...');
    webcontainerInstance = await WebContainer.boot();
    console.log('mounting files ...');
    await webcontainerInstance.mount(snippet);

    const exitCode = await installDependencies();
    if (exitCode !== 0) {
      throw new Error('Installation failed');
    }

    startDevServer();
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
    await webcontainerInstance.spawn('npm', ['run', 'start']);

    webcontainerInstance.on('error', (e) => console.error(e));
    webcontainerInstance.on('preview-message', (m) => console.info(m));

    webcontainerInstance.on('server-ready', (port, url) => {
      console.log(`server running on: "${url}""`);
      iframe.src = url;
    });
  }
</script>
