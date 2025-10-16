<script lang="ts">
  import { Badge, Card, Heading, Image } from "../library";
  import type { IPlayStyle } from "../../types";
  export let description: IPlayStyle["description"];
  export let iconPath: IPlayStyle["iconPath"];
  export let name: IPlayStyle["name"];
  export let type: IPlayStyle["type"];
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
  <div class="mt-3 row">
    <div class="col-auto">
      <Image
        alt={name}
        height={72}
        src={`https://drop-assets.ea.com/images/${iconPath}.png?q=40&w=2560`}
        width={72}
      />
    </div>
    <div class="col">{description}</div>
  </div>
</Card>
