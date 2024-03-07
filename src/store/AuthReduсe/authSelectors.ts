import { IInitialState, IUser } from "../../interfaces/auth";

export const selectUser = (state: IInitialState): IUser =>
  state.auth.user || { name: null, email: null };
export const selectToken = (state: IInitialState): string => state.auth.token;
export const selectIsLogin = (state: IInitialState): boolean =>
  state.auth.isLogin;
export const selectError = (state: IInitialState): string | null =>
  state.auth.error;
export const selectLoading = (state: IInitialState): boolean =>
  state.auth.loading;
