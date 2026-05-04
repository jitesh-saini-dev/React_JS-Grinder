import React from "react";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  const total = cart.reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0,
  );

  return (
    <>
      <main>
        <div className="showcard">
          {cart.map((x) => (
            <div key={x.id} className="card">
              <img src={x.image} alt={x.title} className="img" />
              <h3>{x.title}</h3>
              <h4> {x.price}</h4>
              <h4>Qty: {x.qty || 1}</h4>
            </div>
          ))}
        </div>
      </main>
      <div>
        <h2>Total Price: {total.toFixed(2)}</h2>
      </div>
    </>
  );
};

export default Cart;
