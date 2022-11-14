import React, {useState} from 'react';
import s from './Headerstyles.module.css'

const LanguageControl = () => {
    const [active, setActive] = useState<String>('')
    const clickChinese = () => setActive('Chinese')
    const clickRussian = () => setActive('Russian')
    const clickEnglish = () => setActive('English')
    const activeStyle = active === 'Chinese' ? s.headerBudLanguageControlTextActive : s.headerBudLanguageControlText
    const activeStyle1 = active === 'Russian' ? s.headerBudLanguageControlTextActive : s.headerBudLanguageControlText
    const activeStyle2 = active === 'English' ? s.headerBudLanguageControlTextActive : s.headerBudLanguageControlText
    return (
        <article className={s.headerBudLanguageControl}>
            <label htmlFor="Chinese">
                <button className={activeStyle} id='Chinese' onClick={clickChinese}>
                    语
                </button>
            </label>
            <label htmlFor="Russian">
                <button className={activeStyle1} id='Russian' onClick={clickRussian}>
                    RU
                </button>
            </label>
            <label htmlFor="English">
                <button className={activeStyle2} id='English' onClick={clickEnglish}>
                    EN
                </button>
            </label>
        </article>
    );
};

export default LanguageControl;