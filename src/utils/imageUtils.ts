import { imageData, ImageDetail, ImageCategory } from '../data/imageData';

export const parseImageName = (name: string): [string, string] => {
  if (name.includes(":")) {
      const [categoryName, imageName] = name.split(":");
      return [categoryName, imageName];
  } else {
      return ["root", name];
  }
}


export const findImageDetail = (
  categoryName: string,
  imageName: string
): { detail: ImageDetail; category: ImageCategory } | null => {
  const category = imageData.find(cat => cat.category === categoryName);
  if (!category) return null;
  const detail = category.details.find(detail => detail.name === imageName);
  if (!detail) return null;
  return { detail, category };
}