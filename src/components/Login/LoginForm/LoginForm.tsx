import { LogoContainer } from "../../UniversalComponent/Header/common/LogoContainer/LogoContainer";
import LoginInput from "../LoginInput/LoginInput";
import s from "./LoginForm.module.scss";

const LoginForm = () => {
  return (
    <div className={s.container}>
      <div className={s.LogoContainer}>
        <LogoContainer />
      </div>
      <span className={s.login}>Login</span>
      <LoginInput />
    </div>
  );
};

export default LoginForm;
