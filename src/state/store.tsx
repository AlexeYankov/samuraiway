import { ThunkAction, applyMiddleware, combineReducers, legacy_createStore } from "@reduxjs/toolkit";
import crudReducer from "./profileState/CRUDStateReducer";
import profileReducer from "./profileState/ProfileStateReducer";
import subscribersReducer from "./profileState/SubscribersState";
import thunkMiddleware, { ThunkDispatch } from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import loginReducer from "./login/loginReducer";
import appReducer from "./appState/appReducer";
import authProfileReducer from "./profileState/AuthProfile";

const rootReducer = combineReducers({
  posts: crudReducer,
  profile: profileReducer,
  subscribers: subscribersReducer,
  login: loginReducer,
  appState: appReducer,
  appAuthState: authProfileReducer,
  // profileInfo: profileInfoReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>;
// создаем тип диспатча который принимает как AC так и TC
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>;

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>;

// window.store = store
