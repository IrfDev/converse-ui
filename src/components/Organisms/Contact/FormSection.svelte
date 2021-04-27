<script>
  import ContactForm from 'Molecules/Contact/ContactForm';
  import { scale } from 'svelte/transition';
</script>

<style>
  .bg-section {
    background-image: url(/images/gaerne.jpg);
    width: 100%;
    background-size: cover;
  }
</style>

<!-- markup (zero or more items) goes here -->
<div transition:scale class="row justify-content-center align-items-center">
  <div class="col-md-6 col-12">
    <ContactForm/>
  </div>
</div>
