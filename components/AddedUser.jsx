'use client'
 import { useEffect, useState } from "react"

import { IoMdCheckmark } from "react-icons/io";
import { RegisterAction } from "../app/Add_User/Actions";


 export default function AddedUserPage(){


         const [success, setSuccess] = useState(false)
   const HandleSubmit=()=>{

          if(success){
            // setSuccess(false)
              setSuccess(true)
          }   
        
   }
  

    
   

    
        
    

    useEffect(()=>{
        setTimeout(()=>{
            setSuccess(false)
        },40000)
    })  
    
 
    return(
        <div className="p-4 mt-3">

          

        
             
            <div>
               
                <h1 className="text-2xl font-semibold">Fill Your Profile Information</h1>
                 <form action={RegisterAction}   className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                    
                    <div className="flex flex-col">
                        <label htmlFor="">FirstName</label>
                        <input type="text" name="fname" placeholder="Enter FirstName"  className="mt-1 block w-full 
                    rounded-md
                     border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4"
                        //  value={formData.fname}
                        //  onChange={(event)=>setFormData({...formData,fname:event.target.value})}

                        
                        required
                        />
                        
                    </div>
                     

                     <div className="flex flex-col">
                        <label htmlFor="">LastName</label>
                        <input type="text" name="lname" placeholder="Enter LastName"  className="mt-1 block w-full 
                    rounded-md
                     border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4"
                        //    value={formData.lname}
                        //  onChange={(event)=>setFormData({...formData,lname:event.target.value})}
                       
                        required
                        />
                       
                    </div>
                     
                    <div className="flex flex-col">
                        <label htmlFor="">Email Address</label>
                        <input type="tel" name="email" placeholder="Enter Email address" className="mt-1 block w-full 
                    rounded-md
                     border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4"
                       
                        required
                        />
                         
                    </div>
                     <div className="flex flex-col">
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" placeholder="Enter Password" className="mt-1 block w-full 
                    rounded-md
                     border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4"
                       
                        required
                        />
                      
                    </div>
                     <div className="flex flex-col">
                         <label htmlFor="">Select Role</label>
                        <select name="role" id="" className="mt-1 block w-full 
                    rounded-md
                     border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4"
                        
                         required
                        >
                        <option value="">Select Role</option>
                             <option value="Admin">Admin</option>
                           <option value="Normal User">Normal User</option>
                        
                           
                        
                        </select>
                         
                    </div>

                   

                     <div className="flex flex-col">
                         <label htmlFor="">Select Gender</label>
                        <select name="gender" id="" className="mt-1 block w-full 
                    rounded-md
                     border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4"
                        //  value={formData.gender}
                        //  onChange={(event)=>setFormData({...formData,gender:event.target.value})}
                         required >
                        <option value="">Select Gender</option>
                         <option value="Male">Male</option>
                           <option value="Female">Female</option>
                        </select>
                       
                    </div>

                     <div className="flex flex-col">
                        <button type="submit"  onClick={HandleSubmit}
                    className="text-xl font-bold p-3 bg-black text-white cursor-pointer  mt-2 hover:opacity-60">OnBoard as System User</button>
                    </div>
                       
                    
                    

                

            
              {success &&(
                <div className="flex items-center justify-center">
                         <div className="bg-green-200 shadow-lg mt-0 p-4 border-b-4 border-green-400">
                 {success &&(<span className="flex gap-3 items-center">
                    <IoMdCheckmark size={24} color="green" /><p>Congratulation! Information added successfully</p></span>)}
                
             </div>
                      </div>
            
           
              )}
            
                </div>

               
                </form>
            </div>

                 
            
                {/* <div className="flex items-center justify-center mt-10">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold text-center">Please you do not have permission to access this page</h1>
                          <span className="flex items-center justify-center mt-5"><IoShield  size={130}/></span>
                          </div>
                    </div> */}
                     
                 
               
        </div>
    )
}
