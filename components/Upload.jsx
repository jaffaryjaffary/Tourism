'use client'
import { useState } from "react"
import { UploadUserImageAction } from "../app/Actions"



const initialValue ={
    name:'',
    description:'',
    location:'',
    image:''


}

export default function UploadPage(){
 const [formData,setFormData] = useState(initialValue)





   
    return(
        <div className="p-4">
            {/* <h1 className="text-2xl font-bold mb-4">Upload Destination</h1> */}
            {/* Add your upload form or component here */}


            
            <form action={UploadUserImageAction} className="mt-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter destination name" className="mt-1 block w-full 
                    rounded-md
                     border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4" required 
                     value={formData.name}
                     onChange={(e)=> setFormData({...formData,name:e.target.value})}
                     
                     />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mt-4">Description</label>
                    <textarea id="description" name="description" placeholder="Enter destination description" 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500
                     focus:ring-indigo-500 sm:text-sm p-4" 
                     
                    value={formData.description}
                     onChange={(e)=> setFormData({...formData,description:e.target.value})}
                     ></textarea>
                </div>
                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mt-4">Location</label>
                    <input type="text" id="location" name="location" placeholder="Enter destination location" 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500
                     focus:ring-indigo-500 sm:text-sm p-4" required
                     
                       value={formData.location}
                     onChange={(e)=> setFormData({...formData,location:e.target.value})}
                     />
                </div>
                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700 mt-4">Image</label>
                    <input type="file" id="image" name="image" accept="image/*"
                     className="mt-1 block w-full rounded-md border-gray-300
                      shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4" required 
                    value={formData.image}
                     onChange={(e)=> setFormData({...formData,image:e.target.value})}
                      />
                </div>
                <button type="submit"   className="mt-4 px-4 
                py-  2 bg-indigo-600 p-3 cursor-pointer text-white rounded-md hover:bg-indigo-700">Upload</button>


              

                
            </form>



            
                    
                    
          
        </div>
    )
}