// import { useDispatch, useSelector } from "react-redux";
// import { fetchdataById } from "../Slice/menuslice";
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";

// const Menudetails = () => {
//   const dispatch = useDispatch();
//   const singlesely = useSelector((state) => state.menu.singleid);
//   console.log(singlesely);

//   const { id } = useParams();

//   useEffect(() => {
//     dispatch(fetchdataById(id));
//   }, [id]);
//   return (
//     <>
//       <div>
//         {
//           <div>
//             <p>{singlesely.id}</p>
//             <p>{singlesely.name}</p>
//           </div>
//         }
//       </div>
//     </>
//   );
// };

// export default Menudetails;

//----------------------------------------------------------------------------

// import { useDispatch, useSelector } from "react-redux";
// import { fetchdataById } from "../Slice/menuslice";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Menudetails = () => {
//   const dispatch = useDispatch();
//   const singlesely = useSelector((state) => state.menu.singleid);
//   const loading = useSelector((state) => state.menu.loading);
//   const { id } = useParams();

//   const [spice, setSpice] = useState("Mild");
//   const [qty, setQty] = useState(1);

//   const navigate = useNavigate();

//   const spiceLevels = ["Mild", "Medium", "Hot", "Extra Hot"];

//   useEffect(() => {
//     dispatch(fetchdataById(id));
//   }, [id]);

//   const getPrice = (cal) =>
//     cal ? ((cal / 100) * 4.5 + 9).toFixed(2) : "19.00";

//   if (loading || !singlesely?.name) {
//     return (
//       <div
//         style={{
//           minHeight: "100vh",
//           background: "#161616",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div
//           style={{
//             width: "48px",
//             height: "48px",
//             border: "4px solid #2a2a2a",
//             borderTop: "4px solid #c27b7b",
//             borderRadius: "50%",
//             animation: "spin 1s linear infinite",
//           }}
//         />
//         <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
//       </div>
//     );
//   }

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "#161616",
//         color: "white",
//         fontFamily: "'Poppins', sans-serif",
//       }}
//     >
//       <button
//         onClick={() => navigate(-1)}
//         className="
//     w-20
//     px-2
//     py-2
//     bg-[#F4A4A4]
//     text-black
//     border-none
//     rounded-[14px]
//     font-bold
//     text-[16px]
//     cursor-pointer
//     font-['Poppins']
//     transition-all
//     duration-200
//     hover:bg-[#f08f8f] ml-50 mt-6
//   "
//       >
//         Back
//       </button>
//       <div
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//           padding: "50px 24px",
//           display: "flex",
//           gap: "50px",
//           alignItems: "flex-start",
//         }}
//       >
//         {/* ── LEFT: Sticky Image ──
//             position: sticky + top: 80px
//             Matlab: scroll karo toh bhi image 80px se neeche nahi jaayegi
//             jab tak right side ka content khatam na ho jaaye
//         ── */}
//         <div
//           style={{
//             flex: "0 0 480px", // fixed width, shrink nahi hoga
//             position: "sticky",
//             top: "80px", // header se 80px neeche ruk jaayega
//             alignSelf: "flex-start", // zaroori hai sticky ke liye
//             borderRadius: "20px",
//             overflow: "hidden",
//             background: "#1c1c1c",
//           }}
//         >
//           <img
//             src={singlesely.image}
//             alt={singlesely.name}
//             style={{
//               width: "100%",
//               height: "480px",
//               objectFit: "cover",
//               display: "block",
//             }}
//           />
//         </div>

//         {/* ── RIGHT: Scrollable content ── */}
//         <div
//           style={{
//             flex: 1,
//             display: "flex",
//             flexDirection: "column",
//             gap: "24px",
//             minWidth: 0,
//           }}
//         >
//           {/* Badge */}
//           <div
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: "8px",
//               background: "#1f1f1f",
//               border: "1px solid #2e2e2e",
//               borderRadius: "999px",
//               padding: "8px 18px",
//               fontSize: "13px",
//               color: "#aaa",
//               width: "fit-content",
//             }}
//           >
//             🔥 Now delivering till 2 AM
//           </div>

//           {/* Name */}
//           <h1
//             style={{
//               fontSize: "clamp(2rem, 4vw, 3rem)",
//               fontWeight: 800,
//               margin: 0,
//               lineHeight: 1.15,
//             }}
//           >
//             {singlesely.name}
//           </h1>

//           {/* Short description */}
//           <p
//             style={{
//               color: "#888",
//               fontSize: "15px",
//               margin: 0,
//               lineHeight: 1.6,
//             }}
//           >
//             {singlesely.instructions?.join(" ").slice(0, 90) ||
//               "A delicious dish crafted with fresh ingredients."}
//           </p>

