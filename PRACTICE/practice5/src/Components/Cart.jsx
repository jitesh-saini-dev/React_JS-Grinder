import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/carts/${id}`);
        const data = await res.json();
        setCart(data);
      } catch (err) {
        console.error("Error fetching cart:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (!cart) return <h2>No Data Found</h2>;

  const filteredData = cart.products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );

  const sortedData = [...filteredData];

  if (sort === "lowtohigh") {
    sortedData.sort((a, b) => a.price - b.price);
  } else if (sort === "hightolow") {
    sortedData.sort((a, b) => b.price - a.price);
  } else if (sort === "atoz") {
    sortedData.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "ztoa") {
    sortedData.sort((a, b) => b.title.localeCompare(a.title));
  }

  return (
    <div className="products">
      <h2>Cart Details</h2>

      <button onClick={() => navigate(-1)} className="backbtn">
        Back
      </button>

      <h3>Cart ID: {cart.id}</h3>
      <p>
        <strong>User ID:</strong> {cart.userId}
      </p>
      <p>
        <strong>Total Products:</strong> {cart.totalProducts}
      </p>
      <p>
        <strong>Total Quantity:</strong> {cart.totalQuantity}
      </p>
      <p>
        <strong>Total:</strong> ${cart.total}
      </p>
      <p>
        <strong>Discounted Total:</strong> ${cart.discountedTotal}
      </p>

      <h3>Products</h3>

      <div className="searchbox">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search"
        />
      </div>

      <div className="sortbox">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort</option>
          <option value="atoz">A - Z</option>
          <option value="ztoa">Z - A</option>
          <option value="lowtohigh">Price: Low to High</option>
          <option value="hightolow">Price: High to Low</option>
        </select>
      </div>

      <div className="productcards">
        {filteredData.length === 0 ? (
          <div>No Data Found</div>
        ) : (
          sortedData.map((p) => (
            <div key={p.id} className="cards">
              <img src={p.thumbnail} alt={p.title} />
              <p>
                <strong>{p.title}</strong>
              </p>
              <p>Price: ${p.price}</p>
              <p>Qty: {p.quantity}</p>
              <p>Total: ${p.total}</p>
            </div>
          ))
        )}
      </div>

      <button
        className="btns"
        onClick={() => {
          const user = JSON.parse(localStorage.getItem("user"));

          const existingOrders =
            JSON.parse(localStorage.getItem("allOrders")) || [];

          const neworder = {
            id: cart.id,
            name: user.name,
            products: sortedData,
          };

          const updatedOrders = [...existingOrders, neworder];
          // console.log(updatedOrders);

          const ans = localStorage.setItem(
            "allOrders",
            JSON.stringify(updatedOrders),
          );
          console.log(ans);

          alert(`Order Placed! ID: ${cart.id}`);
        }}
      >
        Place Order
      </button>
      <button
        className="btns"
        onClick={() => {
          const user = JSON.parse(localStorage.getItem("user"));

          const existingWishlist =
            JSON.parse(localStorage.getItem("allwish")) || [];

          const newwish = {
            id: cart.id,
            name: user.name,
            products: sortedData,
          };

          const updatedWishlist = [...existingWishlist, newwish];
          console.log(updatedWishlist);

          const answish = localStorage.setItem(
            "allwish",
            JSON.stringify(updatedWishlist),
          );
          console.log(">>>>>>wishlist", answish);
          alert("added to wishlist!");
        }}
      >
        WishList
      </button>
    </div>
  );
};

export default Cart;
