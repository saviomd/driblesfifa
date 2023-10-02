<script lang="ts">
  import type { HeadingLevelsType } from "../../types";
  export let level: HeadingLevelsType;
</script>

<svelte:element this={`h${level}`} class={`fw-bold h${level + 3}`}>
  <slot />
</svelte:element>
