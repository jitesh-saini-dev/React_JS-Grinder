import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipe: null,
  post: null,
  loading: false,
};

const recipeSlice = createSlice({
  name: "recipe",

  initialState,

  reducers: {

    // RECIPE
    setRecipe: (state, action) => {
      state.recipe = action.payload;
    },

    // POST
    setPost: (state, action) => {
      state.post = action.payload;
    },

    // LOADING
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setRecipe,
  setPost,
  setLoading,
} = recipeSlice.actions;

export default recipeSlice.reducer;