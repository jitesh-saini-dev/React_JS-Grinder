// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const AllWishlist = () => {
//   const [wishlist, setWishlist] = useState([]);
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("");

//   const navigate = useNavigate();

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("allwish")) || [];
//     setWishlist(data);
//   }, []);

//   if (wishlist.length === 0) {
//     return <h2>No Wishlist Found</h2>;
//   }

//   let users = [...new Set(wishlist.map((x) => x.name))];
//   users = users.filter((x) => x.toLowerCase().includes(search.toLowerCase()));

//   if (sort === "atoz") {
//     users.sort((a, b) => a.localeCompare(b));
//   } else if (sort === "ztoa") {
//     users.sort((a, b) => b.localeCompare(a));
//   }
//   const deleteProduct = (wishlistId, productId) => {
//     const updated = wishlist.map((w) => {
//       if (w.id === wishlistId) {
//         return {
//           ...w,
//           products: w.products.filter((p) => p.id !== productId),
//         };
//       }
//       return w;
//     }).filter((o) => o.products.length > 0);

//     setWishlist(updated);
//     localStorage.setItem("allwish", JSON.stringify(updated));
//   };

//   const placeOrder = (wishlistId, product) => {
//     const existingOrders = JSON.parse(localStorage.getItem("allOrders")) || [];

//     // check karo product already hai ya nahi
//     const alreadyOrdered = existingOrders.some((order) =>
//       order.products.some((p) => p.id === product.id),
//     );

//     if (alreadyOrdered) {
//       alert("Already Ordered!");
//       return;
//     }

//     // nahi hai toh add karo
//     const user = JSON.parse(localStorage.getItem("user"));
//     const newOrder = {
//       id: wishlistId,
//       name: user.name,
//       products: [product],
//     };

//     const updated = [...existingOrders, newOrder];
//     localStorage.setItem("allOrders", JSON.stringify(updated));
//     alert("Added to Orders! ✅");
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <button onClick={() => navigate(-1)} className="backbtn">
//         Back
//       </button>
//       <h2>All Wishlist</h2>

//       <input
//         type="text"
//         placeholder="Search user..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ padding: "5px", marginRight: "10px" }}
//       />

//       <select value={sort} onChange={(e) => setSort(e.target.value)}>
//         <option value="">Sort</option>
//         <option value="atoz">A - Z</option>
//         <option value="ztoa">Z - A</option>
//       </select>

//       {users.length === 0 ? (
//         <div>No data found</div>
//       ) : (
//         users.map((user, i) => {
//           const userTotal = wishlist
//             .filter((w) => w.name === user)
//             .reduce(
//               (sum, w) => sum + w.products.reduce((s, p) => s + p.total, 0),
//               0,
//             );

//           return (
//             <div key={i} style={{ marginTop: "20px" }}>
//               <h1>👤 {user}</h1>
//               <p>
//                 <strong>Total Value:</strong> ${userTotal.toFixed(2)}
//               </p>

//               {wishlist
//                 .filter((w) => w.name === user)
//                 .map((item) => {
//                   const itemTotal = item.products.reduce(
//                     (sum, p) => sum + p.total,
//                     0,
//                   );

//                   return (
//                     <div
//                       key={item.id}
//                       style={{
//                         border: "1px solid #ccc",
//                         margin: "10px",
//                         padding: "10px",
//                         borderRadius: "10px",
//                       }}
//                     >
//                       <h3>❤️ Wishlist ID: {item.id}</h3>
//                       <p>
//                         <strong>Total:</strong> ${itemTotal.toFixed(2)}
//                       </p>

//                       <div className="prodbox">
//                         {item.products.map((p) => (
//                           <div key={p.id} className="prod">
//                             <img src={p.thumbnail} alt={p.title} width="80" />
//                             <p>
//                               <strong>{p.title}</strong>
//                             </p>
//                             <p>Price: ${p.price}</p>
//                             <p>Qty: {p.quantity}</p>
//                             <p>Total: ${p.total.toFixed(2)}</p>
//                             <button
//                               onClick={() => deleteProduct(item.id, p.id)}
//                             >
//                               🗑️ Delete
//                             </button>
//                             <button onClick={() => placeOrder(item.id, p)}>
//                               🛒 Place Order
//                             </button>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   );
//                 })}
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
// };

