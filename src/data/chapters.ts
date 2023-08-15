type Chapter = { name: string, to: string };
type Chapters = Chapter[];

const episodes = 4;

export const chapters: Chapters = Array.from({length: episodes}, (_, index) => {
  const commonPath = "/episodes/";
  const episode = index + 1;
  
  return { name: `${episode}日目`, to: `${commonPath}${episode}` };
});