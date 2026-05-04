import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    city: "",
    state: "",
    country: "",
  });

  const [error, setError] = useState({});
  const navigate=useNavigate();

  function handlechange(e) {
    e.preventDefault();

    const errorobj = {};

    if (form.name == "") errorobj.name = "name is required";
    if (form.email == "") errorobj.email = "email is required";
    if (form.password == "") errorobj.password = "password is required";
    if (form.age == "") errorobj.age = "age is required";
    if (form.city == "") errorobj.city = "city is required";
    if (form.state == "") errorobj.state = "state is required";
    if (form.country == "") errorobj.country = "country is required";

    setError(errorobj);

    if (Object.keys(errorobj).length === 0) {
      console.log(">>>>>formdata", form);
      localStorage.setItem("user", JSON.stringify(form));

      alert("Form Submitted");
      navigate('/home')


      setForm({
        name: "",
        email: "",
        password: "",
        age: "",
        phone: "",
        city: "",
        state: "",
        country: "",
      });
    }
  }

  return (
    <>
      <form onSubmit={handlechange}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ border: error.name ? "1px solid red" : "" }}
        />
        {error.name && (
          <p style={{ color: "red", fontSize: "15px" }}>{error.name}</p>
        )}
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{ border: error.email ? "1px solid red" : "" }}
        />
        {error.email && (
          <p style={{ color: "red", fontSize: "15px" }}>{error.email}</p>
        )}

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={{ border: error.password ? "1px solid red" : "" }}
        />
        {error.password && (
          <p style={{ color: "red", fontSize: "15px" }}>{error.password}</p>
        )}

        <input
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
          style={{ border: error.age ? "1px solid red" : "" }}
        />
        {error.age && (
          <p style={{ color: "red", fontSize: "15px" }}>{error.age}</p>
        )}

        <input
          type="text"
          placeholder="Phone no"
          max={10}
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          style={{ border: error.phone ? "1px solid red" : "" }}
        />
        {error.phone && (
          <p style={{ color: "red", fontSize: "15px" }}>{error.phone}</p>
        )}

        <input
          type="text"
          placeholder="city"
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
          style={{ border: error.city ? "1px solid red" : "" }}
        />
        {error.city && (
          <p style={{ color: "red", fontSize: "15px" }}>{error.city}</p>
        )}

        <input
          type="text"
          placeholder="state"
          value={form.state}
          onChange={(e) => setForm({ ...form, state: e.target.value })}
          style={{ border: error.state ? "1px solid red" : "" }}
        />
        {error.state && (
          <p style={{ color: "red", fontSize: "15px" }}>{error.state}</p>
        )}

        <input
          type="text"
          placeholder="country"
          value={form.country}
          onChange={(e) => setForm({ ...form, country: e.target.value })}
          style={{ border: error.country ? "1px solid red" : "" }}
        />
        {error.country && (
          <p style={{ color: "red", fontSize: "15px" }}>{error.country}</p>
        )}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Signup;
