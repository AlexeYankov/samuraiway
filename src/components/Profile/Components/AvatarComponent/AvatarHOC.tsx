import { ProfileType } from "../../../../types/types";
import DefaultIcon from "../../../../pics/Other/Tony_Soprano_Portrait.jpg";
import Avatar from "./Avatar";
import s from "./../../Profilestyles.module.css";

type AvatarType = {
  data: ProfileType;
};

export const AvatarHOC = ({ data }: AvatarType) => {
  const photosLarge = (pic: string) => (pic !== null ? data.photos.large : DefaultIcon);
  return (
    <article className={s.profileAvatar}>
      <Avatar photo={data.photos === undefined || null ? DefaultIcon : photosLarge(data.photos.large)} />
    </article>
  );
};
