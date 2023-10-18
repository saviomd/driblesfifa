<script lang="ts">
  import { Badge, Card, Heading, Stars } from "../library";
  import type {
    CelebrationType,
    PlayStyleType,
    StarCountType,
  } from "../../types";
  export let description: string;
  export let relatedAttributes: string[] = [];
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
  {#if relatedAttributes.length}
    <div class="fw-bold mt-3">Related attributes</div>
    <ul class="ps-3">
      {#each relatedAttributes as attribute}
        <!-- !!! badges? -->
        <li>{attribute}</li>
      {/each}
    </ul>
  {/if}
</Card>
