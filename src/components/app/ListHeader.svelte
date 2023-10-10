<script lang="ts">
  import { Button, Heading, Icon, InputText } from "../library";
  export let filter: string = undefined;
  export let setFilter: (value) => void = undefined;
  export let title: string;

  const clearFilter = () => {
    filter = "";
  };
</script>

<div class="mb-3 row">
  <div class={`col-${setFilter ? 6 : 12}`}>
    <Heading level={1}>{title}</Heading>
  </div>
  {#if setFilter}
    <div class="col-6">
      <div class="input-group">
        <InputText onInput={setFilter} placeholder="Search..." value={filter} />
        <Button onClick={clearFilter}>
          <Icon name="xmark" />
        </Button>
      </div>
    </div>
  {/if}
</div>
