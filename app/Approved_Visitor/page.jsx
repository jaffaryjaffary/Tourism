import Menu from "../../components/Menu";
import NavTopBar from "../../components/NavTopBar";
import { FetchCreateUserSystemProfileAction, FetchUserRegisterAction, FetchVisitorApproveAction} from "../Actions";
import ApproveTable from '../../components/ApproveTable'
 import { redirect } from "next/navigation";

 
export const dynamic = "force-dynamic";

export default async function ApprovedVisitorPage(){
       
   const currentUser = await FetchUserRegisterAction()

   if (!currentUser?.success) {
     redirect('/Login');
}
    const FetchVisitorApprove = await FetchVisitorApproveAction()
    const ProfileInfo = await FetchCreateUserSystemProfileAction(currentUser?.data?._id)
    
    
    
            
    
    return(
       <div>
        
        <div className="flex items-center">
            
                         <div className="hidden  h-[1000px]  bg-blue-400  w-[20%] lg:flex">
                       
                          <Menu/>
           
                      </div>
                       
             <div className=" h-[1000px] w-full">
                <NavTopBar ProfileInfo={ProfileInfo}/>
              
              <ApproveTable FetchVisitorApprove={FetchVisitorApprove}/>
        

               
             </div>
        </div>
      
        </div>
    
    )
}
