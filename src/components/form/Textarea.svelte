<script>
  import Label from "./Label.svelte";
  export let fieldName = "";
  export let required = true;
</script>

<Label {fieldName}>
  <textarea
    class="textarea textarea-secondary w-full h-[20vh] text-base pt-3"
    placeholder="Type your message"
    name="message"
    {required}
  />
</Label>
