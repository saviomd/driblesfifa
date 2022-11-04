<script lang="ts">
  import { InfoCard } from "../components/app";
  import { Heading } from "../components/library";
  import { perks } from "../data";
</script>

<main>
  <Heading level={1}>Perks</Heading>
  <ul class="list-unstyled">
    {#each perks as perk}
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
