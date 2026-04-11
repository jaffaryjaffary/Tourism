
import Menu from "../../../components/Menu";
import NavTopBar from "../../../components/NavTopBar";
import Profile from "../../../components/Profile";
import { FetchApprovedVisitorByIdAction, FetchCreateUserSystemProfileAction } from "../../Actions";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";



 


export default async function Admin({params}){
    const session = await getServerSession(authOptions);
    if (!session) {
      redirect("/Login");
    }

    const {id} = await params
   
    

    const FetchApproveVisitorById = await FetchApprovedVisitorByIdAction(id)
    const ProfileInfo = await FetchCreateUserSystemProfileAction(session.user.id)
  
   

    

    
    
    return(

        <div>

        
       
        <div className="flex items-center">
           <div className="hidden h-screen  bg-blue-400  w-[20%] lg:flex">
               <Menu/>

           </div>
             <div className="h-screen w-full">
                <NavTopBar ProfileInfo={ProfileInfo}/>
                
              <Profile   FetchApproveVisitorById={ FetchApproveVisitorById} ProfileInfo={ProfileInfo}/>

               
             </div>
        </div>

       
        </div>
    
    )
}
