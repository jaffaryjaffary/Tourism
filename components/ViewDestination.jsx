'use client'

import { useRouter } from "next/navigation"

export default function ViewDestinationPage({FetchAllDestination}){
     const router = useRouter()

    const HandleView =(GetCurrentId)=>{
      router.push(`/12345VdstId/${GetCurrentId}`)
    }
   
    return(
        <div className="p-4"> 
            <h1 className="text-2xl font-bold mb-4"></h1>
            {/* Add your view destination content or component here */}         
            <p>This is the View Destination page. You can display the details of a specific destination here.</p>
        
              <div className="bg-white shadow-lg p-4">

                    {FetchAllDestination && FetchAllDestination.length > 0 ?
                  
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                          {FetchAllDestination.map(item =>

                         
                        <button onClick={()=>HandleView(item?._id)}
                        className="bg-gray-400 p-2 text-white font-serif text-xl cursor-pointer hover:bg-gray-500" key={item?._id}>{item?.name}</button>
                         )} 

                       </div>
                       :
                       <div className="flex items-center justify-center h-48">   


                          <div className="flex flex-col items-center gap-4">
                               <h1 className="font-bold text-4xl text-center">No<br/> Destination Available</h1>
                          <button 
                            onClick={()=> router.push('/12345UploadImg')}
                          className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded">
                            Add Destination
                          </button>
                          </div>

                      
                          </div>
                    }
                        
                </div>   
              


        </div>
    )
}