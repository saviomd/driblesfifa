<script lang="ts">
  import { ListHeader, QuickChatCard } from "../components/app";
  import { quickChat } from "../data";
</script>

<main>
  <ListHeader title="Quick Chat" />
  <ul class="list-unstyled">
    {#each quickChat as { category, messages } (`${category}`)}
      <li>
        <QuickChatCard {category} {messages} />
      </li>
    {/each}
  </ul>
</main>
