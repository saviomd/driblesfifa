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
  <div class="table-responsive">
    <ul class="flex-nowrap list-unstyled row">
      {#each archetypesFiltered as { inspiredBy, keyAttributes, name, signaturePerks, signaturePlayStyles, specializations, type } (`${name}`)}
        <li class="col-10">
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
  </div>
</main>
