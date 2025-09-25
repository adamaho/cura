<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import "cura-css";
  import "cura-css/color";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Cura • Playground</title>
</svelte:head>

{@render children?.()}

<style>
  :global(html, body) {
    height: 100vh;
    min-height: 100vh;
  }

  :global(body) {
    font-family: var(--c-fs-sans);
  }
</style>
