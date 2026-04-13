import Menu from "../../components/Menu";
import NavTopBar from "../../components/NavTopBar";
import Table from '../../components/Table'
import { FetchCreateUserSystemProfileAction } from "../Actions";
// import { getUserIdentifier, requireSessionUser } from "../lib/auth";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


 


export default async function ContactVisitor(){

    const session = await getServerSession(authOptions);
    
  if (!session) {
    redirect("/Login");
  }
    
    const ProfileInfo = await FetchCreateUserSystemProfileAction(session.user.id)
    



    
    
    return(
       <div>
        
        <div className="flex items-center">
           <div className="hidden  h-[1000px]  bg-blue-400  w-[20%] lg:flex">
               <Menu/>

           </div>
             <div className=" h-[1000px] w-full">
                <NavTopBar ProfileInfo={ProfileInfo}/>
              
                <Table/>
        

               
             </div>
        </div>
 
 
        </div>
    
    )
}
