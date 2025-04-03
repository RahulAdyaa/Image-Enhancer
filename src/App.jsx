import Home from './components/Home.jsx'
function App() {

  return (
  
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200 py-8 px-4 '> 
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">AI Image Enhancer</h1>
                <p className="text-lg text-gray-600">Enhance your images with the power of AI technology.</p>
            </div>

            <Home/>
            <div className='text-lg text-gray-500 mt-6' >
              Upload your image and let AI enhance it for you

            </div>
      </div>
      
  
  )
}

export default App
