<script lang="ts">
  import { Badge, Card, Heading, Stars } from "../library";
  import type {
    CelebrationType,
    PlayStyleType,
    StarCountType,
  } from "../../types";
  export let description: string;
  export let tag: CelebrationType | PlayStyleType | StarCountType;
  export let title: string;
</script>

<Card>
  <div class="row">
    <div class="col">
      <Heading level={2}>{title}</Heading>
    </div>
    <div class="col-auto">
      <Badge>
        {#if typeof tag === "string"}
          {tag}
        {:else}
          <Stars count={tag} />
        {/if}
      </Badge>
    </div>
  </div>
  <div>{description}</div>
</Card>
