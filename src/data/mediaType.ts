export type MediaType = "image" | "audio";

export type ImageData = {
  name: string;
  width: number;
  height: number;
  alt: string;
}

export type AudioData = {
  name: string;
  alt: string;
  audioTitle: string;
}

export type Detail<T> = {
  format: string,
  data: T[]
}

export type AudioDetail = Detail<AudioData>;

export type ImageDetail = Detail<ImageData>;

export type MediaDetail<T> = {
  path: string;
  details: Detail<T>[]
}

export type Images = MediaDetail<ImageData>;
export type Audio = MediaDetail<AudioData>;

