'use client'
import { useEffect, useState } from "react"

import { IoMdCheckmark } from "react-icons/io";
import { CreateUserSystemProfileAction } from "../app/Actions";
 import { useUser } from "@clerk/nextjs";
 import { useForm } from "react-hook-form";
//  import { IoShield } from "react-icons/io5";
const initialValue={
    fname:'',
    lname:'',
    phone:'',
    role:'',
    gender:''
}

export default function AddedUser({ProfileInfo}){

    const [formData, setFormData] = useState(initialValue)
    const [success, setSuccess] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

    const currentAuthUser =  useUser()
    const {user} = currentAuthUser;

     const onSubmit = async(formData, e) => {
          e.preventDefault()
            const data= {
            userInfo:formData,
            userId:user?.id,
            email:user?.primaryEmailAddress?.emailAddress
        }
     
      
        await CreateUserSystemProfileAction(data,'/Add_User')
         setSuccess(true)
         setFormData(initialValue)
        

          
          
            setSuccess(true)
        
               reset();
             
            
             
            
        
       
      };

    

  

    
   

    
        
    

    useEffect(()=>{
        setTimeout(()=>{
            setSuccess(false)
        },40000)
    })  
    
 
    return(
        <div className="p-4 mt-5">

          

        
             
            <div>
               
                <h1 className="text-2xl font-semibold">Fill Your Profile Information</h1>
                 <form onSubmit={handleSubmit(onSubmit)}  className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                    
                    <div className="flex flex-col">
                        <label htmlFor="">FirstName</label>
                        <input type="text" name="fname" placeholder="Enter FirstName"  className="border p-3"
                        // value={formData.fname}
                        onChange={(event)=>setFormData({...formData,fname:event.target.value})}

                         {...register("fname", {
                         required: "Firstname is required",
                            })}
                        />
                          {errors.fname && (
                         <p className="text-red-500 text-sm">
                           {errors.fname.message}
                            </p>
        )}
                    </div>
                     

                     <div className="flex flex-col">
                        <label htmlFor="">LastName</label>
                        <input type="text" name="lname" placeholder="Enter LastName"  className="border p-3"
                        //  value={formData.lname}
                        onChange={(event)=>setFormData({...formData,lname:event.target.value})}
                         {...register("lname", {
                         required: "Lastname is required",
                            })}
                        />
                          {errors.lname && (
                         <p className="text-red-500 text-sm">
                           {errors.lname.message}
                            </p>
        )}
                    </div>
                     
                    <div className="flex flex-col">
                        <label htmlFor="">Phone-Number</label>
                        <input type="tel" name="phone" placeholder="Enter Phone Number"  className="border p-3"
                        //  value={formData.phone}
                        onChange={(event)=>setFormData({...formData,phone:event.target.value})}
                         {...register("phone", {
                         required: "Phone number is required",
                            })}
                        />
                          {errors.phone && (
                         <p className="text-red-500 text-sm">
                           {errors.phone.message}
                            </p>
        )}
                    </div>
                     <div className="flex flex-col">
                         <label htmlFor="">Select Role</label>
                        <select name="role" id="" className="border p-3"
                        //  value={formData.role}
                        onChange={(event)=>setFormData({...formData,role:event.target.value})}
                         {...register("role", {
                         required: "Role  is required",
                            })}

                        >
                        <option value="">Select Role</option>
                        {ProfileInfo?.userInfo?.role === "Admin" ?

                             <option value="Admin">Admin</option>
                           
                    
                        :

                           <option value="Normal User">Normal User</option>
                        
                           
                        }
                        </select>
                           {errors.role && (
                         <p className="text-red-500 text-sm">
                           {errors.role.message}
                            </p>
        )}
                    </div>

                     <div className="flex flex-col">
                         <label htmlFor="">Select Gender</label>
                        <select name="gender" id="" className="border p-3"
                        //  value={formData.gender}
                        onChange={(event)=>setFormData({...formData,gender:event.target.value})}
                          {...register("gender", {
                         required: "Gender  is required",
                            })}

                        >
                        <option value="">Select Gender</option>
                         <option value="Male">Male</option>
                           <option value="Female">Female</option>
                        </select>
                         {errors.gender && (
                         <p className="text-red-500 text-sm">
                           {errors.gender.message}
                            </p>
        )}
                    </div>

                     <div className="flex flex-col">
                        <button type="submit" onClick={handleSubmit}    
                    className="text-xl font-bold p-3 bg-black text-white cursor-pointer  mt-5">OnBoard as System User</button>
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