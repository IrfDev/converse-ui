<script>
  import { onMount } from 'svelte';

  import LoaderSvg from './LoaderSvg.svelte';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import MorphSVGPlugin from '../../lib/MorhpSVG';

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

    let tl2 = new gsap.timeline({
      yoyo: true,
      repeat: -1,
      delay: 0.5,
      repeatDelay: 0,
    });

    tl2
      .to('#logo-loader', {
        morphSVG: '#helmet-loader',
        fill: '#0428BD',
        ease: 'power3.inOut(1.7)',
        duration: 1.2,
      })
      .to('#logo-loader', {
        morphSVG: '#boot-loader',
        ease: 'power3.inOut(1.7)',
        duration: 1.2,
        fill: '#F4D316',
      })
      .to('#logo-loader', {
        morphSVG: '#moto-loader',
        ease: 'power3.inOut(1.7)',
        fill: '#333333',
        duration: 1.2,
      });
  });
</script>

<style>
  /* your styles go here */
</style>

<div class="col-md-6 col-8 my-4 mx-auto">
  <LoaderSvg />
  <div
    class="spinner-border text-warning my-4"
    style="width: 3rem; height: 3rem;"
    role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
