<script>
  import Label from "./Label.svelte";
  export let fieldName = "";
  export let extraClass = "";
  export let name = "";

  let placeholder = "";

  $: switch (name) {
    case "name":
      placeholder = "Type your name";
      break;
    case "email":
      placeholder = "Type your email";
      break;
    default:
      placeholder = "";
  }
</script>

<Label {fieldName}>
  <input
    class="input input-bordered input-secondary w-full {extraClass}"
    {name}
    {placeholder}
    {...$$props}
  />
</Label>
