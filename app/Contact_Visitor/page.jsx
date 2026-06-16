import { redirect } from "next/navigation";
import Menu from "../../components/Menu";
import NavTopBar from "../../components/NavTopBar";
import Table from '../../components/Table'
import { FetchCreateUserSystemProfileAction, FetchUserRegisterAction } from "../Actions";
// import { getUserIdentifier, requireSessionUser } from "../lib/auth";


 
export const dynamic = "force-dynamic";

export default async function ContactVisitor(){

    const currentUser = await FetchUserRegisterAction()
    
    const ProfileInfo = await FetchCreateUserSystemProfileAction(currentUser?.data?._id)
    
  if (!currentUser?.success) {
    return redirect('/Login');
}


    
    
    return(
       <div>
        
        <div className="flex items-center">
           <div className="hidden  h-[1000px]  bg-blue-400  w-[20%] lg:flex">
               <Menu/>

           </div>
             <div className=" h-[1000px] w-full">
                <NavTopBar ProfileInfo={ProfileInfo}/>
              
                <Table/>
        

               
             </div>
        </div>
 
 
        </div>
    
    )
}
