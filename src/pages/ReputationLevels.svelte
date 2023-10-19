<script lang="ts">
  import { ListHeader, ReputationCard } from "../components/app";
  import { reputationLevels } from "../data";
</script>

<main>
  <ListHeader title="Reputation Levels" />
  <ul class="list-unstyled">
    {#each reputationLevels as reputationLevel}
      <li>
        <ReputationCard
          fans={reputationLevel.fans}
          level={reputationLevel.level}
          rewards={reputationLevel.rewards}
          tier={reputationLevel.tier}
          title={reputationLevel.name}
        />
      </li>
    {/each}
  </ul>
</main>
