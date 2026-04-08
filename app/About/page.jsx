import NavBar from "@/components/NavBar";
import AboutUs from "../../components/AboutUs";
// import { currentUser } from '@clerk/nextjs/server'
//  import { FetchCreateUserProfileByIdAction } from '../Actions'
// import { redirect } from "next/navigation";
export  async function AboutPage(){

        
    return(
        <div>
             <NavBar/>
             <AboutUs/>
        </div>
    )
}