<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  width="70px"
  height="70px"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <defs>
    <clipPath id="cut-off">
      <rect x="0" y="0" width="35" height="35" />
      <rect x="35" y="35" width="35" height="35" />
    </clipPath>
  </defs>
  <g transform="translate(35, 35)">
    <circle class="center" cx="0" cy="0" r="17" />
    <circle class="spin-slow" cx="0" cy="0" r="20" clip-path="url(#cut-off)" />
    <circle class="spin-normal" cx="0" cy="0" r="25" clip-path="url(#cut-off)" />
    <circle class="spin-fast" cx="0" cy="0" r="30" clip-path="url(#cut-off)" />
  </g>
</svg>

<style>
  svg circle {
    stroke-width: 4;
  }

  .center {
    fill: var(--color-primary);
  }

  .spin-slow {
    stroke: var(--color-light--darker);
    fill: transparent;
    animation: spin 4s linear infinite;
  }

  .spin-normal {
    stroke: var(--color-light);
    fill: transparent;
    animation: spin 3s linear infinite;
  }

  .spin-fast {
    stroke: var(--color-light--lighter);
    fill: transparent;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
