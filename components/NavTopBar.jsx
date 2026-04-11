'use client'
import { MdOutlineMenu } from "react-icons/md";
import NavToggle from "./NavToggle";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { signOut } from "next-auth/react";
import Link from "next/link";

function getInitials(name) {
  if (!name) return "AD";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export default function NavTopBarPage({ ProfileInfo }){
    
    const [openToggle, setOpenToggle] = useState(false)
    const displayName = ProfileInfo?.fname && ProfileInfo?.lname
      ? `${ProfileInfo?.fname} ${ProfileInfo?.lname || ""}`.trim()
      : ProfileInfo?.fname || ProfileInfo?.email || "Admin";
    const initials = getInitials(displayName);
    return(

        <div>
         
        <div className="bg-white/80 backdrop-blur shadow-lg  w-full p-4">
           
            <div className="flex items-center justify-between">
                
                <div>
                   
                    {openToggle ? 
                      
                        
                    
                     <span className="lg:hidden"><IoMdClose  size={24} className="cursor-pointer" onClick={()=>setOpenToggle(false)}/></span>
                        :
                      <span className="lg:hidden"><MdOutlineMenu  size={24} className="cursor-pointer" onClick={()=>setOpenToggle(true)}/></span>
}
                 <h1 className="hidden lg:flex text-xl font-semibold">
                   Get Start With Smiling
                 </h1>
                </div>

              
               

                   <div className="hidden lg:flex items-center gap-3">
                     <div className="flex h-10 w-10 items-center justify-center rounded-full 
                     bg-[color:var(--accent)] text-sm font-semibold text-white">
                       {initials}
                     </div>
                     <div className="text-sm">
                       <p className="font-medium">{displayName}</p>
                       <p className="text-xs text-gray-500">{ ProfileInfo?.email ||  ProfileInfo?.fname || ProfileInfo?.lname} </p>
                     </div>
                     <button
                        onClick={() => signOut({ callbackUrl: "/Login" })}
                       className="rounded-full border cursor-pointer border-[color:var(--accent)] px-3 py-1 text-xs
                        font-semibold uppercase tracking-wide text-[color:var(--accent-dark)]"
                     >
                       Logout
                     </button>
                   </div>
            </div>

            

           
        </div>
        

     
        {openToggle && (
             <NavToggle ProfileInfo={ProfileInfo}/>

        )}
          
        </div>

        
    )
}
