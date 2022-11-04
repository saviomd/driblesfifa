<script lang="ts">
  import { Button, Card, Heading, Icon } from "../library";
  import { currentPage } from "../../stores";
  export let icon: string;
  export let title: string;
</script>

<Card>
  <div class="row">
    <div class="col-auto display-1">
      <Icon name={icon} />
    </div>
    <div class="col">
      <Heading level={1}>{title}</Heading>
      <div class="text-end">
        <Button onClick={() => ($currentPage = title)} stretched={true}>
          <Icon name="chevron-right" />
        </Button>
      </div>
    </div>
  </div>
</Card>
