import { errorUtils } from "../../components/UniversalComponent/Utils/Utils";
import { getUsers } from "../../dataAccessLayer/ApiSN";
import { SubscribersType } from "../../types/types";
import { isAppError, isAppStatus } from "../appState/appReducer";
import { AppThunkType } from "../store";

let initialState: SubscribersType[] = [];

const subscribersReducer = (state = initialState, action: SubscribersReducerType): SubscribersType[] => {
  switch (action.type) {
    case "SET-INITIAL": {
      return [...action.payload.data];
    }
    case "SET-FOLLOW": {
      return [...state].map((el) => (el.id == action.payload.id ? { ...el, followed: !action.payload.bool } : el));
    }
    case "SET-FETCH": {
      return [...state].map((el) => (el.id == action.payload.id ? { ...el, fetching: action.payload.fetch } : el));
    }
    default:
      return state;
  }
};

type SubscribersReducerType = InitialStateType | FollowStateType | FetchSatusType;

type InitialStateType = ReturnType<typeof setSubscribersReducer>;
export const setSubscribersReducer = (data: SubscribersType[]) => {
  return {
    type: "SET-INITIAL",
    payload: {
      data,
    },
  } as const;
};
type FollowStateType = ReturnType<typeof setFollowReducer>;
export const setFollowReducer = (id: number, bool: boolean) => {
  return {
    type: "SET-FOLLOW",
    payload: {
      id,
      bool,
    },
  } as const;
};
type FetchSatusType = ReturnType<typeof setFetchReducer>;
export const setFetchReducer = (id: number, fetch: boolean) => {
  return {
    type: "SET-FETCH",
    payload: {
      id,
      fetch,
    },
  } as const;
};

export default subscribersReducer;

export const getUsersTC =
  (page: number): AppThunkType =>
  async (dispatch) => {
    dispatch(isAppStatus(false));
    try {
      const res = await getUsers(page);
      dispatch(setSubscribersReducer(res.data.items));
      dispatch(isAppStatus(true));
    } catch (e) {
      errorUtils(e, dispatch);
      dispatch(isAppError("failed"));
    }
  };
