<script lang="ts">
  import type { CreditDetail } from "../../data/credits";
  import ProfileCard from "./ProfileCard.svelte";

  export let creditDetail: CreditDetail | undefined;
</script>

{#if creditDetail}
<div
   class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,450px),1fr))] gap-8"
>
  {#each creditDetail.data as creditData}
    <ProfileCard category={creditDetail.category} {creditData} />
  {/each}
</div>
{/if}
