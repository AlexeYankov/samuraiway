import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "05876f94-dd68-487a-b071-14644f80eade",
  },
});

export const authMe = () => {
  return instance.get("auth/me", {
    withCredentials: true,
  });
};

export const getProfile = (profileID: number) => {
  return instance.get("profile/" + profileID);
};

export const getUsers = (pageNumber: number) => {
  return instance.get("users?page=" + pageNumber);
};
export const setFollow = (userID: number) => {
  return instance.post("follow/" + userID)
};
export const setUnFollow = (userID: number) => {
  return instance.delete("follow/" + userID)
};
