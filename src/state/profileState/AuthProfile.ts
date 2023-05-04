import { Follow, MeProfileType } from "../../types/types";

let initialState: MeProfileType = {} as MeProfileType;

const authProfileReducer = (state = initialState, action: reducerType): MeProfileType => {
  switch (action.type) {
    case "ADD-PROFILE": {
      return { ...state, ...action.payload.data.data };
    }
    default:
      return state;
  }
};

type reducerType = addProfileType;

type addProfileType = ReturnType<typeof setMeProfile>;
export const setMeProfile = (data: Follow<MeProfileType>) => {
  return {
    type: "ADD-PROFILE",
    payload: {
      data,
    },
  } as const;
};

export default authProfileReducer;
