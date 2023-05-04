import LanguageControl from "../LanguageContro/LanguageControl";
import ThemeControl from "../ThemeControl/ThemeControl";
import s from "./../../Headerstyles.module.css";

type MenuType = {
  currentColor: string;
};

export const MenuSection = ({ currentColor }: MenuType) => {
  return (
    <article className={s.headerBudBlack}>
      <div className={s.headerBudContainer}>
        <ThemeControl currentColor={currentColor} />
        <LanguageControl />
      </div>
    </article>
  );
};
