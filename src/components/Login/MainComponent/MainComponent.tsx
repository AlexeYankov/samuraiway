import s from "./MainComponent.module.scss";
import { LogoContainer } from "../../UniversalComponent/Header/common/LogoContainer/LogoContainer";
import pic from "../../../pics/IconFavicon/Capture.png";

const MainComponent = () => {
  return (
    <div className={s.container}>
      <div className={s.LogoWrapper}>
        <div className={s.LogoContainer}>
          <LogoContainer />
        </div>
        <div className={s.LogoDescription}>in your mobile devices</div>
      </div>

      <div className={s.imgDescription}>
        <div className={s.imgText}>
          Download official <strong>mobile App</strong> to be
          <br />
          with your friends everywhere
        </div>
        <img className={s.imgIcon} src={pic} alt="mobile version of App" />
      </div>
    </div>
  );
};

export default MainComponent;
