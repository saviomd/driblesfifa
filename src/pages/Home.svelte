<script lang="ts">
  import { HomeCard } from "../components/app";
  import { pages } from "../data";
</script>

<main>
  <ul class="list-unstyled py-5">
    {#each pages as { icon, title }}
      {#if title !== "Home"}
        <li>
          <HomeCard {icon} {title} />
        </li>
      {/if}
    {/each}
  </ul>
</main>
