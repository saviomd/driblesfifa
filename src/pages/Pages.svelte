<script lang="ts">
  import Celebrations from "./Celebrations.svelte";
  import Divisions from "./Divisions.svelte";
  import Home from "./Home.svelte";
  import Perks from "./Perks.svelte";
  import SkillMoves from "./SkillMoves.svelte";
  import { currentPage } from "../stores";
</script>

{#if $currentPage === "Home"}
  <Home />
{:else if $currentPage === "Skill Moves"}
  <SkillMoves />
{:else if $currentPage === "Celebrations"}
  <Celebrations />
{:else if $currentPage === "Perks"}
  <Perks />
{:else if $currentPage === "Divisions"}
  <Divisions />
{/if}
