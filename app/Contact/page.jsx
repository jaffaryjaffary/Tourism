import NavBar from "@/components/NavBar";
import Contact from "../../components/Get_contant";
import { FetchAllDestinationdAction } from "../Actions";
export default async function Contact_page(){
 
    const FetchDestination = await FetchAllDestinationdAction()

    
    
    return(
        <div>
           <NavBar/>  
           <div className="pt-15">
               <Contact FetchDestination={FetchDestination}/>
           </div>
          
        </div>
    )
}