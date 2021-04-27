<script>
  import LogoAnimation from 'Atoms/LogoAnimation';
</script>

<style>
  .hero-header {
    display: flex;
    height: 100vh;
    min-width: 100%;
    background-image: url(/images/background/sg-12.jpg);
    background-color: #333;
    /* padding: 17em; */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: White;
    overflow: hidden;
  }
  .hero-header .title-hero {
    display: none;
  }

  .logo-animation {
    margin: auto;
    height: 100%;
  }

  @media screen and (min-width: 770px) {
    .logo-animation {
      height: 100%;
    }
  }
</style>

<div
  class="row hero-header text-center justify-content-center align-items-center"
  id="hero-header-home">
  <div class="col-12 logo-animation">
    <LogoAnimation />
  </div>
  <div class="col-12 title-hero">
    <h1 class="m-auto">Boots Co. <br /> Gaerne México 🇲🇽</h1>
  </div>
</div>
