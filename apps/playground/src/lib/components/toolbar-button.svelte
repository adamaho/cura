<script>
  let { children } = $props();
</script>

<button data-component="button">
  {@render children?.()}
</button>

<style>
  [data-component="button"] {
    background: red;
  }
</style>
