<script lang="ts">
  import { InfoCard, ListHeader } from "../components/app";
  import { celebrations } from "../data";
  import { filterList } from "../utils";

  let filter = "";

  const setFilter = (value) => {
    filter = value;
  };

  $: celebrationsFiltered = filterList({
    filter,
    list: celebrations,
  });
</script>

<main>
  <ListHeader {filter} {setFilter} title="Celebrations" />
  {#if !celebrationsFiltered.length}
    <div>Nothing to show</div>
  {/if}
  <ul class="list-unstyled">
    {#each celebrationsFiltered as celebration (`${celebration.type}-${celebration.name}`)}
      <li>
        <InfoCard
          description={celebration.command}
          tag={celebration.type}
          title={celebration.name}
        />
      </li>
    {/each}
  </ul>
</main>
