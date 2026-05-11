import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../Slice/orderSlice";
import { addWishlist } from "../Slice/wishlistSlice";

import {
  addCart,
  removeCart,
  clearCart,
} from "../Slice/cartSlice";

const Cart = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // REDUX CART
  const cartItems = useSelector(
    (state) => state.cart.cart
  );

  // STATE
  const [cart, setCart] = useState(null);

  const [search, setSearch] = useState("");

  const [sort, setSort] = useState("");

  const [loading, setLoading] = useState(true);

  // FETCH CART
  useEffect(() => {

    const fetchCart = async () => {

      const res = await fetch(`https://dummyjson.com/carts/${id}`    );

      const data = await res.json();

      setCart(data);

      setLoading(false);
    };

    fetchCart();

  }, [id]);

  // FILTER
  const filteredData =
    cart?.products?.filter((p) =>
      p.title
        .toLowerCase()
        .includes(search.toLowerCase())
    ) || [];

  // SORT
  const sortedData = [...filteredData];

  if (sort === "lowtohigh") {

    sortedData.sort(
      (a, b) => a.price - b.price
    );

  }

  else if (sort === "hightolow") {

    sortedData.sort(
      (a, b) => b.price - a.price
    );

  }

  else if (sort === "atoz") {

    sortedData.sort((a, b) =>
      a.title.localeCompare(b.title)
    );

  }

  else if (sort === "ztoa") {

    sortedData.sort((a, b) =>
      b.title.localeCompare(a.title)
    );

  }

  // LOADING
  if (loading) {

    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">

      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="bg-black text-white px-4 py-2 rounded-lg mb-5"
      >
        Back
      </button>

      {/* SEARCH + SORT */}
      <div className="flex gap-3 mb-5">

        <input
          type="text"
          placeholder="Search Product"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border p-2 rounded-lg"
        />

        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
          className="border p-2 rounded-lg"
        >

          <option value="">
            Sort
          </option>

          <option value="lowtohigh">
            Price Low
          </option>

          <option value="hightolow">
            Price High
          </option>

          <option value="atoz">
            A-Z
          </option>

          <option value="ztoa">
            Z-A
          </option>

        </select>

        {/* CLEAR CART */}
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-500 text-white px-4 rounded-lg"
        >
          Clear Cart
        </button>

      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {sortedData.map((p) => (

          <div
            key={p.id}
            className="bg-white p-4 rounded-2xl shadow-lg"
          >

            <img
              src={p.thumbnail}
              alt={p.title}
              className="w-full h-40 object-cover rounded-xl"
            />

            <h2 className="text-lg font-bold mt-3">
              {p.title}
            </h2>

            <p className="text-gray-500">
              ₹ {p.price}
            </p>

            <p>
              Qty : {p.quantity}
            </p>

            {/* ADD CART */}
            <button
              onClick={() => dispatch(addCart(p))}
              className="bg-green-500 text-white px-3 py-2 rounded-lg mt-3 w-full"
            >
              Add To Cart
            </button>




            {/* ORDER */}
            <button
              onClick={() => dispatch(addOrder(p))}
              className="bg-blue-500 text-white px-3 py-2 rounded-lg mt-2 w-full"
            >
              Order Now
            </button>




            {/* WISHLIST */}
            <button
              onClick={() =>
                dispatch(addWishlist(p))
              }
              className="bg-pink-500 text-white px-3 py-2 rounded-lg mt-2 w-full"
            >
              Wishlist
            </button>
            {/* REMOVE CART */}
            <button
              onClick={() =>
                dispatch(removeCart(p.id))
              }
              className="bg-red-500 text-white px-3 py-2 rounded-lg mt-2 w-full"
            >
              Remove
            </button>

          </div>
        ))}

      </div>

      {/* CART DATA */}
      <div className="mt-10 bg-white p-5 rounded-2xl shadow-lg">

        <h1 className="text-2xl font-bold mb-5">
          Redux Cart Items
        </h1>

        {cartItems.length === 0 ? (

          <h2>No Cart Items</h2>

        ) : (

          cartItems.map((item) => (

            <div
              key={item.id}
              className="flex justify-between border-b py-3"
            >

              <div>

                <h2 className="font-bold">
                  {item.title}
                </h2>

                <p>
                  ₹ {item.price}
                </p>

              </div>

              <div>

                <p>
                  Qty : {item.quantity}
                </p>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default Cart;