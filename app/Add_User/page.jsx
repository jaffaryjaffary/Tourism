
import AddedUser from "../../components/AddedUser";
import Cards from "../../components/Cards";
import Menu from "../../components/Menu";
import NavTopBar from "../../components/NavTopBar";

import { FetchAllCreatUserSystemAction, FetchAllDestinationdAction, FetchApprovedUserAction, FetchCreateUserSystemProfileAction, FetchHelpAction, FetchUserInfoAction} from "../Actions";
import { redirect } from "next/navigation";
import { getUserIdentifier, requireSessionUser } from "../lib/auth";

 

  
export default async function Add_User(){

    const sessionUser = await requireSessionUser();
    const identifier = getUserIdentifier(sessionUser);
    const ProfileInfo = await FetchCreateUserSystemProfileAction(identifier)

    
  
   
   



    const FetchUserInfo = await FetchUserInfoAction()
    const FetchApprovedUser = await FetchApprovedUserAction()
    const FetctAllCreateUserSystem = await FetchAllCreatUserSystemAction()
     const FetchAllDestination = await FetchAllDestinationdAction(identifier)
      const FetchHelp = await FetchHelpAction()
   
    
    
    return(
       
          <div>



                             {ProfileInfo?.role === 'Admin' ?

                                   <div className="flex items-center">

        
                     <div className="hidden h-screen  bg-blue-400  w-[20%] lg:flex">
               <Menu/>

           </div>
        
          
             <div className="h-screen w-full">
                <NavTopBar ProfileInfo={ProfileInfo} sessionUser={sessionUser}/>
                <Cards FetchUserInfo={FetchUserInfo} FetchApprovedUser={FetchApprovedUser} 
                ProfileInfo={ProfileInfo} FetctAllCreateUserSystem={FetctAllCreateUserSystem}
                FetchAllDestination={FetchAllDestination} FetchHelp={FetchHelp}
                />
               
        
                 <AddedUser ProfileInfo={ProfileInfo} sessionUser={sessionUser}/>        
               
             </div>
        </div>
    
                
            :
            redirect('/Admin_Dashboard')

                             }
               
     
     </div> 
    )
}
