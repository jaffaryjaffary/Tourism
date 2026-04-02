import { currentUser } from '@clerk/nextjs/server'
import Menu from '../../../components/Menu'
import NavTopBar from '../../../components/NavTopBar'
import UserSystemProfile from '../../../components/UserSystemProfile'
import { FetchCreateUserSystemProfileAction, GetCreatedUserSystemByIdAction } from '../../Actions'
import { redirect } from 'next/navigation'

export default async function Page({params}){



      const {id} = await params
    
   const user = await currentUser()
   const ProfileInfo = await FetchCreateUserSystemProfileAction(user?.id)
    const FetctAllCreateUserSystemById = await GetCreatedUserSystemByIdAction(id)

   
    
   
    return(
        <div>
        {ProfileInfo ?
         <div className="flex items-center">
                   <div className="hidden h-screen  bg-blue-400  w-[15%] lg:flex">
                       <Menu/>
        
                   </div>
                     <div className="h-screen w-full">
                        <NavTopBar ProfileInfo={ProfileInfo}/>
                      
                        
                     
                        <UserSystemProfile  FetctAllCreateUserSystemById={FetctAllCreateUserSystemById} ProfileInfo={ProfileInfo}/>
                      
        
                       
                     </div>
                </div>
              :
              redirect('/Add_User')

        }
                </div>
    )
}