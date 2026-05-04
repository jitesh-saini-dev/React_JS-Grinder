import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Cart = ({ cart, setCart }) => {
  const removeItem = (id) => {
    setCart(cart.filter((x) => x.id !== id));
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };
  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : item,
      ),
    );
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="cardes">
      {cart.length === 0 ? (
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Cart is Empty 🛒
        </h2>
      ) : (
        cart.map((x) => (
          <div key={x.id} className="card">
            <LazyLoadImage src={x.image} alt={x.title} effect="blur" />

            <h3>{x.title}</h3>
            <h4>${x.price}</h4>
            <p>{x.description}</p>
            <h4>Qty: {x.qty}</h4>

            {/* ✅ Qty controls */}
            <div>
              <button
                style={{ fontSize: "24px", margin: "0px 5px", padding: "5px" }}
                onClick={() => increaseQty(x.id)}
              >
                +
              </button>
              <button
                style={{ fontSize: "24px", margin: "0px 5px", padding: "5px" }}
                onClick={() => decreaseQty(x.id)}
              >
                -
              </button>
            </div>

            <button
              className="cartbtn"
              onClick={() => removeItem(x.id)}
              style={{ background: "crimson", color: "white" }}
            >
              Remove
            </button>
          </div>
        ))
      )}
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
