import { Navigate, Route, Routes } from "react-router-dom";
import s from "./../../App.module.css";
import BarComponent from "../Profile/Components/BarComponent/BarComponent";
import { PostType } from "../../state/postComponent/postsContentState";
import { ProfileType, SubscribersType } from "../../types/types";
import {
  LazyGames,
  LazyGroups,
  LazyLogin,
  LazyMessages,
  LazyMusic,
  LazyNotFound,
  LazyProfileContainer,
  LazySettings,
  LazyShorts,
  LazySubscribers,
  LazyVideo,
} from "./RoutesConstants";
import { Suspense } from "react";
import { LazyJSX } from "../UniversalComponent/LazyLoad/LazySuspense";
import ErrorBoundary from "../UniversalComponent/LazyLoad/ErrorBoundary";

type BodyType = {
  subs: number;
  page: number;
  posts: PostType[];
  status: boolean;
  auth: boolean;
  appError: string;
  userID: number;
  usersData: SubscribersType[];
  profileDataSelector: ProfileType;
};

export const RoutesComponent = ({ subs, page, posts, status, auth, appError, userID, usersData, profileDataSelector }: BodyType) => {
  const routesPath = (
    <ErrorBoundary fallback={LazyJSX}>
      <Suspense fallback={LazyJSX}>
        <Routes>
          <Route path={"/samuraiway"} element={<Navigate to="/login" replace />} />
          <Route path={"/"} element={<Navigate to="/login" replace />} />
          <Route
            path={"profile"}
            element={<LazyProfileContainer data={profileDataSelector} subs={subs} randomPageUseEffect={page} users={usersData} auth={auth} />}
          />
          <Route path={"messages"} element={<LazyMessages />} />
          <Route path={"login"} element={<LazyLogin auth={auth} />} />
          <Route path={"music"} element={<LazyMusic />} />
          <Route path={"video"} element={<LazyVideo />} />
          <Route path={"groups"} element={<LazyGroups />} />
          <Route path={"games"} element={<LazyGames />} />
          <Route path={"settings"} element={<LazySettings />} />
          <Route path={"shorts"} element={<LazyShorts />} />
          <Route path={"subscribers"} element={<LazySubscribers subscribers={usersData} subs={subs} randomPageUseEffect={page} />} />
          <Route path={"/*"} element={<LazyNotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
  return (
    <section className={s.AppWrapper}>
      <BarComponent />
      {routesPath}
      <aside className={s.componentAside} />
    </section>
  );
};
