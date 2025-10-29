<script lang="ts">
  import { Badge, Card, Heading, Image } from "../library";
  import type { IPlayStyle } from "../../types";
  export let description: IPlayStyle["description"];
  export let iconPath: IPlayStyle["iconPath"];
  export let name: IPlayStyle["name"];
  export let type: IPlayStyle["type"];
  export let unlockCriteria: IPlayStyle["unlockCriteria"];
</script>

<Card>
  <div class="row">
    <div class="col">
      <Heading level={2}>{name}</Heading>
    </div>
    <div class="col-auto">
      <Badge>{type}</Badge>
    </div>
  </div>
  <div class="table-responsive">
    <div class="flex-nowrap row">
      <div class="col-auto">
        <Image
          alt={name}
          height={72}
          src={`https://drop-assets.ea.com/images/${iconPath}.png?q=40&w=2560`}
          width={72}
        />
      </div>
      <div class="border-secondary border-start col-auto">
        Unlock criteria
        <ul class="ps-3">
          {#each Object.entries(unlockCriteria) as [name, value] (`${name}`)}
            <li>
              {name}
              <span class="fw-bold">{value}</span>
            </li>
          {/each}
        </ul>
      </div>
      <div class="border-secondary border-start col-11">{description}</div>
    </div>
  </div>
</Card>
