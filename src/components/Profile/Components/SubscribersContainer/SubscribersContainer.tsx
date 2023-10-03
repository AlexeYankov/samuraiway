import img from "../../../../pics/Other/profile.png";
import s from "../../Profilestyles.module.css";
import { NavLink, Navigate } from "react-router-dom";
import { SubscribersType } from "../../../../types/types";
import { useAppDispatch } from "../../../../state/store";
import { getProfileTC } from "../../../../state/profileState/ProfileStateReducer";
import { PostType, setInitialPostsReducer } from "../../../../state/profileState/CRUDStateReducer";
import ContentStateFn from "../../../../state/postComponent/postsContentState";

type SubscribersContainerType = {
  subscribers: SubscribersType[];
  subscribersTotal: number;
  page: number;
  setPage: (value: number)=>void;
  theme: string;
};

const SubscribersContainer = ({ setPage, page, theme, subscribers, subscribersTotal }: SubscribersContainerType) => {
  const dispatch = useAppDispatch();
  const subscribersChecker = subscribersTotal >= 6 ? 6 : subscribersTotal;
  let mappedSubscribers = subscribers.slice(0, subscribersChecker).map((el, i) => {
    let userPhoto = el.photos.large ? el.photos.large : img;
    let nameChecker = el.name.split("").length > 6 ? el.name.split("").slice(0, 4).join("") + "..." : el.name;
    const redirectToUser = () => {
      const generatedPosts: PostType[] = ContentStateFn().map((el) => ({
        time: el.postTime,
        text: el.postText,
        id: el.postId,
        img: "string",
        music: "string",
        video: "string",
        status: {
          likes: Math.round(Math.random() * 300),
          comments: Math.round(Math.random() * 200),
          reposts: Math.round(Math.random() * 400),
          views: Math.round(Math.random() * 100),
        },
        pinn: false,
        isLiked: false,
      }));
      dispatch(setInitialPostsReducer(generatedPosts));
      dispatch(getProfileTC(subscribers[i].id, page));
      setPage(page);
      return <Navigate to="/login" replace />;
    };
    return (
      <NavLink key={el.id} className={s.profileSubscribers__listContainer} to={""} onClick={redirectToUser}>
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
