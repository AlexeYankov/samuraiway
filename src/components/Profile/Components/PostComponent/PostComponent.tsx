import s from "./PostComponent.module.css";
import PostComponentFooter from "./PostComponentFooter";

type NickType = {
  name: string;
  photo: string;
  post: string;
  pinned?: boolean;
  postSearch?: boolean;
};

const PostComponent = ({ name, photo, post, pinned, postSearch }: NickType) => {
  const someShowFn = () => console.log("Clicked");
  const pinnedPostJSX = pinned ? (
    <span>
      <span className={s.posts__post__pinned}>post pinned</span>
      <svg
        className={s.posts__post__pinned__icon}
        width={15}
        fill="gray"
        viewBox="0 0 384 512"
      >
        <path d="M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z" />
      </svg>
    </span>
  ) : (
    ""
  );
  const postsSearchJSX = postSearch ? (
    <div className={s.posts__header}>
      <div className={s.posts__header__search}>
        <span className={s.posts__header__description}>Posts</span>
      </div>
      <div className={s.posts__header__icon} onClick={someShowFn}>
        <svg
          width={25}
          fill="gray"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
        </svg>
      </div>
    </div>
  ) : (
    ""
  );
  return (
    <div className={s.posts__contaiter}>
      {postsSearchJSX}
      <div className={s.posts__userPost}>
        <div className={s.posts__userPhoto}>
          <img src={photo} alt="" />
        </div>
        <div className={s.posts__user}>
          <div className={s.posts__user__container}>
            <span className={s.posts__user__name}>{name}</span>
            {pinnedPostJSX}
            <br />
            <span className={s.posts__post__date}>11 jun 2012</span>
          </div>
          <svg
            className={s.posts__user__moreButton}
            width={35}
            fill="gray"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z" />
          </svg>
        </div>
      </div>
      <div className={s.posts__post}>
        <span>{post}</span>
      </div>
      <PostComponentFooter />
    </div>
  );
};

export default PostComponent;
