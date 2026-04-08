import Menu from '../../../components/Menu'
import NavTopBar from '../../../components/NavTopBar'
import { FetchCreateUserSystemProfileAction, GetDestinationByIdAction, } from '../../Actions'
import { getUserIdentifier, requireSessionUser } from '../../lib/auth'
import DestinationById from '../../../components/DestinationById'

export default async function DestinationPage({params}){



      const {id} = await params
    
   const sessionUser = await requireSessionUser()
   const identifier = getUserIdentifier(sessionUser)
   const ProfileInfo = await FetchCreateUserSystemProfileAction(identifier)
   const GetDestinationByid = await GetDestinationByIdAction(id)
   
    

   
    
   
    return(
        <div>
        
         <div className="flex items-center">
                   <div className="hidden h-screen  bg-blue-400  w-[20%] lg:flex">
                       <Menu/>
        
                   </div>
                     <div className="h-screen w-full">
                        <NavTopBar ProfileInfo={ProfileInfo} sessionUser={sessionUser}/>
                      
                        
                     
                      <DestinationById GetDestinationByid ={GetDestinationByid }/>
                   
        
                       
                     </div>
                </div>
             
                </div>
    )
}
