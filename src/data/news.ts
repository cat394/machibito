export type Importance = 'high' | 'low' | 'medium';

export type NewsDayData = {
	day: number;
	importance: Importance;
	summary: string;
	news: string;
};

export type NewsMonthData = {
	month: number;
	details: NewsDayData[];
};

export type NewsYearData = {
	year: number;
	data: NewsMonthData[];
};

export type News = NewsYearData[];

const news: News = [
	{
		year: 2023,
		data: [
			{
				month: 12,
				details: [
          {
            day: 20,
            importance: 'high',
            summary: '物語の一部修正',
            news: '物語を見直し、より美しい表現になるよう修正を加えました。一通りの流れに変更はありませんが、更なる深みを味わうことが出来ると思います。
            '
          }

        ],
			},
			{
				month: 9,
				details: [
					{
						day: 15,
						importance: 'medium',
						summary: 'お問い合わせページの削除',
						news: 'お問い合わせやSNSに関しては自分のポートフォリオサイトから送られてくるよう集中管理した方が効率的だと判断したため削除しました。<br>その代わりに私個人のポートフォリオサイトへのリンクを配置しました。',
					},
				],
			},
			{
				month: 8,
				details: [
					{
						day: 15,
						importance: 'high',
						summary: 'ウェブサイトの公開日',
						news: '今日は記念すべき、本ウェブサイトの公開日です！ノベルゲームの主要な部分である、音と画像と文字で味わえるウェブサイトを目指して作りました。',
					},
				],
			},
		],
	},
];

news.sort((a, b) => b.year - a.year);

for (let newsYear of news) {
	for (let newsMonth of newsYear.data) {
		newsMonth.details.sort((a, b) => b.day - a.day);
	}
}

export { news };
