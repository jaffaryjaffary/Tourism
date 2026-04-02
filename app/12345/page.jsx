
import { currentUser } from "@clerk/nextjs/server";
import Cards from "../../components/Cards";
import Menu from "../../components/Menu";
import NavTopBar from "../../components/NavTopBar";
import UserSystem from '../../components/UserSystem'
import {  FetchAllCreatUserSystemAction, FetchApprovedUserAction, FetchCreateUserSystemProfileAction, FetchUserInfoAction } from "../Actions";
import { redirect } from "next/navigation";



 


export default async function Admin(){
    
   

   
    const user = await currentUser()
    const FetchUserInfo = await FetchUserInfoAction()
    const FetchApprovedUser = await FetchApprovedUserAction()
    const ProfileInfo = await FetchCreateUserSystemProfileAction(user?.id)
    const FetctAllCreateUserSystem = await FetchAllCreatUserSystemAction()
    
    
    
    return(
        <div>
              {ProfileInfo   ?
        <div className="flex items-center">
           
           <div className="hidden h-screen  bg-blue-400  w-[15%] lg:flex">
               <Menu/>

           </div>
             <div className="h-screen w-full">
                <NavTopBar ProfileInfo={ProfileInfo}/>
                <Cards FetchUserInfo={FetchUserInfo} FetchApprovedUser={FetchApprovedUser} 
                FetctAllCreateUserSystem={FetctAllCreateUserSystem}
                />
               
              
                <UserSystem ProfileInfo={ProfileInfo}/>
              

               
             </div>
             
        </div>
        :
        redirect('/Add_user')
              }

        </div>
    
    )
}