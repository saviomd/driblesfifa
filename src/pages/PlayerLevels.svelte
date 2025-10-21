<script lang="ts">
  import { ListHeader, PlayerLevelCard } from "../components/app";
  import { playerLevels } from "../data";
  import type { IPlayerLevel } from "../types";

  let cardColor: IPlayerLevel["rewards"]["cardUpgrade"];
  let previousAxpNeeded = 0;
  let totalAp = 0;
  export const playerLevelsFormatted = playerLevels.map((level) => {
    const axpNeededDiff = level.axpNeeded - previousAxpNeeded;
    cardColor = level.rewards.cardUpgrade ?? cardColor;
    previousAxpNeeded = level.axpNeeded;
    totalAp += level.rewards.ap;
    return {
      ...level,
      axpNeededDiff,
      cardColor,
      totalAp,
    };
  });
</script>

<main>
  <ListHeader title="Player Levels" />
  <ul class="list-unstyled">
    {#each playerLevelsFormatted as { axpNeeded, axpNeededDiff, cardColor, level, rewards, totalAp } (`${level}`)}
      <li>
        <PlayerLevelCard
          {axpNeeded}
          {axpNeededDiff}
          {cardColor}
          {level}
          {rewards}
          {totalAp}
        />
      </li>
    {/each}
  </ul>
</main>
