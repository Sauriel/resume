<div class="quote">
  <blockquote>
    <span>»Wer aufhört,</span>
    <span>besser zu werden,</span>
    <span>hat aufgehört,</span>
    <span>gut zu sein.«</span>
  </blockquote>
  <cite>– Philip Rosenthal</cite>
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
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, 1fr);
    font-size: 4rem;
    line-height: 1;
    margin: 1rem;
  }

  blockquote > span:nth-child(1) {
    grid-row: 1;
    grid-column: 1 / 9;
  }

  blockquote > span:nth-child(2) {
    grid-row: 2;
    grid-column: 3 / 9;
  }

  blockquote > span:nth-child(3) {
    grid-row: 3;
    grid-column: 2 / 9;
  }

  blockquote > span:nth-child(4) {
    grid-row: 4;
    grid-column: 4 / 9;
  }

  cite {
    color: var(--color-light--darker);
  }
</style>
