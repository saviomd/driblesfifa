<script lang="ts">
  import { Footer, Header, Nav } from "./components/app";
  import { Analytics, MainContainer } from "./components/library";
  import Pages from "./pages/Pages.svelte";
  import { currentPage } from "./stores";
</script>

<Header />
<div class={`py-3 ${$currentPage === "Home" ? "bg-home min-vh-100" : ""}`}>
  <MainContainer>
    <Nav />
    <Pages />
    <Footer />
  </MainContainer>
</div>
<Analytics />
