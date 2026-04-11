'use client'
// import { CgProfile } from "react-icons/cg";
import { FaRegTrashCan } from "react-icons/fa6";
import { DeleteUserAction, UserApprovedAction } from "../app/Actions";
import { redirect } from "next/navigation";
import { FaAddressBook } from "react-icons/fa";
import SuccessNotify from "./SuccessNotify";
import { useEffect, useState } from "react";
import { FcApprove } from "react-icons/fc";




export default function GetViewPage({GetUserDetailsById,ProfileInfo}){
    const [notify, setNotify] = useState(false)
   
    
   
    async function HandleSubmit(GetCurrentId) {
      
        await UserApprovedAction({
           
            fname:GetUserDetailsById?.fname,
            lname:GetUserDetailsById?.lname,
            email:GetUserDetailsById?.email,
            phone:GetUserDetailsById?.phone,
            travellars:GetUserDetailsById?.travellars,
            destination:GetUserDetailsById?.destination,
            gender:GetUserDetailsById?.gender,
            visitDate:GetUserDetailsById?.visitDate,
            approvedByFname:ProfileInfo?.fname,
            approvedByLname:ProfileInfo?.lname,
           
           

           
            
        },GetCurrentId,'/ViewUserDetails')
        await DeleteUserAction(GetCurrentId,'ViewUserDetails')

        setNotify(true)
        redirect('/Contact_Visitor')
    }

    async function HandleDelete(GetCurrentId) {

       await DeleteUserAction(GetCurrentId,'ViewUserDetails')
       redirect('/Admin_Dashboard')
      
    }
useEffect(()=>{
    setTimeout(()=>{
        setNotify(false)
    }, 40000)
})
   
    return(
        <div className="p-4 mt-0">
            
            <div className="flex items-center justify-center">
                {/* <div className="flex flex-col">
                    
                <span className="px-8"><CgProfile size={80} /></span>
                <p className="text-xl font-semibold text-center">User-Information</p>
                </div> */}
            </div>

           <div className="bg-white shadow-lg  mt-5">
            <div className="flex items-center gap-1  p-3 bg-green-300">
            <span><FaAddressBook /></span>
            <h1 className="text-xl font-semibold">Visitor Personal Information</h1>
            </div>

            <div className="p-3 border-b border-gray-400 lg:flex items-center justify-between hover:bg-gray-400">
                <div> <h1 className="text-xl">First-Name</h1></div>
               <div>
                 <span className="text-xl text-gray-500 font-semibold">{GetUserDetailsById?.fname}</span>
               </div>
                
            </div>
            <div className="p-3 border-b border-gray-400 lg:flex items-center justify-between  hover:bg-gray-400">
                <div> <h1 className="text-xl">First-Name</h1></div>
               <div>
                 <span className="text-xl text-gray-500 font-semibold">{GetUserDetailsById?.lname}</span>
               </div>
                
            </div>
             <div className="p-3 border-b border-gray-400 lg:flex items-center justify-between  hover:bg-gray-400">
                <div> <h1 className="text-xl">Email</h1></div>
               <div>
                 <span className="text-xl text-gray-500 font-semibold">{GetUserDetailsById?.email}</span>
               </div>
                
            </div>
             <div className="p-3 border-b border-gray-400 lg:flex items-center justify-between  hover:bg-gray-400">
                <div> <h1 className="text-xl">Gender</h1></div>
               <div>
                 <span className="text-xl text-gray-500 font-semibold">{GetUserDetailsById?.gender}</span>
               </div>
                
            </div>
             <div className="p-3 border-b border-gray-400 lg:flex items-center justify-between  hover:bg-gray-400">
                <div> <h1 className="text-xl">Phone</h1></div>
               <div>
                 <span className="text-xl text-gray-500 font-semibold">{GetUserDetailsById?.phone}</span>
               </div>
                
            </div>
           <div className="p-3 border-b border-gray-400 lg:flex items-center justify-between  hover:bg-gray-400">
                <div> <h1 className="text-xl">Visit-Date</h1></div>
               <div>
                 <span className="text-xl text-gray-500 font-semibold">{GetUserDetailsById?.visitDate}</span>
               </div>
                
            </div>
            <div className="p-3 border-b border-gray-400 lg:flex items-center justify-between  hover:bg-gray-400">
                <div> <h1 className="text-xl">Travellars</h1></div>
               <div>
                 <span className="text-xl text-gray-500 font-semibold">{GetUserDetailsById?.travellars}</span>
               </div>
                
            </div>
             <div className="p-3 border-b border-gray-400 lg:flex items-center justify-between  hover:bg-gray-400">
                <div> <h1 className="text-xl">Destination</h1></div>
               <div className="flex flex-col">
                 <span className="text-xl text-gray-500 font-semibold">{GetUserDetailsById?.destination?.join(', ')}</span>
               </div>
                
            </div>
            <div className="p-3 border-b border-gray-400 lg:flex items-center justify-between  hover:bg-gray-400">
                <div> <h1 className="text-xl ">Comment</h1></div>
               <div>
                 <span className="text-xl  font-semibold text-gray-500">{GetUserDetailsById?.comment}</span>
               </div>
                
            </div>
           
            <div>

            </div>
           </div>

                 

                 
                 

            
            
                
            <div className="absolute right-10 mt-2 flex items-center justify-center gap-2">
               
                <button 
                className="text-white flex items-center  bg-red-500 p-2 cursor-pointer "
                 onClick={()=>HandleDelete(GetUserDetailsById?._id)}>
                      <span><FaRegTrashCan  color="white"/></span>
                     Delete</button>
                 <button type="submit" onClick={()=>HandleSubmit(GetUserDetailsById?._id)}
                  className="flex items-center justify-center  bg-blue-400 text-white cursor-pointer p-2">
                    <span><FcApprove color="white"/></span>Approved</button>
            </div>
                {notify &&(
                  <SuccessNotify/>
                )}
            
        </div>
    )
}