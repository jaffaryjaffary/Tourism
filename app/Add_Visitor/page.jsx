import Cards from "../../components/Cards";
import Menu from "../../components/Menu";
import NavTopBar from "../../components/NavTopBar";
import VisitorForm from "../../components/VisitorForm";
import { FetchAllCreatUserSystemAction, FetchAllDestinationdAction, 
    FetchApprovedUserAction,FetchCreateUserSystemProfileAction,FetchHelpAction,FetchUserInfoAction } from "../Actions";
// import { getUserIdentifier, requireSessionUser } from "../lib/auth";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

 


export default async function AddVisitorPage(){
    const session = await getServerSession(authOptions);
    
  if (!session) {
    redirect("/login");
  }
    

    // const sessionUser = await requireSessionUser();
    // const identifier = getUserIdentifier(sessionUser);
    
   

  

     const FetchUserInfo = await FetchUserInfoAction()
    
    const FetchApprovedUser = await FetchApprovedUserAction()
    const ProfileInfo = await FetchCreateUserSystemProfileAction(session.user.id)
    const FetctAllCreateUserSystem = await FetchAllCreatUserSystemAction()
     const FetchAllDestination = await FetchAllDestinationdAction(session.id)
        const FetchHelp = await FetchHelpAction()
         const FetchDestination = await FetchAllDestinationdAction()
    

        

    return(
       <div>
         
        <div className="flex items-center">


           
              <div className="hidden h-screen  bg-blue-400  w-[20%] lg:flex">
            
               <Menu/>

           </div>
            
           
             <div className="h-screen w-full">
                <NavTopBar ProfileInfo={ProfileInfo}/>
                <Cards FetchUserInfo={FetchUserInfo} FetchApprovedUser={FetchApprovedUser} 
                FetctAllCreateUserSystem={FetctAllCreateUserSystem}
                FetchAllDestination={FetchAllDestination} FetchHelp={FetchHelp}
                />
               <VisitorForm ProfileInfo ={ProfileInfo } FetchDestination={FetchDestination}/>
        

               
             </div>
        </div>
       
        </div>
    
    )
}
