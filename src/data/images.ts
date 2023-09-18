import type { Images } from "./mediaType";

export const images: Images = {
  path: "/assets/images/",
  details:   
  [
    {
      format: "webp",
      data: [
        { name: "shrine_evening", width: 400, height: 300, alt: "夕暮れ時の神社(正面)" },
        { name: "shrine_evening_sepia", width: 400, height: 300, alt: "夕暮れ時の神社(正面かつセピア)" },
        { name: "shrine_evening_diagonal", width: 400, height: 300, alt: "夕暮れ時の神社(斜め)" },
        { name: "shrine_night_diagonal", width: 400, height: 300, alt: "夜の神社(斜め)" },
        { name: "shrine_rain", width: 400, height: 300, alt: "雨の日の神社(正面)" },
        { name: "shrine_rain_diagonal", width: 400, height: 300, alt: "雨の日の神社(斜め)" },
        { name: "shrine_night_step", width: 400, height: 300, alt: "夜の神社の石階段" },
        { name: "shrine_rain_step", width: 400, height: 300, alt: "雨の日の石階段" },
        { name: "shrine_torii_evening", width: 500, height: 281, alt: "神社の鳥居" },
        { name: "shrine_torii_evening_sepia", width: 500, height: 281, alt: "神社の鳥居(セピア)"},
        { name: "shrine_torii_evening_dark", width: 500, height: 281, alt: "神社の鳥居(夕闇)"},
        { name: "rain", width: 484, height: 300, alt: "雨空" },
        { name: "shrine_evening_with_girl", width: 400, height: 300, alt: "少女のいる夕暮れ時の神社" }
      ]
    }
  ]
}