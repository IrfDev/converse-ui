<script>
  import ProductCard from 'Molecules/Home/ProductCard';

  export let isCategory;
  export let products;
</script>

<style>
  /* your styles go here */
</style>

<div
  class="row pl-md-5 pr-md-5 pr-2 pl-2 pt-0 pb-5 m-0 justify-content-around align-items-stretch">
  {#if isCategory}
    <div class="col-12 text-center">
      <h2>Nueva temporada</h2>
    </div>
  {/if}
  {#each products as product, productIndex (productIndex)}
    <ProductCard {product} {productIndex} />
  {/each}
</div>
