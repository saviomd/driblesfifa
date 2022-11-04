<script lang="ts">
  import type { DivisionColorsType } from "../../types";
  export let color: DivisionColorsType;
  export let maxValue: number;
  export let value: number;
</script>

<div class="bg-dark">
  <div
    class={`bg-${color} pb-1`}
    style={`width: ${(value / maxValue) * 100}%`}
  />
</div>
