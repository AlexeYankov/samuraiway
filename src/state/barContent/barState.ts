import f from "../../../src/components/Profile/Components/BarComponent/BarComponent.module.css";
import ProfilePic from "../../pics/BarIcons/address-card-solid.svg";
import MessagesPic from "../../pics/BarIcons/comment-solid.svg";
import ShortsPic from "../../pics/BarIcons/film-solid.svg";
import MusicPic from "../../pics/BarIcons/headphones-solid.svg";
import VideoPic from "../../pics/BarIcons/video-solid.svg";
import GroupsPic from "../../pics/BarIcons/users-solid.svg";
import GamesPic from "../../pics/BarIcons/gamepad-solid.svg";
import SettingsPic from "../../pics/BarIcons/sliders-solid.svg";

type NavListTagsType = {
  id: number;
  tag: string;
  icon: string;
  style: string;
  rout: string;
};

const NavFeatures: NavListTagsType[] = [
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

export default NavFeatures;
