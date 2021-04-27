<script>
  import ProudctCard from 'Molecules/Home/ProductCard';
  import ProductCard from '../../Molecules/Home/ProductCard.svelte';
  export let products;
</script>

<style>
  /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
<div class="row m-0 justify-content align-itmes-center">
  {#each products as product, productIndex (productIndex)}
    <ProductCard {product} />
  {/each}
</div>
