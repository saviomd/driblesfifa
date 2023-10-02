<script lang="ts">
  export let onClick: (CustomEvent) => void;
  export let stretched: boolean = false;
</script>

<button
  class={`btn btn-success btn-sm ${stretched ? "stretched-link" : ""}`}
  on:click={onClick}
>
  <slot />
</button>
