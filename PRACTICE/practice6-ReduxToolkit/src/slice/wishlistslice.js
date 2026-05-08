import { createSlice } from "@reduxjs/toolkit";

export const wishlistslice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },
  reducers: {
    addWishlist: (state, action) => {
      const user = JSON.parse(localStorage.getItem("user"));
      const newWish = {
        id: Date.now(),
        name: user?.username || "Unknown",
        products: action.payload,
      };
      state.wishlist.push(newWish);
    },

    removeWishlistProduct: (state, action) => {
      const { wishlistId, productId } = action.payload;
      const item = state.wishlist.find((w) => w.id === wishlistId);
      if (item) {
        item.products = item.products.filter((p) => p.id !== productId);
      }
    },
  },
});

export const { addWishlist, removeWishlistProduct } = wishlistslice.actions;
export default wishlistslice.reducer;