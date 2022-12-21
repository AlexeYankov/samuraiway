import s from "../../../../App.module.css";
import UniversalButton from "../../../UniversalComponent/Buttons/UniversalButton";

const BarButtons = () => {
    return <div className={s.menuButtons}>
      <UniversalButton className={s.menuButtons__logOut}>
        log out
      </UniversalButton>

      <UniversalButton className={s.menuButtons__deleteAccount}>
        delete your account
      </UniversalButton>
    </div>;
  }

  export default BarButtons;