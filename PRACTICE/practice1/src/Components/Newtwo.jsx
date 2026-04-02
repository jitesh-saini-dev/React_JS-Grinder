import React from "react";
import "./Newtwo.css";

const Newtwo = ({ newarr }) => {
  return (
    <main className="container">
      {newarr.map((val) => (
        <div key={val.product_id} className="card">
          <img
            src={val.image}
            alt={val.name}
            className="card-img"
          />
          <div className="card-content">
            <h2 className="card-id">#{val.product_id}</h2>
            <h3 className="card-title">{val.name}</h3>
            <p className="card-desc">{val.description}</p>
            <div className="card-extra">
              <span>₹{val.price}</span>
              <span>⭐ {val.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Newtwo;
