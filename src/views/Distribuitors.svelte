<script>
  import SvelteSeo from 'svelte-seo';
  import DistribuitorCard from 'Molecules/DistribuitorCard';
  import Loader from 'Atoms/Loader';

  import { distribuidoresStore } from '../store/distribuidores';

  let distribuitors = [
    {
      name: 'Hebotechno',
      description: 'Importadora de productos europeos para motos',
      website: 'https://mundohebotech.com',
      isFav: true,
    },
    {
      name: 'Hebotechno',
      description: 'Importadora de productos europeos para motos',
      website: 'https://mundohebotech.com',
      isFav: true,
    },
    {
      name: 'Hebotechno',
      description: 'Importadora de productos europeos para motos',
      website: 'https://mundohebotech.com',
      isFav: true,
    },
    {
      name: 'Hebotechno',
      description: 'Importadora de productos europeos para motos',
      website: 'https://mundohebotech.com',
      isFav: true,
    },
    {
      name: 'Hebotechno',
      description: 'Importadora de productos europeos para motos',
      website: 'https://mundohebotech.com',
      isFav: true,
    },
    {
      name: 'Hebotechno',
      description: 'Importadora de productos europeos para motos',
      website: 'https://mundohebotech.com',
      isFav: false,
    },
    {
      name: 'Hebotechno',
      description: 'Importadora de productos europeos para motos',
      website: 'https://mundohebotech.com',
      isFav: false,
    },
    {
      name: 'Hebotechno',
      description: 'Importadora de productos europeos para motos',
      website: 'https://mundohebotech.com',
      isFav: false,
    },
    {
      name: 'Hebotechno',
      description: 'Importadora de productos europeos para motos',
      website: 'https://mundohebotech.com',
      isFav: false,
    },
    {
      name: 'Hebotechno',
      description: 'Importadora de productos europeos para motos',
      website: 'https://mundohebotech.com',
      isFav: false,
    },
    {
      name: 'Hebotechno',
      description: 'Importadora de productos europeos para motos',
      website: 'https://mundohebotech.com',
      isFav: false,
    },
  ];

  $: favDistribuitors = $distribuidoresStore
    ? $distribuidoresStore.filter(distribuidor => distribuidor.fav)
    : null;

  $: regularDistribuitors = $distribuidoresStore
    ? $distribuidoresStore.filter(distribuidor => !distribuidor.fav)
    : null;
</script>

<SvelteSeo
  title="Distribuidores oficiales | Sitio Oficial Gaerne México"
  description="Encuentra a los distribuidores oficiales de Gaerne en México y compra tus productos favoritos"
/>

<div class="container-fluid pt-5 pb-5">
  <div class="row m-0 justify-content-center">
    <div class="col-12 text-center">
      <h1>Premium</h1>
    </div>
    {#if $distribuidoresStore}
      {#each favDistribuitors as distribuitor, i (i)}
        <DistribuitorCard {...distribuitor} {i} />
      {/each}
    {:else}
      <div class="row m-0 align-items-center justify-content-center">
        <Loader />
      </div>
    {/if}
  </div>
  <div class="row m-0 justify-content-center">
    <div class="col-12 text-center">
      <h1>Distribuidores</h1>
    </div>
    {#if $distribuidoresStore}
      {#each regularDistribuitors as distribuitor, i (i)}
        <DistribuitorCard {...distribuitor} {i} />
      {/each}
    {:else}
      <div class="row m-0 align-items-center justify-content-center">
        <Loader />
      </div>
    {/if}
  </div>
</div>

<style>
</style>
