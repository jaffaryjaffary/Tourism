'use client'
import { registerAction } from "../app/Actions";
 export default function AddedUserPage(){ 
    return(
        <div className="p-4 mt-3">
             
            <div>
               
                <h1 className="text-2xl font-semibold">Fill  Profile Information</h1>
                 <form action={registerAction}   className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                    
                    <div className="flex flex-col">
                        <label htmlFor="">FirstName</label>
                        <input type="text" name="fname" placeholder="Enter FirstName"  className="mt-1 block w-full 
                    rounded-md
                     border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4"
                        required
                        />
                        
                    </div>
                     

                     <div className="flex flex-col">
                        <label htmlFor="">LastName</label>
                        <input type="text" name="lname" placeholder="Enter LastName"  className="mt-1 block w-full 
                    rounded-md
                     border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4"
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
                       minLength={6}
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
                        <button type="submit" 
                    className="text-xl font-bold p-3 bg-black text-white cursor-pointer  mt-2 hover:opacity-60">OnBoard as System User</button>
                    </div>
            
                </div>

               
                </form>
            </div>
               
        </div>
    )
}
