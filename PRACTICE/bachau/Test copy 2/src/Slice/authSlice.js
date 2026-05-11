import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    users: [],
    currentUser: null,
    isLogin: false,
  },

  reducers: {
    signup: (state, action) => {
      state.users.push(action.payload);
    },

    login: (state, action) => {
      const checkuser = state.users.find(
        (x) =>
          x.email === action.payload.email &&
          x.password === action.payload.password,
      );

      if (checkuser) {
        state.currentUser = checkuser;
        state.isLogin = true;
        alert("Login Success");
      } else {
        alert("Invalid Email Or Password");
      }
    },
    logout: (state) => {
      state.currentUser = null;
      state.isLogin = false;
      alert("Logout Success");
    },
  },
});

export const { signup, login, logout } = authSlice.actions;

export default authSlice.reducer;
