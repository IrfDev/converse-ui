<script>
  import { slide, fly, blur } from 'svelte/transition';

  export let name;
  export let short_description;
  export let images;
  export let description;

  let zoom = false;

  $: activeIndex = 0;

  function activateImage(imageIndex) {
    activeIndex = imageIndex;
  }
</script>

<div class="row position-relative p-3">
  <div
    class={`product-description col-md-4 flex-wrap col-12 text-md-right text-center ${
      zoom ? 'order-md-1' : 'order-md-0'
    } order-1`}
  >
    <div class="contentt align-self-end">
      <h1>{name}</h1>
      <h3>
        {@html short_description}
      </h3>

      <div class="product-showcase">
        {#each images as image, imageIndex (imageIndex)}
          <div
            in:fly={{ delay: imageIndex * 200 }}
            out:fly
            on:click={activateImage(imageIndex)}
            class="inactive-image"
            style={`background-image: url(${image.src})`}
          />
        {/each}
      </div>
    </div>
  </div>
  <div
    on:click={() => (zoom = !zoom)}
    class={`col-12 product-images order-0 ${
      zoom ? 'oder-md-0' : 'col-md-8 order-md-1'
    }`}
  >
    {#each images as image, imageIndex (imageIndex)}
      <img
        in:blur={{ duration: 1000 }}
        out:blur
        loading="lazy"
        src={image.src}
        alt={`Gaerne botas ${name}`}
        class="img-fluid"
      />
    {/each}
  </div>
  <div class="col-12 mt-4 order-3">
    {@html description}
  </div>
</div>

<style>
  .product-description {
    min-height: 100%;
  }
  .product-description h1 {
    font-family: Cousine;
    font-weight: 700;
  }
  .product-description h3 {
    font-family: Cousine;
  }
  .product-description p {
    font-family: Open Sans;
  }
  .contentt {
    position: sticky;
    position: -webkit-sticky;
    top: 10%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom right;
    padding: 15% 15% 15% 0;
  }

  .contentt h1 {
    text-align: right;
  }
  .inactive-image {
    padding: 15%;
    width: 100%;
    height: 100%;
    background-size: contain;
    flex-basis: 1%;
    cursor: pointer;
    background-repeat: no-repeat;
  }
  .active-image {
    background-repeat: no-repeat;
    background-size: contain;
    padding: 25%;
    width: 100%;
    height: 100%;
  }

  .product-showcase {
    display: flex;
    flex-flow: wrap row;
  }
  .product-images {
    cursor: pointer;
  }
</style>
