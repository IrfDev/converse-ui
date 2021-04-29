<script>
  import { productsStore } from '../store/products';
  import { navigate } from 'svelte-routing';
  import SvelteSeo from 'svelte-seo';

  import HeroHeader from 'Organisms/Category/HeroHeader';
  import ProductListing from 'Organisms/Home/ProductListing';
  import Loader from 'Atoms/Loader';

  export let name;

  $: products = $productsStore
    ? $productsStore.filter(
        (product) =>
          product.meta_data.find((meta) => meta.key === 'estilo_gaerne')
            .value === name
      )
    : null;
</script>

<div class="container-fluid text-center p-0">
  <HeroHeader {name} />
  {#if $productsStore}
    <SvelteSeo
      title={`${name} | Sitio Oficial Gaerne México`}
      description={`Los productos ${name} son los productos perfectos para los aventureros`}
      openGraph={{
        title: `${name} | Sitio Oficial Gaerne México`,
        description: `Los productos ${name} son los productos perfectos para los bikers aventureros`,
        type: 'website',
        images: [{ url: 'https://demo.gaerne.mx/images/gaerne-showcase.jpg' }],
      }}
    />
    {#if products !== []}
      <ProductListing {products} />
    {:else}{navigate('/')}{/if}
  {:else}
    <div class="row m-0 align-items-center justify-content-center">
      <Loader />
    </div>
  {/if}
</div>

<style>
</style>
