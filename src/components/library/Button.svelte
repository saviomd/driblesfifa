<script lang="ts">
  export let onClick: (CustomEvent) => void;
  export let stretched: boolean;
</script>

<button
  class={`btn btn-primary btn-sm ${stretched ? "stretched-link" : ""}`}
  on:click={onClick}
>
  <slot />
</button>
