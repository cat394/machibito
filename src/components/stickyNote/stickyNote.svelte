<script lang="ts">
  import type { Images, ImageData, Detail } from "../../data/mediaType";
  import { images } from "../../data/images";
  import Icon from "../icon/Icon.svelte";

  export let type: "note" | "attention" | "warn" = "note";
  let iconName = "note";
  let color = "";
  let title = "";
  const green = "191, 149, 249";
  const yellow = "255, 184, 107";
  const red = "255, 87, 87";

  $: switch (type) {
      case "note":
        iconName = "sticky_note_2";
        color = green;
        title = "ノート";
        break;

      case "attention":
        iconName = "error";
        color = yellow;
        title = "注意";
        break;

      case "warn":
        iconName = "warning";
        color = red;
        title = "警告";
        break;
    }
</script>

<aside
  class="sticky-note p-4 inline-block border-l-2"
  style="border-color: rgb({color}); background-color: rgba({color}, 0.5);"
>
  <div class="flex items-center gap-2 opacity-70 mb-2.5">
    <Icon name={iconName} />
    <span>{title}</span>
  </div>
  <div><slot /></div>
</aside>