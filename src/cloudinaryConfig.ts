import { Cloudinary } from "@cloudinary/url-gen";

const initCloudinary = () => {
  return new Cloudinary({
    cloud: {
      cloudName: 'machibito'
    }
  });
};

const cld = initCloudinary();

export default cld;