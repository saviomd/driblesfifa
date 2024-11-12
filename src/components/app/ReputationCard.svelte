<script lang="ts">
  import { Card, Heading, Image } from "../library";
  export let aiSquadRating: number;
  export let facilitiesBudget: number;
  export let fans: number;
  export let repGroup: number;
  export let repLevel: number;
  export let repTier: string;
  export let stadiumTierReward: number;
</script>

<Card>
  <div class="row">
    <div class="col-auto text-center">
      <div class="h1">{repLevel}</div>
      <Image
        alt={repTier}
        height={64}
        src={`https://media.contentapi.ea.com/content/dam/eacom/fc/pro-clubs/reputation-tier${repGroup}.png`}
        width={64}
      />
    </div>
    <div class="col">
      <Heading level={2}>{repTier}</Heading>
      <div>
        Fans
        <span class="fw-bold">{fans === 0 ? "--" : `${fans} million`}</span>
      </div>
      <div>
        Facilities Budget
        <span class="fw-bold">{`${facilitiesBudget} million`}</span>
      </div>
      <div>
        AI Squad Rating
        <span class="fw-bold">{`${aiSquadRating}`}</span>
      </div>
      <div>
        Stadium Reward
        <span class="fw-bold">
          {stadiumTierReward ? `Tier ${stadiumTierReward}` : "--"}
        </span>
      </div>
    </div>
  </div>
</Card>
