import UniversalButton from "../UniversalComponent/Buttons/UniversalButton";
import Avatar from "./Components/Avatar";
import { ReactComponent as InviteSVG } from "../../pics/Buttons/square-plus-solidGray.svg";
import { useState } from "react";
import AdverstingIMG from "../../pics/adversting/Nestle.png";
import AvatarIcon from "../../pics/Other/Tony_Soprano_Portrait.jpg";
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

const ProfileContainer = () => {
  const [someVar, setA] = useState<boolean>(false);
  const [post, setPost] = useState<boolean>(false);
  const [shorts, setShorts] = useState<boolean>(false);
  const pinned = 1;
  const postText = "fgfr";
  const openCloseMoreBtn = () => {
    setA(!someVar)
  }
  const pinnedPost = pinned ? (
    <PostComponent
      name="John"
      photo={AvatarIcon}
      post={postText}
      pinned={true}
      setA={openCloseMoreBtn} 
      someVar={someVar}
    />
  ) : (
    <PostComponent
      name="John"
      photo={AvatarIcon}
      post={postText}
      postSearch={true}
      setA={openCloseMoreBtn} 
      someVar={someVar}
    />
  );
  const [value, someValue] = useState<string>("");
  const [valueShorts, someShorts] = useState<string>("");
  console.log(value);
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
  
  return (
    <article className={r.profileAppWrapper}>
      <section className={s.profileWrapper}>
        <article className={s.profileAvatar}>
          <Avatar photo={AvatarIcon} />
        </article>

        <article className={s.profileTexting}>
          <div className={s.profileTexting__container}>
            <div className={s.profileTexting__buttonContainer}>
              <UniversalButton className={s.profileTexting__button}>
                <InviteSVG
                  className={s.profileTexting__buttonImg}
                  fill="white"
                  width="20"
                  height="22"
                />
                <span className={s.profileTexting__button_Invite}>Follow</span>
              </UniversalButton>

              <UniversalButton className={s.profileTexting__button}>
                <InviteSVG
                  className={s.profileTexting__buttonImg}
                  fill="white"
                  width="20"
                  height="22"
                />
                <span className={s.profileTexting__button_Invite}>Message</span>
              </UniversalButton>
            </div>

            <UniversalButton className={s.profileTexting__blackList}>
              <span>send to black list</span>
            </UniversalButton>

            <div className={s.profileSubscribers__container}>
              <div className={s.profileSubscribers__buttons}>
                <a className={s.profileSubscribers__count} href={""}>
                  Subscribers
                </a>

                <a className={s.profileSubscribers__count} href={""}>
                  6743
                </a>
              </div>

              <div className={s.profileSubscribers__showingList_top}>
                <a className={s.profileSubscribers__listContainer} href="">
                  <img
                    className={s.profileSubscribers__AvaMin}
                    src={img}
                    alt="Photo"
                  />
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
                </a>
              </div>
            </div>
            <div className={s.profileAdversting}>
              <a href="">
                <img src={AdverstingIMG} alt="" />
              </a>
            </div>
          </div>
        </article>

        <article className={s.profileInfo}>
          <InfoComponent />
        </article>

        <article className={s.profileInfo__posts}>
          <CRUDComponent
            addPost={openPostFn}
            addShorts={addShorts}
          />
          {post ? (
            <TextAreaComponent
              accept={"image/*,.png,.jpg,.gif,.web,.webp"}
              closeFn={closePostFn}
              value={value}
              onChange={(str) => someValue(str)}
            />
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
          {pinnedPost}
          <PostComponent name="John" photo={AvatarIcon} post={postText} setA={openCloseMoreBtn} someVar={someVar} />
        </article>

        <article className={s.profileAside}></article>
      </section>
    </article>
  );
};

export default ProfileContainer;
