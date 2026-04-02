
import { currentUser } from "@clerk/nextjs/server";
import AddedUser from "../../components/AddedUser";
import Cards from "../../components/Cards";
import Menu from "../../components/Menu";
import NavTopBar from "../../components/NavTopBar";

import { FetchAllCreatUserSystemAction, FetchApprovedUserAction, FetchCreateUserSystemProfileAction, FetchUserInfoAction} from "../Actions";
import { redirect } from "next/navigation";

 

  
export default async function Add_User(){

    const user = await currentUser()

    const ProfileInfo = await FetchCreateUserSystemProfileAction(user?.id)

    if(ProfileInfo?._id){
        if(ProfileInfo)
            redirect('/Admin_Dashboard')
        else redirect('/Add_user')
    }
  
   
   



    const FetchUserInfo = await FetchUserInfoAction()
    const FetchApprovedUser = await FetchApprovedUserAction()
    const FetctAllCreateUserSystem = await FetchAllCreatUserSystemAction()
   
    
    
    return(
       
        <div className="flex items-center">
            {ProfileInfo &&(
                     <div className="hidden h-screen  bg-blue-400  w-[15%] lg:flex">
               <Menu/>

           </div>
            )}
          
             <div className="h-screen w-full">
                <NavTopBar ProfileInfo={ProfileInfo}/>
                <Cards FetchUserInfo={FetchUserInfo} FetchApprovedUser={FetchApprovedUser} 
                ProfileInfo={ProfileInfo} FetctAllCreateUserSystem={FetctAllCreateUserSystem}
                />
               
        
                 <AddedUser ProfileInfo ={ProfileInfo }/>        
               
             </div>
        </div>
    
    )
}