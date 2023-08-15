<script lang="ts">
  import { characterLineSetting } from "../../data/characterLineSetting";
  import type { StyleSetting, Character } from "../../data/characterLineSetting";

  export let name: "man" | "girl" = "man";
  export let ver: string = "";

  // baseのスタイルを取得
  const baseClasses: string = (characterLineSetting.base.classes || []).join(" ");
  const baseStyles: string = (characterLineSetting.base.styles || []).join(";");

  // characterのスタイルを取得する関数
  function getCharacterStyles(characterName: string, version?: string): { classes: string, styles: string } {
    if (!characterLineSetting.characters) return { classes: "", styles: "" };

    const character: Character | undefined = characterLineSetting.characters.find(char => char.name === characterName);
    if (!character) return { classes: "", styles: "" };

    const styleVersion: string = version || character.defaultVersion;
    const characterStyle: StyleSetting | undefined = character.styles.find(style => style.ver === styleVersion);

    if (!characterStyle) return { classes: "", styles: "" };

    const classes: string = [...(characterStyle.classes || []), ...(characterLineSetting.base.classes || [])].join(" ");
    const styles: string = [...(characterStyle.styles || []), ...(characterLineSetting.base.styles || [])].join(";");

    return { classes, styles };
  }

  const characterStyles: { classes: string, styles: string } = getCharacterStyles(name, ver);
</script>

<div class="{baseClasses}" style="{baseStyles}">
  <div class="{characterStyles.classes}" style="{characterStyles.styles}">
    <p><slot /></p>
  </div>
</div>
