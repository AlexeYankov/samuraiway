import axios from "axios";
import { Follow, MeProfileType, ProfileType, SubscribersType } from "../types/types";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "271ea311-898b-4149-afce-d27b78b2324e",
  },
});

export const authMe = () => {
  return instance.get<Follow<MeProfileType>>("auth/me");
};
export const logOut = () => {
  return instance.delete("auth/login");
};

export const getProfile = (profileID: number) => {
  return instance.get<ProfileType>(`profile/${profileID}`);
};

export const getUsers = (pageNumber: number) => {
  return instance.get<{ items: SubscribersType[] }>(`users?page=${pageNumber}`);
};
export const setFollow = (userID: number) => {
  return instance.post<Follow<MeProfileType>>(`follow/${userID}`);
};
export const setUnFollow = (userID: number) => {
  return instance.delete(`follow/${userID}`);
};
