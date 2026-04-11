import Cards from "../../components/Cards";
import Menu from "../../components/Menu";
import NavTopBar from "../../components/NavTopBar";
import {  FetchAllCreatUserSystemAction, FetchApprovedUserAction,  
    FetchCreateUserSystemProfileAction,  FetchUserInfoAction, FetchVisitorApproveAction,FetchAllDestinationdAction, 
    FetchHelpAction} from "../Actions";
import ApproveTable from '../../components/ApproveTable'
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


 


export default async function ApprovedVisitorPage(){
        const session = await getServerSession(authOptions);
   
    
   

    const FetchUserInfo = await FetchUserInfoAction()
    const FetchApprovedUser = await FetchApprovedUserAction()
    
    const FetchVisitorApprove = await FetchVisitorApproveAction()
    const ProfileInfo = await FetchCreateUserSystemProfileAction(session.user.id)
     const FetctAllCreateUserSystem = await FetchAllCreatUserSystemAction()
      const FetchAllDestination = await FetchAllDestinationdAction(session.id)
      const FetchHelp = await FetchHelpAction()

    
    
            
    
    return(
       <div>
        
        <div className="flex items-center">
            
                         <div className="hidden h-screen  bg-blue-400  w-[20%] lg:flex">
                       
                          <Menu/>
           
                      </div>
                       
             <div className="h-screen w-full">
                <NavTopBar ProfileInfo={ProfileInfo}/>
                <Cards FetchUserInfo={FetchUserInfo} FetchApprovedUser={FetchApprovedUser}
                 FetctAllCreateUserSystem={FetctAllCreateUserSystem}
                 FetchAllDestination={FetchAllDestination} FetchHelp={FetchHelp}
                />
              <ApproveTable FetchVisitorApprove={FetchVisitorApprove}/>
        

               
             </div>
        </div>
      
        </div>
    
    )
}
