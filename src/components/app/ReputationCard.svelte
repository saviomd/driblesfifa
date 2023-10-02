<script lang="ts">
  import { Card, Heading } from "../library";
  export let fans: number;
  export let level: number;
  export let rewards: string[];
  export let title: string;
</script>

<Card>
  <Heading level={2}>{`${level} - ${title}`}</Heading>
  <div class="row">
    <div class="col">
      <div class="fw-bold">Rewards</div>
      {#if rewards}
        <ul class="ps-3">
          {#each rewards as reward}
            <li>{reward}</li>
          {/each}
        </ul>
      {:else}
        --
      {/if}
    </div>
    <div class="col-auto text-end">
      <div class="fw-bold">Fans</div>
      {fans === 0 ? "--" : `${fans} million`}
    </div>
  </div>
</Card>
