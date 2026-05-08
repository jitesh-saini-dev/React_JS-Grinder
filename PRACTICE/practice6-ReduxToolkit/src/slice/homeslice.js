import { createSlice } from "@reduxjs/toolkit";

export const homeslice = createSlice({
  name: "homeusers",
  initialState: {
    users: [],
    loading: false,
  },
  reducers: {
    setuser: (state, action) => {
      state.users = action.payload;
    },
    setloading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setloading, setuser } = homeslice.actions;
export default homeslice.reducer;
