import NavBar from '../../components/NavBar'
import Destination_Banner from '../../components/Destination_Banner'
import { FetchAllDestinationdAction } from "../Actions";
import { getUserIdentifier, requireSessionUser } from "../lib/auth";


export default async function DestinationPage() {

  const sessionUser = await requireSessionUser();
     const identifier = getUserIdentifier(sessionUser);

  const FetchDestination  = await FetchAllDestinationdAction( identifier)
  
  
  return (
    <div>
      <NavBar/>

      <Destination_Banner FetchDestination={FetchDestination}/>
      
    </div>


  );
}
