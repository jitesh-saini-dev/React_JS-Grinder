import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    // SIGNUP
    signupUser: (state, action) => {
      const exist = state.users.find((x) => x.email === action.payload.email);

      if (!exist) {
        state.users.push(action.payload);
      }
    },

    // LOGIN
    loginUser: (state, action) => {
      state.user = action.payload;

      state.isLogin = true;
    },

    // LOGOUT
    logoutUser: (state) => {
      state.user = null;

      state.isLogin = false;
    },
  },
});

export const { signupUser, loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
