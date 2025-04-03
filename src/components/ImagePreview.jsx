import Loading from "./Loading";
const ImagePreview = (props) => {
  console.log(props)
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {/*Original Image */}
      <div className="bg-white shadow-lg overflow-hidden rounded-xl text-center">
        <h2 className="text-medium font-semibold bg-gray-800 text-white py-2">
          Original Image
        </h2>
        {props.uploaded ?<img  src={props.uploaded} alt="" className="w-full h-full object-cover" />
        : <div className="h-80 bg-gray-200 flex items-center justify-center">
        No image selected
      </div>}
        
       
      </div>

      {/*Enhanced Image */}
      <div className="bg-white shadow-lg overflow-hidden rounded-xl text-center">
        <h2 className="text-medium font-semibold bg-blue-800 text-white py-2">
          Enhanced Image
        </h2>
          {props.enhanced && !props.loading && ( <img src={props.enhanced} alt="" className="w-full h-full object-cover" />)}

          {props.loading ? <Loading/>: (<div className="h-80 bg-gray-200 flex items-center justify-center">
          No enhanced image
        </div>)}
       
        
      </div>
      
    
    </div>
  );
};

export default ImagePreview;
