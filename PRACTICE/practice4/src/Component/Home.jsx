// import React, { useEffect, useState } from "react";
// import "./Home.css";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

// const Home = ({ cart, setCart }) => {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("");
//   const [loading, setLoading] = useState(true);

//   const fetchdata = async () => {
//     setLoading(true)
//     const res = await fetch("https://fakestoreapi.com/products");
//     const data = await res.json();
//     console.log(data);
//     setData(data);
//     setLoading(false);
//   };
//   useEffect(() => {
//     fetchdata();
//   }, []);

//   const filterdata = data.filter((x) =>
//     x.title.toLowerCase().includes(search.toLowerCase()),
//   );
//   console.log(filterdata);

//   const sortingdata = [...filterdata];

//   if (sort === "lowtohigh") {
//     sortingdata.sort((a, b) => a.price - b.price);
//   } else if (sort === "hightolow") {
//     sortingdata.sort((a, b) => b.price - a.price);
//   }

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
//       <div className="search">
//         <input
//           type="text"
//           placeholder="Search here..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       <div className="sort">
//         <select value={sort} onChange={(e) => setSort(e.target.value)}>
//           <option value="">Sort</option>
//           <option value="lowtohigh">Low to High</option>
//           <option value="hightolow">High to Low</option>
//         </select>
//       </div>
//       <div className="cardes">
//         {loading ? (
//           <h2 style={{ textAlign: "center", marginTop: "50px" }}>
//             Loading... ⏳
//           </h2>
//         ) : sortingdata.length === 0 ? (
//           <h2 style={{ textAlign: "center", marginTop: "50px", color: "gray" }}>
//             No Data Found 😕
//           </h2>
//         ) : (
//           sortingdata.map((x) => (
//             <div key={x.id} className="card">
//               <LazyLoadImage
//                 src={x.image}
//                 alt={x.title}
//                 effect="blur"
//                 wrapperProps={{
//                   style: { transitionDelay: "1s" },
//                 }}
//               />
//               <h3>{x.title}</h3>
//               <h4>{x.price}</h4>
//               <h4>{x.description}</h4>
//               <button className="cartbtn" onClick={() => addtocart(x)}>
//                 Add to cart
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import "./Home.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

const Home = ({ cart, setCart }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");

  // 🔄 Fetch data
  const fetchdata = async () => {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  // 🔍 Search filter
  const filterdata = data.filter((x) =>
    x.title.toLowerCase().includes(search.toLowerCase()),
  );

  // 📊 Sorting
  const sortingdata = [...filterdata];

  if (sort === "lowtohigh") {
    sortingdata.sort((a, b) => a.price - b.price);
  } else if (sort === "hightolow") {
    sortingdata.sort((a, b) => b.price - a.price);
  }

  // 🛒 Check item in cart
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  // 🔁 Toggle add/remove cart
  const toggleCart = (item) => {
    const token = localStorage.getItem("user");

    if (!token) {
      navigate("/login");
    }

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

      {/* 🔍 Search */}
      <div className="search">
        <input
          type="text"
          placeholder="Search here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 📊 Sort */}
      <div className="sort">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort</option>
          <option value="lowtohigh">Low to High</option>
          <option value="hightolow">High to Low</option>
        </select>
      </div>

      {/* 🧾 Products */}
      <div className="cardes">
        {loading ? (
          <h2 style={{ textAlign: "center", marginTop: "50px" }}>
            Loading... ⏳
          </h2>
        ) : sortingdata.length === 0 ? (
          <h2 style={{ textAlign: "center", marginTop: "50px", color: "gray" }}>
            No Data Found 😕
          </h2>
        ) : (
          filteredProducts.map((x) => (
            <div key={x.id} className="card">
              <LazyLoadImage src={x.image} alt={x.title} effect="blur" />

              <h3>{x.title}</h3>
              <h4>${x.price}</h4>
              <p>{x.description}</p>

              {/* 🛒 Toggle Button */}
              <button
                className="cartbtn"
                onClick={() => toggleCart(x)}
                style={{
                  background: isInCart(x.id) ? "crimson" : "lightseagreen",
                  color: "white",
                }}
              >
                {isInCart(x.id) ? "Remove from cart ❌" : "Add to cart 🛒"}
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
