<script lang="ts">
  import { news } from "../../data/news";
  import Accordion from "../accordion/Accordion.svelte";
  import Badge from "../badge/Badge.svelte";

  const badgeSize = "badge-sm";
</script>

<div class="grid gap-10">
{#each news as newsYear}
  {#each newsYear.data as newsMonth}
    {#each newsMonth.details as newsDay}
    <Accordion name="news">
      <div 
        slot="title" 
        class="flex gap-4 items-center font-bold"
      >
        {#if newsDay.importance === "low"}
        <Badge 
          extraClass="badge-info {badgeSize}" 
        />
        {:else if newsDay.importance === "medium"}
        <Badge 
          extraClass="badge-warning {badgeSize}" 
        />
        {:else if newsDay.importance === "high"}
        <Badge 
          extraClass="badge-error {badgeSize}" 
        />
        {/if}
        <div 
          class="flex flex-col md:flex-row md:gap-3"
        >
          <p>{newsYear.year}.{newsMonth.month}.{newsDay.day}</p>
          <p>{newsDay.summary}</p>
        </div>
      </div>
      <p slot="content">{@html newsDay.news}</p>
    </Accordion>
    {/each}
  {/each}
{/each}
</div>