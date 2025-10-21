<script lang="ts">
  import Celebrations from "./Celebrations.svelte";
  import Home from "./Home.svelte";
  import PlayerLevelRewards from "./PlayerLevels.svelte";
  import PlayStyles from "./PlayStyles.svelte";
  import QuickChat from "./QuickChat.svelte";
  import ReputationLevels from "./ReputationLevels.svelte";
  import SkillMoves from "./SkillMoves.svelte";
  import { currentPage } from "../stores";
</script>

{#if $currentPage === "Celebrations"}
  <Celebrations />
{:else if $currentPage === "Home"}
  <Home />
{:else if $currentPage === "Player Levels"}
  <PlayerLevelRewards />
{:else if $currentPage === "PlayStyles"}
  <PlayStyles />
{:else if $currentPage === "Quick Chat"}
  <QuickChat />
{:else if $currentPage === "Reputation Levels"}
  <ReputationLevels />
{:else if $currentPage === "Skill Moves"}
  <SkillMoves />
{/if}
