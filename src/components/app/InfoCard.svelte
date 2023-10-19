<script lang="ts">
  import { Badge, Card, Heading, Stars } from "../library";
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
        <img
          alt={title}
          height={64}
          src={`https://media.contentapi.ea.com/content/dam/ea/fc/fc-24/common/playstyles/${iconPath}.png.adapt.1456w.png`}
          width={64}
        />
      </div>
      <div class="col">
        <div class="fw-bold">Related attributes</div>
        {#if relatedAttributes.length}
          <ul class="ps-3">
            {#each relatedAttributes as attribute}
              <li>{attribute}</li>
            {/each}
          </ul>
        {:else}
          --
        {/if}
      </div>
    </div>
  {/if}
</Card>
