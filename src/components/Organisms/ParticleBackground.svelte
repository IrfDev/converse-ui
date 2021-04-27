<script>
  import { onMount } from 'svelte/internal';

  onMount(() => {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: { enable: true, value_area: 552.4033491425909 },
        },
        color: { value: '#897712' },
        shape: {
          type: 'polygon',
          stroke: { width: 1, color: '#f5d315' },
          polygon: { nb_sides: 5 },
          image: { src: 'img/github.svg', width: 90, height: 100 },
        },
        opacity: {
          value: 0.9460131159106585,
          random: true,
          anim: {
            enable: false,
            speed: 6.902656304561433,
            opacity_min: 0.34107242916656494,
            sync: false,
          },
        },
        size: {
          value: 3.02559045649142,
          random: true,
          anim: {
            enable: false,
            speed: 14.617389821424212,
            size_min: 21.926084732136317,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 144.30708547789706,
          color: '#f5d315',
          opacity: 0.24051180912982842,
          width: 0.6413648243462091,
        },
        move: {
          enable: true,
          speed: 3.206824121731046,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'bounce',
          bounce: false,
          attract: {
            enable: true,
            rotateX: 2324.947488255008,
            rotateY: 2244.776885211732,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'repulse' },
          resize: true,
        },
        modes: {
          grab: { distance: 255.80432187492372, line_linked: { opacity: 1 } },
          bubble: {
            distance: 194.89853095232286,
            size: 8.120772123013452,
            duration: 0.3248308849205381,
            opacity: 1,
            speed: 3,
          },
          repulse: { distance: 162.41544246026902, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    });
  });
</script>

<style>
  #particles-js {
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #323840;
    background-image: url('/images/background/main.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    z-index: 10;
    overflow: hidden;
    position: fixed;
  }
</style>

<div id="particles-js" />
