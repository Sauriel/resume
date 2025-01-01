<template>
  <div class="quote">
    <blockquote :style="`--rows: ${rows}; --columns: ${columns};`">
      <span v-for="quoteRow of splittedQuote" :key="quoteRow">{{ quoteRow }}</span>
    </blockquote>
    <cite>{{ author }}</cite>
  </div>
</template>

<script setup lang="ts">
const FALLBACK_NUM_OF_ROWS = 4;
type Props = {
  value: string;
  author: string;
};

const props = defineProps<Props>();

const splittedQuote = computed<string[]>(() => {
  if (props.value.includes(',')) {
    return props.value.split(/(?<=,)\s*/);
  } else {
    const words = props.value.split(/\s+/);

    const baseGroupSize = Math.floor(words.length / FALLBACK_NUM_OF_ROWS);
    let remainder = words.length % FALLBACK_NUM_OF_ROWS;

    const groups: string[] = [];
    let start = 0;

    for (let i = 0; i < FALLBACK_NUM_OF_ROWS; i++) {
      const groupSize = baseGroupSize + (remainder > 0 ? 1 : 0);
      remainder--;

      groups.push(words.slice(start, start + groupSize).join(' '));
      start += groupSize;
    }

    return groups;
  }
});
const columns = computed<number>(() => splittedQuote.value.length * 2);
const rows = computed<number>(() => splittedQuote.value.length);
</script>

<style scoped>
.quote {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

blockquote {
  position: relative;
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-template-rows: repeat(var(--rows), 1fr);
  font-size: 4rem;
  line-height: 1;
  margin: 1rem;
}

blockquote::before {
  position: absolute;
  content: '»';
  top: -0.3em;
  left: -0.6em;
  font-size: 2em;
  color: var(--color-primary);
}

blockquote::after {
  position: absolute;
  content: '«';
  bottom: -0.3em;
  right: -0.6em;
  font-size: 2em;
  color: var(--color-primary);
}

blockquote > span:nth-child(1) {
  grid-row: 1;
  grid-column: 1 / calc(var(--columns) + 1);
}

blockquote > span:nth-child(2) {
  grid-row: 2;
  grid-column: 3 / calc(var(--columns) + 1);
}

blockquote > span:nth-child(3) {
  grid-row: 3;
  grid-column: 2 / calc(var(--columns) + 1);
}

blockquote > span:nth-child(4) {
  grid-row: 4;
  grid-column: 4 / calc(var(--columns) + 1);
}

cite {
  position: relative;
  color: var(--color-light--darker);
  font-size: 1.5em;
  margin-left: 20em;
}

cite::before {
  content: '—';
  position: absolute;
  left: -2ch;
}
</style>
