import { BrowserRouter, Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import Messages from "./components/Profile/Messages/Messages";
import ProfileHOK from "./components/Profile/ProfileHOK";
import Music from "../src/components/Profile/Music/Music";
import Video from "../src/components/Profile/Video/Video";
import Groups from "../src/components/Profile/Groups/Groups";
import Games from "../src/components/Profile/Games/Games";
import Settings from "../src/components/Profile/Settings/Settings";
import Shorts from "../src/components/Profile/Shorts/Shorts";
import Header from "./components/UniversalComponent/Header/Header";
import BarComponent from "./components/Profile/Components/BarComponent/BarComponent";

function App() {
  const routesPath = (
    <Routes>
      <Route path={"/*"} element={""} />
      <Route path={"/"} element={<ProfileHOK />} />
      <Route path={"/profile"} element={<ProfileHOK />} />
      <Route path={"/messages"} element={<Messages />} />
      <Route path={"/music"} element={<Music />} />
      <Route path={"/video"} element={<Video />} />
      <Route path={"/groups"} element={<Groups />} />
      <Route path={"/games"} element={<Games />} />
      <Route path={"/settings"} element={<Settings />} />
      <Route path={"/shorts"} element={<Shorts />} />
    </Routes>)
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
