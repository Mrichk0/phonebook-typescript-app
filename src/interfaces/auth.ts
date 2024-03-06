import { IContactsState } from "./contacts";

export interface IUser {
  name: null | string;
  email: null | string;
}

export interface IAuthState {
  user: IUser | undefined;
  token: string;
  isLogin: boolean;
  error: null | string;
  loading: boolean;
}

export interface IInitialState {
  contacts: IContactsState;
  auth: IAuthState;
}
