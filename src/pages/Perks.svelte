<script lang="ts">
  import { InfoCard, ListHeader } from "../components/app";
  import { perks } from "../data";
  import { filterList } from "../utils";

  let filter = "";

  const setFilter = (value) => {
    filter = value;
  };

  $: perksFiltered = filterList({
    filter,
    list: perks,
  });
</script>

<main>
  <ListHeader {filter} {setFilter} title="Perks" />
  {#if !perksFiltered.length}
    <div>Nothing to show</div>
  {/if}
  <ul class="list-unstyled">
    {#each perksFiltered as perk (perk.name)}
      <li>
        <InfoCard
          description={perk.description}
          tag={perk.type}
          title={perk.name}
        />
      </li>
    {/each}
  </ul>
</main>
