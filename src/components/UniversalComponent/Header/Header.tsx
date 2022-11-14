import React, {useState} from 'react';
import LanguageControl from './LanguageControl';
import ThemeControl from './ThemeControl';
import s from './Headerstyles.module.css'
import logo from '../../../pics/pic1.png'
import search from '../../../pics/magnifying-glass-solid.svg'


const Header = () => {
    const [guest, setGuest] = useState<Boolean>(false)
    const aCallBack = () => {
        console.log('a called')
    }

    return (
        <nav className={s.headerWrapper}>

            <article className={s.headerLogo}>
                <article className={s.headerLogoContainer}>
                    <label className={s.headerLogoContainer1} htmlFor="Foo">
                        <a className={s.headerLogoImg} id={'Foo'} onClick={aCallBack}>

                            <div className={s.headerLogoBudContainer}>
                                <img src={logo} alt="buddy"/>
                                <span id={'Foo'} className={s.headerLogoBud}>
                                     bud
                                </span>

                                <span id={'Foo'} className={s.headerLogoDy}>
                                        dy
                                </span>
                            </div>
                        </a>
                    </label>
                </article>
            </article>

            <article className={s.headerSearch}>

                <div className={s.headerSearchContainer}>
                    <input type="text"/>
                    <span>
                         Search
                    </span>
                    <img src={search} alt="search"/>
                </div>
            </article>

            {/*<article className={s.headerBud}>*/}
            {/*    <div className={s.headerBudContainer}>*/}
            {/*        <ThemeControl/>*/}
            {/*        <LanguageControl/>*/}
            {/*    </div>*/}
            {/*</article>*/}

            {guest ? (
                <article className={s.headerLogOut}>
                    <a className={s.headerLogOutText} href="">
                        <p>log out</p>
                    </a>
                </article>
            ) : (
                <article className={s.headerLogOut}>
                        <a className={s.headerLogOutTextProfile} href="">
                            <span>sign in</span>
                        </a>
                        <a className={s.headerLogOutTextProfile} href="">
                            <span>create new account</span>
                        </a>
                </article>
            )
            }

        </nav>
    );
};

export default Header;