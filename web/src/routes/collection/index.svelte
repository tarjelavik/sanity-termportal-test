<script context="module">
  import client from "../../sanityClient";
  export function preload({ params, query }) {
    return client
      .fetch('*[_type == "collection"]')
      .then((collections) => {
        return { collections };
      })
      .catch((err) => this.error(500, err));
  }
</script>

<script>
  export let collections;

  function formatDate(date) {
    return new Date(date).toLocaleDateString();
  }
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Termer</title>
</svelte:head>

<h1>Alle termsamlinger</h1>

<ul>
  {#each collections as collection}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a
        rel="prefetch"
        href="collection/{collection._id}">{collection.label.nob}</a>
    </li>
  {/each}
</ul>