//           {/* Price */}
//           <p
//             style={{
//               fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
//               fontWeight: 700,
//               color: "#c27b7b",
//               margin: 0,
//             }}
//           >
//             $ {getPrice(singlesely.caloriesPerServing)} USD
//           </p>

//           {/* Spice Level */}
//           <div>
//             <p
//               style={{
//                 color: "#aaa",
//                 fontSize: "14px",
//                 marginBottom: "12px",
//                 margin: "0 0 12px",
//               }}
//             >
//               🌶 Spice Level
//             </p>
//             <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//               {spiceLevels.map((level) => (
//                 <button
//                   key={level}
//                   onClick={() => setSpice(level)}
//                   style={{
//                     padding: "10px 20px",
//                     borderRadius: "999px",
//                     cursor: "pointer",
//                     border:
//                       spice === level ? "1px solid #c27b7b" : "1px solid #333",
//                     background:
//                       spice === level ? "rgba(194,123,123,0.15)" : "#1c1c1c",
//                     color: spice === level ? "#c27b7b" : "#888",
//                     fontSize: "14px",
//                     fontFamily: "'Poppins', sans-serif",
//                     transition: "all 0.2s",
//                   }}
//                 >
//                   {level}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Divider */}
//           <div style={{ borderTop: "1px solid #222" }} />

//           {/* Quantity */}
//           <div>
//             <p style={{ color: "#aaa", fontSize: "14px", margin: "0 0 12px" }}>
//               Quantity
//             </p>
//             <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
//               {/* Minus */}
//               <button
//                 onClick={() => setQty((q) => Math.max(1, q - 1))}
//                 style={{
//                   width: "42px",
//                   height: "42px",
//                   background: "#1c1c1c",
//                   border: "1px solid #333",
//                   borderRadius: "8px 0 0 8px",
//                   color: "white",
//                   fontSize: "20px",
//                   cursor: "pointer",
//                   lineHeight: 1,
//                   fontFamily: "'Poppins', sans-serif",
//                 }}
//               >
//                 −
//               </button>

//               {/* Count */}
//               <div
//                 style={{
//                   width: "56px",
//                   height: "42px",
//                   background: "#1c1c1c",
//                   border: "1px solid #333",
//                   borderLeft: "none",
//                   borderRight: "none",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: "16px",
//                   fontWeight: 600,
//                 }}
//               >
//                 {qty}
//               </div>

//               {/* Plus */}
//               <button
//                 onClick={() => setQty((q) => q + 1)}
//                 style={{
//                   width: "42px",
//                   height: "42px",
//                   background: "#1c1c1c",
//                   border: "1px solid #333",
//                   borderRadius: "0 8px 8px 0",
//                   color: "white",
//                   fontSize: "20px",
//                   cursor: "pointer",
//                   lineHeight: 1,
//                   fontFamily: "'Poppins', sans-serif",
//                 }}
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           {/* Add to Cart button */}
//           <button
//             style={{
//               width: "100%",
//               padding: "16px",
//               background: "#f4a4a4",
//               color: "#000",
//               border: "none",
//               borderRadius: "14px",
//               fontWeight: 700,
//               fontSize: "16px",
//               cursor: "pointer",
//               fontFamily: "'Poppins', sans-serif",
//               transition: "background 0.2s",
//             }}
//             onMouseEnter={(e) => (e.target.style.background = "#f08f8f")}
//             onMouseLeave={(e) => (e.target.style.background = "#f4a4a4")}
//           >
//             Add to Cart
//           </button>

//           {/* ── Details Card 1: Prep info ── */}
//           <div
//             style={{
//               background: "#1c1c1c",
//               border: "1px solid #2a2a2a",
//               borderRadius: "16px",
//               padding: "24px",
//             }}
//           >
//             <h3
//               style={{ margin: "0 0 20px", fontSize: "18px", fontWeight: 700 }}
//             >
//               Details
//             </h3>

//             {[
//               {
//                 label: "Preparation Time",
//                 value: `${singlesely.prepTimeMinutes} mins`,
//               },
//               {
//                 label: "Cook Time",
//                 value: `${singlesely.cookTimeMinutes} mins`,
//               },
//               { label: "Serves", value: `${singlesely.servings} people` },
//               { label: "Difficulty", value: singlesely.difficulty },
//               { label: "Cuisine", value: singlesely.cuisine },
//             ].map((row, i, arr) => (
//               <div
//                 key={row.label}
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   padding: "14px 0",
//                   borderBottom:
//                     i < arr.length - 1 ? "1px solid #2a2a2a" : "none",
//                 }}
//               >
//                 <span style={{ color: "#888", fontSize: "14px" }}>
//                   {row.label}
//                 </span>
//                 <span
//                   style={{ color: "#fff", fontSize: "14px", fontWeight: 600 }}
//                 >
//                   {row.value}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* ── Details Card 2: Ingredients ── */}
//           <div
//             style={{
//               background: "#1c1c1c",
//               border: "1px solid #2a2a2a",
//               borderRadius: "16px",
//               padding: "24px",
//             }}
//           >
//             <h3
//               style={{ margin: "0 0 14px", fontSize: "18px", fontWeight: 700 }}
//             >
//               Ingredients
//             </h3>
//             <p
//               style={{
//                 color: "#888",
//                 fontSize: "14px",
//                 lineHeight: 1.8,
//                 margin: 0,
//               }}
//             >
//               {singlesely.ingredients?.join(", ") ||
//                 "Premium ingredients sourced fresh daily."}
//             </p>
//           </div>

