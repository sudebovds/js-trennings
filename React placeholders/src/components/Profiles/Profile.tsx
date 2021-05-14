import React, { FC } from 'react';
import { userProfileType } from '../../assets/Types';
import './Profile.scss';


const Profile: FC<userProfileType> = ({username, email, company}) => {
    return (
        <article className = 'profile'>
            <h3 className = 'profile__name'>Name: {username}</h3>
            <p className ='profile__email'>Email: {email}</p>
            <div className = 'profile__info'>
                <p>Company: {company.name}</p>
            </div>
        </article>
    );

}

export default Profile;