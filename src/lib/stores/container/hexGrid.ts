import type { Snippet } from '$lib/types';

const hexGridSnippet: Snippet = {
  label: 'HexGrid',
  html: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
    <title>Snippet</title>
  </head>
  <body>
    <div class="hex-grid">
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
    </div>
  </body>
</html>`,
  css: `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: hsl(255, 40%, 8%);
}

img {
  max-width: 100%;
}

.hex-grid {
  --grid-columns: 5;
  --grid-rows: 6;
  --aspect-ratio: calc(1 / 1.1547005);
  --mask-width: 174px;
  --grid-gap: 0.5rem;
  --hex-width: calc((var(--mask-width) - var(--grid-gap)) / 2);
  --hex-height: calc(var(--mask-width) * 0.87);
  display: grid;
  gap: var(--grid-gap);
  grid-template-columns: repeat(calc(var(--grid-columns) * 2), var(--hex-width));
  grid-template-rows: repeat(var(--grid-rows), var(--hex-height));

  & > .hex {
    background-color: #f4f1ff;
    aspect-ratio: var(--aspect-ratio);
    object-fit: cover;
    grid-column: span 2;
    clip-path: path('M 83.1384 2 Q 86.6025 0 90.0666 2 L 169.741 48 Q 173.2051 50 174 54 L 173.2051 146 Q 173.2051 150 169.741 152 L 90.0666 198 Q 86.6025 200 83.1384 198 L 3.4641 152 Q -0 150 -0 146 L -0 54 Q -0 50 3.4641 48 Z');
    transform-origin: center;
    transition: scale 500ms ease-in-out, background-color 500ms ease-in-out;

    /* a*n - b // a = (--grid-columns * 2) - 1 // b = a - (--grid-columns - 2) */
    &:nth-of-type(9n - 3) {
      grid-column: 2 / span 2;
    }

    &:hover {
      background-color: #e2e1ee;
      scale: 1.2;
      z-index: 100
    }

    &:not(:hover) {
      animation: zIndexHack 500ms;
    }
  }
}

@keyframes zIndexHack {
  0%, 100% {
    z-index: 10;
  }
}`,
  script: '',
};

export default hexGridSnippet;
