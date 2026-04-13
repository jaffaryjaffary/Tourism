
import Cards from "../../components/Cards";
import Menu from "../../components/Menu";
import NavTopBar from "../../components/NavTopBar";
import ViewDestination from "../../components/ViewDestination";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import {  FetchAllCreatUserSystemAction, FetchAllDestinationdAction, FetchApprovedUserAction,  
    FetchCreateUserSystemProfileAction,   FetchHelpAction,   FetchUserInfoAction } from "../Actions";
import { redirect } from "next/navigation";





 


export default async function AdminDashboard(){
    const session = await getServerSession(authOptions);
  
    
    
   

    const FetchUserInfo = await FetchUserInfoAction()
    const FetchApprovedUser = await FetchApprovedUserAction()
    
   
    const ProfileInfo = await FetchCreateUserSystemProfileAction(session.user.id)
     const FetctAllCreateUserSystem = await FetchAllCreatUserSystemAction()
     const FetchAllDestination = await FetchAllDestinationdAction(session.id)
     const FetchHelp = await FetchHelpAction()


  if (!session) {
    redirect("/Login");
  }
        
    
    return(
       <div>
        
        <div className="flex items-center">
            
                         <div className="hidden  h-[1000px]  bg-blue-400  w-[20%] lg:flex">
                       
                          <Menu/>
           
                      </div>
                       
             <div className=" h-[1000px] w-full">
                <NavTopBar ProfileInfo={ProfileInfo} />
                <Cards FetchUserInfo={FetchUserInfo} 
                FetchApprovedUser={FetchApprovedUser} FetctAllCreateUserSystem={FetctAllCreateUserSystem}
                FetchAllDestination={FetchAllDestination} FetchHelp={FetchHelp}
                />
           
              <ViewDestination FetchAllDestination={FetchAllDestination}/>

               
             </div>
        </div>
      
        </div>
    
    )
}
