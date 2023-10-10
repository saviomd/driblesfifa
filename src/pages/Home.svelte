<script lang="ts">
  import { HomeCard } from "../components/app";
  import { pages } from "../data";
</script>

<main>
  <ul class="list-unstyled py-5">
    {#each pages as page}
      {#if page.title !== "Home"}
        <li>
          <HomeCard icon={page.icon} title={page.title} />
        </li>
      {/if}
    {/each}
  </ul>
</main>
