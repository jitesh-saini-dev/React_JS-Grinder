import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
// import Signup from "./Components/Signup";
import { useState } from "react";

const App = () => {

  const [cart, setCart] = useState([])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart}/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
        {/* <Route path="/signup" element={<Signup />} /> */}

      </Routes>
    </BrowserRouter>
  );
};

export default App;
