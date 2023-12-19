<script lang="ts">
  export let lineHeight = "1px";
  export let templateLineHeight: "high" | "middle" | "low" = "low";
  export let spaceHeight = "1px";
  export let templateSpaceHeight: "high" | "middle" | "low" = "middle";

  $: lineHeight = (() => {
    switch (templateLineHeight) {
      case "high":
        return "3px";
      case "middle":
        return "2px";
      case "low":
        return "1px";
      default:
        return lineHeight;
    }
  })();

  $: spaceHeight = (() => {
    switch (templateSpaceHeight) {
      case "high":
        return "6.25rem";
      case "middle":
        return "3rem";
      case "low":
        return "1.25rem";
      default:
        return spaceHeight;
    }
  })();
</script>

<div
  class="divider w-[90%] mx-auto"
  style="height: {lineHeight}; margin-block: {spaceHeight}"
/>
