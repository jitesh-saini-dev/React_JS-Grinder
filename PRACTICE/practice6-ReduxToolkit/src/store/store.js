import { configureStore } from "@reduxjs/toolkit";
import themeslice from "../slice/themeslice";

export const store = configureStore({
  reducer: {
    theme: themeslice,
  },
});
