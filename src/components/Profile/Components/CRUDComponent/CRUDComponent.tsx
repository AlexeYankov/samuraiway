import s from "./CRUDComponent.module.css";
import { ReactComponent as AddSVG } from "../../../../pics/PostsIcons/square-plus-solidGray.svg";
import SearchSVG from "../../../../pics/PostsIcons/magnifying-glass-solid.svg";

type CRUDType = {
  addPost: () => void;
  addShorts: () => void;
};

const CRUDComponent = ({ addPost, addShorts }: CRUDType) => {
  return (
    <div className={s.crud__container}>
      <button className={s.crud__unit} onClick={addPost}>
        <AddSVG fill="255" width="20" height="22" opacity="0.7" />
        <span>
          Add <br />
          new post
        </span>
      </button>
      <button className={s.crud__unit} onClick={addShorts}>
        <AddSVG fill="255" width="20" height="22" opacity="0.7" />
        <span>#Shorts</span>
      </button>
      <div className={s.crud__SearchContainer}>
        <input type="text" />
        <span style={{ color: "gray" }}>Search</span>
        <img src={SearchSVG} alt="search" />
      </div>
    </div>
  );
};

export default CRUDComponent;
