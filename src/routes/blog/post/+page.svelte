{#if post}
  <header style={`--image-url: url(${featureImage})`}>
    <h1>{@html post.title.rendered}</h1>
  </header>
  <div id="post">
    {@html post.content.rendered}
  </div>
{:else}
  <Center>
    <Loading />
  </Center>
{/if}

<style>
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 20%, var(--color-dark)),
      var(--image-url);
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  h1 {
    font-size: 2rem;
    color: var(--color-dark);
    text-align: center;
    padding: 0 2rem;
    text-shadow: var(--color-light) 1px 0 10px;
  }

  #post :global(a) {
    color: var(--color-light--dark);
    text-decoration: underline;
    text-decoration-style: dashed;
    text-decoration-color: var(--color-light--darker);
    text-underline-offset: 0.25em;
  }
</style>

<script lang="ts">
  import { page } from '$app/stores';
  import blogStore from '$lib/stores/blogStore';
  import { onDestroy } from 'svelte';
  import type { WP_REST_API_Post } from 'wp-types';
  import Loading from '$lib/components/Loading.svelte';
  import Center from '$lib/components/Center.svelte';

  let post: WP_REST_API_Post | null = null;

  $: featureImage = post?.featured_image_urls_v2.full[0] ?? null;

  const pageUnsubscribe = page.subscribe((p) => {
    const slug = p.url.searchParams.get('slug');
    if (slug) {
      post = blogStore.findPost(slug) ?? null;
    }
  });

  const blogUnsubscribe = blogStore.subscribe((posts) => {
    const slug = $page.url.searchParams.get('slug');
    post = posts.find((p) => p.slug === slug) ?? null;
  });

  onDestroy(() => {
    pageUnsubscribe();
    blogUnsubscribe();
  });
</script>
