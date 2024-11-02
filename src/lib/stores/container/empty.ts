import type { FileSystemTree } from '@webcontainer/api';

const empty: FileSystemTree = {
  'package.json': {
    file: {
      contents: `
          {
            "name": "example-app",
            "type": "module",
            "dependencies": {
              "http-server": "latest"
            },
            "scripts": {
              "start": "http-server"
            }
          }`,
    },
  },
  'index.html': {
    file: {
      contents: `<!doctype html>
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
</html>
`,
    },
  },
  'styles.css': {
    file: {
      contents: `h1 {
  color: white;
}`,
    },
  },
  'script.js': {
    file: {
      contents: `console.log('Hello World!');`,
    },
  },
};

export default empty;
