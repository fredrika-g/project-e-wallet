import { createSlice } from "@reduxjs/toolkit";

const siteSettingsSlice = createSlice({
  name: "settings",
  initialState: {
    theme: "light",
    themeOptions: ["light", "dark", "pastel"],
  },
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = siteSettingsSlice.actions;

export default siteSettingsSlice.reducer;
