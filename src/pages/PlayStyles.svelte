<script lang="ts">
  import { ListHeader, PlayStyleCard } from "../components/app";
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
  <ListHeader {filter} {setFilter} title="PlayStyles" />
  {#if playStylesFiltered.length}
    <ul class="list-unstyled">
      {#each playStylesFiltered as { description, iconPath, name, type, unlockCriteria } (name)}
        <li>
          <PlayStyleCard
            {description}
            {iconPath}
            {name}
            {type}
            {unlockCriteria}
          />
        </li>
      {/each}
    </ul>
  {:else}
    <div>Nothing to show</div>
  {/if}
</main>
