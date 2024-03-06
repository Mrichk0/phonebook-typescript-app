import axios from "axios";

import { IInitialState } from "../../components/RegisterForm/RegisterForm";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

const token = {
  set(token: string) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = "";
  },
};

interface IUser {
  name: string;
  email: string;
}

interface IUserResponse {
  user: IUser;
  token: string;
}

export const signup = createAsyncThunk<
  IUserResponse,
  IInitialState,
  { rejectValue: string }
>("auth/signup", async function (credentials, { rejectWithValue }) {
  try {
    const { data } = await instance.post("/users/signup", credentials);
    token.set(data.token);
    return data;
  } catch (e: any) {
    rejectWithValue(e.message);
  }
});

export const login = createAsyncThunk<
  {
    user: IUser;
    token: string;
  },
  { email: string; password: string },
  { rejectValue: string }
>("auth/login", async function (credentials, { rejectWithValue }) {
  try {
    const { data } = await instance.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (e: any) {
    rejectWithValue(e.message);
  }
});

export const logout = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/logout",
  async function (_, { rejectWithValue }) {
    try {
      const { data } = await instance.post("/users/logout");
      token.unset();
      return data;
    } catch (e: any) {
      rejectWithValue(e.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk<
  IUser,
  void,
  { state: RootState; rejectValue: string }
>("users/fetchCurrentUser", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue("Token not found");
  }
  token.set(persistedToken);
  try {
    const { data } = await instance.get<IUser>("/users/current");
    return data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
