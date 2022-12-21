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
import axios from "axios";

type usersType = {
  aboutMe: string,
  contacts: {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
  },
  fullName: string,
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  photos: {
    large:string, 
    small: string
  },
  userID: number
}

function App() {
  const [users, setUsers] = useState<usersType>()
  useEffect(() => {
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/27193')
    .then(response => {
    setUsers(response.data)}) 
  },[])
  console.log(users)
  
  const routesPath = (
    <Routes>
      <Route path={"/*"} element={""} />
      <Route path={"/"} element={<ProfileContainer />} />
      <Route path={"/profile"} element={<ProfileContainer />} />
      <Route path={"/messages"} element={<Messages />} />
      <Route path={"/music"} element={<Music />} />
      <Route path={"/video"} element={<Video />} />
      <Route path={"/groups"} element={<Groups />} />
      <Route path={"/games"} element={<Games />} />
      <Route path={"/settings"} element={<Settings />} />
      <Route path={"/shorts"} element={<Shorts />} />
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
