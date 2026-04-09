import NavBar from "@/components/NavBar";
import DestinationBanner from '../../components/DestinationBanner'
import { FetchAllDestinationdAction } from "../Actions";


export default async function DestinationPage() {
  const sessionUser = await requireSessionUser();
     const identifier = getUserIdentifier(sessionUser);

 

  const FetchDestination  = await FetchAllDestinationdAction( identifier) 
  
  
  return (
    <div>
      <NavBar/>

      <DestinationBanner FetchDestination={FetchDestination}/>
      
    </div>


  );
}
