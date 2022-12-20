import React, {useEffect} from 'react'



function Loading() {



  return (
    <>
    {console.log(Loading)}
    <div>Loading</div>
    <div className="flex justify-center items-center">
  <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
    
    </>
    

  )
}

export default Loading