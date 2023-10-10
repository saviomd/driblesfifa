<script lang="ts">
  export let hasOpacity: boolean = false;
</script>

<div
  class={`bg-gradient card mb-3 text-bg-dark ${
    hasOpacity ? "bg-opacity-50" : ""
  }`}
>
  <div class="card-body">
    <slot />
  </div>
</div>
