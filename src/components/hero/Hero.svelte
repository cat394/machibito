<script>
  import LinkButton from "../linkButton/LinkButton.svelte";
  import Icon from "../icon/Icon.svelte";
  import titleScreen from "../../assets/title_screen.jpg";
</script>

<div 
  class="relative shadow-[inset_0_0_15.5px_3.5px_#d4d4d4]"
>
  <img src={titleScreen.src} alt="待ち人のタイトルスクリーン" />
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
