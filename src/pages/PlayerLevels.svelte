<script lang="ts">
  import { ListHeader, PlayerLevelCard } from "../components/app";
  import { playerLevels } from "../data";
  import type { IPlayerLevel } from "../types";

  let cardColor: IPlayerLevel["rewards"]["cardUpgrade"];
  let previousAxpNeeded = 0;
  export const playerLevelsFormatted = playerLevels.map((level) => {
    const axpNeededDiff = level.axpNeeded - previousAxpNeeded;
    cardColor = level.rewards.cardUpgrade ?? cardColor;
    previousAxpNeeded = level.axpNeeded;
    return {
      ...level,
      axpNeededDiff,
      cardColor,
    };
  });
</script>

<main>
  <ListHeader title="Player Levels" />
  <ul class="list-unstyled">
    {#each playerLevelsFormatted as { axpNeeded, axpNeededDiff, cardColor, level, rewards } (`${level}`)}
      <li>
        <PlayerLevelCard
          {axpNeeded}
          {axpNeededDiff}
          {cardColor}
          {level}
          {rewards}
        />
      </li>
    {/each}
  </ul>
</main>
