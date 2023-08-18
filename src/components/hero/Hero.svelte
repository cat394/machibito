<script>
  import LinkButton from "../linkButton/LinkButton.svelte";
  import Icon from "../icon/Icon.svelte";
</script>

<div 
  class="my-hero relative w-full bg-no-repeat bg-cover shadow-[inset_0_0_15.5px_3.5px_#d4d4d4]"
>
  <div 
    class="absolute bottom-[12px] left-[12px] opacity-80"
  >
    <LinkButton
      to="https://novelgame.jp/games/show/7057"
      target="_blink"
      extraClasses="rounded-full"
    >
      ゲームでプレイする
      <Icon name="arrow_outward" />
    </LinkButton>
  </div>
</div>

<style>
  .my-hero {
    background-image: url("https://res.cloudinary.com/machibito/image/upload/f_auto,q_auto,c_scale/v1692327434/title_screen_oyu0c5.jpg");
    aspect-ratio: 1000 / 563;
  }
</style>
