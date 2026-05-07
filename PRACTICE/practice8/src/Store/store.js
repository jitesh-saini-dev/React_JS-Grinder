import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slice/signupSlice";
import apiReducer from "../Slice/apislice";

export const store = configureStore({
  reducer: {
    //slice
    signup: authReducer,
    products: apiReducer,
  },
});
