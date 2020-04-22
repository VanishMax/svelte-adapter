<template>
  <section class="vue">
    <span>Vue button</span>
    <Button title="vue-button"/>
  </section>
</template>

<script>
  import SvelteButton from './Button.svelte';
  import toVue from '../vue';

  export default {
    components: {
      Button: toVue(SvelteButton, {}, 'div'),
    },
  };
</script>
