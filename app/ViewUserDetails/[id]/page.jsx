// import Cards from "../../../components/Cards";
import GetUser from "../../../components/GetUser";
import Menu from "../../../components/Menu";
import NavTopBar from "../../../components/NavTopBar";
import {   FetchCreateUserSystemProfileAction, GetUserDetailByIdAction } from "../../Actions";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";



 


export default async function ViewPage({params}){
    const session = await getServerSession(authOptions);
    if (!session) {
      redirect("/login");
    }
const { id } = await params;

 
    const  GetUserDetailsById = await GetUserDetailByIdAction(id)   
    const ProfileInfo = await FetchCreateUserSystemProfileAction(session.user.id)
    
   
    
    
    return(
         <div>
        
        <div className="flex items-center">
          

                 <div className="hidden h-screen  bg-blue-400  w-[20%] lg:flex">
               <Menu/>

           </div>

            
          
             <div className="h-screen w-full">
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
