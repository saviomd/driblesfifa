<script lang="ts">
  import { InfoCard } from "../components/app";
  import { Heading } from "../components/library";
  import { skillMoves } from "../data";
</script>

<main>
  <Heading level={1}>Skill Moves</Heading>
  <ul class="list-unstyled">
    {#each skillMoves as skillMove}
      <li>
        <InfoCard
          description={skillMove.command}
          tag={skillMove.stars}
          title={skillMove.name}
        />
      </li>
    {/each}
  </ul>
</main>
