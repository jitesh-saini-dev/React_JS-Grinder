import React, { useEffect } from "react";
import axios from "axios";

const Child = ({ setData }) => {
  const fetchData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setData(res.data.products);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Child</div>;
};

export default Child;
