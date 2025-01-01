import type { FileSystemTree } from '@webcontainer/api';
import helloWorldSnippet from './helloWorld';

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
      contents: helloWorldSnippet.html,
    },
  },
  'styles.css': {
    file: {
      contents: helloWorldSnippet.css,
    },
  },
  'script.js': {
    file: {
      contents: helloWorldSnippet.script,
    },
  },
};

export { containerFiles };
