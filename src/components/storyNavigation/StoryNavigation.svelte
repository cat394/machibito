<script lang="ts">
  import StoryNavigationButton from "./StoryNavigationButton.svelte";
  
  export let episode: number | undefined;

  let episodesPath = "/episodes/";
</script>

{#if episode || episode === 0}
<nav
  class="absolute bottom-0 left-0 w-full grid grid-cols-[repeat(3,minmax(max-content,1fr))] bg-[black] border-t border-neutral-500"
>
  {#if episode === 0}
  <div></div>
  {:else}
  <StoryNavigationButton
    to={`${episodesPath}${episode - 1}`}
    icon="before"
    text="戻る"
  />
  {/if}

  <StoryNavigationButton 
    to="/story" 
    text="物語を閉じる"
    style="border: 1px solid hsl(var(--p)); border-top: none; border-bottom: none;"
  />
  {#if episode === 0 || episode === 4}
  <div></div>
  {:else}
  <StoryNavigationButton 
    to={`${episodesPath}${episode + 1}`} 
    icon="next"
    text="進む"
  />
  {/if}
</nav>
{/if}