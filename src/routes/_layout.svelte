<script>
  import Header from "../components/UI/Header.svelte";
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
