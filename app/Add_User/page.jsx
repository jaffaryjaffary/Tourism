
import AddedUser from "../../components/AddedUser";
import Cards from "../../components/Cards";
import Menu from "../../components/Menu";
import NavTopBar from "../../components/NavTopBar";

import { FetchAllCreatUserSystemAction, FetchAllDestinationdAction, FetchApprovedUserAction, FetchCreateUserSystemProfileAction, FetchHelpAction, FetchUserInfoAction} from "../Actions";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";


 

  
export default async function AddUserPage(){
    const session = await getServerSession(authOptions);
    
  if (!session) {
    redirect("/login");
  }

   
    const ProfileInfo = await FetchCreateUserSystemProfileAction(session.user.id)

    
  
   
   



    const FetchUserInfo = await FetchUserInfoAction()
    const FetchApprovedUser = await FetchApprovedUserAction()
    const FetctAllCreateUserSystem = await FetchAllCreatUserSystemAction()
     const FetchAllDestination = await FetchAllDestinationdAction(session.id)
      const FetchHelp = await FetchHelpAction()
   
    
    
    return(
       
          <div>



                             {ProfileInfo?.role === 'Admin' ?

                                   <div className="flex items-center">

        
                     <div className="hidden h-screen  bg-blue-400  w-[20%] lg:flex">
               <Menu/>

           </div>
        
          
             <div className="h-screen w-full">
                <NavTopBar ProfileInfo={ProfileInfo}/>
                <Cards FetchUserInfo={FetchUserInfo} FetchApprovedUser={FetchApprovedUser} 
                ProfileInfo={ProfileInfo} FetctAllCreateUserSystem={FetctAllCreateUserSystem}
                FetchAllDestination={FetchAllDestination} FetchHelp={FetchHelp}
                />
               
        
                 <AddedUser ProfileInfo={ProfileInfo}/>        
               
             </div>
        </div>
    
                
            :
            redirect('/Admin_Dashboard')

                             }
               
     
     </div> 
    )
}
