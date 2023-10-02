<script lang="ts">
  import { InfoCard, ListHeader } from "../components/app";
  import { playStyles } from "../data";
  import { filterList } from "../utils";

  let filter = "";

  const setFilter = (value) => {
    filter = value;
  };

  $: playStylesFiltered = filterList({
    filter,
    list: playStyles,
  });
</script>

<main>
  <ListHeader {filter} {setFilter} title="Play Styles" />
  {#if !playStylesFiltered.length}
    <div>Nothing to show</div>
  {/if}
  <ul class="list-unstyled">
    {#each playStylesFiltered as perk (perk.name)}
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
