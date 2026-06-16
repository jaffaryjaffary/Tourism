import { redirect } from "next/navigation";
import Menu from "../../../components/Menu";
import NavTopBar from "../../../components/NavTopBar";
import Profile from "../../../components/Profile";
import { FetchApprovedVisitorByIdAction, FetchCreateUserSystemProfileAction, FetchUserRegisterAction } from "../../Actions";



 
export const dynamic = "force-dynamic";

export default async function Admin({params}){
    
    const {id} = await params
   const currentUser = await FetchUserRegisterAction()
    if (!currentUser?.success) {
    return redirect('/Login');
}

    const FetchApproveVisitorById = await FetchApprovedVisitorByIdAction(id)
    const ProfileInfo = await FetchCreateUserSystemProfileAction(currentUser?.data?._id)
  
   

    

    
    
    return(

        <div>

        
       
        <div className="flex items-center">
           <div className="hidden  h-[1000px]  bg-blue-400  w-[20%] lg:flex">
               <Menu/>

           </div>
             <div className=" h-[1000px] w-full">
                <NavTopBar ProfileInfo={ProfileInfo}/>
                
              <Profile   FetchApproveVisitorById={ FetchApproveVisitorById} ProfileInfo={ProfileInfo}/>

               
             </div>
        </div>

       
        </div>
    
    )
}
