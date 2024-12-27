<script lang="ts">
  import accordionStore from '../stores/accordionStore';
  import Icon from '@iconify/svelte';
  import { onDestroy, tick } from 'svelte';

  export let title: string;
  export let icon: string;

  let accordion: HTMLDetailsElement;
  let contentHeight = 0;

  const unsubscribe = accordionStore.subscribe(() => {
    if (accordion) {
      contentHeight = 0;
      tick().then(() => {
        const accordionHeight = accordion.getBoundingClientRect().height;
        const accordionHeaderHeight =
          accordion.querySelector('summary')?.getBoundingClientRect().height ?? 0;
        contentHeight = accordionHeight - accordionHeaderHeight - 2; // 2px border
      });
    }
  });

  function onAccordionToggle() {
    accordionStore.update((value) => {
      return value + 1;
    });
  }

  onDestroy(unsubscribe);
</script>

<details
  bind:this={accordion}
  on:toggle={onAccordionToggle}
  style={`--content-height: ${contentHeight}px;`}
>
  <summary>
    <header>
      <Icon {icon} />
      {title}
    </header>
  </summary>
  <slot />
</details>

<style>
  details {
    flex: 0 1 auto;
    border-radius: 0.5rem;
    border: 1px solid var(--color-dark--lighter);
    overflow: hidden;
  }

  details[open] {
    flex: 1 0 auto;
  }

  summary {
    background-color: var(--color-dark--darker);
    padding: 0.25rem 0.5rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    user-select: none;
    cursor: pointer;
  }

  header {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
</style>
