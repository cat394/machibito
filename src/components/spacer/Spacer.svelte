<script lang="ts">
  import type { SpacerType } from "./SpacerType";

  export let spaceHeight = "1px";
  export let templates: SpacerType = "middle";

  $: spaceHeight = (() => {
    switch (templates) {
      case "high":
        return "6.25em";
      case "middle":
        return "3.125em";
      case "low":
        return "1.25em";
      default:
        return spaceHeight;
    }
  })();
</script>

<div style="height: {spaceHeight}" />
