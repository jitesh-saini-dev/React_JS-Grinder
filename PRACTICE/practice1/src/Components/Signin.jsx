import React from "react";
import { useState } from "react";

const Signin = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });


  function handleSubmit(e) {
    e.preventDefault(); // refresh ko rokega

    console.log(">>>>>>form", form);
    // localStorage.setItem("signin", JSON.stringify(form));

    // if (form.name === "") {
    //   alert("name is required");
    //   return;
    // }
    // if (form.email === "") {
    //   alert("email is required");
    //   return;
    // }

    

    const result = JSON.parse(localStorage.getItem("user"));
    console.log(">>>>>result", result);

    // if (form.email !== result.email && form.password !== result.password) {
    //   alert("Email & Password not matched");
    // } else if (form.email !== result.email) {
    //   alert("Email not matched");
    // } else if (form.password !== result.password) {
    //   alert("Password not matched");
    // } else {
    //   alert("Login Successfully");
    // }

    setform({
      email: "",
      password: "",
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Email..."
          value={form.email}
          onChange={(e) => setform({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Enter Password..."
          value={form.password}
          onChange={(e) => setform({ ...form, password: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Signin;
