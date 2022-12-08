import { NavLink } from "react-router-dom";
import s from "../../../../App.module.css";
import f from "./BarComponent.module.css";
import ProfilePic from "../../../../pics/BarIcons/address-card-solid.svg";
import MessagesPic from "../../../../pics/BarIcons/comment-solid.svg";
import ShortsPic from "../../../../pics/BarIcons/film-solid.svg";
import MusicPic from "../../../../pics/BarIcons/headphones-solid.svg";
import VideoPic from "../../../../pics/BarIcons/video-solid.svg";
import GroupsPic from "../../../../pics/BarIcons/users-solid.svg";
import GamesPic from "../../../../pics/BarIcons/gamepad-solid.svg";
import SettingsPic from "../../../../pics/BarIcons/sliders-solid.svg";
import UniversalButton from "../../../UniversalComponent/Buttons/UniversalButton";

const BarComponent = () => {
  const NavListTags = [
    {
      id: 0,
      tag: "Profile",
      icon: ProfilePic,
      style: f.ProfilePic,
      rout: "/profile",
    },
    {
      id: 1,
      tag: "Messages",
      icon: MessagesPic,
      style: f.MessagesPic,
      rout: "/messages",
    },
    {
      id: 2,
      tag: "Shorts",
      icon: ShortsPic,
      style: f.ShortsPic,
      rout: "/shorts",
    },
    {
      id: 3,
      tag: "Music",
      icon: MusicPic,
      style: f.MusicPic,
      rout: "/music",
    },
    {
      id: 4,
      tag: "Video",
      icon: VideoPic,
      style: f.VideoPic,
      rout: "/video",
    },
    {
      id: 5,
      tag: "Groups",
      icon: GroupsPic,
      style: f.GroupsPic,
      rout: "/groups",
    },
    {
      id: 6,
      tag: "Games",
      icon: GamesPic,
      style: f.GamesPic,
      rout: "/games",
    },
    {
      id: 7,
      tag: "Settings",
      icon: SettingsPic,
      style: f.SettingsPic,
      rout: "/settings",
    },
  ];
  const GenericBar = NavListTags.map((el) => {
    return (
      <NavLink
        to={el.rout}
        className={({ isActive }) => (isActive ? f.isActiveStyle : "")}
        key={el.id}
      >
        <div className={el.style}>
          <img src={el.icon} alt="" />
          <span>{el.tag}</span>
        </div>
      </NavLink>
    );
  });
  return (
    <div>
      <div className={s.menuBar__container}>{GenericBar}</div>
      <div className={s.menuButtons}>
        <UniversalButton className={s.menuButtons__logOut}>
          log out
        </UniversalButton>

        <UniversalButton className={s.menuButtons__deleteAccount}>
          delete your account
        </UniversalButton>
      </div>
    </div>
  );
};

export default BarComponent;
