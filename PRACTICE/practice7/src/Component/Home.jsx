import React, { useEffect, useState } from "react";
// import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const result = await res.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {data.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} width="100" />

          <h2>{item.title}</h2>

          <h3>${item.price}</h3>

          <p>{item.description}</p>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;