'use client'
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { UserApprovedAction } from "../app/Actions";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";

const initialValue ={
    fname:'',
    lname: '',
    email: '',
    phone: '',
    gender: '',
    visitDate:'',
    travellars:'',
    destination:''
}
export default function VisitorForm({ProfileInfo,FetchDestination }){

    const [formData, setFormData] = useState(initialValue)
    // const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

   const onSubmit = async(formData, e) => {
      e.preventDefault()
   const result = await UserApprovedAction({...
            
            formData,
              approvedByFname:ProfileInfo ?.userInfo?.fname,
            approvedBylname:ProfileInfo ?.userInfo?.lname,
        },'/Add_Visitor')
       
        // setError(false)
        if(result.success){
           
      
        setSuccess(true)
          setFormData(initialValue)
           reset();
         
        }
         
        
    
   
  };


    
        
    

    

      
        
    

    // const  HandleForm=(e)=> {
    //   e.preventDefault()
        
    // }
    useEffect(()=>{
        setTimeout(()=>{
         setSuccess(false)
        },40000)
    })

    return(
        <div className="p-4">
           <div>
            <h1 className="text-xl font-semibold">Add Visitor Information</h1>
            <form onSubmit={handleSubmit(onSubmit)}  className="mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="flex flex-col">
                        <label htmlFor="" className="font-bold">FirstName</label>
                        <input type="text" name='fname' placeholder="Enter FirstName" className="mt-1 block w-full 
                    rounded-md
                     border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4"
                        //  value={formData.fname}
                         onChange={(e)=>setFormData({...formData, fname:e.target.value})}

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
                        <label htmlFor="" className="font-bold">LastName</label>
                        <input type="text" name='fname' placeholder="Enter LastName" className="mt-1 block w-full 
                    rounded-md
                     border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4"
                        //   value={formData.lname}
                         onChange={(e)=>setFormData({...formData, lname:e.target.value})}
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
                        <label htmlFor=""  className="font-bold">Email</label>
                        <input type="email" name='email' placeholder="Enter Email" className="mt-1 block w-full 
                    rounded-md
                     border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4"
                        //  value={formData.email}
                         onChange={(e)=>setFormData({...formData, email:e.target.value})}

                           {...register("email", {
                         required: "Email address  is required",
                            })}
                        />

                         {errors.email && (
                         <p className="text-red-500 text-sm">
                           {errors.email.message}
                            </p>
        )}
                           
                    </div>
                     <div className="flex flex-col">
                        <label htmlFor=""  className="font-bold">Phone</label>
                        <input type="tel" name='phone' placeholder="Enter Phone Number" className="mt-1 block w-full 
                    rounded-md
                     border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4"
                        //   value={formData.phone}
                         onChange={(e)=>setFormData({...formData, phone:e.target.value})}
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
                        <label htmlFor=""  className="font-bold">Travellars</label>
                        <input type="text" name='travellars' placeholder="Enter Number of Travellars eg 2 adult or 2 childrens" 
                        className="mt-1 block w-full 
                    rounded-md
                     border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4"
                        //   value={formData.travellars}
                         onChange={(e)=>setFormData({...formData, travellars:e.target.value})}
                         {...register("travellars", {
                         required: "Travellar number is required",
                            })}
                        />
                          {errors.travellars && (
                         <p className="text-red-500 text-sm">
                           {errors.travellars.message}
                            </p>
        )}
                           
                    </div>
                     <div className="flex flex-col">
                        <label htmlFor=""  className="font-bold">Visit-Date</label>
                        <input type="date" name='visitDate' className="mt-1 block w-full 
                    rounded-md
                     border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4"
                        //   value={formData.visitDate}
                        onChange={(e)=>setFormData({...formData, visitDate:e.target.value})}
                         {...register("visitDate", {
                         required: " Visit date  is required",
                            })}
                        />

                        {errors.visitDate && (
                         <p className="text-red-500 text-sm">
                           {errors.visitDate.message}
                            </p>
        )}
                        
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor=""  className="font-bold">Select Gender</label>
                       <select name="gender" id="" className="mt-1 block w-full 
                    rounded-md
                     border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4"
                        //  value={formData.gender}
                         onChange={(e)=>setFormData({...formData, gender:e.target.value})}
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
                        <label htmlFor=""  className="font-bold">Select Destination</label>
                       <select name="dastination" id="" className="mt-1 block w-full 
                    rounded-md
                     border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4"
                        //  value={formData.destination}
                         onChange={(e)=>setFormData({...formData, destination:e.target.value})}
                        {...register("destination", {
                         required: "Destination  is required",
                            })}
                       >
                        
                       
                        {FetchDestination.map(dest =>(
                         <option key={dest._id} value={dest.name}>{dest.name}</option>
                        ))}
                    
                      
                       </select>
                        {errors.destination && (
                         <p className="text-red-500 text-sm">
                           {errors.destination.message}
                            </p>
        )}
                         
                    </div>
                </div>
                <div className="mt-5">
                   
                    <button type="submit" onClick={handleSubmit} className="bg-blue-400 text-white p-2 cursor-pointer 
                    flex items-center gap-2 hover:bg-blue-500">
                        <span><FaPlus /></span> 
                        Add Visitor</button>
                </div>
            </form>

           </div>


       {/* {error &&(
            <div className="flex items-center justify-between bg-red-400 p-4 w-80 mt-5 ">
            {error &&(<p className="text-white text-center">{error}</p>)}
            {error &&(<span><IoMdClose  color="white" onClick={()=>setError(false)}/></span>)}
           </div>

        )} */}
        
       
      
                    {success &&(
        <div className="flex items-center justify-center">          
            <div className="flex items-center justify-between bg-green-200 shadow-lg p-4 w-80   border-b-4 border-green-400  lg:w-100">
            {success &&(<p className="text-center">Congratulation! visitor added succesfully</p>)}
            {success &&(<span><IoMdClose  color="black" onClick={()=>setSuccess(false)}/></span>)}
           </div>
         </div>
        )}
        
       

           
        </div>
    )
}