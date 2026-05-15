// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchdata } from "../Slice/menuslice";

// const Menu = () => {
//   const dispatch = useDispatch();

//   const sely = useSelector((state) => state.menu.data);
//   const loading = useSelector((state) => state.menu.loading);
//   console.log(sely);

//   useEffect(() => {
//     dispatch(fetchdata());
//   }, []);

//   if (loading) return <div>Loading...</div>;

//   return (
//     <>
//       <div>
//         {sely?.recipes?.map((x) => (
//           <div key={x.id}>{x.name}</div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Menu;
//-----------------------------------------------------------------



// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
// import TablePagination from "@mui/material/TablePagination";
// import { fetchdata } from "../Slice/menuslice";

// const Menu = () => {
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("");
//   const [selectCategory, setSelectCategory] = useState("");

//   const dispatch = useDispatch();
//   const sely = useSelector((state) => state.menu.data);
//   const loading = useSelector((state) => state.menu.loading);

//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(6);

//   const [titleVisible, setTitleVisible] = useState(false);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   useEffect(() => {
//     dispatch(fetchdata());
//     const t = setTimeout(() => setTitleVisible(true), 100);
//     return () => clearTimeout(t);
//   }, []);

//   useEffect(() => {
//     setPage(0);
//   }, [search, sort, selectCategory]);

//   const recipes = sely?.recipes || [];

//   // ── Filter ──
//   const filteredData = recipes.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase()),
//   );

//   const tags = [...new Set(recipes.flatMap((x) => x.cuisine))];

//   const catetags = selectCategory
//     ? filteredData.filter((x) => x.cuisine === selectCategory)
//     : filteredData;

//   // ── Sort ──
//   const sorted = [...catetags];

//   if (sort === "atoz") sorted.sort((a, b) => a.name.localeCompare(b.name));
//   else if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);
//   else if (sort === "time")
//     sorted.sort((a, b) => a.cookTimeMinutes - b.cookTimeMinutes);

//   // fake price based on calories
//   const getPrice = (cal) => `$ ${((cal / 100) * 4.5 + 9).toFixed(2)} USD`;

//   const paginatedData = sorted.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage,
//   );

//   return (
//     <div
//       className="min-h-screen bg-[#1a1a1a] text-white px-6 py-10"
//       style={{ fontFamily: "'Poppins', sans-serif" }}
//     >
//       {/* ── Heading ── */}
//       <h1
//         className="text-center font-bold mb-2 transition-all duration-[1200ms] ease-out"
//         style={{
//           fontSize: "clamp(2rem, 5vw, 3rem)",
//           letterSpacing: "0.1em",
//           opacity: titleVisible ? 1 : 0,
//           transform: titleVisible ? "translateY(0)" : "translateY(48px)",
//         }}
//       >
//         TONIGHT'S{" "}
//         <span className="font-semibold" style={{ color: "#c27b7b" }}>
//           CRAVINGS
//         </span>
//       </h1>
//       <div className="flex justify-center mb-8">
//         <div className="w-16 h-[2px] bg-yellow-600" />
//       </div>

//       {/* ── Search + Sort Row ── */}
//       <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
//         {/* Search */}
//         <input
//           type="text"
//           placeholder="Search dishes..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-200 px-5 py-2.5 rounded-full bg-[#2a2a2a] border border-[#444]
//                      text-sm text-gray-300 placeholder-gray-500 outline-none
//                      focus:border-yellow-600 transition-all duration-300"
//         />

//         {/* Sort */}
//         <select
//           value={sort}
//           onChange={(e) => setSort(e.target.value)}
//           className="px-5 py-2.5 rounded-full bg-[#2a2a2a] border border-[#444]
//                      text-sm text-gray-300 outline-none cursor-pointer
//                      focus:border-yellow-600 transition-all duration-300"
//         >
//           <option value="">Sort By</option>
//           <option value="atoz">Name A–Z</option>
//           <option value="rating">Top Rated</option>
//           <option value="time">Cooking Time</option>
//         </select>
//       </div>

