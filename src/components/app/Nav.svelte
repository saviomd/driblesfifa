<script lang="ts">
  import { Icon, MainContainer } from "../library";
  import { pages } from "../../data";
  import { currentPage } from "../../stores";
</script>

<div class="border-top border-secondary fixed-bottom pb-4 text-bg-dark">
  <MainContainer>
    <nav class="fs-4 nav nav-justified">
      {#each pages.slice(0, 5) as page}
        <button
          class={`btn btn-link nav-link ${
            $currentPage === page.title ? "active text-white" : "text-muted"
          }`}
          on:click={() => {
            $currentPage = page.title;
            window.scrollTo({ behavior: "instant", top: 0 });
          }}
          title={page.title}
        >
          <Icon name={page.icon} />
        </button>
      {/each}
    </nav>
  </MainContainer>
</div>
