// import Cards from "../../../components/Cards";
import GetUser from "../../../components/GetUser";
import Menu from "../../../components/Menu";
import NavTopBar from "../../../components/NavTopBar";
import {   FetchCreateUserSystemProfileAction, GetUserDetailByIdAction } from "../../Actions";
import { getUserIdentifier, requireSessionUser } from "../../lib/auth";



 


export  async function ViewPage({params}){
const { id } = await params;

   const sessionUser = await requireSessionUser();
   const identifier = getUserIdentifier(sessionUser);
    const  GetUserDetailsById = await GetUserDetailByIdAction(id)   
    const ProfileInfo = await FetchCreateUserSystemProfileAction(identifier)
    
    
    
    
    return(
         <div>
        
        <div className="flex items-center">
          

                 <div className="hidden h-screen  bg-blue-400  w-[20%] lg:flex">
               <Menu/>

           </div>

            
          
             <div className="h-screen w-full">
                <NavTopBar ProfileInfo={ProfileInfo} sessionUser={sessionUser}/>
                {/* <Cards FetchUserInfo={FetchUserInfo}/> */}
                
               <GetUser GetUserDetailsById={GetUserDetailsById} 
                 ProfileInfo={ProfileInfo}
               
               />

               
             </div>
        </div>
  
        
        </div>
    
    )
}
