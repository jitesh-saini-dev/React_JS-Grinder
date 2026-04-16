import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Newtwodetail.css";

const Newtwodetail = ({ newarr }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = newarr.find((item) => item.product_id === Number(id));

  if (!product) {
    return (
      <div className="not-found">
        <h2>❌ Product Not Found</h2>
        <button onClick={() => navigate("/newtwo")}>🔙 Go Back</button>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <button className="back-btn" onClick={() => navigate("/newtwo")}>
        ← Back
      </button>

      <div className="detail-card">
        <img src={product.image} alt={product.name} className="detail-img" />

        <div className="detail-content">
          <h1>{product.name}</h1>
          <p className="desc">{product.description}</p>

          <div className="info">
            <p>
              <strong>💰 Price:</strong> ₹{product.price}
            </p>
            <p>
              <strong>⭐ Rating:</strong> {product.rating}
            </p>
            <p>
              <strong>🏷 Discount:</strong> {product.discount}%
            </p>
            <p>
              <strong>📦 Brand:</strong> {product.brand}
            </p>
            <p>
              <strong>📂 Category:</strong> {product.category}
            </p>
            <p>
              <strong>✅ Availability:</strong>{" "}
              {product.availability ? "In Stock" : "Out of Stock"}
            </p>
          </div>

          {/* Reviews */}
          {product.reviews && (
            <div className="reviews">
              <h3>📝 Reviews:</h3>
              {product.reviews.map((rev, index) => (
                <div key={index} className="review-card">
                  <p>⭐ {rev.rating}</p>
                  <p>{rev.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newtwodetail;
