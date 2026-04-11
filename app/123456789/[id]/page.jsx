import Menu from '../../../components/Menu'
import NavTopBar from '../../../components/NavTopBar'
import UserSystemProfile from '../../../components/UserSystemProfile'
import { FetchCreateUserSystemProfileAction, GetCreatedUserSystemByIdAction } from '../../Actions'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'


export default async function Pages({params}){
    
const session = await getServerSession(authOptions);
    
     if (!session) {
    redirect("/login");
  }


      const {id} = await params
    
  
   const ProfileInfo = await FetchCreateUserSystemProfileAction(session.user.id)
    const FetctAllCreateUserSystemById = await GetCreatedUserSystemByIdAction(id)

    
    
   
    return(
        <div>
        
         <div className="flex items-center">
                   <div className="hidden h-screen  bg-blue-400  w-[20%] lg:flex">
                       <Menu/>
        
                   </div>
                     <div className="h-screen w-full">
                        <NavTopBar ProfileInfo={ProfileInfo} />
                      
                        
                     
                        <UserSystemProfile  FetctAllCreateUserSystemById={FetctAllCreateUserSystemById} ProfileInfo={ProfileInfo}/>
                      
        
                       
                     </div>
                </div>
             
                </div>
    )
}
