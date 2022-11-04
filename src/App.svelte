<script lang="ts">
  import { Footer, Header, Nav } from "./components/app";
  import { Analytics } from "./components/library";
  import Pages from "./pages/Pages.svelte";
</script>

<div class="container-fluid">
  <div class="justify-content-center mb-5 px-3 pb-5 row">
    <div class="col-12 col-sm-8 col-md-6">
      <Header />
      <Nav />
      <Pages />
      <Footer />
    </div>
  </div>
</div>
<Analytics />
