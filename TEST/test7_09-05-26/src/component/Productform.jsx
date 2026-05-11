import { useState } from "react";

const Productform = ({ setPass }) => {
  const [form, setForm] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
  });

  const [error, setError] = useState({});

  const handlesubmit = (e) => {
    e.preventDefault();

    const errorobj = {};
     if (form.id === "") {
      errorobj.id = "id is required";
    }
    if (form.title === "") {
      errorobj.title = "title is required";
    }
    if (form.price === "") {
      errorobj.price = "price is required";
    }
    if (form.category === "") {
      errorobj.category = "category is required";
    }
    if (form.description === "") {
      errorobj.description = "description is required";
    }

    setError(errorobj);

    if (Object.keys(errorobj).length === 0) {
      console.log(">>>>>formdata", form);
      localStorage.setItem("user", JSON.stringify(form));

      setPass(form);

      setForm({
        id: "",
        title: "",
        price: "",
        description: "",
        category: "",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
         <input
          type="number"
          placeholder="Enter id"
          value={form.id}
          onChange={(e) => setForm({ ...form, id: e.target.value })}
          style={{ border: error.id ? "1px solid red" : "" }}
        />
        {error.id && (
          <p style={{ color: "red", fontSize: "15px" }}>{error.id}</p>
        )}
        <input
          type="text"
          placeholder="Enter title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          style={{ border: error.title ? "1px solid red" : "" }}
        />
        {error.title && (
          <p style={{ color: "red", fontSize: "15px" }}>{error.title}</p>
        )}

        <input
          type="number"
          placeholder="Enter price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          style={{ border: error.price ? "1px solid red" : "" }}
        />
        {error.price && (
          <p style={{ color: "red", fontSize: "15px" }}>{error.price}</p>
        )}

        <input
          type="text"
          placeholder="Enter category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          style={{ border: error.category ? "1px solid red" : "" }}
        />
        {error.category && (
          <p style={{ color: "red", fontSize: "15px" }}>{error.category}</p>
        )}

        <input
          placeholder="Enter description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          style={{ border: error.description ? "1px solid red" : "" }}
        />
        {error.description && (
          <p style={{ color: "red", fontSize: "15px" }}>{error.description}</p>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Productform;
