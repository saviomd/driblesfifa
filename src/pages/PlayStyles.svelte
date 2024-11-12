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
  {#if playStylesFiltered.length}
    <ul class="list-unstyled">
      {#each playStylesFiltered as { description, iconPath, name, relatedAttributes, type } (name)}
        <li>
          <InfoCard
            {description}
            {iconPath}
            {relatedAttributes}
            tag={type}
            title={name}
          />
        </li>
      {/each}
    </ul>
  {:else}
    <div>Nothing to show</div>
  {/if}
</main>