//       <div className="flex flex-wrap gap-2.5 justify-center my-8">
//         {/* All Button */}
//         <button
//           onClick={() => setSelectCategory("")}
//           className={`px-5 py-2 rounded-full text-sm border transition-all duration-200 cursor-pointer
//       ${
//         selectCategory === ""
//           ? "bg-white text-black border-white"
//           : "bg-transparent text-gray-400 border-[#3a3a3a] hover:border-gray-400 hover:text-white"
//       }`}
//         >
//           All
//         </button>

//         {/* Dynamic Tags */}
//         {tags.map((x, index) => (
//           <button
//             key={index}
//             onClick={() => setSelectCategory(x)}
//             className={`px-5 py-2 rounded-full text-sm border transition-all duration-200 cursor-pointer
//         ${
//           selectCategory === x
//             ? "bg-white text-black border-white"
//             : "bg-transparent text-gray-400 border-[#3a3a3a] hover:border-gray-400 hover:text-white"
//         }`}
//           >
//             {x}
//           </button>
//         ))}
//       </div>

//       {/* ── Loading ── */}
//       {loading ? (
//         <div className="flex justify-center items-center h-[50vh]">
//           <div className="w-12 h-12 border-4 border-yellow-800 border-t-yellow-500 rounded-full animate-spin" />
//         </div>
//       ) : sorted.length === 0 ? (
//         <p className="text-center text-gray-500 text-lg mt-20">
//           No dishes found 😕
//         </p>
//       ) : (
//         /* ── Grid ── */
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
//           {paginatedData.map((item, idx) => (
//             <div
//               key={item.id}
//               className="group relative rounded-xl overflow-hidden cursor-pointer bg-[#111]"
//               style={{
//                 animation: "fadeUp 0.5s ease both",
//                 animationDelay: `${(idx % 9) * 70}ms`,
//               }}
//             >
//               {/* ── Image ── */}
//               <div className="overflow-hidden h-[260px]">
//                 <LazyLoadImage
//                   src={item.image}
//                   alt={item.name}
//                   effect="blur"
//                   threshold={300}
//                   className="w-full h-full object-cover
//              transition-transform duration-500 will-change-transform
//              group-hover:scale-110"
//                 />
//               </div>

//               {/* ── Name + Price bar ── */}
//               <div className="flex items-center justify-between px-4 py-3 bg-[#111]">
//                 <span className="text-[15px] font-medium text-white tracking-wide truncate max-w-[60%]">
//                   {item.name}
//                 </span>
//                 <span className="text-[14px] text-gray-300 whitespace-nowrap">
//                   {getPrice(item.caloriesPerServing)}
//                 </span>
//               </div>

//               {/* ── Hover overlay with details ── */}
//               <div
//                 className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100
//                               transition-opacity duration-300 flex flex-col justify-center
//                               items-center gap-2 px-6 text-center"
//               >
//                 <p className="text-yellow-400 text-sm tracking-widest uppercase">
//                   ⭐ {item.rating} Rating
//                 </p>
//                 <p className="text-gray-300 text-sm">
//                   ⏱ {item.cookTimeMinutes} min cook time
//                 </p>
//                 <p className="text-gray-400 text-xs mt-1">
//                   {item.instructions?.join(" ").slice(0, 90)}...
//                 </p>
//                 <button
//                   className="mt-3 px-6 py-2 border border-yellow-600 text-yellow-500
//                                    text-xs tracking-widest uppercase rounded-full
//                                    hover:bg-yellow-600 hover:text-black transition-all duration-200"
//                 >
//                   Order Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Pagination */}
//       <div className="flex justify-center mt-10">
//         <div className="bg-[#111] border border-[#2a2a2a] rounded-xl px-4 py-2 shadow-lg">
//           <TablePagination
//             component="div"
//             count={sorted.length}
//             page={page}
//             onPageChange={handleChangePage}
//             rowsPerPage={rowsPerPage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//             rowsPerPageOptions={[6, 9, 12]}
//             sx={{
//               color: "#fff",

//               "& .MuiTablePagination-toolbar": {
//                 color: "#ccc",
//               },

