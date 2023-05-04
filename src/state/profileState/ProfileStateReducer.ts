import { errorUtils } from "../../components/UniversalComponent/Utils/Utils";
import { getProfile } from "../../dataAccessLayer/ApiSN";
import { ProfileType } from "../../types/types";
import { isAppError, isAppStatus } from "../appState/appReducer";
import { AppThunkType } from "../store";

let initialState: ProfileType = {} as ProfileType;

const profileReducer = (state = initialState, action: reducerType): ProfileType => {
  switch (action.type) {
    case "ADD-POST": {
      return state;
    }
    case "ADD-IMG": {
      return state;
    }
    case "ADD-MUSIC": {
      return state;
    }
    case "ADD-VIDEO": {
      return state;
    }
    case "SET-PAGE": {
      return { ...state, page: action.payload.page };
    }
    case "SET-PROFILE": {
      return { ...state, ...action.payload.data };
    }
    default:
      return state;
  }
};

type reducerType = addPostType | addPostImgType | addPostMusicType | addPostVideoType | setPageType | setProfileType;

type addPostType = ReturnType<typeof addPostReducer>;
export const addPostReducer = (time: string, post: string, img: string, music: string, video: string) => {
  return {
    type: "ADD-POST",
    payload: {
      time,
      post,
      img,
      music,
      video,
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

type setPageType = ReturnType<typeof setProfilePage>;
export const setProfilePage = (page: number) => {
  return {
    type: "SET-PAGE",
    payload: {
      page,
    },
  } as const;
};

type setProfileType = ReturnType<typeof setProfile>;
export const setProfile = (data: ProfileType) => {
  return {
    type: "SET-PROFILE",
    payload: {
      data,
    },
  } as const;
};

export default profileReducer;

export const getProfileTC =
  (id: number, page: number): AppThunkType =>
  async (dispatch) => {
    dispatch(isAppStatus(false));

    try {
      const res = await getProfile(id);
      dispatch(setProfile(res.data));
      setProfilePage(page);
      dispatch(isAppStatus(true));
    } catch (e) {
      errorUtils(e, dispatch);
      dispatch(isAppError("failed"));
    }
  };
