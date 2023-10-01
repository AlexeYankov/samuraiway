import s from "./LazyLoad.module.scss";
import load from "../../../pics/loaders/blocks-shuffle-3.svg";

export const LazyJSX = () => {
  return (
    <div className={s.glass}>
      <div className={s.container}>
        <img src={load} alt="loading" />
        loading...
      </div>
    </div>
  );
};
