// import Cards from "../../../components/Cards";
import { currentUser } from "@clerk/nextjs/server";
import GetUser from "../../../components/GetUser";
import Menu from "../../../components/Menu";
import NavTopBar from "../../../components/NavTopBar";
import {   FetchCreateUserSystemProfileAction, GetUserDetailByIdAction } from "../../Actions";
import { redirect } from "next/dist/server/api-utils";



 


export default async function View({params}){
const { id } = await params;


    
   const user = await currentUser()
    const  GetUserDetailsById = await GetUserDetailByIdAction(id)   
    const ProfileInfo = await FetchCreateUserSystemProfileAction(user?.id)
    
    
    
    
    return(
         <div>
        {ProfileInfo ?
        <div className="flex items-center">
          

                 <div className="hidden h-screen  bg-blue-400  w-[15%] lg:flex">
               <Menu/>

           </div>

            
          
             <div className="h-screen w-full">
                <NavTopBar ProfileInfo={ProfileInfo}/>
                {/* <Cards FetchUserInfo={FetchUserInfo}/> */}
                
               <GetUser GetUserDetailsById={GetUserDetailsById} 
                ProfileInfo={ProfileInfo}
               
               />

               
             </div>
        </div>
   :
     redirect('/Add_User')
        }
        </div>
    
    )
}