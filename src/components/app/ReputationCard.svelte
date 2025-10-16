<script lang="ts">
  import { Card, Heading, Image } from "../library";
  import type { IReputationLevel } from "../../types";
  export let aiSquadRating: IReputationLevel["aiSquadRating"];
  export let facilitiesBudget: IReputationLevel["facilitiesBudget"];
  export let fans: IReputationLevel["fans"];
  export let repGroup: IReputationLevel["repGroup"];
  export let repLevel: IReputationLevel["repLevel"];
  export let repTier: IReputationLevel["repTier"];
  export let stadiumTierReward: IReputationLevel["stadiumTierReward"];
</script>

<Card>
  <div class="row">
    <div class="col-auto text-center">
      <div class="h1">{repLevel}</div>
      <Image
        alt={repTier}
        height={72}
        src={`https://media.contentapi.ea.com/content/dam/eacom/fc/pro-clubs/reputation-tier${repGroup}.png`}
        width={72}
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
