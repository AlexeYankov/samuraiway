import UniversalButton from "../UniversalComponent/Buttons/UniversalButton";
import Avatar from "./Components/AvatarComponent/Avatar";
import { ReactComponent as InviteSVG } from "../../pics/Buttons/square-plus-solidGray.svg";
import { useState } from "react";
import AdverstingIMG from "../../pics/adversting/Nestle.png";
import DefaultIcon from "../../pics/Other/Tony_Soprano_Portrait.jpg";
import img from "../../pics/Other/Iren.jpg";
import img1 from "../../pics/Other/Alex.jpg";
import img2 from "../../pics/Other/Fred.jpeg";
import img3 from "../../pics/Other/Star.jpg";
import img4 from "../../pics/Other/Nansy.jpg";
import img5 from "../../pics/Other/Susy.jpg";
import s from "./Profilestyles.module.css";
import r from "../../App.module.css";

import InfoComponent from "./Components/InfoComponent/InfoComponent";
import CRUDComponent from "./Components/CRUDComponent/CRUDComponent";
import PostComponent from "./Components/PostComponent/PostComponent";
import TextAreaComponent from "./Components/CRUDComponent/TextAreaComponent";
import { AppRootStateType } from "../../state/store";
import { CRUDType } from "../../state/profileState/CRUDStateReducer";
import { useSelector } from "react-redux";
import { NavLink, Navigate } from "react-router-dom";
import SubscribersContainer from "./Components/SubscribersContainer/SubscribersContainer";
import { ProfileType, SubscribersType } from "../../types/types";

type ProfileContainerType = {
  data: ProfileType;
  subs: number;
  randomPageUseEffect?: number;
  users: SubscribersType[];
  auth: boolean;
};

const ProfileContainer = ({ data, subs, randomPageUseEffect, users, auth }: ProfileContainerType) => {
  const [someVar, setA] = useState<boolean>(false);
  const [post, setPost] = useState<boolean>(false);
  const [shorts, setShorts] = useState<boolean>(false);
  const openCloseMoreBtn = () => {
    setA(!someVar);
  };
  // const pinnedPost = pinned ? (
  //   <PostComponent
  //     name="John"
  //     photo={AvatarIcon}
  //     post={postText}
  //     pinned={true}
  //     setA={openCloseMoreBtn}
  //     someVar={someVar}
  //   />
  // ) : (
  //   <PostComponent
  //     name="John"
  //     photo={AvatarIcon}
  //     post={postText}
  //     postSearch={true}
  //     setA={openCloseMoreBtn}
  //     someVar={someVar}
  //   />
  // );
  const [value, someValue] = useState<string>("");
  const [valueShorts, someShorts] = useState<string>("");
  const openPostFn = () => {
    setPost(!post);
    setShorts(false);
  };
  const addShorts = () => {
    setShorts(!shorts);
    setPost(false);
  };
  const closePostFn = () => {
    setPost(false);
    setShorts(false);
  };
  const photosLarge = (pic: string) => (pic !== null ? data.photos.large : DefaultIcon);
  if (!auth) {
    return <Navigate to="/login" replace />;
  }
  return (
    <article className={r.profileAppWrapper}>
      <section className={s.profileWrapper}>
        <article className={s.profileAvatar}>
          <Avatar photo={data.photos === undefined || null ? DefaultIcon : photosLarge(data.photos.large)} />
        </article>

        <article className={s.profileTexting}>
          <div className={s.profileTexting__container}>
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

            <UniversalButton className={s.profileTexting__blackList}>
              <span>send to black list</span>
            </UniversalButton>

            <SubscribersContainer subscribers={users} subscribersTotal={subs} />
            <div className={s.profileAdversting}>
              <a href="#">
                <img src={AdverstingIMG} alt="adverst" />
              </a>
            </div>
          </div>
        </article>

        <article className={s.profileInfo}>
          <InfoComponent subscribersTotal={subs} />
        </article>

        <article className={s.profileInfo__posts}>
          <CRUDComponent addPost={openPostFn} addShorts={addShorts} />
          {post ? (
            <TextAreaComponent accept={"image/*,.png,.jpg,.gif,.web,.webp"} closeFn={closePostFn} value={value} onChange={(str) => someValue(str)} />
          ) : (
            ""
          )}
          {shorts ? (
            <TextAreaComponent
              accept={"video/mp4,video/x-m4v,video/*"}
              closeFn={closePostFn}
              value={valueShorts}
              onChange={(str) => someShorts(str)}
              shorts={true}
            />
          ) : (
            ""
          )}
          {/* {pinnedPost} */}
          {/* <PostComponent
            name={data.fullName}
            photo={data.photos === undefined || null ? DefaultIcon : photosLarge(data.photos.large)
            post={postsCount}
            setA={openCloseMoreBtn}
          /> */}
        </article>

        <article className={s.profileAside}></article>
      </section>
    </article>
  );
};

export default ProfileContainer;
