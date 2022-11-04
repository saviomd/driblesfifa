<script lang="ts">
  import { Bar } from "../library";
  import { divisions } from "../../data";
  export const maxValue = divisions[0].pointsTitle;
  export let pointsHold;
  export let pointsPromotion;
  export let pointsTitle;
</script>

<Bar color="warning" {maxValue} value={pointsTitle} />
<Bar color="success" {maxValue} value={pointsPromotion} />
<Bar color="info" {maxValue} value={pointsHold} />
