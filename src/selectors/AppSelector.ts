import { AppRootStateType } from "../state/store";

export const authSelector = (state: AppRootStateType) => state.appState.auth;
export const statusSelector = (state: AppRootStateType) => state.appState.status;
export const errorSelector = (state: AppRootStateType) => state.appState.error;
export const themeSelector = (state: AppRootStateType) => state.appState.theme;
