// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Api.css";
// import { useNavigate } from "react-router-dom";

// // ✅ MUI imports
// import CircularProgress from "@mui/material/CircularProgress";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";

// // ✅ Progress component
// function CircularProgressWithLabel({ value }) {
//   return (
//     <Box sx={{ position: "relative", display: "inline-flex" }}>
//       <CircularProgress variant="determinate" value={value} />
//       <Box
//         sx={{
//           top: 0,
//           left: 0,
//           bottom: 0,
//           right: 0,
//           position: "absolute",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Typography variant="caption">{`${Math.round(value)}%`}</Typography>
//       </Box>
//     </Box>
//   );
// }

// const Api = ({ objhome }) => {
//   const [data, setData] = useState([]);
//   const [toggle, setToggle] = useState(false);
//   const [merge, setmerge] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ✅ progress state
//   const [progress, setProgress] = useState(0);

//   const navigate = useNavigate();

//   const fetchData = async () => {
//     try {
//       const result = await axios.get("https://dummyjson.com/products");

//       setData(result.data.products);
//       setmerge(result.data.products);
//     } catch (error) {
//       console.log("Error:", error);
//       setmerge([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlechange = () => {
//     setToggle(!toggle);
//     if (toggle) {
//       navigate("/new");
//     } else {
//       navigate("/counter");
//     }
//   };

//   const handleMerge = () => {
//     const mergedata = [...data, ...objhome.products];
//     setmerge(mergedata);
//   };

//   const handleEven = () => {
//     const evendata = [...data, ...objhome.products];
//     const even = evendata.filter((x) => x.id % 2 === 0);
//     setmerge(even);
//   };

//   const handleOdd = () => {
//     const odddata = [...data, ...objhome.products];
//     const odd = odddata.filter((x) => x.id % 2 !== 0);
//     setmerge(odd);
//   };

//   const handleUnMerge = () => {
//     setmerge(data);
//   };

//   useEffect(() => {
//     fetchData();

//     // ✅ fake progress animation
//     const timer = setInterval(() => {
//       setProgress((prev) => (prev >= 100 ? 100 : prev + 10));
//     }, 200);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <>
//       <h1>Api Call</h1>
//       <button onClick={handlechange}>Toggle</button>
//       <button onClick={handleMerge}>Merge</button>
//       <button onClick={handleEven}>EVEN</button>
//       <button onClick={handleOdd}>ODD</button>
//       <button onClick={handleUnMerge}>UnMerge</button>

//       <main>
//         {loading ? (
//           // ✅ Loader replace
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               marginTop: "50px",
//             }}
//           >
//             <CircularProgressWithLabel value={progress} />
//           </div>
//         ) : merge.length === 0 ? (
//           // ✅ No Data condition
//           <h2 style={{ textAlign: "center", marginTop: "50px", color: "gray" }}>
//             No Data Found 😕
//           </h2>
//         ) : (
//           merge?.map((item, id) => (
//             <div key={id} className="box">
//               <div className="imgbox">
//                 <img src={item.images[0]} alt="" className="img" />
//               </div>

//               <p>
//                 <b>ID:</b> {item.id}
//               </p>
//               <p>
//                 <b>Title:</b> {item.title}
//               </p>
//               <p>
//                 <b>Description:</b> {item.description}
//               </p>
//               <p>
//                 <b>Category:</b> {item.category}
//               </p>
//               <p>
//                 <b>Brand:</b> {item.brand}
//               </p>
//               <p>
//                 <b>Price:</b> ${item.price}
//               </p>
//               <p>
//                 <b>Discount:</b> {item.discountPercentage}%
//               </p>
//               <p>
//                 <b>Rating:</b> {item.rating}
//               </p>
//               <p>
//                 <b>Stock:</b> {item.stock}
//               </p>
//               <p>
//                 <b>SKU:</b> {item.sku}
//               </p>
//               <p>
//                 <b>Weight:</b> {item.weight}
//               </p>
//               <p>
//                 <b>Dimensions:</b> {item.dimensions.width} x{" "}
//                 {item.dimensions.height} x {item.dimensions.depth}
//               </p>
//               <p>
//                 <b>Warranty:</b> {item.warrantyInformation}
//               </p>
//               <p>
//                 <b>Shipping:</b> {item.shippingInformation}
//               </p>
//               <p>
//                 <b>Status:</b> {item.availabilityStatus}
//               </p>
//               <p>
//                 <b>Return Policy:</b> {item.returnPolicy}
//               </p>
//               <p>
//                 <b>Min Order:</b> {item.minimumOrderQuantity}
//               </p>
//               <p>
//                 <b>Tags:</b> {item.tags.join(", ")}
//               </p>
//             </div>
//           ))
//         )}
//       </main>
//     </>
//   );
// };

