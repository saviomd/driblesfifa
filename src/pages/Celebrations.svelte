<script lang="ts">
  import { InfoCard } from "../components/app";
  import { Heading } from "../components/library";
  import { celebrations } from "../data";
</script>

<main>
  <Heading level={1}>Celebrations</Heading>
  <ul class="list-unstyled">
    {#each celebrations as celebration}
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