//           {/* ── Details Card 3: Tags ── */}
//           {singlesely.tags?.length > 0 && (
//             <div
//               style={{
//                 background: "#1c1c1c",
//                 border: "1px solid #2a2a2a",
//                 borderRadius: "16px",
//                 padding: "24px",
//               }}
//             >
//               <h3
//                 style={{
//                   margin: "0 0 14px",
//                   fontSize: "18px",
//                   fontWeight: 700,
//                 }}
//               >
//                 Tags
//               </h3>
//               <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
//                 {singlesely.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     style={{
//                       padding: "6px 14px",
//                       borderRadius: "999px",
//                       background: "#252525",
//                       border: "1px solid #333",
//                       fontSize: "12px",
//                       color: "#888",
//                     }}
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menudetails;

//------responsive css better --------------------*

import { useDispatch, useSelector } from "react-redux";
import { fetchdataById } from "../Slice/menuslice";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Menudetails = () => {
  const dispatch = useDispatch();
  const singlesely = useSelector((state) => state.menu.singleid);
  const loading = useSelector((state) => state.menu.loading);
  const { id } = useParams();
  const navigate = useNavigate();

  const [spice, setSpice] = useState("Mild");
  const [qty, setQty] = useState(1);
  const spiceLevels = ["Mild", "Medium", "Hot", "Extra Hot"];

  useEffect(() => {
    dispatch(fetchdataById(id));
  }, [id]);

  const getPrice = (cal) =>
    cal ? ((cal / 100) * 4.5 + 9).toFixed(2) : "19.00";

  if (loading || !singlesely?.name) {
    return (
      <div style={{
        minHeight: "100vh", background: "#161616",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          width: "48px", height: "48px",
          border: "4px solid #2a2a2a", borderTop: "4px solid #c27b7b",
          borderRadius: "50%", animation: "spin 1s linear infinite",
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#161616",
      color: "white",
      fontFamily: "'Poppins', sans-serif",
    }}>

      {/* ── Back Button — properly positioned ── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px 24px 0" }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: "10px 24px",
            background: "#f4a4a4",
            color: "#000",
            border: "none",
            borderRadius: "12px",
            fontWeight: 700,
            fontSize: "14px",
            cursor: "pointer",
            fontFamily: "'Poppins', sans-serif",
            transition: "background 0.2s",
          }}
          onMouseEnter={e => e.target.style.background = "#f08f8f"}
          onMouseLeave={e => e.target.style.background = "#f4a4a4"}
        >
          ← Back
        </button>
      </div>

      {/* ── Main layout ── */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "30px 24px 60px",
        display: "flex",
        gap: "50px",
        alignItems: "flex-start",
        // Mobile pe column, desktop pe row
        flexWrap: "wrap",
      }}>

        {/* ── LEFT: Sticky Image ── */}
        <div style={{
          // Desktop: fixed 480px, Mobile: full width
          flex: "1 1 340px",
          maxWidth: "520px",
          position: "sticky",
          top: "80px",
          alignSelf: "flex-start",
          borderRadius: "20px",
          overflow: "hidden",
          background: "#1c1c1c",
          width: "100%",
        }}>
          <img
            src={singlesely.image}
            alt={singlesely.name}
            style={{
              width: "100%",
              height: "clamp(280px, 40vw, 480px)", // responsive height
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* ── RIGHT: Scrollable content ── */}
        <div style={{
          flex: "1 1 300px",  // mobile pe full width leta hai
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          minWidth: 0,
        }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "#1f1f1f", border: "1px solid #2e2e2e",
            borderRadius: "999px", padding: "8px 18px",
            fontSize: "13px", color: "#aaa", width: "fit-content",
          }}>
            🔥 Now delivering till 2 AM
          </div>

          {/* Name */}
          <h1 style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 800, margin: 0, lineHeight: 1.15,
          }}>
            {singlesely.name}
          </h1>

          {/* Description */}
          <p style={{ color: "#888", fontSize: "15px", margin: 0, lineHeight: 1.6 }}>
            {singlesely.instructions?.join(" ").slice(0, 90) ||
              "A delicious dish crafted with fresh ingredients."}
          </p>

          {/* Price */}
          <p style={{
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            fontWeight: 700, color: "#c27b7b", margin: 0,
          }}>
            $ {getPrice(singlesely.caloriesPerServing)} USD
          </p>

          {/* Spice Level */}
          <div>
            <p style={{ color: "#aaa", fontSize: "14px", margin: "0 0 12px" }}>
              🌶 Spice Level
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {spiceLevels.map((level) => (
                <button key={level} onClick={() => setSpice(level)} style={{
                  padding: "9px 16px", borderRadius: "999px", cursor: "pointer",
                  border: spice === level ? "1px solid #c27b7b" : "1px solid #333",
                  background: spice === level ? "rgba(194,123,123,0.15)" : "#1c1c1c",
                  color: spice === level ? "#c27b7b" : "#888",
                  fontSize: "13px", fontFamily: "'Poppins', sans-serif",
                  transition: "all 0.2s",
                }}>
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div style={{ borderTop: "1px solid #222" }} />

          {/* Quantity */}
          <div>
            <p style={{ color: "#aaa", fontSize: "14px", margin: "0 0 12px" }}>Quantity</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{
                width: "42px", height: "42px", background: "#1c1c1c",
                border: "1px solid #333", borderRadius: "8px 0 0 8px",
                color: "white", fontSize: "20px", cursor: "pointer",
                fontFamily: "'Poppins', sans-serif",
              }}>−</button>

              <div style={{
                width: "56px", height: "42px", background: "#1c1c1c",
                border: "1px solid #333", borderLeft: "none", borderRight: "none",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "16px", fontWeight: 600,
              }}>{qty}</div>

              <button onClick={() => setQty(q => q + 1)} style={{
                width: "42px", height: "42px", background: "#1c1c1c",
                border: "1px solid #333", borderRadius: "0 8px 8px 0",
                color: "white", fontSize: "20px", cursor: "pointer",
                fontFamily: "'Poppins', sans-serif",
              }}>+</button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            style={{
              width: "100%", padding: "16px",
              background: "#f4a4a4", color: "#000",
              border: "none", borderRadius: "14px",
              fontWeight: 700, fontSize: "16px",
              cursor: "pointer", fontFamily: "'Poppins', sans-serif",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.target.style.background = "#f08f8f"}
            onMouseLeave={e => e.target.style.background = "#f4a4a4"}
          >
            Add to Cart
          </button>

          {/* Details Card */}
          <div style={{
            background: "#1c1c1c", border: "1px solid #2a2a2a",
            borderRadius: "16px", padding: "24px",
          }}>
            <h3 style={{ margin: "0 0 20px", fontSize: "18px", fontWeight: 700 }}>Details</h3>
            {[
              { label: "Preparation Time", value: `${singlesely.prepTimeMinutes} mins` },
              { label: "Cook Time",         value: `${singlesely.cookTimeMinutes} mins` },
              { label: "Serves",            value: `${singlesely.servings} people` },
              { label: "Difficulty",        value: singlesely.difficulty },
              { label: "Cuisine",           value: singlesely.cuisine },
            ].map((row, i, arr) => (
              <div key={row.label} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "14px 0",
                borderBottom: i < arr.length - 1 ? "1px solid #2a2a2a" : "none",
              }}>
                <span style={{ color: "#888", fontSize: "14px" }}>{row.label}</span>
                <span style={{ color: "#fff", fontSize: "14px", fontWeight: 600 }}>{row.value}</span>
              </div>
            ))}
          </div>

          {/* Ingredients Card */}
          <div style={{
            background: "#1c1c1c", border: "1px solid #2a2a2a",
            borderRadius: "16px", padding: "24px",
          }}>
            <h3 style={{ margin: "0 0 14px", fontSize: "18px", fontWeight: 700 }}>Ingredients</h3>
            <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.8, margin: 0 }}>
              {singlesely.ingredients?.join(", ") || "Premium ingredients sourced fresh daily."}
            </p>
          </div>

          {/* Tags Card */}
          {singlesely.tags?.length > 0 && (
            <div style={{
              background: "#1c1c1c", border: "1px solid #2a2a2a",
              borderRadius: "16px", padding: "24px",
            }}>
              <h3 style={{ margin: "0 0 14px", fontSize: "18px", fontWeight: 700 }}>Tags</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {singlesely.tags.map(tag => (
                  <span key={tag} style={{
                    padding: "6px 14px", borderRadius: "999px",
                    background: "#252525", border: "1px solid #333",
                    fontSize: "12px", color: "#888",
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Responsive: mobile pe sticky off karo */}
      <style>{`
        @media (max-width: 768px) {
          /* Mobile pe sticky nahi chahiye — content already upar hai */
          [data-sticky] { position: static !important; }
        }
      `}</style>
    </div>
  );
};

export default Menudetails;