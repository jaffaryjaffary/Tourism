import Cards from "../../components/Cards";
import Menu from "../../components/Menu";
import NavTopBar from "../../components/NavTopBar";
import Table from '../../components/Table'
import { FetchAllCreatUserSystemAction, FetchAllDestinationdAction, FetchApprovedUserAction, FetchCreateUserSystemProfileAction, FetchHelpAction, FetchUserInfoAction } from "../Actions";
// import { getUserIdentifier, requireSessionUser } from "../lib/auth";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


 


export default async function ContactVisitor(){

    const session = await getServerSession(authOptions);
    
  if (!session) {
    redirect("/login");
  }
    // const sessionUser = await requireSessionUser();
    // const identifier = getUserIdentifier(sessionUser);
    const ProfileInfo = await FetchCreateUserSystemProfileAction(session.user.id)
    
const FetchUserInfo = await FetchUserInfoAction()
 
   const FetchApprovedUser = await FetchApprovedUserAction()
   const FetctAllCreateUserSystem = await FetchAllCreatUserSystemAction()
    const FetchAllDestination = await FetchAllDestinationdAction(session.id)
    const FetchHelp = await FetchHelpAction()


    
    
    return(
       <div>
        
        <div className="flex items-center">
           <div className="hidden h-screen  bg-blue-400  w-[20%] lg:flex">
               <Menu/>

           </div>
             <div className="h-screen w-full">
                <NavTopBar ProfileInfo={ProfileInfo}/>
                <Cards FetchUserInfo={FetchUserInfo}  FetchApprovedUser={ FetchApprovedUser} 
                FetctAllCreateUserSystem={FetctAllCreateUserSystem}
                FetchAllDestination={FetchAllDestination} FetchHelp={FetchHelp}
                />
                <Table/>
        

               
             </div>
        </div>
 
 
        </div>
    
    )
}
