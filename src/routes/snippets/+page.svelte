<section>
  <div id="editor">hello world</div>
  <iframe bind:this={iframe} src="/loading"></iframe>
</section>

<style>
  section {
    display: flex;
    min-height: 100%;
  }

  #editor,
  iframe {
    width: 50%;
    min-height: 100%;
  }

  iframe {
    border: none;
  }
</style>

<script lang="ts">
  import { WebContainer } from '@webcontainer/api';
  import type { PageData } from './$types';
  import containerStore from '$lib/stores/containerStore';
  import { onMount } from 'svelte';

  export let data: PageData;

  let iframe: HTMLIFrameElement;

  let webcontainerInstance: WebContainer;

  onMount(initContainer);

  async function initContainer() {
    console.log('booting container ...');
    webcontainerInstance = await WebContainer.boot();
    console.log('mounting files ...');
    await webcontainerInstance.mount(containerStore.get('test'));

    const exitCode = await installDependencies();
    if (exitCode !== 0) {
      throw new Error('Installation failed');
    }

    startDevServer();
  }

  async function installDependencies(): Promise<number> {
    console.log('installing dependencies ...');
    const installProcess = await webcontainerInstance.spawn('npm', ['install']);

    installProcess.output.pipeTo(
      new WritableStream({
        write(data) {
          console.log(data);
        },
      })
    );
    return installProcess.exit;
  }

  async function startDevServer() {
    console.log('starting dev server ...');
    await webcontainerInstance.spawn('npm', ['run', 'dev']);

    webcontainerInstance.on('error', (e) => console.error(e));
    webcontainerInstance.on('preview-message', (m) => console.info(m));

    webcontainerInstance.on('server-ready', (port, url) => {
      console.log(`server running on: "${url}""`);
      iframe.src = url;
    });
  }
</script>
