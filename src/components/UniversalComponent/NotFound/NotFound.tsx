import s from "./NotFound.module.scss";
import foundPic from "../../../pics/NotFound/2foundPic.png";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <section className={s.container}>
      {/* <span className={s.description}>OooOps...</span> */}

      <br />
      <span className={s.description}>
        Please{" "}
        <a className={s.descriptionNav} href="login">
          {" "}
          sign in
        </a>{" "}
        again
      </span>
      <img className={s.notFoundImg} src={foundPic} alt="PageNotFound" />
      {/* <hr /> */}
      <br />
      {/*  */}
    </section>
  );
};

export default NotFound;
