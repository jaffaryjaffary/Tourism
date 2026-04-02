import Cards from "../../components/Cards";
import Menu from "../../components/Menu";
import NavTopBar from "../../components/NavTopBar";
import {  FetchAllCreatUserSystemAction, FetchApprovedUserAction,  FetchCreateUserSystemProfileAction,  FetchUserInfoAction, FetchVisitorApproveAction } from "../Actions";
import ApproveTable from '../../components/ApproveTable'
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


 


export default async function ApprovedVisitor(){
    
   

   const user = await currentUser()

    const FetchUserInfo = await FetchUserInfoAction()
    const FetchApprovedUser = await FetchApprovedUserAction()
    
    const FetchVisitorApprove = await FetchVisitorApproveAction()
    const ProfileInfo = await FetchCreateUserSystemProfileAction(user?.id)
     const FetctAllCreateUserSystem = await FetchAllCreatUserSystemAction()

    
    
    
    return(
       <div>
        {ProfileInfo  ?
        <div className="flex items-center">
            
                         <div className="hidden h-screen  bg-blue-400  w-[15%] lg:flex">
                       
                          <Menu/>
           
                      </div>
                       
             <div className="h-screen w-full">
                <NavTopBar ProfileInfo={ProfileInfo}/>
                <Cards FetchUserInfo={FetchUserInfo} FetchApprovedUser={FetchApprovedUser} FetctAllCreateUserSystem={FetctAllCreateUserSystem}
                />
              <ApproveTable FetchVisitorApprove={FetchVisitorApprove}/>
        

               
             </div>
        </div>
        :
        redirect('/Add_User')
        }
        </div>
    
    )
}