import React, { useState} from "react";
import {  useDispatch} from "react-redux";
import {  useNavigate } from "react-router-dom";
import {  signup} from "../Slice/authSlice";

const Signup = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setname] =useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] =  useState("");


  const handlesubmit = (e) => {
    e.preventDefault();

    dispatch(signup({
        id: Date.now(),
        name,
        email,
        password,
      })
    );

    alert("Signup Success");
    navigate("/login");
  };

  return (

    <form
      onSubmit={handlesubmit}
      className="mt-5 ml-5 flex gap-5"
    >

      <input
        type="text"
        placeholder="name"
        onChange={(e) =>setname(e.target.value)}
        className="border"
      />

      <input
        type="email"
        placeholder="email"
        onChange={(e) =>setemail(e.target.value)}
        className="border"
      />

      <input
        type="password"
        placeholder="password"
        onChange={(e) =>setpassword(e.target.value)}
        className="border"
      />

      <button
        type="submit" className="border"
      >
        Signup
      </button>

    </form>
  );
};

export default Signup;