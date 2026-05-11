// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUser } from "../Slice/productslice";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const data = useSelector((state) => state.products.data);

//   useEffect(() => {
//     dispatch(fetchUser());
//   }, []);

//   return (
//     <div>

//       <h1>Products</h1>

//       {data.map((item) => (
//         <div key={item.id}>
//           <img src={item.image} alt={item.title} width="100" />
//           <h2>{item.title}</h2>
//           <h3>{item.price}</h3>
//           <button onClick={() => navigate(`/user/${item.id}`)}>view</button>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUser, addProduct } from "../Slice/productslice";
// import { updateFormData, resetForm } from "../Slice/formSlice"; // 👈 alag slice se
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const data = useSelector((state) => state.products.data);
//   const formData = useSelector((state) => state.form); // 👈 state.form se ab

//   useEffect(() => {
//     dispatch(fetchUser());
//   }, []);

//   function handleSubmit(e) {
//     e.preventDefault();

//     const newProduct = {
//       id: Date.now(),
//       title: formData.title,
//       price: formData.price,
//       description: formData.description,
//       category: formData.category,
//     };

//     dispatch(addProduct(newProduct)); // 👈 product slice mein
//     dispatch(resetForm()); // 👈 form slice reset
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           value={formData.title}
//           onChange={(e) =>
//             dispatch(
//               updateFormData({ name: e.target.name, value: e.target.value }),
//             )
//           }
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           value={formData.price}
//           onChange={(e) =>
//             dispatch(
//               updateFormData({ name: e.target.name, value: e.target.value }),
//             )
//           }
//         />
//         <input
//           type="text"
//           name="description"
//           placeholder="Description"
//           value={formData.description}
//           onChange={(e) =>
//             dispatch(
//               updateFormData({ name: e.target.name, value: e.target.value }),
//             )
//           }
//         />
//         <input
//           type="text"
//           name="category"
//           placeholder="Category"
//           value={formData.category}
//           onChange={(e) =>
//             dispatch(
//               updateFormData({ name: e.target.name, value: e.target.value }),
//             )
//           }
//         />
//         <button type="submit">Add Product</button>
//       </form>

//       <h1>Products</h1>
//       {data.map((item) => (
//         <div key={item.id}>
//           <img src={item.image} alt={item.title} width="100" />
//           <h2>{item.title}</h2>
//           <h3>{item.price}</h3>
//           <button onClick={() => navigate(`/user/${item.id}`)}>view</button>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;

//-----------------------child to parent-----------------

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, addProduct } from "../Slice/productslice";
import { useNavigate } from "react-router-dom";
import ProductForm from "./ProductForm";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  // 👇 ye function child ko denge callback ki tarah
  function handleAddProduct(newProduct) {
    dispatch(addProduct(newProduct)); // 👈 child se aaya data Redux mein push kiya
  }

  return (
    <div>
      {/* 👇 child ko callback pass kiya */}
      <ProductForm onAddProduct={handleAddProduct} />

      <h1>Products</h1>
      {data.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} width="100" />
          <h2>{item.title}</h2>
          <h3>{item.price}</h3>
          <button onClick={() => navigate(`/user/${item.id}`)}>view</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;
