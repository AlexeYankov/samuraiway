import { PostType } from "../state/profileState/CRUDStateReducer";

export type ProfileType = {
  aboutMe: string;
  contacts: {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
  };
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  userID: number;
  photos: {
    large: string;
    small: string;
  };
  subscribers: number;
  posts?: PostType;
  page?: number;
};

export type SubscribersType = {
  id: number;
  name: string;
  status?: string;
  photos: {
    small: string;
    large: string;
  };
  followed: boolean;
  page: number;
  fetching?: boolean;
};

export type Follow<T> = {
  data: T;
  resultCode: number;
  messages: string[];
};

export type ValidateType = {
  email: string;
  password: string;
  rememberMe: boolean;
  // captcha: boolean;
};

export type AppStateType = {
  auth: boolean;
  status: boolean;
  error: string;
  theme: string;
};

export type MeProfileType = {
  id: number;
  email: string;
  login: string;
};

export type BodyType = {
  subs: number;
  page: number;
  status: boolean;
  auth: boolean;
  isProfile: boolean;
  setProfile: (value: boolean) => void;
  appError: string;
  theme: string;
  userID: number;
  usersData: SubscribersType[];
  profileDataSelector: ProfileType;
};
