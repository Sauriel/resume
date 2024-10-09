<aside>
  <Name />
  <Skills />
</aside>

<style>
  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20rem;
    height: calc(100dvh - 7rem);
    margin-top: 7rem;
    background-color: var(--color-primary);
    background-image: radial-gradient(
      ellipse at left,
      var(--color-primary--lighter),
      var(--color-primary)
    );
  }
</style>

<script>
  import Skills from '$lib/components/Skills.svelte';
  import Name from '$lib/components/Name.svelte';
</script>
