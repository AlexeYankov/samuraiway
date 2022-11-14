import React from 'react';
import Header from "../UniversalComponent/Header/Header";
import UniversalButton from "../UniversalComponent/Buttons/UniversalButton";
import CRUDPanel from "./CRUDPanel/CRUDPanel";
import Posts from "./Posts/Posts";
import Info from "./Info/Info";
import Shorts from './Shorts/Shorts';
import Music from "./Music/Music";
import Video from "./Video/Video";
import Groups from './Groups/Groups';
import Games from './Games/Games';
import Settings from "./Settings/Settings";
import Messages from './Messages/Messages';
import Avatar from './Avatar';


const ProfileHok = () => {
    return (
        <section>
            <article>
                <nav>
                    <Messages/>
                    <Shorts/>
                    <Music/>
                    <Video/>
                    <Groups/>
                    <Games/>
                    <Settings/>
                </nav>
                <UniversalButton/>
                <UniversalButton/>
            </article>
            <article>
                <Avatar/>
                <aside>subscribers</aside>
                <aside>advertising</aside>
            </article>
            <article>
                <Info/>
                <CRUDPanel/>
                <Posts/>
            </article>
        </section>
    );
};

export default ProfileHok;