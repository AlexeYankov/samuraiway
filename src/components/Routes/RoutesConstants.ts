import React from "react";

export const LazyProfileContainer = React.lazy(() => import("../Profile/ProfileContainer"));
export const LazyMessages = React.lazy(() => import("../Profile/Messages/Messages"));
export const LazyLogin = React.lazy(() => import("../Login/Login"));
export const LazyMusic = React.lazy(() => import("../Profile/Music/Music"));
export const LazyVideo = React.lazy(() => import("../Profile/Video/Video"));
export const LazyGroups = React.lazy(() => import("../Profile/Groups/Groups"));
export const LazySubscribers = React.lazy(() => import("../Profile/Subscribers/Subscribers"));
export const LazyGames = React.lazy(() => import("../Profile/Games/Games"));
export const LazyShorts = React.lazy(() => import("../Profile/Shorts/Shorts"));
export const LazySettings = React.lazy(() => import("../Profile/Settings/Settings"));
export const LazyNotFound = React.lazy(() => import("../UniversalComponent/NotFound/NotFound"));
