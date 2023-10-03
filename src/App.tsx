import { BrowserRouter } from "react-router-dom";
import s from "./App.module.css";
import Header from "./components/UniversalComponent/Header/Header";
import { useState } from "react";

import { RoutesComponent } from "./components/Routes/RoutesComponent";
import { useAppSelector } from "./state/store";
import { authSelector, errorSelector, statusSelector, themeSelector } from "./selectors/AppSelector";
import loader from "./pics/loaders/clock.svg";
import { userIDSelector } from "./selectors/AuthSelector";
import useGetProfileFromServer from "./state/getProfile";
import { setProfileData, setUsersData } from "./selectors/ProfileSelectors";

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
  const [mainID, setMainID] = useState(1);
  useGetProfileFromServer(setSubs, setPage, mainID, setMainID, userID);
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
          setSubs={setSubs}
          setPage={setPage}
          isProfile={mainID === userID}
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
