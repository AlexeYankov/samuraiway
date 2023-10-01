import s from "./Login.module.scss";
import LoginFeatures from "./Features/LoginFeatures";
import MainComponent from "./MainComponent/MainComponent";
import LoginForm from "./LoginForm/LoginForm";
import LoginFooter from "./Footer/Footer";
import { Navigate } from "react-router-dom";

type LoginType = {
  auth: boolean;
  page: number
  theme: string
};

const Login = ({ auth, page, theme }: LoginType) => {
  if (auth) {
    return <Navigate to="/profile" replace />;
  }
  return (
    <div className={theme === "White" ? s.containerWhite : s.containerBlack}>
      <div className={s.mainWrapper}>
        <div>
          <MainComponent />
          <LoginFeatures />
        </div>

        <div>
          <LoginForm theme={theme} page={page}/>
        </div>
      </div>

      <LoginFooter />
    </div>
  );
};
export default Login;
