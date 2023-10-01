import CRUDComponent from "../CRUDComponent/CRUDComponent";
import TextAreaComponent from "../CRUDComponent/TextAreaComponent";
import s from "./../../Profilestyles.module.css";
import PostComponent from "./PostComponent";
import DefaultIcon from "../../../../pics/Other/profile.png";
import { useSelector } from "react-redux";
import { AppRootStateType, useAppSelector } from "../../../../state/store";
import { PostType } from "../../../../state/profileState/CRUDStateReducer";
import { ProfileType } from "../../../../types/types";
import { useState } from "react";

type PostsType = {
  openPostFn: () => void;
  addShorts: () => void;
  closePostFn: () => void;
  someValue: (value: string) => void;
  someShorts: (value: string) => void;
  value: string;
  valueShorts: string;
  shorts: boolean;
  post: boolean;
  theme: string;
  data: ProfileType;
};

export const PostsComponentHOC = ({
  theme,
  openPostFn,
  addShorts,
  closePostFn,
  someShorts,
  value,
  valueShorts,
  someValue,
  shorts,
  post,
  data,
}: PostsType) => {
  const [posts1, setPosts1] = useState<PostType[]>([]);
  const postsCount = useAppSelector<PostType[]>((state) => state.posts);
  
  return (
    <article className={s.profileInfo__posts}>
      <CRUDComponent theme={theme} addPost={openPostFn} addShorts={addShorts} />
      {post && (
        <TextAreaComponent
          theme={theme}
          accept={"image/*,.png,.jpg,.gif,.web,.webp"}
          closeFn={closePostFn}
          value={value}
          onChange={someValue}
          clearTextArea={someValue}
        />
      )}
      {shorts && (
        <TextAreaComponent
          theme={theme}
          accept={"video/mp4,video/x-m4v,video/*"}
          closeFn={closePostFn}
          value={valueShorts}
          onChange={someShorts}
          clearTextArea={someShorts}
          shorts={true}
        />
      )}
      {postsCount.map((el) => {
        return <PostComponent postSearch={el.id === postsCount[0].id} key={el.id} theme={theme} data={data} photo={DefaultIcon} post={el} />;
      })}

      {/* {pinnedPost} */}
    </article>
  );
};
