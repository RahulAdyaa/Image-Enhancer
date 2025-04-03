import React from "react";
import ImageUpload from "../components/ImageUpload";
import ImagePreview from "../components/ImagePreview";
import { enhancedImageApi } from "../utils/enhanceImageApi";
import { useState } from "react";

const home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImageHandler = async (file) => {
    //we cant just straight forward write setuploadimage(file), we have to first make object of file that will behave as image and then we will put in there

    setUploadImage(URL.createObjectURL(file));
    setLoading(true);
    try {
      const enhancedURL = await enhancedImageApi(file)
      setEnhancedImage(enhancedURL.image);
      setLoading(false)
      
    } catch (error) {
      console.log(error.message);
      alert('Error while enhancing the image . Please try again later')
    }
    //call the API to enhance the image
  };

  return (
    <>
      <ImageUpload uploadImageHandler={uploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage}
      />
    </>
  );
};

export default home;
