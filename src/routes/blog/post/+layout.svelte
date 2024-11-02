<section id="blog-post">
  <article>
    <slot />
  </article>
  <aside>
    <ul>
      {#each $blogStore as post (post.id)}
        <li>
          <a href={`/blog/post?slug=${post.slug}`}>{@html post.title.rendered}</a>
        </li>
      {/each}
    </ul>
  </aside>
</section>

<style>
  #blog-post {
    display: grid;
    grid-template-areas: 'content sidebar';
    grid-template-columns: 1fr 250px;
    gap: 1rem;
    min-height: 100%;
  }

  ul {
    position: sticky;
    top: 0;
    list-style: square;
    margin: 0;
    padding: 0;
    padding-left: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  a {
    color: var(--color-light);
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }

  a:hover {
    color: var(--color-primary);
  }
</style>

<script lang="ts">
  import type { LayoutData } from './$types';
  import blogStore from '$lib/stores/blogStore';

  export let data: LayoutData;
</script>
