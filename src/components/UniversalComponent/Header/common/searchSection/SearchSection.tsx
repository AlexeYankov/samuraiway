import s from "./../../Headerstyles.module.css";
import search from "../../../../..//pics/PostsIcons/magnifying-glass-solid.svg";
import { useState } from "react";

export const SearchSection = () => {
  const [value, setSearchValue] = useState("");
  return (
    <article className={s.headerSearch}>
      <div className={s.headerSearchContainer}>
        <input type="text" value={value} onChange={(e) => setSearchValue(e.currentTarget.value)} />
        {!value && <span>Search</span>}
        {!value && <img src={search} alt="search" />}
      </div>
    </article>
  );
};
