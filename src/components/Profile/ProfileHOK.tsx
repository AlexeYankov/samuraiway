import React from 'react';
import UniversalButton from "../UniversalComponent/Buttons/UniversalButton";
import CRUDPanel from "./CRUDPanel/CRUDPanel";
import Posts from "./Posts/Posts";
import Info from "./Info/Info";
import Avatar from './Avatar';
import s from './Profilestyles.module.css'
import ProfilePic from '../../pics/BarIcons/address-card-solid.svg'
import MessagesPic from '../../pics/BarIcons/comment-solid.svg'
import ShortsPic from '../../pics/BarIcons/circle-play-solid.svg'
import MusicPic from '../../pics/BarIcons/headphones-solid.svg'
import VideoPic from '../../pics/BarIcons/video-solid.svg'
import GroupsPic from '../../pics/BarIcons/users-solid.svg'
import GamesPic from '../../pics/BarIcons/gamepad-solid.svg'
import SettingsPic from '../../pics/BarIcons/sliders-solid.svg'


const ProfileHok = () => {
    const NavListTags = [
        {id: 0, tag: 'Profile', icon: ProfilePic, styleName:s.one},
        {id: 1, tag: 'Messages', icon: MessagesPic, styleName:s.two},
        {id: 2, tag: 'Shorts', icon: ShortsPic, styleName:s.three},
        {id: 3, tag: 'Music', icon: MusicPic, styleName:s.four},
        {id: 4, tag: 'Video', icon: VideoPic, styleName:s.six},
        {id: 5, tag: 'Groups', icon: GroupsPic, styleName: s.nine},
        {id: 6, tag: 'Games', icon: GamesPic, styleName:s.seven},
        {id: 7, tag: 'Settings', icon: SettingsPic, styleName:s.eight},
    ]
    const GenericBar = NavListTags.map(el => {
            return (
                <a href={''} >
                    <img className={el.styleName} src={el.icon} alt=""/>
                    {el.tag}
                </a>
            )
        }
    )


    return (
        <section className={s.profileWrapper}>
            <article className={s.profileBar}>
                <nav className={s.profileBar__container}>
                    {GenericBar}
                </nav>
            </article>
            <article className={s.profileBar__buttons}>
                <UniversalButton/>
                <UniversalButton/>
            </article>

            <article className={s.profileAvatar}>
                <Avatar/>
                <aside>subscribers</aside>
                <aside>advertising</aside>
            </article>

            <article className={s.profileInfo}>
                <Info/>
                <CRUDPanel/>
                <Posts/>
            </article>

            <article className={s.profileAside}>
            </article>
        </section>
    );
};

export default ProfileHok;