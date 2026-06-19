import { redirect } from "next/navigation";
import Menu from "../../components/Menu";
import NavTopBar from "../../components/NavTopBar";
import UserSystem from '../../components/UserSystem'
import { FetchCreateUserSystemProfileAction, FetchUserRegisterAction } from "../Actions";

export const dynamic = "force-dynamic";
export default async function Admin(){
    
   

   
    const currentUser = await FetchUserRegisterAction()

   if (!currentUser?.success) {
    return redirect('/Login');
}
    
    const ProfileInfo = await FetchCreateUserSystemProfileAction(currentUser?.data?._id)
    

   
            
    
    
    return(
        <div>
              
        <div className="flex items-center">
           
           <div className="hidden  h-[1000px]  bg-blue-400  w-[20%] lg:flex">
               <Menu/>

           </div>
             <div className=" h-[1000px] w-full">
                <NavTopBar ProfileInfo={ProfileInfo} />
              
              
                <UserSystem ProfileInfo={ProfileInfo} />
              

               
             </div>
             
        </div>
      
        </div>
    
    )
}
