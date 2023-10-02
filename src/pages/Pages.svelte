<script lang="ts">
  import Celebrations from "./Celebrations.svelte";
  import Home from "./Home.svelte";
  import PlayStyles from "./PlayStyles.svelte";
  import ReputationLevels from "./ReputationLevels.svelte";
  import SkillMoves from "./SkillMoves.svelte";
  import { currentPage } from "../stores";
</script>

{#if $currentPage === "Home"}
  <Home />
{:else if $currentPage === "Skill Moves"}
  <SkillMoves />
{:else if $currentPage === "Celebrations"}
  <Celebrations />
{:else if $currentPage === "Play Styles"}
  <PlayStyles />
{:else if $currentPage === "Reputation Levels"}
  <ReputationLevels />
{/if}
