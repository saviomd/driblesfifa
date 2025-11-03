<script lang="ts">
  import { Icon, MainContainer } from "../library";
  import { pages } from "../../data";
  import { currentPage } from "../../stores";
</script>

<div class="border-top border-secondary fixed-bottom text-bg-dark">
  <MainContainer>
    <div class="table-responsive">
      <nav class="flex-nowrap pb-4 row">
        {#each pages as page}
          <button
            class={`btn btn-link col-auto fs-4 px-4 py-2 ${
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
    </div>
  </MainContainer>
</div>
