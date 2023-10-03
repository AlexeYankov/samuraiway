import { NavLink } from "react-router-dom";
import s from "../../../../App.module.css";
import f from "./BarComponent.module.css";
import BarButtons from "./BarButtons";

import NavFeatures from "../../../../state/barContent/barState";
import { useAppDispatch } from "../../../../state/store";
import { authMeTC } from "../../../../state/login/loginReducer";
import { PostType, setInitialPostsReducer } from "../../../../state/profileState/CRUDStateReducer";
import ContentStateFn from "../../../../state/postComponent/postsContentState";

type BarType = {
  theme: string;
  page: number;
  setSubs: (value: number) => void;
};

const BarComponent = ({ setSubs, page, theme }: BarType) => {
  const dispatch = useAppDispatch();
  const toMyProfile = () => {
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
    setSubs(Math.round(Math.random() * 500));
    dispatch(authMeTC(page));
  };
  const GenericBar = NavFeatures.map((el) => {
    console.log(el.tag)
    return (
      <NavLink to={el.rout} className={({ isActive }) => (isActive ? f.isActiveStyle : "")} key={el.id}>
        <div className={el.style} onClick={() => (el.tag === "Profile" ? toMyProfile() : "")}>
          <img src={el.icon} alt="" />
          <span>{el.tag}</span>
        </div>
      </NavLink>
    );
  });

  return (
    <div className={theme === "White" ? s.menuBar : s.menuBarBlack}>
      <div>
        <div className={s.menuBar__container}>{GenericBar}</div>
        <BarButtons />
      </div>
    </div>
  );
};

export default BarComponent;
