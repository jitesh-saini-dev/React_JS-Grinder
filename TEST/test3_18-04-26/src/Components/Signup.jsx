import React, { useState } from "react";
const Signup = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    let errorsArray = [];

    if (form.name === "") errorsArray.push("name is required");
    if (form.email === "") errorsArray.push("email is required");
    if (form.password === "") errorsArray.push("password is required");

    setError(errorsArray);

    if (errorsArray.length === 0) {
      console.log(">>>>>>form", form);
      localStorage.setItem("user", JSON.stringify(form));

      setform({
        name: "",
        email: "",
        password: "",
      });
    }
  }

  const nameError = error.find((err) => err.includes("name"));
  const emailError = error.find((err) => err.includes("email"));
  const passwordError = error.find((err) => err.includes("password"));

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={form.name}
        placeholder="Name"
        onChange={(e) => setform({ ...form, name: e.target.value })}
        style={{ border: nameError ? "2px solid red" : "" }}
      />
      {nameError && <p style={{ color: "red" }}>{nameError}</p>}

      <input
        value={form.email}
        placeholder="Email"
        onChange={(e) => setform({ ...form, email: e.target.value })}
        style={{ border: emailError ? "2px solid red" : "" }}
      />
      {emailError && <p style={{ color: "red" }}>{emailError}</p>}

      <input
        type="password"
        value={form.password}
        placeholder="Password"
        onChange={(e) => setform({ ...form, password: e.target.value })}
        style={{ border: passwordError ? "2px solid red" : "" }}
      />
      {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;