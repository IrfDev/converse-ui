<script>
  import { Link } from 'svelte-routing';
  import { fly, blur } from 'svelte/transition';

  export let product;
  export let productIndex;

  $: delay = productIndex * 150;
</script>

<style>
  .card,
  img {
    border-radius: 0;
    transition: all 0.2s ease-out;
  }
  .card {
    height: 100%;
    border: none;
    transition: all 0.3s ease-in;
    clip-path: polygon(0 0, 100% 0, 100% 86%, 86% 100%, 12% 100%, 0 86%);
  }

  .card:hover {
    transition: all 0.4s ease-out;
    border: 2.5px solid #f4d316;
    background-color: #f4d316;
    filter: drop-shadow(0px 0px 15px 0px rgba(51, 51, 51, 0.377));
  }
  .card:hover img {
    border-radius: 10px;
    transition: all 0.5s ease-out;
  }
  .card .link-to {
    color: #000 !important;
  }
</style>

<div
  class="col-lg-3 col-md-4 col-6 mt-md-3 mb-md-3 align-self text-center product-col">
  <div class="card" in:fly={{ delay, y: 100 }} out:blur>
    <div class="card-img-top">
      <Link to={`/producto/${product.slug}`}>
        <img
          src={product.images[0].src}
          alt={`Gaerne Bota ${product.name}`}
          class="img-fluid" />
      </Link>
    </div>
    <div class="card-body">
      <h5 class="card-title">
        <Link
          getProps={() => {
            return { class: 'link-to' };
          }}
          to={`/producto/${product.slug}`}>
          {product.name}
        </Link>
      </h5>
      {@html product.short_description}
    </div>
  </div>
</div>
