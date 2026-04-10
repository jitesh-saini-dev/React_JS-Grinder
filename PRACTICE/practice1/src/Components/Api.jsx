import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Api.css";

const Api = ({ objhome }) => {
  const [data, setData] = useState([]);
  // const [toggle, setToggle] = useState(false);
  const [merge, setmerge] = useState([]);

  const fetchData = async () => {
    const result = await axios.get("https://dummyjson.com/products");

    setData(result.data.products);
    setmerge(result.data.products);
  };
  // const handlechange = () => {
  //   setToggle(!toggle);
  // };

  // const handlemerge = () => {
  //   setmerge([result.data, ...objhome]);
  // };

  const handleMerge = () => {
    const mergedata = [...data, ...objhome.products];
    setmerge(mergedata);
  };

  const handleEven = () => {
    const evendata = [...data, ...objhome.products];

    const even = evendata.filter((x) => x.id % 2 == 0);
    setmerge([]);
    setmerge(even);
  };

  const handleOdd = () => {
    const odddata = [...data, ...objhome.products];

    const odd = odddata.filter((x) => x.id % 2 !== 0);
    setmerge([]);
    setmerge(odd);
  };

  const handleUnMerge = () => {
    const UnMergedata = [...data];
    setmerge(UnMergedata);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Api Call</h1>
      {/* <button onClick={handlechange}>Toggle</button> */}

      <button onClick={handleMerge}>Merge</button>
      <button onClick={handleEven}>EVEN</button>
      <button onClick={handleOdd}>ODD</button>

      <button onClick={handleUnMerge}>UnMerge</button>

      <main>
        {merge?.map((item,id) => (
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
            <p>
              <b>Description:</b> {item.description}
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
        ))}
      </main>
    </>
  );
};

export default Api;
