<script lang="ts">
  import type { StarCountType } from "../../types";
  export let count: StarCountType;
  const stars = [...Array(count).keys()];
</script>

{#each stars as star}
  {` ★`}
{/each}
