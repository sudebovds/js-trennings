import React, { FC } from 'react';
import { ProfileProps } from '../../assets/Types';
import Profile from './Profile'
const Profiles: FC<ProfileProps> = ({profiles}) => {
    return (
        <div>
            {profiles.length > 0 ?
                profiles.map((profile) => {
                    return(
                        <Profile 
                            key = {profile.id}
                            id = {profile.id}
                            username = {profile.username}
                            email = {profile.email}
                            company = {profile.company}
                            website = {profile.website}
                            adress = {profile.adress}
                            phone = {profile.phone}
                        />
                    );
                })
                :
                null
            }
        </div>
    )
}

export default Profiles;