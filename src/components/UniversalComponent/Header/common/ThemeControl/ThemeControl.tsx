import s from "../../Headerstyles.module.css";
import BlackTheme from "../../../../../pics/PostsIcons/moon-solid.svg";
import { useAppDispatch } from "../../../../../state/store";
import { isAppTheme } from "../../../../../state/appState/appReducer";

type ThemeColorType = {
  currentColor: string;
};

const ThemeControl = ({ currentColor }: ThemeColorType) => {
  const dispatch = useAppDispatch();
  const clickBlack = () => {
    currentColor === "Black" ? dispatch(isAppTheme("White")) : dispatch(isAppTheme("Black"));
  };
  const activeStyle = currentColor === "Black" ? s.headerBudThemeControlTextActive : s.headerBudThemeControlText;
  return (
    <article className={s.headerBudThemeControl}>
      <label htmlFor="Black" className={activeStyle}>
        <img style={{ padding: " 0px 10px" }} src={BlackTheme} id={"Black"} alt="Theme color icon" onClick={clickBlack} />
      </label>
    </article>
  );
};

export default ThemeControl;
