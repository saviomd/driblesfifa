<script lang="ts">
  import { DivisionCard } from "../components/app";
  import { Heading } from "../components/library";
  import { divisions } from "../data";
</script>

<main>
  <Heading level={1}>Divisions</Heading>
  <ul class="list-unstyled">
    {#each divisions as division}
      <li>
        <DivisionCard
          number={division.number}
          pointsHold={division.pointsHold}
          pointsPromotion={division.pointsPromotion}
          pointsTitle={division.pointsTitle}
        />
      </li>
    {/each}
  </ul>
</main>
