<script lang="ts">
  import { Button, Card, Heading, Icon } from "../library";
  import { currentPage } from "../../stores";
  export let icon: string;
  export let title: string;
</script>

<Card hasOpacity>
  <div class="row">
    <div class="col-auto display-3">
      <Icon name={icon} />
    </div>
    <div class="col">
      <Heading level={1}>{title}</Heading>
      <div class="text-end">
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
  </div>
</Card>
