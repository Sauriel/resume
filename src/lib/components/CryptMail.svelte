<!-- svelte-ignore a11y-missing-content -->
<!-- svelte-ignore a11y-invalid-attribute -->
<a
  href="#"
  class={`cryptmail ${clazz}`}
  data-name={name}
  data-domain={domain}
  data-tld={tld}
  on:click|preventDefault={openMailClient}
>
  <slot />
</a>

<style>
  .cryptmail::after {
    content: attr(data-name) '@' attr(data-domain) '.' attr(data-tld);
  }
</style>

<script lang="ts">
  export let name: string;
  export let domain: string;
  export let tld: string;
  let clazz: string = '';
  export { clazz as class };

  function openMailClient(event: MouseEvent) {
    const data = (event.target as HTMLAnchorElement).dataset;
    window.location.href = `mailto:${data.name}@${data.domain}.${data.tld}`;
  }
</script>
