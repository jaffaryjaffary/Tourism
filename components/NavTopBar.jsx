'use client'
import { MdOutlineMenu } from "react-icons/md";
import NavToggle from "./NavToggle";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { UserButton } from "@clerk/nextjs";
export default function NavTopBar({ProfileInfo}){
    
    const [openToggle, setOpenToggle] = useState(false)
    return(

        <div>
         
        <div className="bg-white shadow-lg  w-full p-4">
           
            <div className="flex items-center justify-between">
                
                <div>
                   
                    {openToggle ? 
                      
                        
                    
                     <span className="lg:hidden">{ProfileInfo &&(<IoMdClose  size={24} className="cursor-pointer" onClick={()=>setOpenToggle(false)}/>)}</span>
                        :
                      <span className="lg:hidden">{ProfileInfo &&(<MdOutlineMenu  size={24} className="cursor-pointer" onClick={()=>setOpenToggle(true)}/>)}</span>
}
                 <h1 className="hidden lg:flex text-xl">{ProfileInfo ? 'Admin Dashboard' : 'Get Start With Smiling'}</h1>
                </div>

              
               

                   <div className="hidden lg:flex">
                     <UserButton/>
                   </div>
            </div>

            

           
        </div>
         {/* <div className="absolute left-330 right-0 bottom-0 top-17">
                    <span className="bg-white w-50 shadow-lg flex items-center gap-2 p-4">
                        <MdLogout color="black"  size={24} onClick={()=> signOut()}/>
                      <p className="hidden lg:flex ">{session?.user?.email}</p>
                    </span>
                </div> */}

     
        {openToggle && (
             <NavToggle/>

        )}
          
        </div>

        
    )
}