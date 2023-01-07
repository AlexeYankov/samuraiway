import { BrowserRouter, Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import Messages from "./components/Profile/Messages/Messages";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Music from "../src/components/Profile/Music/Music";
import Video from "../src/components/Profile/Video/Video";
import Groups from "../src/components/Profile/Groups/Groups";
import Games from "../src/components/Profile/Games/Games";
import Settings from "../src/components/Profile/Settings/Settings";
import Shorts from "../src/components/Profile/Shorts/Shorts";
import Header from "./components/UniversalComponent/Header/Header";
import BarComponent from "./components/Profile/Components/BarComponent/BarComponent";
import { useEffect, useState } from "react";
import { CRUDType } from "./state/profileState/CRUDState";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "./state/store";
import Subscribers from "./components/Profile/Subscribers/Subscribers";
import { setSubscribersReducer } from "./state/profileState/SubscribersState";
import { authMe, getProfile, getUsers } from "./dataAccessLayer/ApiSN";
import ContentStateFn, { PostType } from "./state/PostComponent/PostsContentState";

export type ProfileType = {
  aboutMe: string;
  contacts: {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
  };
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  userID: number;
  photos: {
    large: string;
    small: string;
  };
  subscribers: number;
  posts?: CRUDType;
};

export type SubscribersType = {
  id: number;
  name: string;
  status?: string;
  photos: {
    small: string;
    large: string;
  };
  followed: boolean;
  page: number;
  fetching?:boolean
};

function App() {
  const [profile, setProfile] = useState<ProfileType>();
  const [subs, setSubs] = useState<number>(1);
  const [page, getPage] = useState<number>(1);
  const [posts, setPosts] = useState<PostType[]>();
  // const [userData, setUserData] = useState();
  const setProfileData = useSelector<AppRootStateType, ProfileType>(
    (state) => state.profile
  );
  const setUsersData = useSelector<AppRootStateType, SubscribersType[]>(
    (state) => state.subscribers
  );
  const dispatch = useDispatch();
  let randomPageUseEffect = 1;
  useEffect(() => {
    setSubs(+Math.round(Math.random() * 500));
    const randomPage = +Math.round(Math.random() * 20);
    let userID = 0;
    let initIDvalue = userID ? userID : 27145;
    randomPageUseEffect = randomPage ? randomPage : 1;
    getPage(randomPage)
    authMe().then((res) => {
      userID = res.data.data.id;
    });

    getProfile(initIDvalue).then((res) => {
      res.data.page = randomPageUseEffect
      setProfile(res.data);
    });

    getUsers(randomPageUseEffect).then((res) => {
      let dataForRender = res.data.items;
      dataForRender.page = randomPageUseEffect;
      dispatch(setSubscribersReducer(dataForRender));
    });
    
    const posts1 = ContentStateFn();
    setPosts(posts1)
  }, []);
  console.log(posts);
  const routesPath = (
    <Routes>
      <Route path={"/*"} element={""} />
      <Route
        path={"/"}
        element={
          <ProfileContainer
            data={setProfileData}
            subs={subs}
            randomPageUseEffect={page}
            users={setUsersData}
          />
        }
      />
      <Route
        path={"/profile"}
        element={
          <ProfileContainer
            data={setProfileData}
            subs={subs}
            randomPageUseEffect={page}
            users={setUsersData}
          />
        }
      />
      <Route path={"/messages"} element={<Messages />} />
      <Route path={"/music"} element={<Music />} />
      <Route path={"/video"} element={<Video />} />
      <Route path={"/groups"} element={<Groups />} />
      <Route path={"/games"} element={<Games />} />
      <Route path={"/settings"} element={<Settings />} />
      <Route path={"/shorts"} element={<Shorts />} />
      <Route
        path={"/subscribers"}
        element={
          <Subscribers
            subscribers={setUsersData}
            subs={subs}
            randomPageUseEffect={page}
          />
        }
      />
    </Routes>
  );

  return (
    <BrowserRouter>
      <main className={s.App}>
        <Header />
        <section className={s.AppWrapper}>
          <div className={s.menuBar}>
            <BarComponent />
          </div>
          {routesPath}
          <article className={s.componentAside} />
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
