{#if $blogStore.length > 0}
  <section id="blog" use:childMousePosition>
    {#each $blogStore as post (post.id)}
      <BlogPost
        title={post.title.rendered}
        image={post.featured_image_urls_v2.full[0]}
        date={post.date}
        excerpt={post.excerpt.rendered}
        slug={post.slug}
      />
    {/each}
  </section>
{:else}
  <section id="blog" class="loading">
    <Loading />
  </section>
{/if}

<style>
  #blog {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: 100%;
  }

  .loading {
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: 700;
  }

  #blog:hover :global(> article) {
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      var(--color-dark--lighter),
      var(--color-dark) 40%
    );
    border-image-source: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      var(--color-light--darker),
      var(--color-dark--lighter) 40%
    );
  }
</style>

<script lang="ts">
  import blogStore from '$lib/stores/blogStore';
  import BlogPost from '$lib/components/BlogPost.svelte';
  import { childMousePosition } from '$lib/actions/childMousePosition';
  import Loading from '$lib/components/Loading.svelte';
</script>
