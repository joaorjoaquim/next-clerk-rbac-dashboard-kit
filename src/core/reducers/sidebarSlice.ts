import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SidebarState {
  isDesktopOpen: boolean;
  isMobileOpen: boolean;
}

const initialState: SidebarState = {
  isDesktopOpen: false,
  isMobileOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleDesktopSidebar: (state) => {
      state.isDesktopOpen = !state.isDesktopOpen;
    },
    setDesktopSidebar: (state, action: PayloadAction<boolean>) => {
      state.isDesktopOpen = action.payload;
    },
    toggleMobileSidebar: (state) => {
      state.isMobileOpen = !state.isMobileOpen;
    },
    setMobileSidebar: (state, action: PayloadAction<boolean>) => {
      state.isMobileOpen = action.payload;
    },
  },
});

export const {
  toggleDesktopSidebar,
  setDesktopSidebar,
  toggleMobileSidebar,
  setMobileSidebar,
} = sidebarSlice.actions;
export default sidebarSlice.reducer;
