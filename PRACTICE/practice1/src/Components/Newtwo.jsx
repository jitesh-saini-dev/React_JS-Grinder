// import React from "react";
// import { useState } from "react";

// import "./Newtwo.css";

// const Newtwo = ({ newarr }) => {
//   const [sort, setSort] = useState("");
//   const [search, setSearch] = useState("");

//   const filtereddata = newarr.filter(
//     (item) =>
//       item.name.toLowerCase().includes(search.toLowerCase()) ||
//       item.description.toLowerCase().includes(search.toLowerCase()),
//   );
//   const res = [...filtereddata];

//   if (sort == "lowtohigh") {
//     res.sort((a, b) => a.price - b.price);
//   } else if (sort == "hightolow") {
//     res.sort((a, b) => b.price - a.price);
//   } else if (sort == "rating") {
//     res.sort((a, b) => b.rating - a.rating);
//   } else if (sort == "discount") {
//     res.sort((a, b) => a.discount - b.discount);
//   }

//   return (
//     <>
//       <div className="searchingbox">
//         <div>
//           <input
//             type="text"
//             placeholder="Search here..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="search animated-input"
//           />
//         </div>
//       </div>
//       <div className="dropdown">
//         <select
//           value={sort}
//           onChange={(e) => setSort(e.target.value)}
//           className="sort"
//         >
//           <option value="" disabled>
//             Sort by: Featured
//           </option>
//           <option value="lowtohigh"> Price: Low to High </option>
//           <option value="hightolow"> Price: High to Low </option>
//           <option value="rating"> Rating: High to Low </option>
//           <option value="discount"> Discount: Low to High </option>
//         </select>
//       </div>
//       <main className="container">
//         {res.map((val) => (
//           <div key={val.product_id} className="card">
//             <img src={val.image} alt={val.name} className="card-img" />
//             <div className="card-content">
//               <h2 className="card-id">{val.product_id}</h2>
//               <h3 className="card-title">{val.name}</h3>
//               <p className="card-desc">{val.description}</p>
//               <div className="card-extra">
//                 <span>{val.price}</span>
//                 <span>{val.rating}</span>
//                 <span>{val.discount}</span>

//               </div>
//             </div>
//           </div>
//         ))}
//       </main>
//     </>
//   );
// };

// export default Newtwo;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Newtwo.css";

const Newtwo = ({ newarr }) => {
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  const navigate = useNavigate(); // 🔥 add this

  const filtereddata = newarr.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()),
  );

  const res = [...filtereddata];

  if (sort === "lowtohigh") {
    res.sort((a, b) => a.price - b.price);
  } else if (sort === "hightolow") {
    res.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    res.sort((a, b) => b.rating - a.rating);
  } else if (sort === "discount") {
    res.sort((a, b) => a.discount - b.discount);
  }

  return (
    <>
      <div className="searchingbox">
        <input
          type="text"
          placeholder="Search here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search animated-input"
        />
      </div>

      <div className="dropdown">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="sort"
        >
          <option value="" disabled>
            Sort by: Featured
          </option>
          <option value="lowtohigh"> Price: Low to High </option>
          <option value="hightolow"> Price: High to Low </option>
          <option value="rating"> Rating: High to Low </option>
          <option value="discount"> Discount: Low to High </option>
        </select>
      </div>

      <main className="container">
        {res.map((val) => (
          <div
            key={val.product_id}
            className="card"
            onClick={() => navigate(`/product/${val.product_id}`)} // 🔥 main change
            style={{ cursor: "pointer" }}
          >
            <img src={val.image} alt={val.name} className="card-img" />

            <div className="card-content">
              <h2 className="card-id">#{val.product_id}</h2>
              <h3 className="card-title">{val.name}</h3>
              <p className="card-desc">{val.description}</p>

              <div className="card-extra">
                <span>₹{val.price}</span>
                <span>⭐ {val.rating}</span>
                <span>{val.discount}% OFF</span>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default Newtwo;
