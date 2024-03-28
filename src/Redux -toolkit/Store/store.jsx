import { configureStore } from "@reduxjs/toolkit";
import youtubeslice from "../ReduxSlice/youtubeslice";
import logoSlice from "../ReduxSlice/logoslice";

const store = configureStore({
  reducer: {
    youtube: youtubeslice,
    logo: logoSlice,
  },
});

export default store;
