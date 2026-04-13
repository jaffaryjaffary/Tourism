'use client'


import { FaHeadphones } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { DeleteHelpAction } from "../app/Actions";
export default function HelpPage({FetchHelp}){


    async function HandleDelete(id){
        const confirmDelete = window.confirm("Are you sure you want to delete this help request?");
        if (!confirmDelete) {
          return; // Exit if the user cancels the deletion
        }
        

            await DeleteHelpAction(id,"/support")
            alert("Help request deleted successfully.");
       
        }
  
   
    return(
        <div className="p-4"> 
            <h1 className="text-2xl font-bold mb-4 ">
                Help & Support
            </h1>
            
        
              <div className="">

                    {FetchHelp && FetchHelp.length > 0 ?
                  
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                          {FetchHelp.map(item =>

                         
                        <div
                        className="border p-2  border-t-5 border-gray-400  text-xl cursor-pointer flex-col
                         " key={item?._id}>
                            
                            <h1 className="text-xl font-semibold flex items-center gap-1"><span><FaHeadphones /></span>{item?.number}</h1>

                             <p className="text-sm text-gray-500 mt-4"> {new Date(item?.createdAt).toLocaleString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })}</p>
                        <button onClick={() => HandleDelete(item._id)}
                         className="flex items-center cursor-pointer mt-5 gap-2 bg-red-500 text-white p-2 rounded hover:bg-red-600">
                            <FaTrash /> Remove
                        </button>
                             </div>
                        
                      
                         
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