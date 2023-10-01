import { useSelector } from "react-redux";
import { PostType, deletePostReducer, postLikeReducer } from "../../../../state/profileState/CRUDStateReducer";
import { AppRootStateType, useAppDispatch } from "../../../../state/store";
import s from "./PostComponent.module.css";
import PostComponentFooter from "./PostComponentFooter";
import { ProfileType } from "../../../../types/types";
import DefaultIcon from "../../../../pics/Other/Tony_Soprano_Portrait.jpg";
import React, { useState } from "react";

type PostedType = {
  photo: string;
  post: PostType;
  postSearch?: boolean;
  data: ProfileType;
  theme: string;
};

const pinnedPostJSX = (
  <span>
    <span className={s.posts__post__pinned}>post pinned</span>
    <svg className={s.posts__post__pinned__icon} width={15} fill="gray" viewBox="0 0 384 512">
      <path d="M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z" />
    </svg>
  </span>
);

const postsSearchJSX = (
  <div className={s.posts__header}>
    <div className={s.posts__header__search}>
      <span className={s.posts__header__description}>Posts</span>
    </div>
    <div className={s.posts__header__icon} onClick={() => console.log("Clicked")}>
      <svg width={25} fill="gray" viewBox="0 0 512 512">
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
      </svg>
    </div>
  </div>
);

const PostComponent = ({ theme, data, post, postSearch }: PostedType) => {
  const dispatch = useAppDispatch();
  const [editPost, setEdit] = useState(false);
  const [editPostText, setEditPostText] = useState(false);
  const [editPostEnd, setEditPostEnd] = useState(false);
  const [postText, setPostText] = useState(post.text);
  const postsCount = useSelector<AppRootStateType, PostType>((state) => state.posts);
  const logFn = (arg: string) => {
    if (arg === "delete") {
      dispatch(deletePostReducer(post.id));
    }
    if (arg === "edit") {
      setEdit(!editPost);
      setEditPostText(!editPostText);
    }
    if (arg === "share") {
    }
  };
  const postLikeHandler = (postID: string) => {
    dispatch(postLikeReducer(postID));
  };
  const onChangePostText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(e.currentTarget.value);
  };
  const keyDownHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      return setEditPostText(!editPostText);
    }
    if (e.key === "Escape") {
      setPostText(postText)
      return setEditPostText(!editPostText);
    }
  };
  const editPostJSX = editPostText ? (
    <textarea
      onKeyDown={keyDownHandler}
      className={theme === "White" ? s.posts__post__textarea : s.posts__post__textarea__black}
      onChange={onChangePostText}
      value={postText}
    />
  ) : (
    <span>{post.text}</span>
  );
  const postsJSX = (
    <div className={theme === "White" ? s.posts__contaiter : s.posts__contaiter__black}>
      {postSearch && postsSearchJSX}
      <div className={s.posts__userPost}>
        <div className={s.posts__userPhoto}>
          <img src={DefaultIcon} alt="" />
        </div>
        <div className={s.posts__user}>
          <div className={s.posts__user__container}>
            <span className={s.posts__user__name}>{data.fullName}</span>
            {postsCount.pinn && pinnedPostJSX}
            <br />
            <span className={s.posts__post__date}>{post.time}</span>
          </div>
          <div className={s.posts__user__container} style={{ display: "flex" }} onClick={() => setEdit(!editPost)}>
            <svg className={s.posts__user__moreButton} width={35} fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z" />
            </svg>
            {editPost && (
              <ul className={theme === "White" ? s.moreButton__Menu : s.moreButton__Menu__Black}>
                <li onClick={() => logFn("delete")}>Удалить</li>
                <li onClick={() => logFn("edit")}>Редактировать</li>
                <li onClick={() => logFn("share")}>Переслать</li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className={s.posts__post}>{editPostJSX}</div>
      <PostComponentFooter post={post} theme={theme} postLikeHandler={postLikeHandler} />
    </div>
  );
  return <React.Fragment key={post.id}>{postsCount && postsJSX}</React.Fragment>;
};

export default PostComponent;
