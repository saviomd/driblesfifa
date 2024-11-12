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
  {#if celebrationsFiltered.length}
    <ul class="list-unstyled">
      {#each celebrationsFiltered as { command, name, type } (`${type}-${name}`)}
        <li>
          <InfoCard description={command} tag={type} title={name} />
        </li>
      {/each}
    </ul>
  {:else}
    <div>Nothing to show</div>
  {/if}
</main>
