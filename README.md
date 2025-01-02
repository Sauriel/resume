# Personal Resume and Portfolio Website

Welcome to the repository for my personal resume and portfolio website! This website showcases my work, blog posts, and features a code editor and preview tool similar to CodePen.

The site is live at [sauriel.net](https://sauriel.net).

---

## Features

- **Personal Portfolio**: Highlights my professional experience, projects, and skills.
- **Blog**: Powered by [Obsidian.md](https://obsidian.md) for writing and organizing blog posts.
- **Interactive Code Editor**: A feature similar to CodePen, built with [WebContainers](https://webcontainers.io) and the [Monaco Editor](https://microsoft.github.io/monaco-editor/). Users can edit code snippets and see a live preview.
- **Multiple Framework Implementations**:
  - **Nuxt.js**: The default branch uses [Nuxt.js](https://nuxt.com) for the site’s main structure.
  - **Astro.js**: An experimental version built with [Astro](https://astro.build) is available on the `astro-version` branch.
  - **Svelte**: Another experimental version built with [Svelte](https://svelte.dev) is available on the `svelte-version` branch.

---

## Tech Stack

- **Frameworks**: Nuxt.js (main), Astro.js, Svelte
- **Code Editor**: Monaco Editor integrated with WebContainers
- **Package Manager**: [Bun](https://bun.sh)
- **Blog Tooling**: Obsidian.md

---

## Installation and Development

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Sauriel/resume.git
   cd resume
   ```

2. Install dependencies using Bun:

   ```bash
   bun install
   ```

3. Start the development server:

   ```bash
   bun run dev
   ```

4. Visit `http://localhost:3000` in your browser to view the site.

---

## Branches

- **main**: Default branch using Nuxt.js.
- **astro-version**: Implementation using Astro.js.
- **svelte-version**: Implementation using Svelte.

You can switch to these branches using:

```bash
git checkout branch-name
```
