import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState,

  reducers: {
    // ADD WISHLIST
    addWishlist: (state, action) => {
      const exist = state.wishlist.find((x) => x.id === action.payload.id);

      if (!exist) {
        state.wishlist.push(action.payload);
      }
    },

    // REMOVE WISHLIST
    removeWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((x) => x.id !== action.payload);
    },

    // CLEAR WISHLIST
    clearWishlist: (state) => {
      state.wishlist = [];
    },
  },
});

export const { addWishlist, removeWishlist, clearWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
