import NavBar from "@/components/NavBar";
import Description from "../../components/Description";
// import { currentUser } from '@clerk/nextjs/server'
//  import { FetchCreateUserProfileByIdAction } from '../Actions'
// import { redirect } from "next/navigation";
export default async function Accomodation(){

    //  const user = await currentUser()
            
    //        const FetchCreateProfileById = await FetchCreateUserProfileByIdAction(user?.id)
        
    //        console.log(FetchCreateProfileById)
        
    //        if(FetchCreateProfileById?._id){
    //         if(FetchCreateProfileById?.userInfo?.role === 'Admin' || FetchCreateProfileById?.userInfo?.role === 'Normal User')
    //           redirect('/Admin_Dashboard')
    //           else redirect('/')
        
    //           }
    
    return(
        <div>
           
             
             <NavBar/>
            
            
             
                   <Description/>
           
           
       
            
          
            
        </div>
    )
}