<script lang="ts">
  import { Card, Heading } from "../library";
  export let fans: number;
  export let level: number;
  export let rewards: string[];
  export let tier: number;
  export let title: string;
</script>

<Card>
  <div class="row">
    <div class="col-auto text-center">
      <div class="h1">{level}</div>
      <img
        alt={title}
        height={64}
        src={`https://media.contentapi.ea.com/content/dam/eacom/fc/pro-clubs/reputation-tier${tier}.png`}
        width={64}
      />
    </div>
    <div class="col">
      <Heading level={2}>{title}</Heading>
      <div>
        <span class="fw-bold">Fans</span>
        {fans === 0 ? "--" : `${fans} million`}
      </div>
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
  </div>
</Card>
