import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SubscribersType } from "../../../App";
import img from "../../../pics/Other/profile.png";
import r from "../../../App.module.css";
import l from "./Subscribers.module.css";
import { useDispatch } from "react-redux";
import { setSubscribersReducer } from "../../../state/profileState/SubscribersState";

type SubscribersComponentType = {
  subscribers: SubscribersType[];
  subs: number;
  randomPageUseEffect?: number;
};

const Subscribers = ({
  subscribers,
  subs,
  randomPageUseEffect,
}: SubscribersComponentType) => {
  console.log(subscribers);
  const dispatch = useDispatch();
  dispatch(setSubscribersReducer(subscribers));
  const subscribersPageCount = +Math.ceil(subs / 10);
  let usersData = [];
  for (let i = 0; i <= subscribersPageCount; i++) {
    usersData.push(i + 1);
  }

  const mappedPages = usersData.map((el) => {
    // const getPage = (el: number) => {
    //   axios
    //     .get("https://social-network.samuraijs.com/api/1.0/users?page=" + el)
    //     .then((res) => {
    //       let dataForRender = res.data.items;
    //       dispatch(setSubscribersReducer(dataForRender));
    //     });
    // };
    return (
      <NavLink key={el} to={"/subscribers"}>
        {el}
      </NavLink>
    );
  });
  const mappedUsers = subscribers.slice(0, 10).map((el) => {
    return (
      <div className={l.userProfile} key={el.id}>
        <img src={el.photos.large ? el.photos.large : img} alt="userPhoto" />
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
