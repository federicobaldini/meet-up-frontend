<script>
  import Header from "../components/UI/Header.svelte";

  export let segment;
</script>

<Header />

<main>
  <slot />
</main>

<style>
  main {
    margin-top: 5rem;
  }
</style>
