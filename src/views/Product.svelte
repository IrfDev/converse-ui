<script>
  import { navigate } from 'svelte-routing';
  import { productsStore } from '../store/products';
  import SvelteSeo from 'svelte-seo';

  import ProductExperience from 'Organisms/Product/ProductExperience';
  import RelatedProducts from 'Organisms/Product/RelatedProducts';
  import Loader from 'Atoms/Loader';

  export let name;

  $: product = $productsStore
    ? $productsStore.find((producta) => producta.slug === name)
    : null;

  let mockProduct = {
    name: '',
    description: '',
    short_description: '',
    images: [
      {
        src: '/images/loader_product.png',
      },
    ],
  };

  $: products = $productsStore
    ? $productsStore.filter(
        (producta) =>
          producta.meta_data.find((meta) => meta.key === 'estilo_gaerne')
            .value ===
            product.meta_data.find((meta) => meta.key === 'estilo_gaerne')
              .value && producta.slug !== name
      )
    : null;
</script>

<style>
  .label {
    background-color: #000;
    padding: 0.5% 0;
    justify-self: flex-end;
  }
  .label span {
    cursor: pointer;
  }
  .label span:hover {
    text-decoration: underline;
  }
  .label h4 {
    color: white;
    font-family: Cousine;
  }
  .label span {
    transition: all 0.5s ease-in;
    font-weight: 400;
  }
  .label:hover span {
    transition: all 0.5s ease-out;
    font-weight: 700;
  }
</style>

<!-- markup (zero or more items) goes here -->

<div class="container-fluid text-center">
  <div class="row justify-content-end">
    {#if $productsStore}
      <SvelteSeo
        title={`${product.name} | Sitio Oficial Gaerne México`}
        description={`El producto ${product.name} es el calzado perfecto para los bikers aventureros en México`}
        openGraph={{ title: `${product.name} | Sitio Oficial Gaerne México`, description: `El producto ${product.name} es el calzado perfecto para los bikers aventureros en México`, type: 'website', images: [{ url: product.images[0].src }] }} />
      {#if product !== undefined}
        <div class="col-md-7 col-7 label">
          <h4>
            <span
              on:click={() => navigate(`/categoria/${product.meta_data.find((meta) => meta.key === 'estilo_gaerne').value}`)}>
              {product.meta_data.find((meta) => meta.key === 'estilo_gaerne').value}
            </span>
            /
            {product.name}
          </h4>
        </div>
        <ProductExperience {...product} />
        {#if products.length === 0}
          <RelatedProducts
            products={$productsStore.filter((product) => product.slug !== name)} />
        {:else}
          <RelatedProducts {products} />
        {/if}
      {:else}{navigate('/')}{/if}
    {:else}
      <div class="col-12 my-5 d-flex justify-content-center">
        <Loader />
      </div>
    {/if}
  </div>
</div>
