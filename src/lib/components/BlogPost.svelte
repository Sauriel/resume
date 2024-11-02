<article>
  <a href={`/blog/post?slug=${slug}`}>
    {#if image}
      <img src={image} alt={slug} />
    {/if}
    <header>
      <span>{createdAt}:</span>
      {@html title}
    </header>
    <div class="excerpt">
      {@html excerpt}
    </div>
  </a>
</article>

<style>
  article {
    background-color: var(--color-dark);
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      var(--color-dark),
      var(--color-dark) 40%
    );
    border: 1px solid var(--color-dark--lighter);
    border-image-slice: 1;
  }

  a {
    --gap: 1rem;
    display: grid;
    grid-template-areas:
      'image header'
      'image excerpt';
    grid-template-rows: auto 1fr;
    grid-template-columns: 20vw 1fr;
    column-gap: var(--gap);
    row-gap: calc(var(--gap) / 2);
    color: var(--color-light);
    text-decoration: none;
  }

  img {
    grid-area: image;
    width: 100%;
  }

  header {
    grid-area: header;
    font-size: 1.5em;
    font-weight: 700;
    padding-top: calc(var(--gap) / 2);
    padding-right: var(--gap);
  }

  header > span {
    font-weight: 300;
    color: var(--color-light--darker);
  }

  .excerpt {
    grid-area: excerpt;
    color: var(--color-light--darker);
    padding-bottom: var(--gap);
    padding-right: var(--gap);
    text-align: justify;
  }
</style>

<script lang="ts">
  export let title: string;
  export let image: string | undefined;
  export let excerpt: string;
  export let slug: string;
  export let date: string;

  $: createdAt = new Date(date).toLocaleDateString();
</script>
