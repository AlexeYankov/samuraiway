import axios, { AxiosError } from "axios";
import { Dispatch } from "redux";
import { ReducerType, isAppError } from "../../../state/appState/appReducer";

export const errorUtils = (e: any, dispatch: Dispatch<ReducerType>) => {
  const err = e as Error | AxiosError<{ error: string }>;

  if (axios.isAxiosError(err)) {
    const error = err.response?.data ? err.response.data.error : err.message;

    dispatch(isAppError(error));
  } else {
    dispatch(isAppError(`Native error ${err.message}`));
  }
};
