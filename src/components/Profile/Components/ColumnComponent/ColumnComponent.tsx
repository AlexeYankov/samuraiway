import UniversalButton from "../../../UniversalComponent/Buttons/UniversalButton";
import SubscribersContainer from "../SubscribersContainer/SubscribersContainer";
import AdverstingIMG from "../../../../pics/adversting/Nestle.png";
import { ReactComponent as InviteSVG } from "../../../../pics/Buttons/square-plus-solidGray.svg";
import { SubscribersType } from "../../../../types/types";
import s from "./../../Profilestyles.module.css";

type ColumnComponentType = {
  subs: number;
  page: number;
  users: SubscribersType[];
  theme: string;
  isProfile: boolean;
  setPage: (value: number) => void;
};

export const ColumnComponent = ({ setPage, isProfile, theme, subs, page, users }: ColumnComponentType) => {
  console.log(isProfile)
  return (
    <article className={s.profileTexting}>
      <div className={s.profileTexting__container}>
        {isProfile && (
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
        )}

        {isProfile && (
          <UniversalButton className={s.profileTexting__blackList}>
            <span>send to black list</span>
          </UniversalButton>
        )}

        <SubscribersContainer setPage={setPage} page={page} theme={theme} subscribers={users} subscribersTotal={subs} />
        <div className={s.profileAdversting}>
          <a href="#">
            <img src={AdverstingIMG} alt="adverst" />
          </a>
        </div>
      </div>
    </article>
  );
};
