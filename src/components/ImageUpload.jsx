import React from "react";

const ImageUpload = (props) => {
  const ShowImageHandler = (e) => {
    const file=e.target.files[0]
    if(file){
      props.uploadImageHandler(file)
    }
  };
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-full max-w-2xl">
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition-all"
      >
        <input type="file" name="" id="fileInput" className="hidden" onChange={ShowImageHandler} />
        <span className="font-medium text-lg text-gray-600">
          {" "}
          Click and drag to upload images
        </span>
      </label>
    </div>
  );
};

export default ImageUpload;
