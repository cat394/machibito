import type { Audio } from "./mediaType";

export const audio: Audio = {
  path: "/assets/audio/",
  details: 
  [
    {
      format: "mp3",
      data: [
        { name: "autumngarden", alt: "秋風吹く庭で", audioTitle: "BGM" },
        { name: "omoiwoidaite", alt: "想いを抱いて", audioTitle: "想いを抱いて" },
        { name: "bell", alt: "神社で鳴らす鐘の音", audioTitle: "鈴を鳴らす" },
        { name: "osaisen", alt: "お賽銭音", audioTitle: "硬貨を入れる" },
        { name: "autumngarden_with_rain", alt: "秋風吹く庭で(雨音入り)", audioTitle: "BGM" },
        { name: "unforgettable_dream_tale", alt: "忘れられない夢の思い出", audioTitle: "BGM"}
      ]
    }
  ]
}