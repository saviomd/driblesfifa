<script lang="ts">
  import { Card, Heading } from "../library";
  import type { IQuickChat } from "../../types";
  export let category: IQuickChat["category"];
  export let messages: IQuickChat["messages"];
</script>

<Card>
  <Heading level={2}>{category}</Heading>
  {#each messages as { command, name } (`${name}`)}
    <div class="row">
      <div class="col-6 text-end">{name}</div>
      <div class="col-6">
        <span class="fw-bold">{command}</span>
      </div>
    </div>
  {/each}
</Card>
