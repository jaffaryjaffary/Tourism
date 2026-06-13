import { redirect } from 'next/navigation'
import Menu from '../../../components/Menu'
import NavTopBar from '../../../components/NavTopBar'
import UserSystemProfile from '../../../components/UserSystemProfile'
import { FetchCreateUserSystemProfileAction, FetchUserRegisterAction, GetCreatedUserSystemByIdAction } from '../../Actions'



export default async function Pages({params}){
    



      const {id} = await params

      const currentUser = await FetchUserRegisterAction()
    if(!currentUser?.success){
            redirect('/Login')
        }
  
   const ProfileInfo = await FetchCreateUserSystemProfileAction(currentUser?.data?._id)
    const FetctAllCreateUserSystemById = await GetCreatedUserSystemByIdAction(id)

    
    
   
    return(
        <div>
        
         <div className="flex items-center">
                   <div className="hidden  h-[1000px]  bg-blue-400  w-[20%] lg:flex">
                       <Menu/>
        
                   </div>
                     <div className=" h-[1000px] w-full">
                        <NavTopBar ProfileInfo={ProfileInfo} />
                      
                        
                     
                        <UserSystemProfile  FetctAllCreateUserSystemById={FetctAllCreateUserSystemById} ProfileInfo={ProfileInfo}/>
                      
        
                       
                     </div>
                </div>
             
                </div>
    )
}
