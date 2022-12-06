import React from 'react';
import s from '../Profilestyles.module.css'

type AvatarType = {
    photo: string
}


const Avatar = ({photo}: AvatarType) => {
    return (
        <img className={s.profileAvatar} src={photo}>
            
        </img>
    );
};

export default Avatar;