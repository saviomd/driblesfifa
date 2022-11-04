<script lang="ts">
  export let color: string = undefined;
  export let name: string;
</script>

<i class={`fa-fw fa-solid fa-${name} ${color ? `text-${color}` : ""}`} />
