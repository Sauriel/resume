<aside>
  <Hexagon size="16rem" class="hex-header">
    <SaurielLogo />
  </Hexagon>
  <div id="content">
    <Name />
    <Skills />
  </div>
</aside>

<style>
  aside {
    position: relative;
    width: 20rem;
    height: calc(100dvh - 10rem);
    margin-top: 10rem;
    padding-top: 8rem;
    background-color: var(--color-primary);
    background-image: radial-gradient(
      ellipse at left,
      var(--color-primary--lighter),
      var(--color-primary)
    );
  }

  aside > :global(.hex-header) {
    position: absolute;
    top: -8rem;
    left: 50%;
    translate: -50%;
    padding: 3rem;
    background-color: var(--color-dark);
  }

  #content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 5vh;
  }
</style>

<script>
  import Skills from '$lib/components/Skills.svelte';
  import Name from '$lib/components/Name.svelte';
  import Hexagon from '$lib/components/Hexagon.svelte';
  import SaurielLogo from '$lib/components/SaurielLogo.svelte';
</script>
