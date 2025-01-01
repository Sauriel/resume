<template>
  <article>
    <div v-tooltip="{ text: length, position: 'top' }" class="timeframe">
      <time :datetime="event.from.toISOString()">
        {{ from }}
      </time>
      <span>&nbsp;–&nbsp;</span>
      <time :datetime="event.to.toISOString()">
        {{ to }}
      </time>
    </div>
    <header>
      <span class="name">{{ event.name }}</span>
      <span class="slashes">//</span>
      <span class="place">{{ event.place }}</span>
    </header>
    <div class="description">
      {{ event.description }}
    </div>
  </article>
</template>

<script setup lang="ts">
import type { TimedEventEntry } from '~/types';

type Props = {
  event: TimedEventEntry;
};

const props = defineProps<Props>();

const { locale, t } = useI18n();

const from = computed<string>(() =>
  props.event.from.toLocaleString(locale.value, { month: 'long', year: 'numeric' })
);
const to = computed<string>(() =>
  props.event.to.toLocaleString(locale.value, { month: 'long', year: 'numeric' })
);
const length = computed<string>(() => calculateLength(props.event.from, props.event.to));

function calculateLength(from: Date, to: Date): string {
  let yearDiff = to.getFullYear() - from.getFullYear();
  let monthDiff = to.getMonth() + 1 - from.getMonth();

  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }

  const timeframe: string[] = [];
  if (yearDiff > 0) {
    // @ts-expect-error Seems like a typing problem, but works
    timeframe.push(t('ui.year', yearDiff, { count: yearDiff }));
  }
  if (monthDiff > 0) {
    // @ts-expect-error Seems like a typing problem, but works
    timeframe.push(t('ui.month', monthDiff, { count: monthDiff }));
  }
  return timeframe.join(` ${t('ui.and')} `);
}
</script>

<style scoped>
article {
  display: grid;
  grid-template-areas:
    'header timeframe'
    'description description';
  grid-template-columns: 1fr auto;
  gap: 0.5rem;
}

.timeframe {
  grid-area: timeframe;
  text-align: right;
  font-weight: 700;
  font-size: 0.875em;
  position: relative;
}

.timeframe:hover::after {
  position: absolute;
  content: attr(title);
}

header {
  grid-area: header;
  font-size: 1.2em;
  display: flex;
  gap: 0.5ch;
}

header > .name {
  font-weight: 700;
  text-transform: uppercase;
}

header > .slashes {
  font-weight: 900;
  color: var(--color-primary);
}

header > .place {
  font-weight: 300;
}

.description {
  grid-area: description;
}
</style>
