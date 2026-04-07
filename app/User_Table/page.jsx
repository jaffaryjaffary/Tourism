
import Menu from "../../components/Menu";
import NavTopBar from "../../components/NavTopBar";
import Table from "../../components/Table";
import {FetchCreateUserSystemProfileAction, FetchUserInfoAction } from "../Actions";
import { redirect } from "next/navigation";
import { getUserIdentifier, requireSessionUser } from "../lib/auth";

export default async function Admin(){
    const sessionUser = await requireSessionUser();
    const identifier = getUserIdentifier(sessionUser);
    const ProfileInfo = await FetchCreateUserSystemProfileAction(identifier)
    const FetchuserInfo = await FetchUserInfoAction()
    
    
    
    return(
        <div>
               
        <div className="flex items-center">
        
                                     <div className="hidden h-screen  bg-blue-400  w-[20%] lg:flex">
                                   
                                      <Menu/>
                       
                                  </div>
                                
             <div className="h-screen w-full">
                <NavTopBar ProfileInfo={ProfileInfo} sessionUser={sessionUser}/>
                 <Table FetchuserInfo={FetchuserInfo}/> 
               
             </div>
        </div>
      
               

        </div>
    )
}
