import React from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  removeWishlist,
  clearWishlist,
} from "../Slice/wishlistSlice";

const AllWishlist = () => {

  const dispatch = useDispatch();

  const { wishlist } = useSelector(
    (state) => state.wishlist
  );

  return (
    <div className="min-h-screen p-6 bg-gray-100">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Wishlist
        </h1>

        <button
          onClick={() =>
            dispatch(clearWishlist())
          }
          className="bg-red-500 text-white px-5 py-2 rounded-xl"
        >
          Clear Wishlist
        </button>

      </div>

      {/* EMPTY */}
      {wishlist.length === 0 ? (

        <div className="text-center text-2xl font-semibold mt-20">
          No Wishlist Items
        </div>

      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {wishlist.map((item) => (

            <div
              key={item.id}
              className="bg-white p-5 rounded-2xl shadow-lg hover:scale-105 transition"
            >

              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-44 w-full object-cover rounded-xl"
              />

              <h2 className="text-lg font-bold mt-3">
                {item.title}
              </h2>

              <p className="text-gray-500 mt-1">
                ₹ {item.price}
              </p>

              <button
                onClick={() =>
                  dispatch(
                    removeWishlist(item.id)
                  )
                }
                className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 w-full"
              >
                Remove
              </button>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default AllWishlist;