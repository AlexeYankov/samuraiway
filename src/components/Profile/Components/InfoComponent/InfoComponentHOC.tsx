import InfoComponent from "./InfoComponent";
import s from "./../../Profilestyles.module.css";
import { ProfileType } from "../../../../types/types";

type InfoType = {
  subs: number;
  theme: string;
  data: ProfileType;
};

export const InfoComponentHOC = (p: InfoType) => {
  return (
    <article className={s.profileInfo}>
      <InfoComponent {...p} />
    </article>
  );
};
