import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    user: [],
  },

  reducers: {
    adduser: (state, action) => {
      state.user.push(action.payload);
    },
  },
});

export const { adduser } = signupSlice.actions;
export default signupSlice.reducer;
