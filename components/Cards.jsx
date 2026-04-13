'use client'
import { FaPeopleGroup } from "react-icons/fa6";
import { FcApprove } from "react-icons/fc";
import { FaUsers } from "react-icons/fa";
 import { useRouter } from "next/navigation";
import { FaHandPointer } from "react-icons/fa";

export default function CardsPage({FetchUserInfo,FetchApprovedUser,FetctAllCreateUserSystem,FetchAllDestination,FetchHelp}){
     const router = useRouter()
    return(

        <div>
              

                  <div className="mt-10 px-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="glass-card rounded-3xl p-5">
                <p className="text-sm uppercase tracking-wide text-[color:var(--muted)]">Contact Visitors</p>
                <div className="mt-4 flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent)]/10 text-[color:var(--accent-dark)]"> <FaPeopleGroup size={26} /></span>
                      <h1 className="text-2xl font-semibold text-[color:var(--ink)]">{FetchUserInfo?.length} Total</h1>
                      <button onClick={()=>router.push('/Contact_Visitor')}
                      className="text-sm font-medium cursor-pointer text-[color:var(--accent-dark)] hover:text-[color:var(--accent)]">View Details</button>
                </div>
               
            </div>
            <div className="glass-card rounded-3xl p-5">
                <p className="text-sm uppercase tracking-wide text-[color:var(--muted)]">Approved Visitors</p>
                <div className="mt-4 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      <FcApprove size={26} />
                    </span>
                    <h1 className="text-2xl font-semibold text-[color:var(--ink)]">{FetchApprovedUser?.length} Total</h1>
                    <button onClick={()=>router.push('/Approved_Visitor')}
                      className="text-sm font-medium cursor-pointer text-[color:var(--accent-dark)] hover:text-[color:var(--accent)]">View Details</button>
                </div>
            </div>
            <div className="glass-card rounded-3xl p-5">
                <p className="text-sm uppercase tracking-wide text-[color:var(--muted)]">Added System User</p>
                <div className="mt-4 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                      <FaUsers size={24} />
                    </span>
                    <h1 className="text-2xl font-semibold text-[color:var(--ink)]">{FetctAllCreateUserSystem.length} Total</h1>
                        
                  <button onClick={()=>router.push('/12345')}
                      className="text-sm font-medium cursor-pointer text-[color:var(--accent-dark)] hover:text-[color:var(--accent)]">View Details</button>         
                       
                </div>
            </div>
             <div className="glass-card rounded-3xl p-5">
                <p className="text-sm uppercase tracking-wide text-[color:var(--muted)]">Destinations</p>
                <div className="mt-4 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                      <FaHandPointer size={24} />
                    </span>
                    <h1 className="text-2xl font-semibold text-[color:var(--ink)]">{FetchAllDestination?.length} Total</h1>
                    <button onClick={()=>router.push('/Admin_Dashboard')}
                      className="text-sm font-medium cursor-pointer text-[color:var(--accent-dark)] hover:text-[color:var(--accent)]">View Details</button>
                </div>
            </div>

             <div className="glass-card rounded-3xl p-5">
                <p className="text-sm uppercase tracking-wide text-[color:var(--muted)]">Help && Support</p>
                <div className="mt-4 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                      <FaHandPointer size={24} />
                    </span>
                    <h1 className="text-2xl font-semibold text-[color:var(--ink)]">{FetchHelp?.length} Total</h1>
                    <button onClick={()=>router.push('/Help&Support')}
                      className="text-sm font-medium cursor-pointer text-[color:var(--accent-dark)] hover:text-[color:var(--accent)]">View Details</button>
                </div>
            </div>



            
            

           
             
        </div>

       
            
        
        </div>

        
      
        </div>
    )
}
