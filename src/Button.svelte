<script>
  import { createEventDispatcher } from "svelte";
  export let title = '';
  const dispatch = createEventDispatcher();
</script>

<button type="button" {title} on:click={() => dispatch('click', 'clicked')}>
  🎉 <slot /> 🎉
</button>
