<script>
  import { navigate } from 'svelte-routing';
  import { getContext } from 'svelte';
  import { ROUTER } from 'svelte-routing/src/contexts';

  import { slide } from 'svelte/transition';

  import { productsStore } from '../../store/products';

  let { activeRoute } = getContext(ROUTER);

  let routePath;

  $: {
    routePath = $activeRoute;
  }

  $: pathUri = routePath ? routePath.uri : '';

  let openDropdown = false;

  let openMenu = false;
</script>

<style>
  .navbar {
    background-color: #f5d315;
  }

  .col {
    font-weight: 700;
    font-family: Open Sans;
    text-transform: uppercase;
    padding: 0;
  }

  .col .nav-link {
    font-weight: 700;
    font-family: Open Sans;
    text-transform: uppercase;
    text-align: center;
    margin: auto;
    min-width: 100%;
    min-height: 100%;
    padding: 4% 0;
    color: #000;
    cursor: pointer;
    background-color: #f5d315;
    border: none;
    transition: all 0.3s ease-in;
  }

  .col .nav-link:hover {
    background-color: #333;
    color: white;
    transition: all 0.2s ease-out;
  }

  .col .nav-link {
    border-left: solid 2.5px #000;
  }
  .col .nav-link.active {
    font-weight: bolder;
    font-size: 108%;
    text-decoration: underline;
    transition: all ease-in 0.2s;
  }

  .navbar .navbar-toggler {
    vertical-align: sub;
    border: black solid 2px;
    margin: 0.5em 0.5em 0.5em auto;
    transition: all 0.3s ease-out;
  }
  .navbar .navbar-toggler:hover,
  .collapsed {
    transition: all 0.3s ease-in;
    background-color: #333;
    color: white;
  }

  .dropdown-menu {
    width: 100%;
    text-align: center;
  }

  .dropdown-item:hover {
    background-color: #f5d315;
    font-weight: 600;
    text-decoration: underline;
    transition: all ease-out 0.3s;
  }

  .dropdown-item {
    transition: all ease-in 0.3s;
  }
</style>

<nav class="navbar navbar-expand-lg p-0 d-flex flex-row text-center">
  <button
    class="navbar-toggler text-right"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    on:click={() => (openMenu = !openMenu)}
    class:collapsed={openMenu}
    aria-label="Toggle navigation">
    Menú
    <i class="fas fa-chevron-circle-down navbar-toggler-icon" />
  </button>
  <div class:show={openMenu} class="collapse navbar-collapse" id="navbarNav">
    <div class="col nav-item">
      <button
        on:click={() => (navigate('/'), (openDropdown = false))}
        class:active={pathUri === '/'}
        class="nav-link">
        Inicio
      </button>
    </div>
    <div class="col nav-item dropdown" class:show={openDropdown}>
      <button
        class="nav-link"
        type="button"
        id="dropdownMenu2"
        data-toggle="dropdown"
        class:active={pathUri.includes('/categoria')}
        aria-haspopup="true"
        on:click={() => (openDropdown = !openDropdown)}
        aria-expanded="true">
        Categorías
      </button>

      <div
        class="dropdown-menu"
        aria-labelledby="dropdownMenu2"
        class:show={openDropdown}
        transition:slide>
        {#if $productsStore}
          {#each [...new Set($productsStore.map((product) => product.meta_data.find((meta) => meta.key === 'estilo_gaerne').value))].sort() as product, productIndex (productIndex)}
            <button
              class="dropdown-item"
              type="button"
              on:click={() => (navigate(`/categoria/${product}`), (openMenu = false), (openDropdown = false))}>
              {product}
            </button>
          {/each}
        {:else}
          <div class="col-6 text-center">
            <div class="spinner-border text-warning" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        {/if}
      </div>
    </div>
    <!-- <div class="col nav-item">
      <button
        on:click={() => (navigate('/categoria/enduro'), (openMenu = false))}
        class:active={pathUri.includes('/categoria')}
        class="nav-link">
        Categorías
      </button>
    </div> -->
    <!-- <div class="col nav-item">
      <button
        on:click={() => (navigate('/producto/SG-12'), (openMenu = false))}
        class:active={pathUri.includes('/producto')}
        class="nav-link">
        Productos
      </button>
    </div> -->
    <div class="col nav-item">
      <button
        on:click={() => (navigate('/distribuidores'), (openMenu = false), (openDropdown = false))}
        class:active={pathUri.includes('/distribuidores')}
        class="nav-link">
        distribuidores
      </button>
    </div>
    <div class="col">
      <button
        on:click={() => (navigate('/contacto'), (openMenu = false), (openDropdown = false))}
        class:active={pathUri.includes('/contacto')}
        class="nav-link">
        Contacto
      </button>
    </div>
  </div>
</nav>
