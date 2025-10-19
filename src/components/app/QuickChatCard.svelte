<script lang="ts">
  import { Card, Heading } from "../library";
  import type { IQuickChat } from "../../types";
  export let category: IQuickChat["category"];
  export let messages: IQuickChat["messages"];
</script>

<Card>
  <Heading level={2}>{category}</Heading>
  <ul>
    {#each messages as { command, name } (`${name}`)}
      <li>
        <div class="row">
          <div class="col">{name}</div>
          <div class="col-auto">
            <span class="fw-bold">{command}</span>
          </div>
        </div>
      </li>
    {/each}
  </ul>
</Card>
