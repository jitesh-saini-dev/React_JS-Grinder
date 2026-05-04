import React, { useState } from "react";
import Childtwo from "./Childtwo";

const Common = ({ parentData = [] }) => {
  const [childData, setChildData] = useState([]);

  const handleChildData = (data) => {
    setChildData(data);
  };

  const mergedData = [...parentData, ...childData];

  return (
    <div>
      <h2>Common Component</h2>

      <Childtwo sendToCommon={handleChildData} />

      <h3>Merged Products:</h3>

      {mergedData.length === 0 ? (
        <p>No Data Yet</p>
      ) : (
        mergedData.map((item) => (
          <div
            key={item.id}
            style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
          >
            <h4>{item.title}</h4>
            <p>Price: ₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Common;