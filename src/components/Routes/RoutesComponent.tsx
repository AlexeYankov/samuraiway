import { Navigate, Route, Routes } from "react-router-dom";
import s from "./../../App.module.css";
import BarComponent from "../Profile/Components/BarComponent/BarComponent";
import { BodyType } from "../../types/types";
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
import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundaryFallBack } from "../UniversalComponent/LazyLoad/ErrorBoundary";

export const RoutesComponent = ({
  isProfile,
  theme,
  subs,
  page,
  status,
  auth,
  appError,
  setPage,
  setSubs,
  usersData,
  profileDataSelector,
}: BodyType) => {
  const routesPath = (
    <ErrorBoundary fallback={<ErrorBoundaryFallBack />}>
      <Suspense fallback={<LazyJSX />}>
        <Routes>
          <Route path={"/samuraiway"} element={<Navigate to="/login" replace />} />
          <Route path={"/"} element={<Navigate to="/login" replace />} />
          <Route
            path={"profile"}
            element={
              <LazyProfileContainer
                setPage={setPage}
                isProfile={isProfile}
                theme={theme}
                data={profileDataSelector}
                subs={subs}
                randomPageUseEffect={page}
                page={page}
                users={usersData}
                auth={auth}
              />
            }
          />
          <Route path={"messages"} element={<LazyMessages theme={theme} />} />
          <Route path={"login"} element={<LazyLogin theme={theme} auth={auth} page={page} />} />
          <Route path={"music"} element={<LazyMusic />} />
          <Route path={"video"} element={<LazyVideo />} />
          <Route path={"groups"} element={<LazyGroups />} />
          <Route path={"games"} element={<LazyGames />} />
          <Route path={"settings"} element={<LazySettings />} />
          <Route path={"shorts"} element={<LazyShorts />} />
          <Route
            path={"subscribers"}
            element={<LazySubscribers theme={theme} subscribers={usersData} subs={subs} randomPageUseEffect={page} isAppStatus={status} />}
          />
          <Route path={"/*"} element={<LazyNotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
  return (
    <section className={theme === "White" ? s.AppWrapper : s.AppWrapperBlack}>
      {auth && <BarComponent setSubs={setSubs} theme={theme} page={page} />}
      {routesPath}
      {auth && <aside className={s.componentAside} />}
    </section>
  );
};
