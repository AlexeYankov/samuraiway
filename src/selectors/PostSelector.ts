import { AppRootStateType } from "../state/store";

export const userPostsSelector = (state: AppRootStateType) => state.posts;
