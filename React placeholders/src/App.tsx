import React, { useEffect, useState } from 'react'
import Profiles from './components/Profiles/Profiles'
import { userProfileType } from './assets/Types'
import axios from 'axios';
import LoadingSceleton from './components/LoadingSceleton/loadingSceleton';

function App() {  

  const [isLoading, setIsLoading] = useState(true);
  const [profiles, setProfiles] = useState([] as userProfileType[]);

  useEffect(() => {
      setIsLoading(true);

      const fetchData = async () => {
          try{
              const {data} = await axios.get<userProfileType[]>('https://jsonplaceholder.typicode.com/users');
              setProfiles(data);
              setIsLoading(false);
          }
          catch(e){
            console.error(e);
          }
      }

     setTimeout(fetchData, 2500);
  }, []);

  return (
    <div className="App">
      {!isLoading ? 
          <Profiles
            profiles = {profiles}
          />
        :
        <LoadingSceleton />
      }
    </div>
  )
}

export default App
