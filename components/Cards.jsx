'use client'
import { FaPeopleGroup } from "react-icons/fa6";
import { FcApprove } from "react-icons/fc";
import { FaUsers } from "react-icons/fa";
// import { useRouter } from "next/navigation";
import { FaHandPointer } from "react-icons/fa";

export default function Cards({FetchUserInfo,FetchApprovedUser,FetctAllCreateUserSystem}){
    // const router = useRouter()
    return(

        <div>
              

                  <div className="mt-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-blue-400 p-4   w-80 cursor-pointer">
                <h1 className="text-xl font-semibold text-white">Contact Visitors</h1>
                <div className="flex items-center  gap-5">
                      <span> <FaPeopleGroup   size={50} color="white" className="mt-5"/></span>
                      <h1 className="text-xl font-semibold text-white">{FetchUserInfo?.length} Total</h1>
                </div>
               
            </div>
            <div className="bg-green-400 p-4  w-80">
                <h1 className="text-xl font-semibold text-white">Approved Visitors</h1>
                <div className="flex items-center  gap-5">
                    <FcApprove size={50} color="white" className="mt-5" />
                    <h1 className="text-xl font-semibold text-white">{FetchApprovedUser?.length} Total</h1>
                </div>
            </div>
            <div className="bg-purple-400 p-4  w-80">
                <h1 className="text-xl font-semibold text-white">Added System User</h1>
                <div className="flex items-center gap-5">
                    <FaUsers  size={50} color="white" className="mt-5" />
                    <h1 className="text-xl font-semibold text-white">{FetctAllCreateUserSystem.length} Total</h1>
                        
                             {/* <div className="">
                             <button onClick={()=> router.push('/12345')}
                             className="bg-white p-2 rounded-2xl cursor-pointer font-bold">View</button>
                             </div>
                    
                        */}
                       
                    
                   
                </div>
            </div>
             <div className="bg-orange-300 p-4  w-80">
                <h1 className="text-xl font-semibold text-white">Destinations</h1>
                <div className="flex items-center  gap-5">
                    <FaHandPointer  size={50} color="white" className="mt-5" />
                    <h1 className="text-xl font-semibold text-white">6 Total</h1>
                </div>
            </div>



            
            

           
             
        </div>

       
            
        
        </div>

        
      
        </div>
    )
}