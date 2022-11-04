<script lang="ts">
  import DivisionBars from "./DivisionBars.svelte";
  import { Card, Icon } from "../library";
  export let number: number;
  export let pointsHold: number;
  export let pointsPromotion: number;
  export let pointsTitle: number;
</script>

<Card>
  <div class="align-items-center row text-center">
    <h2 class="col-3 h-1 fst-italic mb-0">{number}</h2>
    <div class="col-3">
      <DivisionBars {pointsHold} {pointsPromotion} {pointsTitle} />
    </div>
    <div class="col">
      <Icon color="info" name="minus" />
      <div class="fs-5">{pointsHold ?? "--"}</div>
    </div>
    <div class="col">
      <Icon color="success" name="chevron-up" />
      <div class="fs-5">{pointsPromotion ?? "--"}</div>
    </div>
    <div class="col">
      <Icon color="warning" name="trophy" />
      <div class="fs-5">{pointsTitle ?? "--"}</div>
    </div>
  </div>
</Card>
