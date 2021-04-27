 <script>
  import CategoryCard from 'Molecules/Home/CategoryCard';

  let cards = [
    {
      name: 'Todoterreno',
      description: 'El mejor calzado del mercado para todoterreno',
      slug: 'G.VOYAGER',
      image: '/images/banner-1.jpg',
    },

    {
      name: 'Urbano',
      description: 'El calzado de moda para tus días ocupados ',
      slug: 'MX%20-%20Off%20Road',
      image: '/images/banner-2.jpg',
    },

    {
      name: 'Sport urban line',
      description: 'Calzado urbano para todas tus actividades de ciudad',
      slug: 'SPORT%20URBAN%20LINE',
      image: '/images/banner-3.jpg',
    },
  ];
</script>

<style>
  .categories-listing h2 {
    text-decoration: underline #f4d316;
  }
</style>

<div
  class="row categories-listing px-md-5 p-3 justify-content-center mt-4 mb-4 text-center">
  <div class="col-12">
    <h2>Categories</h2>
  </div>
  {#each cards as card, cardIndex (cardIndex)}
    <CategoryCard {card} {cardIndex} />
  {/each}
</div>
