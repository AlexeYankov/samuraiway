import React from 'react';
import s from '../Profilestyles.module.css'
import AvatarIcon from "../../../pics/Other/Tony_Soprano_Portrait.jpg";

const Avatar = () => {
    return (
        <img className={s.profileAvatar} src={AvatarIcon}>
            
        </img>
    );
};

export default Avatar;