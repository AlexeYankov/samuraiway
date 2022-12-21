import s from "../PostComponent/PostComponent.module.css";
import PostsFooterParts from "../../../../state/PostsFooterParts";
import SomeSVGComponent from "../../../UniversalComponent/SVGComponent/SomeSVGComponent";

const PostComponentFooter = () => {
  const mappedJSXComponent = PostsFooterParts.map((el) => {
      return (
      <button key={el.id} className={s.posts_footer__container__icons}>
        <SomeSVGComponent propsPath={el.tag}/>
        <span>{el.value}</span>
        
      </button>
      );
    });
  return (
    <div className={s.posts_footer}>
      {mappedJSXComponent}
    </div>
  );
};

export default PostComponentFooter;
