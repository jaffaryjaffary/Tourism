import NavBar from "@/components/NavBar";
import DestinationBanner from '../../components/DestinationBanner'
import { FetchAllDestinationdAction } from "../Actions";


export default async function DestinationPage() {
  

 

  const FetchDestination  = await FetchAllDestinationdAction() 
  
  
  return (
    <div>
      <NavBar/>

      <DestinationBanner FetchDestination={FetchDestination}/>
      
    </div>


  );
}
