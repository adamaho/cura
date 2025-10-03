<script>
  let { children } = $props();
</script>

<button data-component="button" data-size="lg" data-radius="full">
  {@render children?.()}
</button>

<style>
  [data-component="button"] {
    background: red;
    color: white;
  }
</style>
