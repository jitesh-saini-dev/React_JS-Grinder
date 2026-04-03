import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  function handleSubmit(e) {
    // console.log(name)
    // console.log(email)
    // console.log(password);

    e.preventDefault(); // refresh ko rokega

    const data = { fullName: name, email, password, age, address };
    localStorage.setItem("signup", JSON.stringify(data));
    console.log(data);

    const saveddata = JSON.parse(localStorage.getItem("signup"));
    console.log(saveddata);

    alert("data saved");
    setName("");
    setEmail("");
    setPassword("");
    setAge("");
    setAddress("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Age..."
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Address..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Signup;
