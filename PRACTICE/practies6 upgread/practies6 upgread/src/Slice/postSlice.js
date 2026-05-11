import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: null,
  loading: false,
};

const postSlice = createSlice({
  name: "post",

  initialState,

  reducers: {

    // SET POST
    setPost: (state, action) => {

      state.post = action.payload;

    },

    // SET LOADING
    setLoading: (state, action) => {

      state.loading = action.payload;

    },
  },
});

export const {
  setPost,
  setLoading,
} = postSlice.actions;

export default postSlice.reducer;