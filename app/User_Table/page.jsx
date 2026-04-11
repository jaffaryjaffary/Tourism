import Menu from "../../components/Menu";
import NavTopBar from "../../components/NavTopBar";
import Table from "../../components/Table";
import {FetchCreateUserSystemProfileAction, FetchUserInfoAction } from "../Actions";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function UserTablePage(){
    const session = await getServerSession(authOptions);
    if (!session) {
      redirect("/login");
    }
    
    const ProfileInfo = await FetchCreateUserSystemProfileAction(session.user.id)
    const FetchuserInfo = await FetchUserInfoAction()



   
    
    
    
    return(
        <div>
               
        <div className="flex items-center">
        
                                     <div className="hidden h-screen  bg-blue-400  w-[20%] lg:flex">
                                   
                                      <Menu/>
                       
                                  </div>
                                
             <div className="h-screen w-full">
                <NavTopBar ProfileInfo={ProfileInfo}/>
                 <Table FetchuserInfo={FetchuserInfo}/> 
               
             </div>
        </div>
      
               

        </div>
    )
}