// export default Api;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Api.css";
import { useNavigate } from "react-router-dom";

// MUI imports
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Progress component
function CircularProgressWithLabel({ value }) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" value={value} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption">{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
}

const Api = ({ objhome }) => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [merge, setmerge] = useState([]);
  const [loading, setLoading] = useState(true);

  const [progress, setProgress] = useState(0);

  // ✅ NEW STATE (description toggle)
  const [shortDesc, setShortDesc] = useState(false);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const result = await axios.get("https://dummyjson.com/products");

      setData(result.data.products);
      setmerge(result.data.products);
    } catch (error) {
      console.log("Error:", error);
      setmerge([]);
    } finally {
      setLoading(false);
    }
  };

  const handlechange = () => {
    setToggle(!toggle);
    if (toggle) {
      navigate("/new");
    } else {
      navigate("/counter");
    }
  };

  const handleMerge = () => {
    const mergedata = [...data, ...objhome.products];
    setmerge(mergedata);
  };

  const handleEven = () => {
    const evendata = [...data, ...objhome.products];
    const even = evendata.filter((x) => x.id % 2 === 0);
    setmerge(even);
  };

  const handleOdd = () => {
    const odddata = [...data, ...objhome.products];
    const odd = odddata.filter((x) => x.id % 2 !== 0);
    setmerge(odd);
  };

  const handleUnMerge = () => {
    setmerge(data);
  };

  // ✅ description toggle handler
  const handleDescToggle = () => {
    setShortDesc((prev) => !prev);
  };

  useEffect(() => {
    fetchData();

    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 10));
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <h1>Api Call</h1>

      <button onClick={handlechange}>Toggle</button>
      <button onClick={handleMerge}>Merge</button>
      <button onClick={handleEven}>EVEN</button>
      <button onClick={handleOdd}>ODD</button>
      <button onClick={handleUnMerge}>UnMerge</button>

      {/* ✅ NEW BUTTON */}
      <button onClick={handleDescToggle}>
        {shortDesc ? "Full Description" : "Short Description"}
      </button>

      <main>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <CircularProgressWithLabel value={progress} />
          </div>
        ) : merge.length === 0 ? (
          <h2 style={{ textAlign: "center", marginTop: "50px", color: "gray" }}>
            No Data Found 😕
          </h2>
        ) : (
          merge?.map((item, id) => (
            <div key={id} className="box">
              <div className="imgbox">
                <img src={item.images[0]} alt="" className="img" />
              </div>

              <p>
                <b>ID:</b> {item.id}
              </p>
              <p>
                <b>Title:</b> {item.title}
              </p>

              {/* ✅ UPDATED DESCRIPTION LOGIC */}
              <p>
                <b>Description:</b>{" "}
                {shortDesc
                  ? item.description.slice(0, 50) + "..."
                  : item.description}
              </p>

              <p>
                <b>Category:</b> {item.category}
              </p>
              <p>
                <b>Brand:</b> {item.brand}
              </p>
              <p>
                <b>Price:</b> ${item.price}
              </p>
              <p>
                <b>Discount:</b> {item.discountPercentage}%
              </p>
              <p>
                <b>Rating:</b> {item.rating}
              </p>
              <p>
                <b>Stock:</b> {item.stock}
              </p>
              <p>
                <b>SKU:</b> {item.sku}
              </p>
              <p>
                <b>Weight:</b> {item.weight}
              </p>
              <p>
                <b>Dimensions:</b> {item.dimensions.width} x{" "}
                {item.dimensions.height} x {item.dimensions.depth}
              </p>
              <p>
                <b>Warranty:</b> {item.warrantyInformation}
              </p>
              <p>
                <b>Shipping:</b> {item.shippingInformation}
              </p>
              <p>
                <b>Status:</b> {item.availabilityStatus}
              </p>
              <p>
                <b>Return Policy:</b> {item.returnPolicy}
              </p>
              <p>
                <b>Min Order:</b> {item.minimumOrderQuantity}
              </p>
              <p>
                <b>Tags:</b> {item.tags.join(", ")}
              </p>
            </div>
          ))
        )}
      </main>
    </>
  );
};

export default Api;
