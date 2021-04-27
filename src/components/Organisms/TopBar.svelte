<script>
  import { navigate } from 'svelte-routing';

  $: {
    (function () {
      var qs,
        js,
        q,
        s,
        d = document,
        gi = d.getElementById,
        ce = d.createElement,
        gt = d.getElementsByTagName,
        id = 'typef_orm_share',
        b = 'https://embed.typeform.com/';
      if (!gi.call(d, id)) {
        js = ce.call(d, 'script');
        js.id = id;
        js.src = b + 'embed.js';
        q = gt.call(d, 'script')[0];
        q.parentNode.insertBefore(js, q);
      }
    })();
  }
</script>

<style>
  .logo-container {
    background-image: url(/path.svg);
    background-position: bottom center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #000;
    clip-path: polygon(97% 0, 100% 20%, 100% 100%, 0 100%, 0 0);
    width: 100%;
  }

  @media screen and (min-width: 550px) {
    .logo-container {
      background-position: center center;
    }
  }

  @media screen and (min-width: 750px) {
    .logo-container {
      background-position: left center;
    }
  }

  .logo-container img {
    cursor: pointer;
  }

  @media screen and (min-width: 550px) {
    .logo-container {
    }
  }

  @media screen and (min-width: 770px) {
    .logo-container {
    }
  }

  .cta-column .button {
    border: none;
    font-family: Cousine;

    background-color: transparent;
    border: 4px #f5d315 solid;
    color: #f5d315;
    padding: 1% 9%;
    transition: all 0.5s ease-out;
    font-weight: 700;
    text-transform: uppercase;
  }

  .cta-column .button:hover {
    transition: all 0.3s ease-in;
    color: #333;
    background-color: #f5d315;
  }
</style>

<!-- markup (zero or more items) goes here -->

<div class="logo-container row m-0 p-4">
  <div
    class="col-md-6 col-12 d-flex justify-content-center my-md-0 my-3 justify-content-md-between">
    <img
      on:click={() => navigate('/')}
      src="/images/logo.png"
      alt="Logo Gaerne México" />
  </div>
  <div
    class="col-md-6 col-12 cta-column d-flex flex-column align-items-md-end align-items-center justify-content-center">
    <a
      class="typeform-share button"
      href="https://form.typeform.com/to/KqufwcmS"
      data-mode="popup"
      target="_blank">Ser distribuidor
    </a>
  </div>
</div>
