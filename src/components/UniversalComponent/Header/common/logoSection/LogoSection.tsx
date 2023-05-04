import { LogoContainer } from "../LogoContainer/LogoContainer";
import s from "./../../Headerstyles.module.css";
import { NavLink } from "react-router-dom";

export const LogoSection = () => {
  return (
    <article className={s.headerLogo}>
      <div className={s.headerLogoContainer}>
        <label className={s.headerLogoContainer1}>
          <NavLink className={s.headerLogoImg} to={"/profile"}>
            <LogoContainer />
          </NavLink>
        </label>
      </div>
    </article>
  );
};
