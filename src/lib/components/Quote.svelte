<div class="quote">
  <blockquote style="--rows: {rows}; --columns: {columns};">
    {#each splittedQuote as quoteRow, index (index)}
      <span>{quoteRow}</span>
    {/each}
  </blockquote>
  <cite>{author}</cite>
</div>

<style>
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

<script lang="ts">
  export let value: string;
  export let author: string;

  $: splittedQuote = value.split(/(?<=,)\s*/);
  $: columns = splittedQuote.length * 2;
  $: rows = splittedQuote.length;
</script>
