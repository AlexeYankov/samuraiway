import InfoComponent from "./InfoComponent";
import s from "./../../Profilestyles.module.css";

type InfoType = {
  subs: number;
  theme: string;
};

export const InfoComponentHOC = ({ theme, subs }: InfoType) => {
  return (
    <article className={s.profileInfo}>
      <InfoComponent theme={theme} subscribersTotal={subs} />
    </article>
  );
};
