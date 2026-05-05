import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../Slice/signupSlice'

export const store = configureStore({
  reducer: {
    //slice
    signup: authReducer,
  },
});
