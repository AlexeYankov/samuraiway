import React, {useState} from 'react';
import LanguageControl from './LanguageControl';
import ThemeControl from './ThemeControl';
import s from './Headerstyles.module.css'
import logo from '../../../pics/IconFavicon/pic1.png'
import search from '../../../pics/PostsIcons/magnifying-glass-solid.svg'
import { NavLink } from 'react-router-dom';


const Header = () => {
    const [guest, setGuest] = useState<Boolean>(false)
    const [color, setColor] = useState<string>('White')
    const colorCallBack = color === 'White' ? s.headerWrapper : s.headerWrapperBlack
    const colorChecker = (color: string) => {
        setColor(color)
    }
    const fontColor = color === 'White' ? {color: 'black'} : {color: 'white'}
    const black = color === 'White' ? s.headerLogOut : s.headerLogOutBlack

    return (
        <nav className={colorCallBack}>

            <article className={s.headerLogo}>
                <article className={s.headerLogoContainer}>
                    <label className={s.headerLogoContainer1}>
                        <NavLink className={s.headerLogoImg} to={"/profile"}>
                            <div className={s.headerLogoBudContainer}>
                                <img src={logo} alt="buddy"/>
                                <span className={s.headerLogoBud}>
                                     bud
                                </span>

                                <span className={s.headerLogoDy}>
                                        dy
                                </span>
                            </div>
                        </NavLink>
                    </label>
                </article>
            </article>

            <article className={s.headerSearch}>

                <div className={s.headerSearchContainer}>
                    <input type="text"/>
                    <span style={{color: 'gray'}}>
                         Search
                    </span>
                    <img src={search} alt="search"/>
                </div>
            </article>

            <article className={s.headerBudBlack}>
                <div className={s.headerBudContainer}>
                    <ThemeControl color={(color)=>colorChecker(color)}/>
                    <LanguageControl/>
                </div>
            </article>

            {
                guest ? (
                    <article className={black}>
                        <a className={s.headerLogOutText} href="">
                            <p>log out</p>
                        </a>
                    </article>
                ) : (
                    <article className={black}>
                        <a className={s.headerLogOutTextProfile} style={fontColor} href="">
                            <p>sign in</p>
                        </a>
                        <a className={s.headerLogOutTextProfile} style={fontColor} href="">
                            <p>create new account</p>
                        </a>
                    </article>
                )
            }

        </nav>
    );
};

export default Header;