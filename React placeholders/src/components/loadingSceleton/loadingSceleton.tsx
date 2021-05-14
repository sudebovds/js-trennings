import React, { FC } from 'react';
import './loading.skeleton.scss';
import '../Profiles/Profile.scss';

const LoadingSceleton: FC = () => {
    return (
        <>
            <article className = 'profile'>
                <h3 className = 'profile__name skeeletonePulse'></h3>
                <p className ='profile__email skeeletonePulse'></p>
                <div className = 'profile__info skeeletonePulse'>
                    <p></p>
                </div>
            </article>  
            <article className = 'profile'>
                <h3 className = 'profile__name skeeletonePulse'></h3>
                <p className ='profile__email skeeletonePulse'></p>
                <div className = 'profile__info skeeletonePulse'>
                    <p></p>
                </div>
            </article>
            <article className = 'profile'>
                <h3 className = 'profile__name skeeletonePulse'></h3>
                <p className ='profile__email skeeletonePulse'></p>
                <div className = 'profile__info skeeletonePulse'>
                    <p></p>
                </div>
            </article>  
            <article className = 'profile'>
                <h3 className = 'profile__name skeeletonePulse'></h3>
                <p className ='profile__email skeeletonePulse'></p>
                <div className = 'profile__info skeeletonePulse'>
                    <p></p>
                </div>
            </article>                                 
        </>
    );    
}

export default LoadingSceleton;