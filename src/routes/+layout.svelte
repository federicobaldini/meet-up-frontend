<script>
  import Header from "../components/UI/Header.svelte";

  export const csr = false;
  export const prerender = true;
  export const trailingSlash = 'always'
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
