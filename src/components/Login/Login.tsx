import s from "./Login.module.scss";
import LoginFeatures from "./Features/LoginFeatures";
import MainComponent from "./MainComponent/MainComponent";
import LoginForm from "./LoginForm/LoginForm";
import LoginFooter from "./Footer/Footer";
import { Navigate } from "react-router-dom";

type LoginType = {
  auth: boolean;
};

const Login = ({ auth }: LoginType) => {
  if (auth) {
    return <Navigate to="/profile" replace />;
  }
  return (
    <div className={s.container}>
      <div className={s.mainWrapper}>
        <div>
          <MainComponent />
          <LoginFeatures />
        </div>

        <div>
          <LoginForm />
        </div>
      </div>

      <LoginFooter />
    </div>
  );
};
export default Login;
