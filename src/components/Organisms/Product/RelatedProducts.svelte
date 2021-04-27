<script>
  import ProductCard from 'Molecules/Home/ProductCard';

  export let products;
</script>

<style>
  .related-products-container {
    width: 100%;
    background-color: #333;
    color: #000;
    font-family: Cousine;
  }
  .product-listing {
    background-color: #000;
    flex-flow: nowrap row;
    overflow: auto;
  }

  .title-section {
    color: white;
    background: #000;
  }
  .title-section h4 {
    margin-block-end: 0;
  }
</style>

<div class="container-fluid m-0 p-0 related-products-container">
  <div class="col-12 text-center title-section m-0 py-2">
    <h4>Productos relacionados</h4>
  </div>
  <div class="row m-0 product-listing text-center justify-content-center">
    {#each products as product, productIndex (productIndex)}
      <ProductCard {product} />
    {/each}
  </div>
</div>
