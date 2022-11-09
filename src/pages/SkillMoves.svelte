<script lang="ts">
  import { InfoCard, ListHeader } from "../components/app";
  import { skillMoves } from "../data";
  import { filterList } from "../utils";

  let filter = "";

  const setFilter = (value) => {
    filter = value;
  };

  $: skillMovesFiltered = filterList({
    filter,
    list: skillMoves,
  });
</script>

<main>
  <ListHeader {filter} {setFilter} title="Skill Moves" />
  {#if !skillMovesFiltered.length}
    <div>Nothing to show</div>
  {/if}
  <ul class="list-unstyled">
    {#each skillMovesFiltered as skillMove (`${skillMove.name}${skillMove.stars}`)}
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