//               "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows":
//                 {
//                   color: "#aaa",
//                   fontSize: "14px",
//                 },

//               "& .MuiSelect-icon": {
//                 color: "#fff",
//               },

//               "& .MuiInputBase-root": {
//                 color: "#fff",
//               },

//               "& .MuiTablePagination-actions button": {
//                 color: "#fff",
//                 borderRadius: "8px",
//               },

//               "& .MuiTablePagination-actions button:hover": {
//                 backgroundColor: "#facc15",
//                 color: "#000",
//               },
//             }}
//           />
//         </div>
//       </div>

//       {/* ── Keyframe ── */}
//       <style>{`
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(24px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Menu;

//--------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import TablePagination from "@mui/material/TablePagination";
import { fetchdata } from "../Slice/menuslice";

const Menu = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [titleVisible, setTitleVisible] = useState(false);

  const dispatch = useDispatch();
  const sely = useSelector((state) => state.menu.data);
  const loading = useSelector((state) => state.menu.loading);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    dispatch(fetchdata());
    const t = setTimeout(() => setTitleVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    setPage(0);
  }, [search, sort, selectCategory]);

  const recipes = sely?.recipes || [];

  // ── Filter ──
  const filteredData = recipes.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const tags = [...new Set(recipes.flatMap((x) => x.cuisine))];

  const catetags = selectCategory
    ? filteredData.filter((x) => x.cuisine === selectCategory)
    : filteredData;

  // ── Sort ──
  const sorted = [...catetags];
  if (sort === "atoz") sorted.sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);
  else if (sort === "time") sorted.sort((a, b) => a.cookTimeMinutes - b.cookTimeMinutes);

  const getPrice = (cal) => `$ ${((cal / 100) * 4.5 + 9).toFixed(2)} USD`;

  const paginatedData = sorted.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  return (
    <div
      className="min-h-screen bg-[#161616] text-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-[1300px] mx-auto px-6 pt-16 pb-16">

        {/* ── Tonight's Cravings ── */}
        <h1
          className="text-center font-bold mb-14 transition-all duration-[1200ms] ease-out"
          style={{
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            letterSpacing: "-0.01em",
            opacity:   titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(56px)",
          }}
        >
          Tonight's{" "}
          <span style={{ color: "#c27b7b", fontStyle: "italic" }}>Cravings</span>
        </h1>

        {/* ── Full-width Search ── */}
        <div
          className="flex items-center gap-4 w-full rounded-2xl px-7 py-5 mb-6
                     bg-[#202020] border border-[#2e2e2e]
                     focus-within:border-[#c27b7b] transition-colors duration-300"
          style={{
            opacity:    titleVisible ? 1 : 0,
            transform:  titleVisible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 1s ease 0.35s, transform 1s ease 0.35s",
          }}
        >
          {/* Search icon SVG */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
               className="shrink-0">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none text-white
                       placeholder-[#555] text-[16px] tracking-wide"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-[#555] hover:text-white transition-colors text-xl leading-none"
            >
              ×
            </button>
          )}
        </div>

        {/* ── Category Pills + Sort row ── */}
        <div
          className="flex flex-wrap items-center justify-between gap-4 mb-10"
          style={{
            opacity:    titleVisible ? 1 : 0,
            transform:  titleVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s ease 0.6s, transform 1s ease 0.6s",
          }}
        >
          {/* Pills */}
          <div className="flex flex-wrap gap-2.5">
            {/* All */}
            <button
              onClick={() => setSelectCategory("")}
              className={`px-5 py-2 rounded-full text-sm font-medium border
                          transition-all duration-200 cursor-pointer
                          ${selectCategory === ""
                            ? "bg-white text-black border-white"
                            : "bg-transparent text-gray-400 border-[#3a3a3a] hover:border-gray-500 hover:text-white"
                          }`}
            >
              All Items
            </button>

            {/* Dynamic cuisine tags */}
            {tags.map((x, index) => (
              <button
                key={index}
                onClick={() => setSelectCategory(x)}
                className={`px-5 py-2 rounded-full text-sm font-medium border
                            transition-all duration-200 cursor-pointer
                            ${selectCategory === x
                              ? "bg-white text-black border-white"
                              : "bg-transparent text-gray-400 border-[#3a3a3a] hover:border-gray-500 hover:text-white"
                            }`}
              >
                {x}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-5 py-2.5 rounded-full bg-[#202020] border border-[#3a3a3a]
                       text-sm text-gray-400 outline-none cursor-pointer
                       hover:border-gray-500 hover:text-white
                       focus:border-[#c27b7b] transition-all duration-200"
          >
            <option value="">Sort By</option>
            <option value="atoz">Name A–Z</option>
            <option value="rating">Top Rated</option>
            <option value="time">Cooking Time</option>
          </select>
        </div>

        {/* ── Loading ── */}
        {loading ? (
          <div className="flex justify-center items-center h-[50vh]">
            <div className="w-12 h-12 border-4 border-[#3a2020] border-t-[#c27b7b] rounded-full animate-spin" />
          </div>

        ) : sorted.length === 0 ? (
          <p className="text-center text-gray-600 text-lg mt-20">No dishes found 😕</p>

        ) : (
          <>
            {/* ── Grid ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {paginatedData.map((item, idx) => (
                <div
                  key={item.id}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#1c1c1c]"
                  style={{
                    animation: "fadeUp 0.5s ease both",
                    animationDelay: `${(idx % 9) * 70}ms`,
                  }}
                >
                  {/* Image */}
                  <div className="overflow-hidden h-[260px]">
                    <LazyLoadImage
                      src={item.image}
                      alt={item.name}
                      effect="blur"
                      threshold={300}
                      className="w-full h-full object-cover
                                 transition-transform duration-500 will-change-transform
                                 group-hover:scale-110"
                    />
                  </div>

                  {/* Name + Price */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#1c1c1c]">
                    <span className="text-[15px] font-medium text-white tracking-wide truncate max-w-[60%]">
                      {item.name}
                    </span>
                    <span className="text-[13px] text-gray-400 whitespace-nowrap">
                      {getPrice(item.caloriesPerServing)}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/78 opacity-0 group-hover:opacity-100
                                  transition-opacity duration-300 flex flex-col justify-center
                                  items-center gap-2 px-6 text-center">
                    <p className="text-[#c27b7b] text-xs tracking-widest uppercase font-medium">
                      {item.cuisine}
                    </p>
                    <p className="text-[#f4a4a4] text-sm tracking-wide">
                      ⭐ {item.rating} Rating
                    </p>
                    <p className="text-gray-300 text-sm">⏱ {item.cookTimeMinutes} min cook time</p>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                      {item.instructions?.join(" ").slice(0, 90)}...
                    </p>
                    <button className="mt-4 px-7 py-2.5 border border-[#c27b7b] text-[#c27b7b]
                                       text-xs tracking-widest uppercase rounded-full
                                       hover:bg-[#c27b7b] hover:text-black transition-all duration-200">
                      Order Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Pagination ── */}
            <div className="flex justify-center mt-12">
              <div className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-2xl px-4 py-1">
                <TablePagination
                  component="div"
                  count={sorted.length}
                  page={page}
                  onPageChange={handleChangePage}
                  rowsPerPage={rowsPerPage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  rowsPerPageOptions={[6, 9, 12]}
                  sx={{
                    color: "#fff",
                    "& .MuiTablePagination-toolbar": { color: "#888" },
                    "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows": {
                      color: "#666",
                      fontSize: "13px",
                    },
                    "& .MuiSelect-icon":    { color: "#888" },
                    "& .MuiInputBase-root": { color: "#aaa" },
                    "& .MuiTablePagination-actions button": {
                      color: "#888",
                      borderRadius: "8px",
                    },
                    "& .MuiTablePagination-actions button:hover": {
                      backgroundColor: "#c27b7b",
                      color: "#000",
                    },
                  }}
                />
              </div>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Menu;

// // ---------------------------------------
// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchdata } from "../Slice/menuslice";
// import { Search } from "lucide-react";

// // ── Bug Fix 1: getCat define kiya ─────────────────────────────────
// const getCat = (tags = []) => {
//   const t = tags.map((x) => x.toLowerCase());
//   if (t.some((x) => ["pasta", "pizza", "italian"].includes(x)))
//     return "Italian";
//   if (t.some((x) => ["seafood", "fish", "shrimp", "lobster"].includes(x)))
//     return "Seafood";
//   if (t.some((x) => ["salad", "vegetarian", "vegan"].includes(x)))
//     return "Salads";
//   if (t.some((x) => ["dessert", "cake", "sweet", "chocolate"].includes(x)))
//     return "Desserts";
//   if (t.some((x) => ["soup", "breakfast", "snack"].includes(x)))
//     return "Starters";
//   if (t.some((x) => ["chicken", "beef", "lamb", "pork"].includes(x)))
//     return "Mains";
//   return "Specials";
// };

// const getPrice = (cal) => `$ ${((cal / 100) * 4.5 + 9).toFixed(2)} USD`;

// // ── Skeleton ──────────────────────────────────────────────────────
// const Skeleton = () => (
//   <div className="rounded-2xl overflow-hidden bg-[#1e1e1e] animate-pulse">
//     <div className="h-[220px] bg-[#2a2a2a]" />
//     <div className="p-4 flex justify-between">
//       <div className="h-4 w-40 bg-[#2a2a2a] rounded" />
//       <div className="h-4 w-20 bg-[#2a2a2a] rounded" />
//     </div>
//   </div>
// );

// // ── Main Component ────────────────────────────────────────────────
// const Menu = () => {
//   const dispatch = useDispatch();
//   const sely = useSelector((state) => state.menu.data);
//   const loading = useSelector((state) => state.menu.loading);

//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("");
//   // Bug Fix 2: initial "All Items" rakha taaki pill active dikhे
//   const [activeTab, setActiveTab] = useState("All Items");
//   const [titleVisible, setTitleVisible] = useState(false);

//   useEffect(() => {
//     dispatch(fetchdata());
//     const t = setTimeout(() => setTitleVisible(true), 100);
//     return () => clearTimeout(t);
//   }, [dispatch]);

//   const recipes = sely?.recipes || [];

//   // Pills
//   const categories = [
//     "All Items",
//     ...new Set(recipes.map((r) => getCat(r.tags))),
//   ];

//   // Filter (search + category)
//   const filtered = recipes.filter((item) => {
//     const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
//     const matchCat =
//       activeTab === "All Items" || getCat(item.tags) === activeTab;
//     return matchSearch && matchCat;
//   });

//   // Sort
//   let sorted = [...filtered];
//   if (sort === "atoz") sorted.sort((a, b) => a.name.localeCompare(b.name));
//   if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);
//   if (sort === "time")
//     sorted.sort((a, b) => a.cookTimeMinutes - b.cookTimeMinutes);

//   return (
//     <div
//       className="min-h-screen bg-[#161616] text-white"
//       style={{ fontFamily: "'Poppins', sans-serif" }}
//     >
//       <div className="px-6 pt-20 pb-10 max-w-[1300px] mx-auto">
//         {/* ── Tonight's Cravings ── */}
//         <h1
//           className="text-center font-bold mb-12 transition-all duration-[1200ms] ease-out"
//           style={{
//             fontSize: "clamp(2.8rem, 6vw, 5rem)",
//             opacity: titleVisible ? 1 : 0,
//             transform: titleVisible ? "translateY(0)" : "translateY(48px)",
//             letterSpacing: "-0.01em",
//           }}
//         >
//           Tonight's <span style={{ color: "#c27b7b" }}>Cravings</span>
//         </h1>

//         {/* ── Search + Sort row ── */}
//         <div
//           className="flex flex-col sm:flex-row items-center gap-3 mb-8"
//           style={{
//             opacity: titleVisible ? 1 : 0,
//             transform: titleVisible ? "translateY(0)" : "translateY(24px)",
//             transition: "opacity 1s ease 0.4s, transform 1s ease 0.4s",
//           }}
//         >
//           {/* Search — full width on its side */}
//           <div
//             className="flex items-center gap-3 flex-1 w-full rounded-full px-6 py-4
//                           bg-[#252525] border border-[#333]
//                           focus-within:border-[#c27b7b] transition-colors duration-300"
//           >
//             <Search size={20} className="text-gray-500 shrink-0" />
//             <input
//               type="text"
//               placeholder="Search..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full bg-transparent outline-none text-gray-200
//                          placeholder-gray-500 text-[15px]"
//             />
//           </div>

//           {/* Sort dropdown */}
//           <select
//             value={sort}
//             onChange={(e) => setSort(e.target.value)}
//             className="px-5 py-4 rounded-full bg-[#252525] border border-[#333]
//                        text-sm text-gray-300 outline-none cursor-pointer
//                        focus:border-[#c27b7b] transition-colors duration-300
//                        whitespace-nowrap"
//           >
//             <option value="">Sort By</option>
//             <option value="atoz">Name A–Z</option>
//             <option value="rating">Top Rated</option>
//             <option value="time">Cooking Time</option>
//           </select>
//         </div>

//         {/* ── Category Pills ── */}
//         <div
//           className="flex flex-wrap gap-3 justify-center mb-10"
//           style={{
//             opacity: titleVisible ? 1 : 0,
//             transform: titleVisible ? "translateY(0)" : "translateY(16px)",
//             transition: "opacity 1s ease 0.7s, transform 1s ease 0.7s",
//           }}
//         >
//           {(loading ? ["All Items"] : categories).map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveTab(cat)}
//               className={`px-5 py-2 rounded-full text-sm font-medium border
//                           transition-all duration-200
//                           ${
//                             activeTab === cat
//                               ? "bg-white text-black border-white"
//                               : "bg-transparent text-gray-300 border-[#3a3a3a] hover:border-gray-400"
//                           }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* ── Grid ── */}
//         {loading ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {Array.from({ length: 6 }).map((_, i) => (
//               <Skeleton key={i} />
//             ))}
//           </div>
//         ) : sorted.length === 0 ? (
//           <p className="text-center text-gray-500 text-lg mt-20">
//             No dishes found 😕
//           </p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {sorted.map((item, idx) => (
//               <div
//                 key={item.id}
//                 className="group relative rounded-2xl overflow-hidden bg-[#1c1c1c] cursor-pointer"
//                 style={{
//                   animation: "fadeUp 0.5s ease both",
//                   animationDelay: `${(idx % 9) * 70}ms`,
//                 }}
//               >
//                 {/* Image */}
//                 <div className="overflow-hidden h-[220px]">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     loading="lazy"
//                     className="w-full h-full object-cover
//                                transition-transform duration-500 group-hover:scale-110"
//                   />
//                 </div>

//                 {/* Name + Price */}
//                 <div className="flex items-center justify-between px-4 py-3">
//                   <span className="text-[15px] font-medium text-white truncate max-w-[60%]">
//                     {item.name}
//                   </span>
//                   <span className="text-[13px] text-gray-400 whitespace-nowrap">
//                     {getPrice(item.caloriesPerServing)}
//                   </span>
//                 </div>

//                 {/* Hover overlay */}
//                 <div
//                   className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100
//                                 transition-opacity duration-300 flex flex-col justify-center
//                                 items-center gap-2 px-6 text-center"
//                 >
//                   <p className="text-[#f4a4a4] text-sm tracking-widest uppercase">
//                     ⭐ {item.rating} Rating
//                   </p>
//                   <p className="text-gray-300 text-sm">
//                     ⏱ {item.cookTimeMinutes} min
//                   </p>
//                   <p className="text-gray-400 text-xs mt-1">
//                     {item.instructions?.join(" ").slice(0, 90)}...
//                   </p>
//                   <button
//                     className="mt-3 px-6 py-2 border border-[#f4a4a4] text-[#f4a4a4]
//                                      text-xs tracking-widest uppercase rounded-full
//                                      hover:bg-[#f4a4a4] hover:text-black transition-all duration-200"
//                   >
//                     Order Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(24px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Menu;
