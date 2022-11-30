import s from "./CRUDComponent.module.css";
import { ReactComponent as AddSVG } from "../../../../pics/Buttons/square-plus-solidGray.svg";
import SearchSVG from "../../../../pics/Other/magnifying-glass-solid.svg";

const CRUDComponent = () => {
  return (
    <div className={s.crud__container}>
      <div className={s.crud__unit}>
        <AddSVG fill="255" width="20" height="22" opacity="0.7" />
        <span>
          Add <br />
          new post
        </span>
      </div>
      <div className={s.crud__unit}>
        <AddSVG fill="255" width="20" height="22" opacity="0.7" />
        <span>#Shorts</span>
      </div>
      <div className={s.crud__unit}>
      <AddSVG fill="255" width="20" height="22" opacity="0.7" />
        <span>Group</span>
      </div>
      <div className={s.crud__SearchContainer}>
        <input type="text" />
        <span style={{ color: "gray" }}>Search</span>
        <img src={SearchSVG} alt="search" />
      </div>
    </div>
  );
};

export default CRUDComponent;
