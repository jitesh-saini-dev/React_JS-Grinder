import { useDispatch, useSelector } from "react-redux";
import { updateFormData, resetForm } from "../Slice/formSlice";

// 👇 parent se callback function aaya
const ProductForm = ({ onAddProduct }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form); // form slice se data

  function handleSubmit(e) {
    e.preventDefault();

    // 👇 data banaya
    const newProduct = {
      id: Date.now(),
      title: formData.title,
      price: formData.price,
      description: formData.description,
      category: formData.category,
      image: "https://via.placeholder.com/100",
    };

    onAddProduct(newProduct); // 👈 parent ko data bheja callback se
    dispatch(resetForm()); // 👈 form reset kiya
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={(e) =>
          dispatch(
            updateFormData({ name: e.target.name, value: e.target.value }),
          )
        }
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={(e) =>
          dispatch(
            updateFormData({ name: e.target.name, value: e.target.value }),
          )
        }
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          dispatch(
            updateFormData({ name: e.target.name, value: e.target.value }),
          )
        }
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={(e) =>
          dispatch(
            updateFormData({ name: e.target.name, value: e.target.value }),
          )
        }
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
