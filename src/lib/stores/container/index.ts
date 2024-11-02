import type { Snippet } from '$lib/types';
import type { FileSystemTree } from '@webcontainer/api';
import hexGridSnippet from './hexGrid';

const skeletonSnippet: Snippet = {
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

const containerFiles: FileSystemTree = {
  'package.json': {
    file: {
      contents: `
          {
            "name": "serve-snippets",
            "type": "module",
            "dependencies": {
              "nodemon": "latest",
              "http-server": "latest"
            },
            "scripts": {
              "serve": "http-server",
              "serve-watch": "nodemon --watch index.html --watch script.js --watch styles.css --exec 'npm run serve'"
            }
          }`,
    },
  },
  'index.html': {
    file: {
      contents: skeletonSnippet.html,
    },
  },
  'styles.css': {
    file: {
      contents: skeletonSnippet.css,
    },
  },
  'script.js': {
    file: {
      contents: skeletonSnippet.script,
    },
  },
};

const snippets: Snippet[] = [skeletonSnippet, hexGridSnippet];

export { containerFiles, skeletonSnippet, snippets };
