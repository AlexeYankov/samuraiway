import { BrowserRouter } from "react-router-dom";
import s from "./App.module.css";
import Header from "./components/UniversalComponent/Header/Header";
import { useEffect, useState } from "react";
import { getUsersTC } from "./state/profileState/SubscribersState";
import ContentStateFn from "./state/postComponent/postsContentState";
import { RoutesComponent } from "./components/Routes/RoutesComponent";
import { authMeTC } from "./state/login/loginReducer";
import { useAppDispatch, useAppSelector } from "./state/store";
import { authSelector, errorSelector, statusSelector, themeSelector } from "./selectors/AppSelector";
import loader from "./pics/loaders/clock.svg";
import { isAppTheme } from "./state/appState/appReducer";
import { userIDSelector } from "./selectors/AuthSelector";
import { setProfileData, setUsersData } from "./selectors/ProfileSelectors";
import { PostType, setInitialPostsReducer } from "./state/profileState/CRUDStateReducer";
let randomPageUseEffect;

function App() {
  const profileDataSelector = useAppSelector(setProfileData);
  const usersData = useAppSelector(setUsersData);
  const status = useAppSelector(statusSelector);
  const auth = useAppSelector(authSelector);
  const theme = useAppSelector(themeSelector);
  const appError = useAppSelector(errorSelector);
  const userID = useAppSelector(userIDSelector);

  const [subs, setSubs] = useState(1);
  const [page, setPage] = useState(1);
  const [profile, setProfile] = useState(false);
  const dispatch = useAppDispatch();

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
  }, []);

  return (
    <BrowserRouter>
      <main className={s.App}>
        {!status && (
          <div className={s.loader}>
            <div className={s.glass}>
              <img src={loader} alt="loading..." />
            </div>
          </div>
        )}

        <Header auth={auth} theme={theme} />
        <RoutesComponent
          isProfile={profile}
          setProfile={setProfile}
          subs={subs}
          page={page}
          status={status}
          auth={auth}
          appError={appError}
          userID={userID}
          profileDataSelector={profileDataSelector}
          usersData={usersData}
          theme={theme}
        />
      </main>
    </BrowserRouter>
  );
}

export default App;
