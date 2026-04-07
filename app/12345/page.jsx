
import { redirect } from "next/navigation";
import Cards from "../../components/Cards";
import Menu from "../../components/Menu";
import NavTopBar from "../../components/NavTopBar";
import UserSystem from '../../components/UserSystem'
import {  FetchAllCreatUserSystemAction, FetchAllDestinationdAction, FetchApprovedUserAction, FetchCreateUserSystemProfileAction, FetchHelpAction, FetchUserInfoAction } from "../Actions";
import { getUserIdentifier, requireSessionUser } from "../lib/auth";



 


export default async function Admin(){
    
   

   
    const sessionUser = await requireSessionUser();
    const identifier = getUserIdentifier(sessionUser);
    const FetchUserInfo = await FetchUserInfoAction()
    const FetchApprovedUser = await FetchApprovedUserAction()
    const ProfileInfo = await FetchCreateUserSystemProfileAction(identifier)
    const FetctAllCreateUserSystem = await FetchAllCreatUserSystemAction()
     const FetchAllDestination = await FetchAllDestinationdAction(identifier)
      const FetchHelp = await FetchHelpAction()

    
    
    
    return(
        <div>
              
        <div className="flex items-center">
           
           <div className="hidden h-screen  bg-blue-400  w-[20%] lg:flex">
               <Menu/>

           </div>
             <div className="h-screen w-full">
                <NavTopBar ProfileInfo={ProfileInfo} sessionUser={sessionUser}/>
                <Cards FetchUserInfo={FetchUserInfo} FetchApprovedUser={FetchApprovedUser} 
                FetctAllCreateUserSystem={FetctAllCreateUserSystem}
                 FetchAllDestination={FetchAllDestination} FetchHelp={FetchHelp}
                />
               
              
                <UserSystem ProfileInfo={ProfileInfo}  sessionUser={sessionUser}/>
              

               
             </div>
             
        </div>
      
        </div>
    
    )
}
