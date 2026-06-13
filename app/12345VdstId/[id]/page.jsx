import Menu from '../../../components/Menu'
import NavTopBar from '../../../components/NavTopBar'
import { FetchCreateUserSystemProfileAction, FetchUserRegisterAction, GetDestinationByIdAction, } from '../../Actions'
// import { getUserIdentifier, requireSessionUser } from '../../lib/auth'
import DestinationById from '../../../components/DestinationById'
import { redirect } from 'next/navigation'

export const dynamic = "force-dynamic";
export default async function DestinationPage({params}){
    

const currentUser = await FetchUserRegisterAction()
      const {id} = await params
      if(!currentUser?.success){
            redirect('/Login')
        }

   const ProfileInfo = await FetchCreateUserSystemProfileAction(currentUser?.data?._id)
   const GetDestinationByid = await GetDestinationByIdAction(id)
   
    
     
   
    
   
    return(
        <div>
        
         <div className="flex items-center">
                   <div className="hidden  h-[1000px]  bg-blue-400  w-[20%] lg:flex">
                       <Menu/>
        
                   </div>
                     <div className=" h-[1000px] w-full">
                        <NavTopBar ProfileInfo={ProfileInfo}/>
                      
                        
                     
                      <DestinationById GetDestinationByid ={GetDestinationByid }/>
                   
        
                       
                     </div>
                </div>
             
                </div>
    )
}
