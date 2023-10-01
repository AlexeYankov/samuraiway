import s from "./CRUDComponent.module.css";
import { ReactComponent as AddSVG } from "../../../../pics/PostsIcons/square-plus-solidGray.svg";
import SearchSVG from "../../../../pics/PostsIcons/magnifying-glass-solid.svg";
import { useState } from "react";

type CRUDType = {
  addPost: () => void;
  addShorts: () => void;
  theme: string;
};

const CRUDComponent = ({ theme, addPost, addShorts }: CRUDType) => {
  const [value, setSearchValue] = useState("");
  return (
    <div className={theme === "White" ? s.crud__container : s.crud__container__black}>
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
        <input type="text" value={value} onChange={(e) => setSearchValue(e.currentTarget.value)} />
        {!value && <span>Search</span>}
        {!value && <img src={SearchSVG} alt="search" />}
      </div>
    </div>
  );
};

export default CRUDComponent;
