<script lang="ts">
  import { ListHeader, ReputationCard } from "../components/app";
  import { reputationLevels } from "../data";
</script>

<main>
  <ListHeader title="Reputation Levels" />
  <ul class="list-unstyled">
    {#each reputationLevels as { aiSquadRating, facilitiesBudget, fans, repGroup, repLevel, repTier, stadiumTierReward }}
      <li>
        <ReputationCard
          {aiSquadRating}
          {facilitiesBudget}
          {fans}
          {repGroup}
          {repLevel}
          {repTier}
          {stadiumTierReward}
        />
      </li>
    {/each}
  </ul>
</main>
