<script lang="ts">
  import { Icon } from "../library";
  import { pages } from "../../data";
  import { currentPage } from "../../stores";
</script>

<div class="bg-secondary fixed-bottom pb-3 px-3">
  <nav class="bg-dark nav nav-justified rounded shadow">
    {#each pages as page}
      <button
        class={`btn btn-link nav-link py-3 ${
          $currentPage === page.title ? "active text-white" : "text-muted"
        }`}
        on:click={() => {
          $currentPage = page.title;
          window.scrollTo({ behavior: "auto", top: 0 });
        }}
      >
        <Icon name={page.icon} />
        <div class="d-none d-sm-block small">{page.title}</div>
      </button>
    {/each}
  </nav>
</div>
