<script>
  import { credits } from "../../data/credits";
  import ProfileCards from "./ProfileCards.svelte";
</script>

<div class="grid gap-[5rem]">
  {#each credits as creditDetail}
  <div>
    <h3 
      class="border-l-2 border-l-secondary border-solid p-2 mb-4"
    >
      {creditDetail.category}
    </h3>
    <ProfileCards {creditDetail} />
  </div>
  {/each}
</div>