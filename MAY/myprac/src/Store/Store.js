import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "../Slice/menuslice";

const store = configureStore({
  reducer: {
    menu: MenuReducer,
  },
});
export default store;
