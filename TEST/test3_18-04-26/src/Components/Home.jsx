// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Home.css";
// // import { useNavigate } from "react-router-dom";

// const Home = ({ cart, setCart }) => {
//   const [data, setData] = useState([]);
//   //   const [cart, setCart] = useState([]);

//   // const navigate = useNavigate();

//   const fetchdata = async () => {
//     try {
//       const res = await axios.get("https://fakestoreapi.com/products");
//       setData(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchdata();
//   }, []);

//   const addtocart = (item) => {
//     const exist = cart.find((x) => x.id === item.id);

//     if (exist) {
//       setCart(
//         cart.map((x) => (x.id === item.id ? { ...x, qty: x.qty + 1 } : x)),
//       );
//     } else {
//       setCart([...cart, { ...item, qty: 1 }]);
//     }
//   };

//   return (
//     <>
//       {/* <button onClick={() => navigate("/cart")}>View Cart</button> */}

//       <main>
//         {data.map((x) => (
//           <div key={x.id} className="card">
//             <img src={x.image} alt={x.title} className="img" />
//             <h3>{x.title}</h3>
//             <h4> {x.price}</h4>

//             <button onClick={() => addtocart(x)}>Add to cart</button>
//           </div>
//         ))}
//       </main>

//       <hr />

//       <h2>Cart Items</h2>

//       {cart.length === 0 && <p>Cart is empty</p>}

//       <div>
//         {cart.map((x) => (
//           <div key={x.id} className="card">
//             <img src={x.image} alt={x.title} className="img" />
//             <h3>{x.title}</h3>
//             <h4> {x.price}</h4>
//             <h4>Qty: {x.qty}</h4>

//             <button onClick={() => addtocart(x)}>Increase quantity</button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Home;

//--------------------------- khud se ----------------------------

// import React from "react";
// import { useState, useEffect } from "react";
// import "./Home.css";
// const Home = ({ cart, setCart }) => {
//   const [data, setdata] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const fetchdata = async () => {
//     try {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();
//       console.log(data);
//       setdata(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchdata();
//   }, []);

//   // const addtocart = (item) => {
//   //   const exist = cart.find((x) => x.id === item.id);

//   //   if (exist) {
//   //     setCart(
//   //       cart.map((x) => (x.id === item.id ? { ...x, qty: x.qty + 1 } : x)),
//   //     );
//   //   } else {
//   //     setCart([...cart, { ...item, qty: 1 }]);
//   //   }
//   // };

//   const addtocart = (item) => {
//     const exist = cart.find((x) => x.id === item.id);

//     if (exist) {
//       // remove
//       setCart(cart.filter((x) => x.id !== item.id));
//     } else {
//       // add
//       setCart([...cart, { ...item, qty: 1 }]);
//     }
//   };
//   return (
//     <>
//       <main>
//         {data.map((x) => (
//           <div key={x.id} className="card">
//             <img src={x.image} className="img" />
//             <h3>{x.title}</h3>
//             <h4> {x.price}</h4>
//             <button onClick={() => addtocart(x)}>
//               {cart.some((item) => item.id === x.id)
//                 ? "Remove from cart"
//                 : "Add to cart"}{" "}
//             </button>
//             <button onClick={() => setSelectedProduct(x)}>View Details</button>
//           </div>
//         ))}
//       </main>
//       {selectedProduct && (
//         <div className="modal">
//           <div className="modalcard">
//             <img src={selectedProduct.image} className="modalimg" />
//             <h3>{selectedProduct.title}</h3>
//             <h3>₹ {selectedProduct.price}</h3>
//             <p>{selectedProduct.description}</p>

//             <button onClick={() => setSelectedProduct(null)}>Close</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Home;

import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";

const Home = ({ cart, setCart }) => {
  const [data, setdata] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("");

  const fetchdata = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setdata(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const addtocart = (item) => {
    const exist = cart.find((x) => x.id === item.id);

    if (exist) {
      setCart(cart.filter((x) => x.id !== item.id));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const categories = [...new Set(data.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === ""
      ? data
      : data.filter((p) => p.category === selectedCategory);

  return (
    <>
      <div>
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <main>
        {filteredProducts.map((x) => (
          <div key={x.id} className="card">
            <img src={x.image} className="img" />
            <h3>{x.title}</h3>
            <h4> {x.price}</h4>

            <button onClick={() => addtocart(x)}>
              {cart.some((item) => item.id === x.id)
                ? "Remove from cart"
                : "Add to cart"}
            </button>

            <button onClick={() => setSelectedProduct(x)}>View Details</button>
          </div>
        ))}
      </main>

      {selectedProduct && (
        <div className="modal">
          <div className="modalcard">
            <img src={selectedProduct.image} className="modalimg" />
            <h3>{selectedProduct.title}</h3>
            <h3> {selectedProduct.price}</h3>
            <p>{selectedProduct.description}</p>

            <button onClick={() => setSelectedProduct(null)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
