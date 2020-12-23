<script context="module">
  import client from "../../sanityClient";
  export function preload({ params, query }) {
    return client
      .fetch('*[_type == "concept"]')
      .then((concepts) => {
        return { concepts };
      })
      .catch((err) => this.error(500, err));
  }
</script>

<script>
  export let concepts;

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

<h1>Alle termer</h1>

<ul>
  {#each concepts as concept}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li><a rel="prefetch" href="concept/{concept._id}">{concept.label}</a></li>
  {/each}
</ul>
