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

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import "./Newtwo.css";

// const Newtwo = ({ newarr }) => {
//   const [sort, setSort] = useState("");
//   const [search, setSearch] = useState("");

//   const navigate = useNavigate();

//   const filtereddata = newarr.filter(
//     (item) =>
//       item.name.toLowerCase().includes(search.toLowerCase()) ||
//       item.description.toLowerCase().includes(search.toLowerCase()),
//   );

//   const res = [...filtereddata];

//   if (sort === "lowtohigh") {
//     res.sort((a, b) => a.price - b.price);
//   } else if (sort === "hightolow") {
//     res.sort((a, b) => b.price - a.price);
//   } else if (sort === "rating") {
//     res.sort((a, b) => b.rating - a.rating);
//   } else if (sort === "discount") {
//     res.sort((a, b) => a.discount - b.discount);
//   }

//   return (
//     <>
//       <div className="searchingbox">
//         <input
//           type="text"
//           placeholder="Search here..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="search animated-input"
//         />
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
//           <div
//             key={val.product_id}
//             className="card"

//             style={{ cursor: "pointer" }}
//           >
//             <img src={val.image} alt={val.name} className="card-img" />

//             <div className="card-content">
//               <h2 className="card-id">#{val.product_id}</h2>
//               <h3 className="card-title">{val.name}</h3>
//               <p className="card-desc">{val.description}</p>

//               <div className="card-extra">
//                 <span>₹{val.price}</span>
//                 <span>⭐ {val.rating}</span>
//                 <span>{val.discount}% OFF</span>
//                 <button  onClick={() => navigate(`/product/${val.product_id}`)}  > View details</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </main>
//     </>
//   );
// };

// export default Newtwo;

//--------------working but showing on another page------------------------

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Newtwo = () => {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("");

//   const [show, setShow] = useState(false);

//   const navigate = useNavigate();

//   const fetchData = async () => {
//     const res = await axios.get("https://dummyjson.com/recipes");
//     setData(res.data.recipes);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     // navigate("/login");
//   };

//   // 🔍 Filter
//   const filteredData = data.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase()),
//   );

//   // 🔃 Sort
//   let sortedData = [...filteredData];

//   if (sort === "low") {
//     sortedData.sort((a, b) => a.caloriesPerServing - b.caloriesPerServing);
//   } else if (sort === "high") {
//     sortedData.sort((a, b) => b.caloriesPerServing - a.caloriesPerServing);
//   } else if (sort === "az") {
//     sortedData.sort((a, b) => a.name.localeCompare(b.name));
//   }

//   return (
//     <div className="p-5">
//       <button onClick={handleLogout}>Logout</button>

//       <input
//         type="search"
//         placeholder="Search recipe..."
//         className="border p-2 rounded mr-3"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <select
//         className="border p-2 rounded"
//         onChange={(e) => setSort(e.target.value)}
//       >
//         <option value="">Sort</option>
//         <option value="low">Low Calories</option>
//         <option value="high">High Calories</option>
//         <option value="az">A-Z</option>
//       </select>

//       <button className="border px-3 py-1 mb-4" onClick={() => setShow(!show)}>
//         {show ? "Hide Recipes" : "Show Recipes"}
//       </button>

//       {show && (
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
//           {sortedData.map((x) => (
//             <div
//               key={x.id}
//               className="border p-3 rounded shadow cursor-pointer hover:scale-105 transition"
//             >
//               <h2 className="font-bold">{x.name}</h2>

//               <img
//                 src={x.image}
//                 alt={x.name}
//                 className="w-full h-40 object-cover mt-2 rounded"
//               />

//               <p className="text-sm mt-1">🔥 {x.caloriesPerServing} calories</p>

//               <button
//                 className="border"
//                 onClick={() => navigate(`/Newtwo/${x.id}`)}
//               >
//                 Detail
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Newtwo;
//-----------------Modal view------------------------

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const Newtwo = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [show, setShow] = useState(false);

  const [modal, setModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const fetchData = async () => {
    const res = await axios.get("https://dummyjson.com/recipes");
    setData(res.data.recipes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  let sortedData = [...filteredData];

  if (sort === "low") {
    sortedData.sort((a, b) => a.caloriesPerServing - b.caloriesPerServing);
  } else if (sort === "high") {
    sortedData.sort((a, b) => b.caloriesPerServing - a.caloriesPerServing);
  } else if (sort === "az") {
    sortedData.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      {/* Controls */}
      <div className="flex flex-wrap gap-3 items-center">
        <input
          type="search"
          placeholder="Search recipe..."
          className="border p-2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="low">Low Calories</option>
          <option value="high">High Calories</option>
          <option value="az">A-Z</option>
        </select>

        <button
          className="bg-black text-white px-3 py-1 rounded"
          onClick={() => setShow(!show)}
        >
          {show ? "Hide Recipes" : "Show Recipes"}
        </button>
      </div>

      {/* Cards */}
      {show && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
          {sortedData.map((x) => (
            <motion.div
              key={x.id}
              layout
              className="bg-white p-3 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="font-bold text-gray-800">{x.name}</h2>

              <img
                src={x.image}
                alt={x.name}
                className="w-full h-40 object-cover mt-2 rounded"
              />

              <p className="text-sm mt-1">🔥 {x.caloriesPerServing} calories</p>

              {/* 🔥 Premium Button */}
              <button
                className="mt-3 w-full py-2 rounded-lg text-white font-semibold 
                bg-gradient-to-r from-purple-500 to-indigo-500 
                hover:from-indigo-500 hover:to-purple-500 
                transition-all duration-300 shadow-md hover:shadow-xl"
                onClick={() => {
                  setSelectedRecipe(x);
                  setModal(true);
                }}
              >
                View Details 🚀
              </button>
            </motion.div>
          ))}
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {modal && selectedRecipe && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(false)}
          >
            <motion.div
              className="bg-white w-[90%] max-w-2xl rounded-2xl p-6 relative shadow-xl"
              initial={{ scale: 0.7, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.7, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-xl"
                onClick={() => setModal(false)}
              >
                ❌
              </button>

              <h1 className="text-2xl font-bold text-gray-800">
                {selectedRecipe.name}
              </h1>

              <img
                src={selectedRecipe.image}
                alt={selectedRecipe.name}
                className="w-full h-64 object-cover mt-4 rounded-xl"
              />

              <div className="flex gap-4 mt-4">
                <p className="bg-orange-100 px-3 py-1 rounded-full">
                  🔥 {selectedRecipe.caloriesPerServing} cal
                </p>

                <p className="bg-blue-100 px-3 py-1 rounded-full">
                  ⏱{" "}
                  {selectedRecipe.prepTimeMinutes +
                    selectedRecipe.cookTimeMinutes}{" "}
                  mins
                </p>
              </div>

              <h2 className="mt-5 font-semibold">Ingredients</h2>

              <ul className="grid grid-cols-2 gap-2 mt-2">
                {selectedRecipe.ingredients.map((ing, i) => (
                  <li key={i} className="bg-gray-100 px-2 py-1 rounded text-sm">
                    {ing}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Newtwo;
