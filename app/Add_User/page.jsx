
import AddedUser from "../../components/AddedUser";
import Cards from "../../components/Cards";
import Menu from "../../components/Menu";
import NavTopBar from "../../components/NavTopBar";

import { FetchAllCreatUserSystemAction, FetchAllDestinationdAction, FetchApprovedUserAction, FetchCreateUserSystemProfileAction, FetchHelpAction, FetchUserInfoAction, FetchUserRegisterAction} from "../Actions";
import { redirect } from "next/navigation";


 

  export const dynamic = "force-dynamic"; 
export default async function AddUserPage(){

  const currentUser = await FetchUserRegisterAction()
     if (!currentUser?.success) {
    return redirect('/Login');
}

   
    const ProfileInfo = await FetchCreateUserSystemProfileAction(currentUser?.data?._id)

    
  
   
   



    const FetchUserInfo = await FetchUserInfoAction()
    const FetchApprovedUser = await FetchApprovedUserAction()
    const FetctAllCreateUserSystem = await FetchAllCreatUserSystemAction()
     const FetchAllDestination = await FetchAllDestinationdAction(currentUser?.data?._id)
      const FetchHelp = await FetchHelpAction()
   
    
    
    return(
       
          <div>



                             {ProfileInfo?.role === 'Admin' ?

                                   <div className="flex items-center">

        
                     <div className="hidden h-[1000px]  bg-blue-400  w-[20%] lg:flex">
               <Menu/>

           </div>
        
          
             <div className=" h-[1000px] w-full">
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
