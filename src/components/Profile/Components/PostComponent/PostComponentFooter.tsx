import s from "../PostComponent/PostComponent.module.css";
import PostsFooterParts, { PostsFooterDataType } from "../../../../state/postComponent/postsFooterParts";
import SomeSVGComponent from "../../../UniversalComponent/SVGComponent/SomeSVGComponent";
import { PostType, StatusType } from "../../../../state/profileState/CRUDStateReducer";

type PostsFooterType = {
  theme: string;
  post: PostType;
  postLikeHandler: (postID: string) => void;
};
const solidHeart =
  "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z";

const PostComponentFooter = (p: PostsFooterType) => {
  const mappedJSXComponent = PostsFooterParts.map((el: PostsFooterDataType) => {
    const likedFn = () => {
      if (el.name === "likes") {
        p.postLikeHandler(p.post.id);
      }
      
    };
    return (
      <button key={el.id} className={s.posts_footer__container__icons} onClick={likedFn}>
        <SomeSVGComponent fill={p.theme !== "White" ? "white" : ""} propsPath={p.post.isLiked && el.name === "likes" ? solidHeart : el.tag} />
        <span style={el.name === "views" ? {minWidth: "30px", textAlign: "left"}: {}}>{p.post.status[el.name as keyof StatusType]}</span>
      </button>
    );
  });
  return <div className={p.theme === "White" ? s.posts_footer : s.posts_footer_black}>{mappedJSXComponent}</div>;
};

export default PostComponentFooter;
