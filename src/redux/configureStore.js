import { configureStore } from "@reduxjs/toolkit";

import cardSlice from "./cardSlice";
import siteSettingsSlice from "./siteSettingsSlice";

const store = configureStore({
  reducer: {
    cards: cardSlice,
    settings: siteSettingsSlice,
  },
});

export default store;
