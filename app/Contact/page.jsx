import NavBar from "@/components/NavBar";
import Contact from "../../components/Get_contant";
//  import { currentUser } from '@clerk/nextjs/server'
//  import { FetchCreateUserProfileByIdAction } from '../Actions'
// import { redirect } from "next/navigation";
export default async function Get_work(){


    // const user = await currentUser()
        
    //    const FetchCreateProfileById = await FetchCreateUserProfileByIdAction(user?.id)
    
    //    console.log(FetchCreateProfileById)
    
    //    if(FetchCreateProfileById?._id){
    //     if(FetchCreateProfileById?.userInfo?.role === 'Admin' || FetchCreateProfileById?.userInfo?.role === 'Normal User')
    //       redirect('/Admin_Dashboard')
    //       else redirect('/')
    
    //       }

    
    return(
        <div>
           <NavBar/>  
           <div className="pt-15">
               <Contact/>
           </div>
          
        </div>
    )
}