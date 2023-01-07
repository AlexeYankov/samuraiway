import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SubscribersType } from "../../../App";
import img from "../../../pics/Other/profile.png";
import r from "../../../App.module.css";
import l from "./Subscribers.module.css";
import { useDispatch } from "react-redux";
import {
  setFetchReducer,
  setFollowReducer,
  setSubscribersReducer,
} from "../../../state/profileState/SubscribersState";
import {
  getUsers,
  setFollow,
  setUnFollow,
} from "../../../dataAccessLayer/ApiSN";

type SubscribersComponentType = {
  subscribers: SubscribersType[];
  subs: number;
  randomPageUseEffect: number;
};

const Subscribers = ({
  subscribers,
  subs,
  randomPageUseEffect,
}: SubscribersComponentType) => {
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
  console.log(getPage);
  const mappedPages = usersData.map((el) => {
    return (
      <NavLink
        className={l.pages}
        key={el}
        to={"/subscribers"}
        onClick={() => setGetPage(randomPageUseEffect + el - 1)}
      >
        {el}
      </NavLink>
    );
  });
  console.log(subscribers);
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
      <div className={l.userProfile} key={el.id}>
        <img src={el.photos.large ? el.photos.large : img} alt="userPhoto" />
        <div className={l.userData}>UserID:{el.id}</div>
        <div className={l.userFollowButton}>
          <button
            onClick={() => FollowFn(el.id, el.followed)}
            style={el.fetching ? { pointerEvents: "none", color: "gray" } : {}}
          >
            {followedText}
          </button>
        </div>
        <span>{el.name}</span>
      </div>
    );
  });

  return (
    <section className={r.profileAppWrapper}>
      <div className={l.pagination}>{mappedPages}</div>
      <div>{mappedUsers}</div>
      <div>
        <img src="" alt="" />
      </div>
    </section>
  );
};

export default Subscribers;
