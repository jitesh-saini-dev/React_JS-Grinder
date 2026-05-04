// import { useEffect, useState } from "react";

// const AllOrders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("allOrders")) || [];
//     setOrders(data);
//   }, []);

//   if (orders.length === 0) {
//     return <h2>No Orders Found</h2>;
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>All Orders</h2>

//       {orders.map((order, index) => (
//         <div
//           key={index}
//           style={{
//             border: "1px solid #ccc",
//             marginBottom: "20px",
//             padding: "10px",
//             borderRadius: "10px",
//           }}
//         >
//           <h3>Order ID: {order.id}</h3>
//           <p><strong>User:</strong> {order.name}</p>

//           <h4>Products:</h4>

//           {order.products.map((p) => (
//             <div
//               key={p.id}
//               style={{
//                 borderBottom: "1px solid #eee",
//                 marginBottom: "10px",
//                 paddingBottom: "10px",
//               }}
//             >
//               <img src={p.thumbnail} alt={p.title} width="80" />
//               <p><strong>{p.title}</strong></p>
//               <p>Price: ${p.price}</p>
//               <p>Qty: {p.quantity}</p>
//               <p>Total: ${p.total}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllOrders;\\

//--------------Without searching sorting best -------------

// import { useEffect, useState } from "react";

// const AllOrders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("allOrders")) || [];
//     setOrders(data);
//   }, []);

//   // unique users nikaal lo
//   const users = [...new Set(orders.map((o) => o.name))];

//   if (orders.length === 0) {
//     return <h2>No Orders Found</h2>;
//   }

//   return (
//     <div>
//       <h2>All Orders</h2>

//       {users.map((user, i) => (
//         <div key={i}>
//           <h1>{user}</h1>

//           {orders
//             .filter((o) => o.name === user)
//             .map((order) => (
//               <div key={order.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
//                 <h3>Order ID: {order.id}</h3>

//                 {order.products.map((p) => (
//                   <div key={p.id}>
//                     <p>{p.title} - ${p.price}</p>
//                   </div>
//                 ))}
//               </div>
//             ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllOrders;

//--------------With searching sorting best -------------

// import { useEffect, useState } from "react";

// const AllOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("");

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("allOrders")) || [];
//     setOrders(data);
//   }, []);

//   if (orders.length === 0) {
//     return <h2>No Orders Found</h2>;
//   }

//   // unique users
//   let users = [...new Set(orders.map((o) => o.name))];

//   // 🔍 SEARCH (by name)
//   users = users.filter((u) =>
//     u.toLowerCase().includes(search.toLowerCase())
//   );

//   // 🔤 SORT (by name)
//   if (sort === "atoz") {
//     users.sort((a, b) => a.localeCompare(b));
//   } else if (sort === "ztoa") {
//     users.sort((a, b) => b.localeCompare(a));
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>All Orders</h2>

//       {/* SEARCH */}
//       <input
//         type="text"
//         placeholder="Search user..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ padding: "5px", marginRight: "10px" }}
//       />

//       {/* SORT */}
//       <select value={sort} onChange={(e) => setSort(e.target.value)}>
//         <option value="">Sort</option>
//         <option value="atoz">A - Z</option>
//         <option value="ztoa">Z - A</option>
//       </select>

//       {/* USERS */}
//       {users.map((user, i) => (
//         <div key={i} style={{ marginTop: "20px" }}>
//           <h1>👤 {user}</h1>

//           {/* ORDERS */}
//           {orders
//             .filter((o) => o.name === user)
//             .map((order) => (
//               <div
//                 key={order.id}
//                 style={{
//                   border: "1px solid #ccc",
//                   margin: "10px",
//                   padding: "10px",
//                   borderRadius: "10px",
//                 }}
//               >
//                 <h3>📦 Order ID: {order.id}</h3>

//                 {/* PRODUCTS */}
//                 {order.products.map((p) => (
//                   <div key={p.id} style={{ marginBottom: "10px" }}>
//                     <img src={p.thumbnail} alt={p.title} width="80" />
//                     <p><strong>{p.title}</strong></p>
//                     <p>Price: ${p.price}</p>
//                     <p>Qty: {p.quantity}</p>
//                     <p>Total: ${p.total}</p>
//                   </div>
//                 ))}
//               </div>
//             ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllOrders;

//------total  price ----------------

// import { useEffect, useState } from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
// import { useNavigate } from "react-router-dom";

// const AllOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("");

//   const navigate = useNavigate();

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("allOrders")) || [];
//     setOrders(data);
//   }, []);

//   if (orders.length === 0) {
//     return <h2>No Orders Found</h2>;
//   }

//   let users = [...new Set(orders.map((o) => o.name))];

//   users = users.filter((u) => u.toLowerCase().includes(search.toLowerCase()));

//   if (sort === "atoz") {
//     users.sort((a, b) => a.localeCompare(b));
//   } else if (sort === "ztoa") {
//     users.sort((a, b) => b.localeCompare(a));
//   }

