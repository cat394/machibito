export type Importance = "high" | "low" | "medium";

export type NewsDayData = {
  day: number;
  importance: Importance;
  summary: string;
  news: string;
}

export type NewsMonthData = {
  month: number;
  details: NewsDayData[];
}

export type NewsYearData = {
  year: number;
  data: NewsMonthData[];
}

export type News = NewsYearData[];

const news: News = [
  {
    year: 2023,
    data: [
      {
        month: 8,
        details: [
          { day: 15, importance: "high", summary: "本ウェブサイトの公開日", news: "今日は記念すべき、本ウェブサイトの公開日です！<br>ほとんど完成していますが、パフォーマンスを向上させたり、不安定な動作を解消するための作業だったりと、まだちょっとやることがあります。<br>何もなくても記念日として一年ごとに何か呟くかもしれません。" },

          { day: 16, importance: "medium", summary: "バグの修正とパフォーマンスの向上", news: "BGMやSEの音量をモバイルデバイスでも適切に聴こえる様にしたり、フォームを改善したり、画像拡張子を変更したりなど、かなりウェブサイトを改善しました。"},

          { day: 19, importance: "low", summary: "些細なパフォーマンスの向上", news: "使用しているアイコンを静的アセットに変更しようと試みましたが・・・、初回ロード後はCDNでキャッシュされているならパフォーマンスにはあまり問題ないんじゃないかな、と思って現状維持にしました。<br>変更点としては、タイトル画像の文字の表示がどうしてもデスクトップなどの大きな画面では画質悪く見えてしまっていたのでそこだけは、かなりサイズの大きい画像をCloudinaryを経由することで、それを自動的に各デバイスに最適化したものを配信してくれるようにしました。"}
        ]
      }
    ]
  }
]

news.sort((a, b) => b.year - a.year);

for (let newsYear of news) {
  for (let newsMonth of newsYear.data) {
      newsMonth.details.sort((a, b) => b.day - a.day);
  }
}

export { news };