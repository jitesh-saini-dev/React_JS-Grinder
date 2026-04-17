// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// // import "./Newtwodetail.css";

// const Newtwodetail = ({ newarr }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const product = newarr.find((item) => item.product_id === Number(id));

//   if (!product) {
//     return (
//       <div className="not-found">
//         <h2>❌ Product Not Found</h2>
//         <button onClick={() => navigate("/newtwo")}>🔙 Go Back</button>
//       </div>
//     );
//   }

//   return (
//     <div className="detail-container">
//       <button className="back-btn" onClick={() => navigate("/newtwo")}>
//         ← Back
//       </button>

//       <div className="detail-card">
//         <img src={product.image} alt={product.name} className="detail-img" />

//         <div className="detail-content">
//           <h1>{product.name}</h1>
//           <p className="desc">{product.description}</p>

//           <div className="info">
//             <p>
//               <strong>💰 Price:</strong> ₹{product.price}
//             </p>
//             <p>
//               <strong>⭐ Rating:</strong> {product.rating}
//             </p>
//             <p>
//               <strong>🏷 Discount:</strong> {product.discount}%
//             </p>
//             <p>
//               <strong>📦 Brand:</strong> {product.brand}
//             </p>
//             <p>
//               <strong>📂 Category:</strong> {product.category}
//             </p>
//             <p>
//               <strong>✅ Availability:</strong>{" "}
//               {product.availability ? "In Stock" : "Out of Stock"}
//             </p>
//           </div>

//           {/* Reviews */}
//           {product.reviews && (
//             <div className="reviews">
//               <h3>📝 Reviews:</h3>
//               {product.reviews.map((rev, index) => (
//                 <div key={index} className="review-card">
//                   <p>⭐ {rev.rating}</p>
//                   <p>{rev.comment}</p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Newtwodetail;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Newtwodetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState(null);

  const fetchSingle = async () => {
    const res = await axios.get(`https://dummyjson.com/recipes/${id}`);
    setRecipe(res.data);
  };

  useEffect(() => {
    fetchSingle();
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-xl font-semibold animate-pulse">
          Loading...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      
      <div className="bg-white shadow-xl rounded-2xl max-w-2xl w-full p-6">
        
        {/* Back Button */}
        <button
          className="mb-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800">
          {recipe.name}
        </h1>

        {/* Image */}
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-64 object-cover mt-4 rounded-xl"
        />

        {/* Info */}
        <div className="flex gap-4 mt-4 text-gray-600">
          <p className="bg-orange-100 px-3 py-1 rounded-full">
            🔥 {recipe.caloriesPerServing} cal
          </p>

          <p className="bg-blue-100 px-3 py-1 rounded-full">
            ⏱ {recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins
          </p>
        </div>

        {/* Ingredients */}
        <h2 className="mt-6 text-xl font-semibold text-gray-700">
          Ingredients
        </h2>

        <ul className="mt-2 grid grid-cols-2 gap-2">
          {recipe.ingredients.map((ing, i) => (
            <li
              key={i}
              className="bg-gray-100 px-3 py-2 rounded-lg text-sm"
            >
              {ing}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default Newtwodetail;