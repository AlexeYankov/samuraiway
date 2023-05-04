import img from "../../../../pics/Other/profile.png";
import img1 from "../../../../pics/Other/Alex.jpg";
import img2 from "../../../../pics/Other/Fred.jpeg";
import img3 from "../../../../pics/Other/Star.jpg";
import img4 from "../../../../pics/Other/Nansy.jpg";
import img5 from "../../../../pics/Other/Susy.jpg";
import s from "../../Profilestyles.module.css";
import { NavLink } from "react-router-dom";
import { SubscribersType } from "../../../../types/types";

type SubscribersContainerType = {
  subscribers: SubscribersType[];
  subscribersTotal: number;
};

const SubscribersContainer = ({ subscribers, subscribersTotal }: SubscribersContainerType) => {
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
    <div className={s.profileSubscribers__container}>
      <div className={s.profileSubscribers__buttons}>
        <NavLink className={s.profileSubscribers__count} to={"/subscribers"}>
          Subscribers
        </NavLink>

        <NavLink className={s.profileSubscribers__count} to={"/subscribers"}>
          {subscribersTotal}
        </NavLink>
      </div>

      <div className={s.profileSubscribers__showingList_top}>
        {mappedSubscribers}
        {/* <a className={s.profileSubscribers__listContainer} href="">
          <img className={s.profileSubscribers__AvaMin} src={img} alt="Photo" />
          <span>Iren</span>
        </a>
        <a className={s.profileSubscribers__listContainer} href="">
          <img
            className={s.profileSubscribers__AvaMin}
            src={img1}
            alt="Photo1"
          />
          <span>Alex</span>
        </a>
        <a className={s.profileSubscribers__listContainer} href="">
          <img
            className={s.profileSubscribers__AvaMin}
            src={img2}
            alt="Photo2"
          />
          <span>Fred</span>
        </a>
      </div>

      <div className={s.profileSubscribers__showingList_top}>
        <a className={s.profileSubscribers__listContainer} href={""}>
          <img
            className={s.profileSubscribers__AvaMin}
            src={img3}
            alt="Photo3"
          />
          <span>Star</span>
        </a>
        <a className={s.profileSubscribers__listContainer} href="">
          <img
            className={s.profileSubscribers__AvaMin}
            src={img4}
            alt="Photo4"
          />
          <span>Nansy</span>
        </a>
        <a className={s.profileSubscribers__listContainer} href="">
          <img
            className={s.profileSubscribers__AvaMin}
            src={img5}
            alt="Photo5"
          />
          <span>Susy</span>
        </a> */}
      </div>
    </div>
  );
};

export default SubscribersContainer;
