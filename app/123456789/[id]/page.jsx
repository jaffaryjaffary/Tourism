import Menu from '../../../components/Menu'
import NavTopBar from '../../../components/NavTopBar'
import UserSystemProfile from '../../../components/UserSystemProfile'
import { FetchCreateUserSystemProfileAction, GetCreatedUserSystemByIdAction } from '../../Actions'
import { getUserIdentifier, requireSessionUser } from '../../lib/auth'

export default async function Page({params}){



      const {id} = await params
    
   const sessionUser = await requireSessionUser()
   const identifier = getUserIdentifier(sessionUser)
   const ProfileInfo = await FetchCreateUserSystemProfileAction(identifier)
    const FetctAllCreateUserSystemById = await GetCreatedUserSystemByIdAction(id)

   
    
   
    return(
        <div>
        
         <div className="flex items-center">
                   <div className="hidden h-screen  bg-blue-400  w-[20%] lg:flex">
                       <Menu/>
        
                   </div>
                     <div className="h-screen w-full">
                        <NavTopBar ProfileInfo={ProfileInfo} sessionUser={sessionUser}/>
                      
                        
                     
                        <UserSystemProfile  FetctAllCreateUserSystemById={FetctAllCreateUserSystemById} ProfileInfo={ProfileInfo}/>
                      
        
                       
                     </div>
                </div>
             
                </div>
    )
}
