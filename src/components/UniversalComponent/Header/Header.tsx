import s from "./Headerstyles.module.css";
import { LogoSection } from "./common/logoSection/LogoSection";
import { SearchSection } from "./common/searchSection/SearchSection";
import { MenuSection } from "./common/menuSection/MenuSection";
import AuthSection from "./common/authSection/AuthSection";

type HeaderType = {
  auth: boolean;
  theme: string;
};

const Header = ({ auth, theme }: HeaderType) => {
  const colorCallBack = theme === "White" ? s.headerWrapper : s.headerWrapperBlack;

  return (
    <div className={colorCallBack}>
      <LogoSection />
      <SearchSection />
      <MenuSection currentColor={theme} />
      <AuthSection auth={auth} color={theme} />
    </div>
  );
};

export default Header;
