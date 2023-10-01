export type PostType = {
  time: string;
  text: string;
  id: string;
  img: string;
  music: string;
  video: string;
  // status: { "likes": number; "comments": number; "reposts": number; "views": number };
  status: StatusType;
  pinn: boolean;
  isLiked: boolean;
};

export type StatusType = {
  likes: number;
  comments: number;
  reposts: number;
  views: number;
};

let initialState: PostType[] = [] as PostType[];

const crudReducer = (state = initialState, action: reducerType) => {
  switch (action.type) {
    case "ADD-POST": {
      return [
        {
          time: action.payload.time,
          text: action.payload.text,
          id: action.payload.id,
          img: action.payload.img,
          music: action.payload.music,
          video: action.payload.video,
          status: { likes: 0, comments: 0, reposts: 0, views: 0 },
          pinn: false,
          isLiked: false,
        },
        ...state,
      ];
    }
    case "ADD-IMG": {
      return [
        ...state,
        {
          img: action.payload.img,
        },
      ];
    }
    case "INITIAL-POSTS": {
      return action.payload.posts.map((el) => ({
        ...el,
        status: { ...el.status, views: Math.max(el.status.comments, el.status.likes, el.status.reposts) + el.status.views },
      }));
    }
    case "ADD-MUSIC": {
      return [
        ...state,
        {
          music: action.payload.music,
        },
      ];
    }
    case "POST-LIKE": {
      state.find((el) => (el.id === action.payload.postID && el.isLiked ? { ...el, status: { ...el.status, likes: (el.status.likes -= 1) } } : ""));
      state.find((el) => (el.id === action.payload.postID && !el.isLiked ? { ...el, status: { ...el.status, likes: (el.status.likes += 1) } } : ""));
      return state.map((el) => (el.id === action.payload.postID ? { ...el, isLiked: !el.isLiked } : el));
    }
    case "ADD-VIDEO": {
      return [
        ...state,
        {
          video: action.payload.video,
        },
      ];
    }
    case "DELETE-POST": {
      return state.filter((el) => el.id !== action.payload.id);
    }
    default:
      return state;
  }
};

type reducerType = deletePostType | postLikeType | addPostType | addPostImgType | addPostMusicType | addPostVideoType | setInitialPostsType;

type addPostType = ReturnType<typeof addPostReducer>;
export const addPostReducer = (id: string, time: string, text: string, img: string, music: string, video: string) => {
  return {
    type: "ADD-POST",
    payload: {
      time,
      text,
      img,
      music,
      video,
      id,
    },
  } as const;
};

type addPostImgType = ReturnType<typeof addPostImgReducer>;
export const addPostImgReducer = (img: string) => {
  return {
    type: "ADD-IMG",
    payload: {
      img,
    },
  } as const;
};

type postLikeType = ReturnType<typeof postLikeReducer>;
export const postLikeReducer = (postID: string) => {
  return {
    type: "POST-LIKE",
    payload: {
      postID,
    },
  } as const;
};
type setInitialPostsType = ReturnType<typeof setInitialPostsReducer>;
export const setInitialPostsReducer = (posts: PostType[]) => {
  return {
    type: "INITIAL-POSTS",
    payload: {
      posts,
    },
  } as const;
};

type addPostMusicType = ReturnType<typeof addPostMusicReducer>;
export const addPostMusicReducer = (music: string) => {
  return {
    type: "ADD-MUSIC",
    payload: {
      music,
    },
  } as const;
};

type addPostVideoType = ReturnType<typeof addPostVideoReducer>;
export const addPostVideoReducer = (video: string) => {
  return {
    type: "ADD-VIDEO",
    payload: {
      video,
    },
  } as const;
};

type deletePostType = ReturnType<typeof deletePostReducer>;
export const deletePostReducer = (id: string) => {
  return {
    type: "DELETE-POST",
    payload: {
      id,
    },
  } as const;
};

export default crudReducer;
