import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

interface UserData {
  user: User | null;
}

interface TokenData {
  token: string | null;
}

type InitialState = UserData & TokenData;

const initialState: InitialState = {
  user: null,
  token: sessionStorage.getItem("token") || localStorage.getItem("token") || null,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetUserStore: (state) => {
      state.user = null;
      state.token = null;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
  },
});

export const { resetUserStore, setUser, setToken } = auth.actions;

export default auth.reducer;
