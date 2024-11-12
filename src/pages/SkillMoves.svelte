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
  {#if skillMovesFiltered.length}
    <ul class="list-unstyled">
      {#each skillMovesFiltered as { command, name, stars } (`${name}-${stars}`)}
        <li>
          <InfoCard description={command} tag={stars} title={name} />
        </li>
      {/each}
    </ul>
  {:else}
    <div>Nothing to show</div>
  {/if}
</main>
