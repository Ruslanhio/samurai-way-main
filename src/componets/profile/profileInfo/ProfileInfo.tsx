import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://wallpaperaccess.com/full/1551019.jpg'/>
            </div>
            <div className={s.description}>ava + description</div>
        </div>
    );
};

export default ProfileInfo;