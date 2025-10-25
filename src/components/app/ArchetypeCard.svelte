<script lang="ts">
  import { Badge, Card, Heading, Image } from "../library";
  import type { IArchetype } from "../../types";
  export let inspiredBy: IArchetype["inspiredBy"];
  export let keyAttributes: IArchetype["keyAttributes"];
  export let name: IArchetype["name"];
  export let signaturePerks: IArchetype["signaturePerks"];
  export let signaturePlayStyles: IArchetype["signaturePlayStyles"];
  export let specializations: IArchetype["specializations"];
  export let type: IArchetype["type"];
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
        Inspired by
        <div class="fw-bold">{inspiredBy}</div>
      </div>
      <div class="col-auto">
        Signature PlayStyles
        <ul class="fw-bold ps-3">
          {#each signaturePlayStyles as { iconPath, name } (`${name}`)}
            <li>
              <Image
                alt={name}
                height={36}
                src={`https://drop-assets.ea.com/images/${iconPath}.png?q=40&w=2560`}
                width={36}
              />
              {name}
            </li>
          {/each}
        </ul>
      </div>
      <div class="col-auto">
        Key Attributes
        <ul class="fw-bold ps-3">
          {#each keyAttributes as attribute (`${attribute}`)}
            <li>{attribute}</li>
          {/each}
        </ul>
      </div>
      <div class="col-auto">
        Specializations
        <ul class="fw-bold ps-3">
          {#each specializations as specialization (`${specialization}`)}
            <li>{specialization}</li>
          {/each}
        </ul>
      </div>
      <div class="col-auto">
        Signature Perks
        <ul class="fw-bold ps-3">
          {#each signaturePerks as perk (`${perk}`)}
            <li>{perk}</li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</Card>
