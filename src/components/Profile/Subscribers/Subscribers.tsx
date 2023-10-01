import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import img from "../../../pics/Other/profile.png";
import r from "../../../App.module.css";
import l from "./Subscribers.module.css";
import { useDispatch } from "react-redux";
import { setFetchReducer, setFollowReducer, setSubscribersReducer } from "../../../state/profileState/SubscribersState";
import { getUsers, setFollow, setUnFollow } from "../../../dataAccessLayer/ApiSN";
import { SubscribersType } from "../../../types/types";

type SubscribersComponentType = {
  subscribers: SubscribersType[];
  subs: number;
  randomPageUseEffect: number;
  isAppStatus: boolean;
  theme: string;
};

const Subscribers = ({ theme, subscribers, subs, randomPageUseEffect }: SubscribersComponentType) => {
  const dispatch = useDispatch();
  const subscribersPageCount = +Math.ceil(subs / 10);
  let usersData = [];
  for (let i = 0; i < subscribersPageCount; i++) {
    usersData.push(i + 1);
  }

  const [getPage, setGetPage] = useState<number>(randomPageUseEffect);
  useEffect(() => {
    getUsers(getPage).then((res) => {
      let dataForRender = res.data.items;
      dispatch(setSubscribersReducer(dataForRender));
    });
  }, [getPage]);
  const mappedPages = usersData.map((el) => {
    const currentPageStyle = randomPageUseEffect + el - 1 === getPage ? { backgroundColor: "rgba(152, 215, 233, 0.6)" } : {};
    return (
      <NavLink style={currentPageStyle} className={l.pages} key={el} to={"/subscribers"} onClick={() => setGetPage(randomPageUseEffect + el - 1)}>
        {el}
      </NavLink>
    );
  });
  const mappedUsers = subscribers.map((el) => {
    const followedText = el.followed ? "Unfollow" : "Follow";
    const FollowFn = (id: number, bool: boolean) => {
      dispatch(setFetchReducer(id, true));
      bool
        ? setUnFollow(id)
            .then(() => dispatch(setFollowReducer(id, bool)))
            .then(() => dispatch(setFetchReducer(id, false)))
        : setFollow(id)
            .then(() => dispatch(setFollowReducer(id, bool)))
            .then(() => dispatch(setFetchReducer(id, false)));
    };
    return (
      <div className={theme === "White" ? l.userProfile : l.userProfileBlack} key={el.id}>
        <div className={l.avaContainer}>
          <img src={el.photos.large ? el.photos.large : img} alt="userPhoto" />
          <span>{el.name}</span>
        </div>

        <div className={l.buttonContainer}>
          <span>UserID: {el.id}</span>
          <div className={l.userFollowButton}>
            <button
              onClick={() => FollowFn(el.id, el.followed)}
              style={el.fetching ? { pointerEvents: "none", color: "gray" } : {}}
              disabled={el.fetching}
            >
              {followedText}
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className={r.profileAppWrapper}>
      <div>{mappedUsers}</div>
      <div className={l.pagination}>{mappedPages}</div>
    </section>
  );
};

export default Subscribers;
