import UniversalButton from "../../../UniversalComponent/Buttons/UniversalButton";
import { ReactComponent as InviteSVG } from "../../../../pics/Buttons/square-plus-solidGray.svg";
import s from "../../Profilestyles.module.css";

const Buttons = () => {
  return (
    <div className={s.profileTexting__buttonContainer}>
      <UniversalButton className={s.profileTexting__button}>
        <InviteSVG className={s.profileTexting__buttonImg} fill="white" width="20" height="22" />
        <span className={s.profileTexting__button_Invite}>Follow</span>
      </UniversalButton>

      <UniversalButton className={s.profileTexting__button}>
        <InviteSVG className={s.profileTexting__buttonImg} fill="white" width="20" height="22" />
        <span className={s.profileTexting__button_Invite}>Message</span>
      </UniversalButton>
    </div>
  );
};

export default Buttons;
