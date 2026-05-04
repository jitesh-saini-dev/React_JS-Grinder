import axios from "axios";
import React, { use } from "react";

const productdetail = axios
  .get("https://dummyjson.com/products")
  .then((res) => res.data.products);

const Use = () => {
  const data = use(productdetail);

  return (
    <>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
        </div>
      ))}
    </>
  );
};

export default Use;
