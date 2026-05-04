import React, { useEffect } from "react";

const Childtwo = ({ sendToCommon }) => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      sendToCommon(data);
    };

    fetchData();
  }, [sendToCommon]);

  return <div>Loading Child Data...</div>;
};

export default Childtwo;
