import { useState } from "react";
import s from "./Profilestyles.module.css";
import r from "../../App.module.css";
import { ProfileType, SubscribersType } from "../../types/types";
import { AvatarHOC } from "./Components/AvatarComponent/AvatarHOC";
import { ColumnComponent } from "./Components/ColumnComponent/ColumnComponent";
import { InfoComponentHOC } from "./Components/InfoComponent/InfoComponentHOC";
import { PostsComponentHOC } from "./Components/PostComponent/PostsComponentHOC";
import { Navigate } from "react-router-dom";

type ProfileContainerType = {
  data: ProfileType;
  subs: number;
  page: number;
  users: SubscribersType[];
  randomPageUseEffect?: number;
  auth: boolean;
  theme: string;
  isProfile: boolean;
  setPage: (value: number) => void;
};

const ProfileContainer = ({setPage,  page, isProfile, theme, data, subs, randomPageUseEffect, users, auth }: ProfileContainerType) => {
  const [post, setPost] = useState<boolean>(false);
  const [shorts, setShorts] = useState<boolean>(false);
  const [postValue, somePostValue] = useState<string>("");
  const [shortsPostValue, someShortsPostValue] = useState<string>("");
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

  if (!auth) {
    return <Navigate to="/login" replace />;
  }
  return (
    <article className={r.profileAppWrapper}>
      <section className={theme === "White" ? s.profileWrapper : s.profileWrapperBlack}>
        <AvatarHOC data={data} />
        <ColumnComponent setPage={setPage} isProfile={isProfile} theme={theme} page={page} subs={subs} users={users} />
        <InfoComponentHOC theme={theme} subs={subs} data={data} />
        <PostsComponentHOC
          post={post}
          shorts={shorts}
          value={postValue}
          someValue={somePostValue}
          valueShorts={shortsPostValue}
          someShorts={someShortsPostValue}
          openPostFn={openPostFn}
          addShorts={addShorts}
          closePostFn={closePostFn}
          theme={theme}
          data={data}
        />
        <article className={s.profileAside}></article>
      </section>
    </article>
  );
};

export default ProfileContainer;
