import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const authData = Cookies.get("authData") ? JSON.parse(Cookies.get("authData")!) : null;

const initialState = {
  userId: authData?.userId || null,
  role: authData?.role || "user",
  permissions: authData?.permissions || {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.userId = action.payload.userId;
      state.role = action.payload.role;
      state.permissions = action.payload.permissions;

      Cookies.set("authData", JSON.stringify(action.payload), { path: "/", secure: true, sameSite: "Strict" });
    },
    logout: (state) => {
      state.userId = null;
      state.role = "user";
      state.permissions = {};

      Cookies.remove("authData");
    },
  },
});

export const { setAuthData, logout } = authSlice.actions;
export default authSlice.reducer;