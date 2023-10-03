import { useEffect, useState } from "react";
import { useAppDispatch } from "./store";
import { isAppTheme } from "./appState/appReducer";
import { authMeTC } from "./login/loginReducer";
import { getUsersTC } from "./profileState/SubscribersState";
import { PostType, setInitialPostsReducer } from "./profileState/CRUDStateReducer";
import ContentStateFn from "./postComponent/postsContentState";

const useGetProfileFromServer = (
  setSubs: (value: number) => void,
  setPage: (value: number) => void,
  userID: number,
  setMainID: (value: number) => void,
  mainID: number
) => {
  const dispatch = useAppDispatch();
  let randomPageUseEffect;
  useEffect(() => {
    setSubs(Math.round(Math.random() * 500));
    randomPageUseEffect = Math.round(Math.random() * 20);
    setPage(randomPageUseEffect);
    dispatch(isAppTheme("White"));
    dispatch(authMeTC(randomPageUseEffect));
    dispatch(getUsersTC(randomPageUseEffect));
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
    setMainID(userID);
    console.log(userID)
  }, []);
};

export default useGetProfileFromServer;
