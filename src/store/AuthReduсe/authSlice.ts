import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { login, logout, signup, fetchCurrentUser } from "./authOperation";
import { IAuthState } from "../../interfaces/auth";

const initialState: IAuthState = {
  user: { name: null, email: null },
  token: "",
  isLogin: false,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.error = null;
        state.loading = false;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        if (!payload || !payload.user || !payload.token) {
          state.error = "Invalid payload received";
          state.loading = false;
        } else {
          state.user = payload.user;
          state.token = payload.token;
          state.isLogin = true;
          state.error = null;
          state.loading = false;
        }
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = "";
        state.isLogin = false;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchCurrentUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLogin = true;
        state.error = null;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

export const authReducer = authSlice.reducer;
