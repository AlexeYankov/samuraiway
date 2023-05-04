import { AppRootStateType } from "../state/store";

export const userIDSelector = (state: AppRootStateType) => state.appAuthState.id;
