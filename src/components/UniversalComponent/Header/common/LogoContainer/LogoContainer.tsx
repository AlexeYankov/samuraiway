import s from "../../Headerstyles.module.css";
import logo from "../../../../../pics/IconFavicon/pic1.png";

export const LogoContainer = () => {
  return (
    <div className={s.headerLogoBudContainer}>
      <img src={logo} alt="buddy" />
      <span className={s.headerLogoBud}>bud</span>
      <span className={s.headerLogoDy}>dy</span>
    </div>
  );
};
