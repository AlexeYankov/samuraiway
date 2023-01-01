import { SubscribersType } from "../../App";

let initialState: SubscribersType[] = []

const subscribersReducer = (
  state = initialState,
  action: SubscribersReducerType) :SubscribersType[] => {
  switch (action.type) {
    case "SET-INITIAL": {
      return action.payload.data
    }
    default:
      return state;
  }
};

type SubscribersReducerType = InitialStateType;

type InitialStateType = ReturnType<typeof setSubscribersReducer>;
export const setSubscribersReducer = (data: SubscribersType[]) => {
  return {
    type: "SET-INITIAL",
    payload: {
      data
    },
  } as const;
};

export default subscribersReducer;
