<script lang="ts">
  import { Button, Card, Heading, Icon } from "../library";
  import { currentPage } from "../../stores";
  export let icon: string;
  export let title: string;
</script>

<Card hasOpacity>
  <div class="align-items-center row">
    <div class="col-auto display-3">
      <Icon name={icon} />
    </div>
    <div class="col">
      <Heading level={1}>{title}</Heading>
    </div>
    <div class="col-auto">
      <Button
        onClick={() => {
          $currentPage = title;
          window.scrollTo({ behavior: "instant", top: 0 });
        }}
        stretched={true}
      >
        <Icon name="chevron-right" />
      </Button>
    </div>
  </div>
</Card>
