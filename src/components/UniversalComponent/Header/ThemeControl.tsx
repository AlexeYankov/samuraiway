import React, {useState} from 'react';
import s from './Headerstyles.module.css'
import BlackTheme from '../../../pics/PostsIcons/moon-solid.svg'
import WhiteTheme from '../../../pics/PostsIcons/sun-regular.svg'

type ThemeColorType = {
    color: (active: string) => void
}


const ThemeControl = (p: ThemeColorType) => {
    const [active, setActive] = useState<String>('White')
    const clickWhite = () => {
        setActive('White')
        p.color('White')
    }
    const clickBlack = () => {
        setActive('Black')
        p.color('Black')
    }
    const activeStyle = active === 'White' ? s.headerBudThemeControlTextActive : s.headerBudThemeControlText
    const activeStyle1 = active === 'Black' ? s.headerBudThemeControlTextActive  : s.headerBudThemeControlText
    return (
        <article className={s.headerBudThemeControl}>
            <label htmlFor="White" className={activeStyle}>
                <button style={{display: 'none'}} id={'White'} onClick={clickWhite}/>
                <img style={{marginLeft: '20px'}}  src={WhiteTheme} alt="" id={'White'}/>
            </label>
            <label htmlFor="Black" className={activeStyle1}>
                <button style={{display: 'none'}}  id={'Black'} onClick={clickBlack}/>
                <img style={{marginRight: '20px'}} src={BlackTheme} id={'Black'} alt=""/>
            </label>
        </article>
    );
};

export default ThemeControl;