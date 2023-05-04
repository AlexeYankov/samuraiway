import { useState } from "react";
import s from "../../Headerstyles.module.css";

const LanguageControl = () => {
  const [active, setActive] = useState<string>("English");
  const clickLangueage = (value: string) => setActive(value);
  return (
    <article className={s.headerBudLanguageControl}>
      <button
        className={active === "Chinese" ? s.headerBudLanguageControlTextActive : s.headerBudLanguageControlText}
        id="Chinese"
        onClick={() => clickLangueage("Chinese")}
      >
        语
      </button>
      <button
        className={active === "Russian" ? s.headerBudLanguageControlTextActive : s.headerBudLanguageControlText}
        onClick={() => clickLangueage("Russian")}
      >
        RU
      </button>
      <button
        className={active === "English" ? s.headerBudLanguageControlTextActive : s.headerBudLanguageControlText}
        onClick={() => clickLangueage("English")}
      >
        EN
      </button>
    </article>
  );
};

export default LanguageControl;
