'use client'



export default function HelpPage({FetchHelp}){
  
   
    return(
        <div className="p-4"> 
            <h1 className="text-2xl font-bold mb-4">
                Help & Support
            </h1>
            
        
              <div className="bg-white shadow-lg p-4">

                    {FetchHelp && FetchHelp.length > 0 ?
                  
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                          {FetchHelp.map(item =>

                         
                        <button 
                        className="bg-gray-400 p-2 text-white font-serif text-xl cursor-pointer
                         hover:bg-gray-500" key={item?._id}>{item?.number}</button>
                         )} 

                       </div>
                       :
                       <div className="flex items-center justify-center h-48">   


                          <div className="flex flex-col items-center gap-4">
                               <h1 className="font-bold text-4xl text-center">No<br/>Any ask help or support</h1>
                        
                          </div>

                      
                          </div>
                    }
                        
                </div>   
              


        </div>
    )
}