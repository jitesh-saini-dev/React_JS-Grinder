import React from "react";
import { useSelector } from "react-redux";
import { removecart } from "../Slice/cartslice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const sely = useSelector((state) => state.cart.val);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Cart ({sely.length})</h2> {/* total items */}
      {sely.map((item) => (
        <div key={item.id}>
          <img src={item.image} width={80} />
          <p>{item.title}</p>
          <p>₹{item.price}</p>
          <button onClick={() => dispatch(removecart(item.id))}>
            Remove from cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
