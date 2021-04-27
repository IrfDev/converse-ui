<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function clicked() {
    dispatch("clicked");
  }

  export let content;
</script>

<style>
</style>

<!-- markup (zero or more items) goes here -->
<button on:click={clicked} class="main-button">
  {content}
</button>
