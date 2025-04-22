import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import sidebarReducer from "./reducers/sidebarSlice";
import themeReducer from "./reducers/themeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
