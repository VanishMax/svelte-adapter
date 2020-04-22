<template>
  <div class="App">
    <Button title="vue-button" />
  </div>
</template>

<script>
import SvelteButton from "./Button.svelte";
import toVue from "../vue";

export default {
  components: {
    Button: toVue(SvelteButton, {}, "div")
  },
};
</script>
