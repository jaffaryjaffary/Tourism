import NavBar from "@/components/NavBar";
import Destination_Banner from '../../components/Destination_Banner'
// import { currentUser } from '@clerk/nextjs/server'
//  import { FetchCreateUserProfileByIdAction } from '../app/Actions/index'
// import { redirect } from "next/navigation";

export default async function Home() {
  //  const user = await currentUser()
          
  //        const FetchCreateProfileById = await FetchCreateUserProfileByIdAction(user?.id)
      
  //        console.log(FetchCreateProfileById)
      
  //        if(FetchCreateProfileById?._id){
  //         if(FetchCreateProfileById?.userInfo?.role === 'Admin' || FetchCreateProfileById?.userInfo?.role === 'Normal User')
  //           redirect('/Admin_Dashboard')
  //           else redirect('/')
      
  //           }
  
  return (
    <div>
      <NavBar/>

      <Destination_Banner/>
      
    </div>


  );
}
