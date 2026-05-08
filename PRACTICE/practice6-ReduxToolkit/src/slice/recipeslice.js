import { createSlice } from "@reduxjs/toolkit";

export const recipeslice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    loading: false,
    posts: null,
    postsLoading: false,
  },
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setPostsLoading: (state, action) => {
      state.postsLoading = action.payload;
    },
  },
});

export const { setRecipes, setLoading, setPosts, setPostsLoading } = recipeslice.actions;
export default recipeslice.reducer;