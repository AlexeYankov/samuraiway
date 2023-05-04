import { AppStateType } from "../../types/types";

let initialState: AppStateType = {} as AppStateType;

const appReducer = (state = initialState, action: ReducerType): AppStateType => {
  switch (action.type) {
    case "APP-AUTH": {
      return { ...state, auth: action.payload.auth };
    }
    case "APP-STATUS": {
      return { ...state, status: action.payload.status };
    }
    case "APP-ERROR": {
      return { ...state, error: action.payload.error };
    }
    case "APP-THEME": {
      return { ...state, theme: action.payload.theme };
    }
    default:
      return state;
  }
};

export type ReducerType = isAuthType | isAppStatusType | isAppErrorType | isAppThemeType;

type isAuthType = ReturnType<typeof isAuth>;
export const isAuth = (auth: boolean) => {
  return {
    type: "APP-AUTH",
    payload: {
      auth,
    },
  } as const;
};

type isAppStatusType = ReturnType<typeof isAppStatus>;
export const isAppStatus = (status: boolean) => {
  return {
    type: "APP-STATUS",
    payload: {
      status,
    },
  } as const;
};

type isAppErrorType = ReturnType<typeof isAppError>;
export const isAppError = (error: string) => {
  return {
    type: "APP-ERROR",
    payload: {
      error,
    },
  } as const;
};

type isAppThemeType = ReturnType<typeof isAppTheme>;
export const isAppTheme = (theme: string) => {
  return {
    type: "APP-THEME",
    payload: {
      theme,
    },
  } as const;
};

export default appReducer;
