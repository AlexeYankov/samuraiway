import { NavLink, Navigate } from "react-router-dom";
import s from "../../Headerstyles.module.css";
import { useAppDispatch } from "../../../../../state/store";
import { logOutTC } from "../../../../../state/login/loginReducer";

type AuthType = {
  auth: boolean;
  color: string;
};

const AuthSection = ({ auth, color }: AuthType) => {
  const dispatch = useAppDispatch();
  const fontColor = color === "White" ? { color: "black" } : { color: "white" };
  const black = color === "White" ? s.headerLogOut : s.headerLogOutBlack;
  const logOutHandler = () => {
    dispatch(logOutTC());
    console.log(12);
    return <Navigate to="/login" replace />;
  };
  return (
    <>
      {auth ? (
        <article className={black}>
          <NavLink className={s.headerLogOutText} style={fontColor} to="/login" onClick={logOutHandler}>
            <p>log out</p>
          </NavLink>
        </article>
      ) : (
        <article className={black}>
          <NavLink className={s.headerLogOutTextProfile} style={fontColor} to="/login">
            <p>sign in</p>
          </NavLink>
          <NavLink className={s.headerLogOutTextProfile} style={fontColor} to="/login">
            <p>create new account</p>
          </NavLink>
        </article>
      )}
    </>
  );
};

export default AuthSection;
