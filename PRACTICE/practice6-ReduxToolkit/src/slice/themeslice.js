import { createSlice } from "@reduxjs/toolkit";

export const themeslice = createSlice({
  name: "theme",
  initialState: {
    value: "light",
  },
  reducers: {
    tolight: (state) => {
      state.value = "light";
    },
    todark: (state) => {
      state.value = "dark";
    },
  },
});

export const { tolight, todark } = themeslice.actions;
export default themeslice.reducer;
