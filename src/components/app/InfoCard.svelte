<script lang="ts">
  import { Badge, Card, Heading, Image, Stars } from "../library";
  import type {
    CelebrationType,
    PlayStyleType,
    StarCountType,
  } from "../../types";
  export let description: string;
  export let iconPath: string = "";
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
  {#if iconPath}
    <div class="mt-3 row">
      <div class="col-auto">
        <Image
          alt={title}
          height={64}
          src={`https://drop-assets.ea.com/images/${iconPath}.png?q=40&w=2560`}
          width={64}
        />
      </div>
      <div class="col">
        Related attributes
        {#if relatedAttributes.length}
          <ul class="fw-bold ps-3">
            {#each relatedAttributes as attribute}
              <li>{attribute}</li>
            {/each}
          </ul>
        {:else}
          <div class="fw-bold">--</div>
        {/if}
      </div>
    </div>
  {/if}
</Card>
