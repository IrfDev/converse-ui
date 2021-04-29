<script>
  import { Router, Route } from 'svelte-routing';
  import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';

  import { onMount } from 'svelte';

  import Home from './views/Home';
  import Categories from './views/Categories';
  import Contact from './views/Contact';
  import Product from './views/Product';
  import Distribuitors from './views/Distribuitors';

  import Particle from 'Organisms/ParticleBackground';
  import MainFooter from 'Organisms/MainFooter';
  import Navbar from 'Organisms/Navbar';
  import TopBar from 'Organisms/TopBar';
  import '../src/assets/styles/styles.scss';

  import converse from '../src/lib/Converse';

  onMount(() => {
    console.log(converse);
  });

  let showButton = false;

  function toggle() {
    showButton = !showButton;
  }
</script>

<GoogleAnalytics properties={['UA-129526873-4']} />
<Router>
  <main class="main-content">
    <Route path="/" component={Home} />
    <Route path="/categoria/:name" let:params>
      <Categories name={params.name} />
    </Route>
    <Route path="/producto/:name" let:params>
      <Product name={params.name} />
    </Route>
    <Route path="/contacto" component={Contact} />
    <Route path="/distribuidores" component={Distribuitors} />
  </main>
</Router>

<style lang="scss">
</style>
