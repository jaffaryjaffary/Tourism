// import Cards from "../../../components/Cards";
  import { redirect } from "next/navigation";
import GetUser from "../../../components/GetUser";
import Menu from "../../../components/Menu";
import NavTopBar from "../../../components/NavTopBar";
import {   FetchCreateUserSystemProfileAction, FetchUserRegisterAction, GetUserDetailByIdAction } from "../../Actions";



 
export const dynamic = "force-dynamic";

export default async function ViewPage({params}){
   const currentUser = await FetchUserRegisterAction() 
   const { id } = await params;

       if (!currentUser?.success) {
     redirect('/Login');
}
    const  GetUserDetailsById = await GetUserDetailByIdAction(id)   
    const ProfileInfo = await FetchCreateUserSystemProfileAction(currentUser?.Data?._id)
    
   
    
    
    return(
         <div>
        
        <div className="flex items-center">
          

                 <div className="hidden h-[1000px]  bg-blue-400  w-[20%] lg:flex">
               <Menu/>

           </div>

            
          
             <div className="h-[1000px] w-full">
                <NavTopBar ProfileInfo={ProfileInfo} />
                {/* <Cards FetchUserInfo={FetchUserInfo}/> */}
                
               <GetUser GetUserDetailsById={GetUserDetailsById} 
                 ProfileInfo={ProfileInfo}
               
               />

               
             </div>
        </div>
  
        
        </div>
    
    )
}
