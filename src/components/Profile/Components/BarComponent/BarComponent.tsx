import React from 'react';
import s from "../../Profilestyles.module.css";
import f from "./BarComponent.module.css";
import ProfilePic from "../../../../pics/BarIcons/address-card-solid.svg";
import MessagesPic from "../../../../pics/BarIcons/comment-solid.svg";
import ShortsPic from "../../../../pics/BarIcons/film-solid.svg";
import MusicPic from "../../../../pics/BarIcons/headphones-solid.svg";
import VideoPic from "../../../../pics/BarIcons/video-solid.svg";
import GroupsPic from "../../../../pics/BarIcons/users-solid.svg";
import GamesPic from "../../../../pics/BarIcons/gamepad-solid.svg";
import SettingsPic from "../../../../pics/BarIcons/sliders-solid.svg";

const BarComponent = () => {
    const NavListTags = [
        { id: 0, tag: 'Profile', icon: ProfilePic, style: f.ProfilePic },
        { id: 1, tag: 'Messages', icon: MessagesPic, style: f.MessagesPic },
        { id: 2, tag: 'Shorts', icon: ShortsPic, style: f.ShortsPic },
        { id: 3, tag: 'Music', icon: MusicPic, style: f.MusicPic },
        { id: 4, tag: 'Video', icon: VideoPic, style: f.VideoPic },
        { id: 5, tag: 'Groups', icon: GroupsPic, style: f.GroupsPic },
        { id: 6, tag: 'Games', icon: GamesPic, style: f.GamesPic },
        { id: 7, tag: 'Settings', icon: SettingsPic, style: f.SettingsPic },
    ]
    const GenericBar = NavListTags.map(el => {
            return (
                <a href={''} className={el.style} key={el.id}>
                    <img src={el.icon} alt="" />
                    <span>{el.tag}</span>
                </a>
            )
        }
    )
    return (
        <nav className={s.profileBar__container}>
            {GenericBar}
        </nav>
    );
};

export default BarComponent;