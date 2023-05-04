import s from "./../../Headerstyles.module.css";
import search from "../../../../..//pics/PostsIcons/magnifying-glass-solid.svg";

export const SearchSection = () => {
  return (
    <article className={s.headerSearch}>
      <div className={s.headerSearchContainer}>
        <input type="text" />
        <span style={{ color: "gray" }}>Search</span>
        <img src={search} alt="search" />
      </div>
    </article>
  );
};
