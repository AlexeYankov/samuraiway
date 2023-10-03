import s from "./CRUDComponent.module.css";
import { ReactComponent as AddSVG } from "../../../../pics/PostsIcons/square-plus-solidGray.svg";
import SearchSVG from "../../../../pics/PostsIcons/magnifying-glass-solid.svg";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../state/store";
import { searchPostTextReducer } from "../../../../state/profileState/CRUDStateReducer";
import { userPostsSelector } from "../../../../selectors/PostSelector";

type CRUDType = {
  addPost: () => void;
  addShorts: () => void;
  theme: string;
};

const CRUDComponent = ({ theme, addPost, addShorts }: CRUDType) => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(userPostsSelector);
  const [value, setSearchValue] = useState("");
  const filterTasks = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
    dispatch(searchPostTextReducer(e.currentTarget.value, posts))
  }
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
        <input type="text" value={value} onChange={filterTasks} />
        {!value && <span>Search</span>}
        {!value && <img src={SearchSVG} alt="search" />}
      </div>
    </div>
  );
};

export default CRUDComponent;
