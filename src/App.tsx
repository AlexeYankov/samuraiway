import { BrowserRouter } from "react-router-dom";
import s from "./App.module.css";
import Header from "./components/UniversalComponent/Header/Header";
import { useEffect, useState } from "react";
import { getUsersTC } from "./state/profileState/SubscribersState";
import ContentStateFn, { PostType } from "./state/postComponent/postsContentState";
import { RoutesComponent } from "./components/Routes/RoutesComponent";
import { authMeTC } from "./state/login/loginReducer";
import { useAppDispatch, useAppSelector } from "./state/store";
import { authSelector, errorSelector, statusSelector, themeSelector } from "./selectors/AppSelector";
import loader from "./pics/loaders/clock.svg";
import { isAppTheme } from "./state/appState/appReducer";
import { userIDSelector } from "./selectors/AuthSelector";
import { setProfileData, setUsersData } from "./selectors/ProfileSelectors";
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
  const [posts, setPosts] = useState({} as PostType[]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setSubs(Math.round(Math.random() * 500));
    const randomPage = Math.round(Math.random() * 20);
    randomPageUseEffect = randomPage;
    setPage(randomPage);
    dispatch(isAppTheme("White"));
    dispatch(authMeTC(randomPageUseEffect));
    dispatch(getUsersTC(randomPageUseEffect));
    const generatedPosts = ContentStateFn();
    setPosts(generatedPosts);
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
          subs={subs}
          page={page}
          posts={posts}
          status={status}
          auth={auth}
          appError={appError}
          userID={userID}
          profileDataSelector={profileDataSelector}
          usersData={usersData}
        />
      </main>
    </BrowserRouter>
  );
}

export default App;
