<template>
  <details
    ref="accordion"
    :style="`--content-height: ${contentHeight}px;`"
    @toggle="onAccordionToggle"
  >
    <summary>
      <header>
        <Icon :name="icon" />
        {{ title }}
      </header>
    </summary>
    <slot />
  </details>
</template>

<script setup lang="ts">
type Props = {
  title: string;
  icon: string;
};

defineProps<Props>();

const accordionStore = useAccordionStore();

const accordion = ref<HTMLDetailsElement>();
const contentHeight = ref<number>(0);

accordionStore.$subscribe(() => {
  contentHeight.value = 0;
  nextTick(() => {
    const accordionHeight = accordion.value!.getBoundingClientRect().height;
    const accordionHeaderHeight = accordion
      .value!.querySelector('summary')!
      .getBoundingClientRect().height;
    contentHeight.value = accordionHeight - accordionHeaderHeight - 2; // 2px border
  });
});

function onAccordionToggle() {
  accordionStore.count++; // should be an event and an exposed function
}
</script>

<style scoped>
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
