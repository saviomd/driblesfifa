<script lang="ts">
  import type { HeadingLevelsType } from "../../types";
  export let level: HeadingLevelsType;
</script>

<svelte:element
  this={`h${level}`}
  class={`h${level + 3} fst-italic text-uppercase`}
>
  <slot />
</svelte:element>
