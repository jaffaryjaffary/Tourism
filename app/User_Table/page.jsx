// import { redirect } from "next/navigation";
import Menu from "../../components/Menu";
import NavTopBar from "../../components/NavTopBar";
import Table from "../../components/Table";
import {FetchCreateUserSystemProfileAction, FetchUserInfoAction, FetchUserRegisterAction } from "../Actions";

export const dynamic = "force-dynamic";
export default async function UserTablePage(){
// if (!currentUser?.success) {
//     return redirect('/Login');
// }
    
    const currentUser = FetchUserRegisterAction(currentUser?.data?._id)
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
