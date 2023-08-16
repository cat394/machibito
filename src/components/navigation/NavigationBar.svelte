<script>
  import { createEventDispatcher } from "svelte";
  import Media from "../media/Media.svelte";
  import Icon from "../icon/Icon.svelte";

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("hamburger-button-click");
  }
</script>

<div 
  class="fixed w-full m-auto bottom-5 z-[900]"
>
  <div 
    class="w-[90%] mx-auto"
  >
    <div 
      class="border border-solid border-[black] rounded-md bg-neutral-800"
    >
      <div 
        class="flex justify-between items-center py-3 px-5"
      >
        <span class="text-neutral-50">
          待ち人
        </span>
        <button 
          class="flex items-center" 
          on:click={handleClick}
        >
          <Icon name="menu" />
        </button>
      </div>
    </div>
  </div>
</div>