//   const deleteProduct = (orderId, productId) => {
//     const updated = orders.map((o) => {
//       if (o.id === orderId) {
//         return {
//           ...o,
//           products: o.products.filter((p) => p.id !== productId),
//         };
//       }
//       return o;
//     });

//     setOrders(updated);
//     localStorage.setItem("allOrders", JSON.stringify(updated));
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <button onClick={() => navigate(-1)} className="backbtn">
//         Back
//       </button>
//       <h2>All Orders</h2>

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
//           const userTotal = orders
//             .filter((o) => o.name === user)
//             .reduce(
//               (sum, o) => sum + o.products.reduce((s, p) => s + p.total, 0),
//               0,
//             );

//           return (
//             <div key={i} style={{ marginTop: "20px" }}>
//               <h1>👤 {user}</h1>
//               <p>
//                 <strong>Total Spend:</strong> ${userTotal.toFixed(2)}
//               </p>

//               {orders
//                 .filter((o) => o.name === user)
//                 .map((order) => {
//                   const orderTotal = order.products.reduce(
//                     (sum, p) => sum + p.total,
//                     0,
//                   );

//                   return (
//                     <div
//                       key={order.id}
//                       style={{
//                         border: "1px solid #ccc",
//                         margin: "10px",
//                         padding: "10px",
//                         borderRadius: "10px",
//                       }}
//                     >
//                       <h3>📦 Order ID: {order.id}</h3>
//                       <p>
//                         <strong>Order Total:</strong> ${orderTotal.toFixed(2)}
//                       </p>

//                       <div className="prodbox">
//                         {order.products.map((p) => (
//                           <div
//                             key={p.id}
//                             style={{ marginBottom: "10px" }}
//                             className="prod"
//                           >
//                             <LazyLoadImage
//                               src={p.thumbnail}
//                               alt={p.title}
//                               width="80"
//                               effect="blur"
//                               wrapperProps={{
//                                 style: { transitionDelay: "1s" },
//                               }}
//                             />
//                             <p>
//                               <strong>{p.title}</strong>
//                             </p>
//                             <p>Price: ${p.price}</p>
//                             <p>Qty: {p.quantity}</p>
//                             <p>Total: ${p.total.toFixed(2)}</p>
//                             <button
//                               onClick={() => deleteProduct(order.id, p.id)}
//                             >
//                               🗑️ Delete
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

// export default AllOrders;

//-------with proper css-----------------------------

import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";
import "./AllOrders.css";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("allOrders")) || [];
    setOrders(data);
  }, []);

  if (orders.length === 0) {
    return <h2>No Orders Found</h2>;
  }

  let users = [...new Set(orders.map((o) => o.name))];

  users = users.filter((u) => u.toLowerCase().includes(search.toLowerCase()));

  if (sort === "atoz") {
    users.sort((a, b) => a.localeCompare(b));
  } else if (sort === "ztoa") {
    users.sort((a, b) => b.localeCompare(a));
  }

  const deleteProduct = (orderId, productId) => {
    const updated = orders
      .map((o) => {
        if (o.id === orderId) {
          return {
            ...o,
            products: o.products.filter((p) => p.id !== productId),
          };
        }
        return o;
      })
      .filter((o) => o.products.length > 0);

    setOrders(updated);
    localStorage.setItem("allOrders", JSON.stringify(updated));
  };

  return (
    <div className="orderspage">
      <button onClick={() => navigate(-1)} className="backbtn">
        Back
      </button>

      <h2>All Orders</h2>

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
          const userTotal = orders
            .filter((o) => o.name === user)
            .reduce(
              (sum, o) => sum + o.products.reduce((s, p) => s + p.total, 0),
              0,
            );

          return (
            <div key={i} className="userbox">
              <div className="usercard">
                <h1>👤 {user}</h1>

                <p>
                  <strong>Total Spend:</strong> ${userTotal.toFixed(2)}
                </p>

                {orders
                  .filter((o) => o.name === user)
                  .map((order) => {
                    const orderTotal = order.products.reduce(
                      (sum, p) => sum + p.total,
                      0,
                    );

                    return (
                      <div key={order.id} className="orderbox">
                        <h3>📦 Order ID: {order.id}</h3>

                        <p>
                          <strong>Order Total:</strong> ${orderTotal.toFixed(2)}
                        </p>

                        <div className="prodbox">
                          {order.products.map((p) => (
                            <div key={p.id} className="prod">
                              <LazyLoadImage
                                src={p.thumbnail}
                                alt={p.title}
                                effect="blur"
                                className="prodimg"
                                wrapperProps={{
                                  style: { transitionDelay: "0.5s" },
                                }}
                              />

                              <p>
                                <strong>{p.title}</strong>
                              </p>

                              <p>Price: ${p.price}</p>

                              <p>Qty: {p.quantity}</p>

                              <p>Total: ${p.total.toFixed(2)}</p>

                              <button
                                className="deletebtn"
                                onClick={() => deleteProduct(order.id, p.id)}
                              >
                                🗑️ Delete
                              </button>
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

export default AllOrders;
