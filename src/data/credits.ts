export type CreditData = {
  name: string;
  materialNames?: string[];
  link: string;
}

export type Category = "Author" | "Support" | "Image" | "BGM" | "SE" | "プラグイン";

export type CreditDetail = {
  category: Category;
  data: CreditData[];
}

export type Credits = CreditDetail[];



export const credits: Credits = [
  {
    category: "Author",
    data: [
      { name: "りょう", link: "https://twitter.com/RYO_3789" }
    ] 
  },
  {
    category: "Support",
    data: [
      { name: "AMADEUS", link: "https://twitter.com/amadeus_jpn" }
    ]
  },
  {
    category: "Image",
    data: [
      { name: "空彩コレクション", materialNames: ["B-049"], link: "http://loo.sakura.ne.jp/sozai_m.html" },
      { name: "あやえも研究所", materialNames: ["社殿", "石階段"], link: "https://ayaemo.skr.jp/" },
      { name: "きまぐれアフター", materialNames: ["rain"], link: "https://gakaisozai.seesaa.net/" },
      { name: "kakeru", materialNames: ["神社の鳥居", "夕闇へと落ちる鳥居"], link: "https://commons.nicovideo.jp/users/70214953" }
    ]
  },
  {
    category: "BGM",
    data: [
      { name: "ポケットサウンド", materialNames: ["秋風吹く庭で"], link: "https://pocket-se.info/" },
      { name: "音楽の卵", materialNames: ["想いを抱いて"] , link: "https://ontama-m.com/index.html" },
      { name: "創作堂さくら紅葉", materialNames: ["farewell time"], link: "https://yukizakura.net/"},
      { name: "High Melody", materialNames: ["Unforgettable Dream Tale"], link: "https://www.youtube.com/@HighMelody"}
    ]
  },
  {
    category: "SE",
    data: [
      { name: "ポケットサウンド", materialNames: ["神社の本坪鈴の音"], link: "https://pocket-se.info/" },
      { name: "VSQ plus+", materialNames: ["雨8"], link: "https://vsq.co.jp/plus/" },
    ]
  },
  {
    category: "プラグイン",
    data: [
      { name: "脳硝子", link: "https://twitter.com/nekomilkcat" },
      { name: "ねこの", link: "https://twitter.com/nekomilkcat" }
    ]
  }
]