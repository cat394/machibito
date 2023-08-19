import { AdvancedImage } from '@cloudinary/react';
import cld from '../../cloudinaryConfig';
import { parseImageName, findImageDetail } from '../../utils/imageUtils';
import { ImageDetail, ImageCategory } from '../../data/imageData';

type ImageProps = {
  name: string;
}

const Image: React.FC<ImageProps> = ({ name }) => {
  const [categoryName, imageName] = parseImageName(name);

  const result = findImageDetail(categoryName, imageName);
  if (!result) {
    console.error(`Image with name ${name} not found`);
    return null;
  }

  const imagePath = `${result.category.path}${result.detail.name}_${result.detail.id}`;
  const myImage = cld.image(imagePath);

  return <div className='my-[1.25rem]'>
    <AdvancedImage cldImg={myImage} alt={result.detail.alt} />
  </div>;
}

export default Image;