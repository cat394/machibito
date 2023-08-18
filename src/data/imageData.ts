export type ImageDetail = {
  name: string;
  id: string;
  alt: string;
};

export type ImageCategory = {
  category: string;
  path: string;
  details: ImageDetail[];
};


export const imageData: ImageCategory[] = [
  {
    category: "root",
    path: "/",
    details: [
      { name: "title_screen", id: "oyu0c5", alt: "『待ち人』のタイトル画面" },
      { name: "shrine_evening", id: "yoogj7", alt: "夕暮れ時の神社(正面)" },
      { name: "shrine_evening_sepia", id: "oazqlv", alt: "夕暮れ時の神社(正面かつセピア)" },
      { name: "shrine_evening_diagonal", id: "mlhpko", alt: "夕暮れ時の神社(斜め)" },
      { name: "shrine_night_diagonal", id: "h28anj", alt: "夜の神社(斜め)" },
      { name: "shrine_rain", id: "yeh01y", alt: "雨の日の神社(正面)" },
      { name: "shrine_rain_diagonal", id: "huf1gn", alt: "雨の日の神社(斜め)" },
      { name: "shrine_night_step", id: "ggplic", alt: "夜の神社の石階段" },
      { name: "shrine_rain_step", id: "abymfs", alt: "雨の日の石階段" },
      { name: "shrine_torii_evening", id: "t54p6u", alt: "神社の鳥居" },
      { name: "shrine_torii_evening_sepia", id: "d887wo", alt: "神社の鳥居(セピア)"},
      { name: "shrine_torii_evening_dark", id: "b1m08r", alt: "神社の鳥居(夕闇)"},
      { name: "rain", id: "k4qhbr", alt: "雨空" },
      { name: "shrine_evening_with_girl", id: "qriyea", alt: "少女のいる夕暮れ時の神社" }

    ]
  }
]