<script lang="ts">
  import { ArchetypeCard, ListHeader } from "../components/app";
  import { archetypes } from "../data";
  import { filterList } from "../utils";

  let filter = "";

  const setFilter = (value) => {
    filter = value;
  };

  $: archetypesFiltered = filterList({
    filter,
    list: archetypes,
  });
</script>

<main>
  <ListHeader {filter} {setFilter} title="Archetypes" />
  <ul class="list-unstyled">
    {#each archetypesFiltered as { inspiredBy, keyAttributes, name, signaturePerks, signaturePlayStyles, specializations, type } (`${name}`)}
      <li>
        <ArchetypeCard
          {inspiredBy}
          {keyAttributes}
          {name}
          {signaturePerks}
          {signaturePlayStyles}
          {specializations}
          {type}
        />
      </li>
    {/each}
  </ul>
</main>
