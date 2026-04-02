
import { currentUser } from "@clerk/nextjs/server";
import Menu from "../../components/Menu";
import NavTopBar from "../../components/NavTopBar";
import Table from "../../components/Table";
import {FetchCreateUserSystemProfileAction, FetchUserInfoAction } from "../Actions";
import { redirect } from "next/navigation";

export default async function Admin(){
    const user = await currentUser()
    const ProfileInfo = await FetchCreateUserSystemProfileAction(user?.id)
    const FetchuserInfo = await FetchUserInfoAction()
    
    
    
    return(
        <div>
               {ProfileInfo  ?
        <div className="flex items-center">
        
                                     <div className="hidden h-screen  bg-blue-400  w-[15%] lg:flex">
                                   
                                      <Menu/>
                       
                                  </div>
                                
             <div className="h-screen w-full">
                <NavTopBar ProfileInfo={ProfileInfo}/>
                 <Table FetchuserInfo={FetchuserInfo}/> 
               
             </div>
        </div>
        :
           redirect('/Add_User')
               }

        </div>
    )
}