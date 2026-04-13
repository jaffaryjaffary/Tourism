import Menu from "../../components/Menu";
import NavTopBar from "../../components/NavTopBar";
import { FetchCreateUserSystemProfileAction, FetchVisitorApproveAction} from "../Actions";
import ApproveTable from '../../components/ApproveTable'
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


 


export default async function ApprovedVisitorPage(){
        const session = await getServerSession(authOptions);
   
    
   if (!session) {
    redirect("/Login");
  }
   

   
    
    const FetchVisitorApprove = await FetchVisitorApproveAction()
    const ProfileInfo = await FetchCreateUserSystemProfileAction(session.user.id)
    
    
    
            
    
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
