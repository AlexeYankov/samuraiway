import img from "../../../../pics/Other/profile.png";
import s from "../../Profilestyles.module.css";
import { NavLink } from "react-router-dom";
import { SubscribersType } from "../../../../types/types";

type SubscribersContainerType = {
  subscribers: SubscribersType[];
  subscribersTotal: number;
  theme: string;
};

const SubscribersContainer = ({ theme, subscribers, subscribersTotal }: SubscribersContainerType) => {
  console.log(subscribersTotal, subscribers);
  const subscribersChecker = subscribersTotal >= 6 ? 6 : subscribersTotal;
  let mappedSubscribers = subscribers.slice(0, subscribersChecker).map((el) => {
    let userPhoto = el.photos.large ? el.photos.large : img;
    let nameChecker = el.name.split("").length > 6 ? el.name.split("").slice(0, 4).join("") + "..." : el.name;
    return (
      <NavLink key={el.id} className={s.profileSubscribers__listContainer} to="">
        <img className={s.profileSubscribers__AvaMin} src={userPhoto} alt="Photo1" />
        <span>{nameChecker}</span>
      </NavLink>
    );
  });
  return (
    <div className={theme === "White" ? s.profileSubscribers__container : s.profileSubscribers__container__Black}>
      <div className={s.profileSubscribers__buttons}>
        <NavLink className={s.profileSubscribers__count} to={"/subscribers"}>
          Subscribers
        </NavLink>

        <NavLink className={s.profileSubscribers__count} to={"/subscribers"}>
          {subscribersTotal}
        </NavLink>
      </div>

      <div className={s.profileSubscribers__showingList_top}>{mappedSubscribers}</div>
    </div>
  );
};

export default SubscribersContainer;
