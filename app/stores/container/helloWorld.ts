import type { Snippet } from '~/types';

const helloWorldSnippet: Snippet = {
  label: 'Empty',
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
    <h1>Hello World!</h1>
  </body>
</html>`,
  css: `h1 {
  color: white;
}`,
  script: 'console.log("Hello World!");',
};

export default helloWorldSnippet;
