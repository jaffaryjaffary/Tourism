
import { currentUser } from "@clerk/nextjs/server";
import Menu from "../../../components/Menu";
import NavTopBar from "../../../components/NavTopBar";
import Profile from "../../../components/Profile";
import { FetchApprovedVisitorByIdAction, FetchCreateUserSystemProfileAction } from "../../Actions";
import { redirect } from "next/navigation";


 


export default async function Admin({params}){

    const {id} = await params
    const user = await currentUser()
    

    const FetchApproveVisitorById = await FetchApprovedVisitorByIdAction(id)
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
                
              <Profile   FetchApproveVisitorById={ FetchApproveVisitorById} ProfileInfo={ProfileInfo}/>

               
             </div>
        </div>

        :
        redirect('/Add_user')
       }
        </div>
    
    )
}