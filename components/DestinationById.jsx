'use client'
import Image from "next/image"
import {  DeleteDestinationByIdActions, UpdateDestinationAction } from "../app/Actions"
import { redirect } from "next/navigation"





export default function Upload({GetDestinationByid}){
// const [successMessage,setSuccessMessage] = useState(false)

    const handleUpdate = async (formData) => {
    const res = await UpdateDestinationAction(formData);
      if(res.success){
        redirect('/Admin_Dashboard')
  }

}

   async function HandleDelete(getCurrentId) {

    await DeleteDestinationByIdActions(getCurrentId)
        redirect('/Admin_Dashboard')
   }

    return(
        <div className="p-4 mt-0">
            {/* <h1 className="text-2xl font-bold mb-4">Upload Destination</h1> */}
            {/* Add your upload form or component here */}

             
                {
                GetDestinationByid?.imageUrl && (
                   <Image
                      src={GetDestinationByid.imageUrl}
                      alt="destination"
                       width={120}
                           height={120}
                       />
                     )
                    }       

            <form action={handleUpdate} className="mt-5">
                 
                   <input type="hidden" name="id" defaultValue={GetDestinationByid?._id} />
                
                <div className="">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter destination name" className="mt-1 block w-full rounded-md
                     border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4" 
                    //  value={formData.name}
                    defaultValue={GetDestinationByid?.name}
                    //  onChange={(e)=> setFormData({...formData,name:e.target.value})}
                     
                     />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mt-4">Description</label>
                    <textarea id="description" name="description" placeholder="Enter destination description" 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500
                     focus:ring-indigo-500 sm:text-sm p-4" 
                     
                    // value={formData.description}
                    defaultValue={GetDestinationByid?.description}
                    //  onChange={(e)=> setFormData({...formData,description:e.target.value})}
                     ></textarea>
                </div>
                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mt-4">Location</label>
                    <input type="text" id="location" name="location" placeholder="Enter destination location" 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500
                     focus:ring-indigo-500 sm:text-sm p-4" 
                     
                    //    value={formData.location}
                    defaultValue={GetDestinationByid?.location}
                    //  onChange={(e)=> setFormData({...formData,location:e.target.value})}
                     />
                </div>
                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700 mt-4">Image</label>
                    <input type="file" id="image" name="image" accept="image/*"
                     className="mt-1 block w-full rounded-md border-gray-300
                      shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4" 
                    // value={formData.image}
                    defaultValue={GetDestinationByid?.image}
                    //  onChange={(e)=> setFormData({...formData,image:e.target.value})}
                      />
                        
                      
                </div>



                <div className="flex gap-4">
                     <button type="submit"  className="mt-4 px-4 
                py-  2 bg-indigo-600 p-3 cursor-pointer text-white rounded-md hover:bg-indigo-700">Update</button>
                 
                   <button type="submit"  onClick={()=> HandleDelete(GetDestinationByid?._id)}
                    className="mt-4 px-4 
                py-  2 bg-red-400 p-3 cursor-pointer text-white rounded-md hover:bg-red-500">Delete</button>

                </div>
              
               
                   {/* {!successMessage && <p className="mt-4 text-green-600">{successMessage}</p>} */}

                
            </form>



            
                    
                    
          
        </div>
    )
}