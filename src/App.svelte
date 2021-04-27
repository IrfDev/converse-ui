<script>
  import { Router, Route } from 'svelte-routing';
  import { GoogleAnalytics } from '@beyonk/svelte-google-analytics'


  import Home from './views/Home';
  import Categories from './views/Categories';
  import Contact from './views/Contact';
  import Product from './views/Product';
  import Distribuitors from './views/Distribuitors';

  import Particle from 'Organisms/ParticleBackground';
  import MainFooter from 'Organisms/MainFooter';
  import Navbar from 'Organisms/Navbar';
  import TopBar from 'Organisms/TopBar';

  let showButton = false;

  function toggle() {
    showButton = !showButton;
  }
</script>

<style>
  .main-content {
    z-index: 11;
    position: relative;
    border-radius: 0px 0px 8px 8px;
    margin: 2em 0em;
  }

  @media screen and (min-width: 550px) {
    .main-content {
      margin: 8em 1em;
    }
  }

  @media screen and (min-width: 770px) {
    .main-content {
      margin: 3em 5em;
    }
  }

  :global(h1, h2, h3, h4, h5) {
    font-family: Cousine;
    font-weight: 700;
  }
  :global(p, small, div, span) {
    font-family: Open Sans;
  }
</style>

<GoogleAnalytics 
    properties={[ 'UA-129526873-4' ]} 
    />
<Router>
  <main class="main-content">
    <TopBar />
    <Navbar />
    <Route path="/" component={Home} />
    <Route path="/categoria/:name" let:params>
      <Categories name={params.name} />
    </Route>
    <Route path="/producto/:name" let:params>
      <Product name={params.name} />
    </Route>
    <Route path="/contacto" component={Contact} />
    <Route path="/distribuidores" component={Distribuitors} />
    <MainFooter />
  </main>
  <Particle />
</Router>
