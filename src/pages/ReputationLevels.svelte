<script lang="ts">
  import { ReputationCard } from "../components/app";
  import { Heading } from "../components/library";
  import { reputationLevels } from "../data";
</script>

<main>
  <Heading level={1}>Reputation Levels</Heading>
  <ul class="list-unstyled">
    {#each reputationLevels as reputationLevel}
      <li>
        <ReputationCard
          fans={reputationLevel.fans}
          level={reputationLevel.level}
          rewards={reputationLevel.rewards}
          title={reputationLevel.name}
        />
      </li>
    {/each}
  </ul>
</main>
