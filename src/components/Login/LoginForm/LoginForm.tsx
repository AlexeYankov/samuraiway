import { LogoContainer } from "../../UniversalComponent/Header/common/LogoContainer/LogoContainer";
import LoginInput from "../LoginInput/LoginInput";
import s from "./LoginForm.module.scss";

type LoginFormType = {
  page: number;
  theme: string;
};

const LoginForm = ({ page, theme }: LoginFormType) => {
  return (
    <div className={theme === "White" ? s.container : s.containerBlack}>
      <div className={s.LogoContainer}>
        <LogoContainer />
      </div>
      <span className={s.login}>Login</span>
      <LoginInput page={page} theme={theme} />
    </div>
  );
};

export default LoginForm;
