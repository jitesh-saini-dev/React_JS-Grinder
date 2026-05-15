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

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchdata } from "../Slice/menuslice";

const Menu = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [selectCategory, setSelectCategory] = useState("");

  const dispatch = useDispatch();
  const sely = useSelector((state) => state.menu.data);
  const loading = useSelector((state) => state.menu.loading);

  useEffect(() => {
    dispatch(fetchdata());
  }, []);

  // ── Filter ──
  const filteredData = sely.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const tags = [...new Set(sely.flatMap((recipe) => recipe.tags))];

  // ── Sort ──
  const sorted = [...filteredData];
  if (sort === "atoz") sorted.sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);
  else if (sort === "time")
    sorted.sort((a, b) => a.cookTimeMinutes - b.cookTimeMinutes);

  // fake price based on calories
  const getPrice = (cal) => `$ ${((cal / 100) * 4.5 + 9).toFixed(2)} USD`;

  return (
    <div
      className="min-h-screen bg-[#1a1a1a] text-white px-6 py-10"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* ── Heading ── */}
      <h1 className="text-center text-3xl font-light tracking-widest text-white mb-2">
        OUR <span className="font-semibold">MENU</span>
      </h1>
      <div className="flex justify-center mb-8">
        <div className="w-16 h-[2px] bg-yellow-600" />
      </div>

      {/* ── Search + Sort Row ── */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
        {/* Search */}
        <input
          type="text"
          placeholder="Search dishes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-200 px-5 py-2.5 rounded-full bg-[#2a2a2a] border border-[#444]
                     text-sm text-gray-300 placeholder-gray-500 outline-none
                     focus:border-yellow-600 transition-all duration-300"
        />

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-5 py-2.5 rounded-full bg-[#2a2a2a] border border-[#444]
                     text-sm text-gray-300 outline-none cursor-pointer
                     focus:border-yellow-600 transition-all duration-300"
        >
          <option value="">Sort By</option>
          <option value="atoz">Name A–Z</option>
          <option value="rating">Top Rated</option>
          <option value="time">Cooking Time</option>
        </select>
      </div>

      <div>
        {tags.map((tag, index) => (
          <button
            key={index}
            onClick={() => setSelectCategory(tag)}
            style={{
              margin: "5px",
              padding: "8px 15px",
              backgroundColor: selectCategory === tag ? "black" : "lightgray",
              color: selectCategory === tag ? "white" : "black",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* ── Loading ── */}
      {loading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <div className="w-12 h-12 border-4 border-yellow-800 border-t-yellow-500 rounded-full animate-spin" />
        </div>
      ) : sorted.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-20">
          No dishes found 😕
        </p>
      ) : (
        /* ── Grid ── */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {sorted.map((item, idx) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden cursor-pointer bg-[#111]"
              style={{
                animation: "fadeUp 0.5s ease both",
                animationDelay: `${(idx % 9) * 70}ms`,
              }}
            >
              {/* ── Image ── */}
              <div className="overflow-hidden h-[260px]">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover
                             transition-transform duration-500
                             group-hover:scale-110"
                />
              </div>

              {/* ── Name + Price bar ── */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#111]">
                <span className="text-[15px] font-medium text-white tracking-wide truncate max-w-[60%]">
                  {item.name}
                </span>
                <span className="text-[14px] text-gray-300 whitespace-nowrap">
                  {getPrice(item.caloriesPerServing)}
                </span>
              </div>

              {/* ── Hover overlay with details ── */}
              <div
                className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100
                              transition-opacity duration-300 flex flex-col justify-center
                              items-center gap-2 px-6 text-center"
              >
                <p className="text-yellow-400 text-sm tracking-widest uppercase">
                  ⭐ {item.rating} Rating
                </p>
                <p className="text-gray-300 text-sm">
                  ⏱ {item.cookTimeMinutes} min cook time
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  {item.instructions?.join(" ").slice(0, 90)}...
                </p>
                <button
                  className="mt-3 px-6 py-2 border border-yellow-600 text-yellow-500
                                   text-xs tracking-widest uppercase rounded-full
                                   hover:bg-yellow-600 hover:text-black transition-all duration-200"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Keyframe ── */}
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
