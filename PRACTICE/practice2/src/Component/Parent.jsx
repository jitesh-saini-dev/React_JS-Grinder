import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [data, setData] = useState([]);

  const handleData = (data) => {
    setData(data);
  };

  return (
    <div>
      <Child setData={handleData} />

      <h2>Products:</h2>
      {data.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default Parent;