// export default AllWishlist;

// -------css----------------------
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AllWishlist.css";

const AllWishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("allwish")) || [];
    setWishlist(data);
  }, []);

  if (wishlist.length === 0) {
    return <h2>No Wishlist Found</h2>;
  }

  let users = [...new Set(wishlist.map((x) => x.name))];

  users = users.filter((x) => x.toLowerCase().includes(search.toLowerCase()));

  if (sort === "atoz") {
    users.sort((a, b) => a.localeCompare(b));
  } else if (sort === "ztoa") {
    users.sort((a, b) => b.localeCompare(a));
  }

  const deleteProduct = (wishlistId, productId) => {
    const updated = wishlist
      .map((w) => {
        if (w.id === wishlistId) {
          return {
            ...w,
            products: w.products.filter((p) => p.id !== productId),
          };
        }
        return w;
      })
      .filter((o) => o.products.length > 0);

    setWishlist(updated);
    localStorage.setItem("allwish", JSON.stringify(updated));
  };

  const placeOrder = (wishlistId, product) => {
    const existingOrders = JSON.parse(localStorage.getItem("allOrders")) || [];

    const alreadyOrdered = existingOrders.some((order) =>
      order.products.some((p) => p.id === product.id),
    );

    if (alreadyOrdered) {
      alert("Already Ordered!");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    const newOrder = {
      id: wishlistId,
      name: user.name,
      products: [product],
    };

    const updated = [...existingOrders, newOrder];

    localStorage.setItem("allOrders", JSON.stringify(updated));

    alert("Added to Orders! ✅");
  };

  return (
    <div className="wishlistpage">
      <button onClick={() => navigate(-1)} className="backbtn">
        Back
      </button>

      <h2>All Wishlist</h2>

      <div className="topcontrols">
        <input
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="searchinput"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="sortselect"
        >
          <option value="">Sort</option>
          <option value="atoz">A - Z</option>
          <option value="ztoa">Z - A</option>
        </select>
      </div>

      {users.length === 0 ? (
        <div>No data found</div>
      ) : (
        users.map((user, i) => {
          const userTotal = wishlist
            .filter((w) => w.name === user)
            .reduce(
              (sum, w) => sum + w.products.reduce((s, p) => s + p.total, 0),
              0,
            );

          return (
            <div key={i} className="userbox">
              <div className="usercard">
                <h1>👤 {user}</h1>

                <p>
                  <strong>Total Value:</strong> ${userTotal.toFixed(2)}
                </p>

                {wishlist
                  .filter((w) => w.name === user)
                  .map((item) => {
                    const itemTotal = item.products.reduce(
                      (sum, p) => sum + p.total,
                      0,
                    );

                    return (
                      <div key={item.id} className="wishbox">
                        <h3>❤️ Wishlist ID: {item.id}</h3>

                        <p>
                          <strong>Total:</strong> ${itemTotal.toFixed(2)}
                        </p>

                        <div className="prodbox">
                          {item.products.map((p) => (
                            <div key={p.id} className="prod">
                              <img
                                src={p.thumbnail}
                                alt={p.title}
                                className="prodimg"
                              />

                              <p>
                                <strong>{p.title}</strong>
                              </p>

                              <p>Price: ${p.price}</p>

                              <p>Qty: {p.quantity}</p>

                              <p>Total: ${p.total.toFixed(2)}</p>

                              <div className="btnflex">
                                <button
                                  className="deletebtn"
                                  onClick={() => deleteProduct(item.id, p.id)}
                                >
                                  🗑️ Delete
                                </button>

                                <button
                                  className="orderbtn"
                                  onClick={() => placeOrder(item.id, p)}
                                >
                                  🛒 Place Order
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default AllWishlist;
