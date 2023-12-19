<script lang="ts">
  import type { Category } from "../../data/credits";
  import type { CreditData } from "../../data/credits";
  import ProfileItem from "./ProfileItem.svelte";
  import Icon from "../icon/Icon.svelte";

  type Icon = "photo" | "music_note" | "brand_awareness";

  export let category: Category | undefined;
  export let creditData: CreditData | undefined;

  let iconName: Icon = "photo";

  $: switch (category) {
      case "画像":
        iconName = "photo";
        break;

      case "BGM":
        iconName = "music_note";
        break;

      case "SE":
        iconName = "brand_awareness";
        break;
    }
</script>

{#if category && creditData}
<ul
  class="grid gap-5 p-6 rounded-md shadow-[0_0_10px_3px_#404040] max-w-[440px] bg-neutral-900"
>
  <ProfileItem>
    <Icon name="person" />
    {creditData.name}
  </ProfileItem>
  {#if creditData.materialNames}
  <ProfileItem>
    <Icon name={iconName} />
    <ul class="grid gap-3 text-right">
      {#each creditData.materialNames as materialName}
        <li>{materialName}</li>
      {/each}
    </ul>
  </ProfileItem>
  {/if}
  <ProfileItem>
    <Icon name="link" />
    <div class="max-w-[60%] overflow-hidden whitespace-nowrap text-ellipsis">
      <a 
        class="link link-primary" 
        target="_blank"
        href={creditData.link} 
      >
        {creditData.link}
      </a>
    </div>
  </ProfileItem>
</ul>
{/if}