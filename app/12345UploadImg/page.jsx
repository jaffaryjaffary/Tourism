import { redirect } from "next/navigation";
import Cards from "../../components/Cards";
import Menu from "../../components/Menu";
import NavTopBar from "../../components/NavTopBar";
import Upload from "../../components/Upload";
import {  FetchAllCreatUserSystemAction, FetchAllDestinationdAction, FetchApprovedUserAction,  FetchCreateUserSystemProfileAction,  FetchHelpAction,  FetchUserInfoAction, FetchUserRegisterAction } from "../Actions";
export const dynamic = "force-dynamic";


 


export default async function ApprovedVisitorPage(){

        
    
      
    const currentUser = await FetchUserRegisterAction()
    const FetchUserInfo = await FetchUserInfoAction()
    const FetchApprovedUser = await FetchApprovedUserAction()
    
    if(!currentUser?.success){
            redirect('/Login')
    }
   
    const ProfileInfo = await FetchCreateUserSystemProfileAction(currentUser?.data?._id)
     const FetctAllCreateUserSystem = await FetchAllCreatUserSystemAction()
      const FetchAllDestination = await FetchAllDestinationdAction(currentUser?.data?._id)
      const FetchHelp = await FetchHelpAction()


      
    
    
    
    return(
       <div>
        
        <div className="flex items-center ">
            
                         <div className="hidden h-[1000px]  bg-blue-400  w-[20%] lg:flex">
                
                          <Menu/>
           
                      </div>
                       
             <div className=" h-[1000px] w-full">
                <NavTopBar ProfileInfo={ProfileInfo} />
                <Cards FetchUserInfo={FetchUserInfo} FetchApprovedUser={FetchApprovedUser}
                 FetctAllCreateUserSystem={FetctAllCreateUserSystem}
                 FetchAllDestination={FetchAllDestination} FetchHelp={FetchHelp}
                />
           
          <Upload/>

               
             </div>
        </div>
      
        </div>
    
    )
}
