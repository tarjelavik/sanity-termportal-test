<script context="module">
  import client from "../../sanityClient";
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "../../components/serializers";
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const { slug } = params;
    const filter = '*[_type == "concept" && _id == $slug][0]';
    const projection = `{
      ...,
    }`;

    const query = filter + projection;
    const concept = await client
      .fetch(query, { slug })
      .catch((err) => this.error(500, err));
    return { concept };
  }
</script>

<script>
  export let concept;
</script>

<style>
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(img) {
    display: block;
    max-width: 100%;
  }

  .content :global(figure) {
    margin: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>

<svelte:head>
  <title>{concept.label}</title>
</svelte:head>

<h1>{concept.label}</h1>

<div class="content">
  <pre>{JSON.stringify(concept, null, 2)}</pre>
</div>
