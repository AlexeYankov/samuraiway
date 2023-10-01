import { Follow, MeProfileType, ValidateType } from "../../types/types";
import { isAppError, isAppStatus, isAuth } from "../appState/appReducer";
import { AppThunkType } from "../store";
import { authMe, logOut, logIn } from "../../dataAccessLayer/ApiSN";
import { errorUtils } from "../../components/UniversalComponent/Utils/Utils";
import { setMeProfile } from "../profileState/AuthProfile";
import { getProfileTC } from "../profileState/ProfileStateReducer";
import { log } from "console";
import { AxiosError } from "axios";

let initialState: ValidateType = {} as ValidateType;

const loginReducer = (state = initialState, action: reducerType): ValidateType => {
  switch (action.type) {
    case "APP-AUTH": {
      return { ...state };
    }
    case "ADD-VIDEO": {
      return state;
    }
    default:
      return state;
  }
};

type reducerType = addPostType | addPostImgType | addPostMusicType | addPostVideoType;

type addPostType = ReturnType<typeof addPostReducer>;
export const addPostReducer = (isAuth: boolean) => {
  return {
    type: "APP-AUTH",
    payload: {
      isAuth,
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

export default loginReducer;

export const authMeTC =
  (page: number): AppThunkType =>
  async (dispatch) => {
    dispatch(isAppStatus(true));

    try {
      const res = await authMe();
      if (res.data.data.id) {
        dispatch(setMeProfile(res.data));
        dispatch(getProfileTC(res.data.data.id, page));
        dispatch(isAuth(true));
        dispatch(isAppStatus(false));
      } else {
        dispatch(isAppError("error"));
      }
    } catch (e) {
      errorUtils(e, dispatch);
      console.log("error!");
      dispatch(isAppError("failed"));
    }
  };

export const logOutTC = (): AppThunkType => async (dispatch) => {
  dispatch(isAppStatus(true));
  try {
    const res = await logOut();
    // dispatch(isAppStatus(false));
    dispatch(isAuth(false));
  } catch (e) {
    errorUtils(e, dispatch);
    dispatch(isAppError("failed"));
  }
};

export const logInTC = (values: ValidateType, page: number): AppThunkType => async (dispatch) => {
  dispatch(isAppStatus(true));
  try {
    const res = await logIn(values);
    console.log(res)
    dispatch(authMeTC(page))
    // dispatch(isAppStatus(false));
    dispatch(isAuth(false));
  } catch (e) {
    errorUtils(e, dispatch);
    dispatch(isAppError("failed"));
  }
};
