<script>
  let name = "";
  let newsletter = false;
</script>

<style>
  /* your styles go here */
</style>

<h2>{name}</h2>
<div><small>{newsletter}</small></div>

<input bind:value={name} type="text" />
<input type="checkbox" bind:checked={newsletter} />
