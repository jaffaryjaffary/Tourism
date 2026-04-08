import NavBar from '../../components/NavBar'
import Destination_Banner from '../../components/Destination_Banner'
import { FetchAllDestinationdAction } from "../Actions";


export default async function DestinationPage() {

  const FetchDestination  = await FetchAllDestinationdAction()
  
  
  return (
    <div>
      <NavBar/>

      <Destination_Banner FetchDestination={FetchDestination}/>
      
    </div>


  );
}
