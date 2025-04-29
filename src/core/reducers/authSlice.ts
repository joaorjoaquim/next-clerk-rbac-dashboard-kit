import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const authData = Cookies.get("authData") ? JSON.parse(Cookies.get("authData")!) : null;

const initialState = {
  accessToken: authData?.accessToken || null,
  userId: authData?.userId || null,
  role: authData?.role || "user",
  permissions: authData?.permissions || {},
  createdAt: authData?.createdAt || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.userId = action.payload.userId;
      state.role = action.payload.role;
      state.permissions = action.payload.permissions;
      state.createdAt = action.payload.createdAt;

      Cookies.set("authData", JSON.stringify(action.payload), { path: "/", secure: true, sameSite: "Strict" });
    },
    logout: (state) => {
      state.accessToken = null;
      state.userId = null;
      state.role = "user";
      state.permissions = {};
      state.createdAt = null;

      Cookies.remove("authData");
    },
  },
});

export const { setAuthState, logout } = authSlice.actions;
export default authSlice.reducer;