import React, { useState } from "react";

const Home = ({ objhome }) => {
  const [products, setProducts] = useState(objhome.products);

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [rating, setRating] = useState("");
  const [stock, setStock] = useState("");

  

  function HandleSubmit(e) {
    e.preventDefault();

    const newProduct = {
      id: Number(id),
      title,
      description,
      category,
      price: Number(price),
      discountPercentage: Number(discountPercentage),
      rating: Number(rating),
      stock: Number(stock),

      // optional fields (empty for now)
      tags: [],
      brand: "",
      sku: "",
      weight: 0,
      dimensions: { width: 0, height: 0, depth: 0 },
    };

    // ✅ UI me add kar diya
    setProducts([...products, newProduct]);

    // ✅ form reset
    setId("");
    setTitle("");
    setDescription("");
    setCategory("");
    setPrice("");
    setDiscountPercentage("");
    setRating("");
    setStock("");
  }

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <input
          type="number"
          placeholder="Enter ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Discount %"
          value={discountPercentage}
          onChange={(e) => setDiscountPercentage(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <main>
        {products.map((val) => (
          <div key={val.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <p><b>Id</b> {val.id}</p>
            <p><b>Title</b> {val.title}</p>
            <p><b>Description</b> {val.description}</p>
            <p><b>Category</b> {val.category}</p>
            <p><b>Price</b> {val.price}</p>
            <p><b>Discount</b> {val.discountPercentage}</p>
            <p><b>Rating</b> {val.rating}</p>
            <p><b>Stock</b> {val.stock}</p>
            <p><b>Tags</b> {val.tags?.join(", ")}</p>
            <p><b>Brand</b> {val.brand}</p>
            <p><b>SKU</b> {val.sku}</p>
            <p><b>Weight</b> {val.weight}</p>
            <p>
              <b>Dimensions</b>{" "}
              {val.dimensions?.width} x {val.dimensions?.height} x{" "}
              {val.dimensions?.depth}
            </p>
          </div>
        ))}
      </main>
    </>
  );
};

export default Home;