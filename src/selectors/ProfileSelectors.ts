import { AppRootStateType } from "../state/store";

export const setProfileData = (state: AppRootStateType) => state.profile;
export const setUsersData = (state: AppRootStateType) => state.subscribers;
