import { useNavigate } from "react-router-dom";
import NavListTags, { NavListTagsType } from "../../../state/barState";
import s from "./Features.module.scss";

const LoginFeatures = () => {
  const a: NavListTagsType[] = NavListTags.slice(3, 7);
  const navigate = useNavigate();

  return (
    <div className={s.wrapper}>
      {a.map((el: NavListTagsType) => {
        const path = (value: string) => navigate(`${"/" + value}`);

        return (
          <div className={s.container} key={el.id}>
            <img className={s.icon} src={el.icon} alt={el.tag} onClick={() => path(el.tag.toLocaleLowerCase())} />
            <span className={s.description} onClick={() => path(el.tag.toLocaleLowerCase())}>
              {el.tag}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default LoginFeatures;
