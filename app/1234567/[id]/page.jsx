
import Menu from "../../../components/Menu";
import NavTopBar from "../../../components/NavTopBar";
import Profile from "../../../components/Profile";
import { FetchApprovedVisitorByIdAction, FetchCreateUserSystemProfileAction } from "../../Actions";
import { redirect } from "next/navigation";
import { getUserIdentifier, requireSessionUser } from "../../lib/auth";


 


export  async function Admin({params}){

    const {id} = await params
    const sessionUser = await requireSessionUser();
    const identifier = getUserIdentifier(sessionUser);
    

    const FetchApproveVisitorById = await FetchApprovedVisitorByIdAction(id)
    const ProfileInfo = await FetchCreateUserSystemProfileAction(identifier)
  
   



    
    
    return(

        <div>

        
       
        <div className="flex items-center">
           <div className="hidden h-screen  bg-blue-400  w-[20%] lg:flex">
               <Menu/>

           </div>
             <div className="h-screen w-full">
                <NavTopBar ProfileInfo={ProfileInfo} sessionUser={sessionUser}/>
                
              <Profile   FetchApproveVisitorById={ FetchApproveVisitorById} sessionUser={sessionUser}/>

               
             </div>
        </div>

       
        </div>
    
    )
}
