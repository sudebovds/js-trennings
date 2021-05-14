import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import Profile from './Profile';
import { userProfile } from '../../assets/Types';

const Profiles: FC = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        const fetchData = async () => {
            try{
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
                setProfiles(data);
            }
            catch{}
        }

        fetchData();
    }, []);

    //console.log(profiles)

    return (
        <div>Here Profiles
            {profiles.length > 0 ? 
                <Profile 
                    list = {profiles}
                />
                :
                null
            }
        </div>
    )
}

export default Profiles;