<div
  class="playground cura"
  data-color-scheme="dark"
  data-scale="90%"
  data-radius="sm"
  data-accent-color="amethyst"
>
  <header class="playground-header">
    <button>hello world</button>
  </header>
  <div class="playground-content">
    <div
      data-page="home"
      class="cura"
      data-color-scheme="dark"
      data-scale="90%"
      data-radius="sm"
      data-accent-color="amethyst"
    >
      <header></header>
      <main>
        <h1>Hello World</h1>
        <p>What is going on with you today?</p>
      </main>
    </div>
  </div>
</div>

<style>
  .playground {
    background: black;
    display: flex;
    flex-direction: column;
    height: 100%;

    .playground-header {
      height: calc(54px * var(--c-scale));
    }

    .playground-content {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: var(--c-s-4);
    }
  }

  [data-page="home"] {
    background-color: var(--c-c-accent-1);
    display: flex;
    flex-direction: column;
    flex: 1;

    h1 {
      border-radius: var(--c-r-3);
      color: var(--c-c-accent-13);
      font-family: var(--c-ff-serif);
      font-size: var(--c-fs-6);
      font-weight: var(--c-fw-medium);
    }

    p {
      color: var(--c-c-accent-12);
      font-family: var(--c-ff-sans);
      font-size: var(--c-fs-3);
    }
  }
</style>
