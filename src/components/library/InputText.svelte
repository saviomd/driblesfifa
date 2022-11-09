<script lang="ts">
  export let onInput: (value) => void;
  export let placeholder: string = undefined;
  export let value: any;

  const handleInput = ({ target }) => {
    onInput(target.value);
  };
</script>

<input
  class="form-control form-control-sm"
  on:input={handleInput}
  {placeholder}
  type="text"
  {value}
/>
