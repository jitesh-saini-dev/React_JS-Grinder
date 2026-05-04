import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import Home from "./Component/Home";
import Cart from "./Component/Cart";
import Protectedroute from "./Component/Protectedroute";

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/home"
          element={
            <Protectedroute>
              <Home cart={cart} setCart={setCart} />
            </Protectedroute>
          }
        />

        <Route
          path="/cart"
          element={
            <Protectedroute>
              <Cart cart={cart} setCart={setCart} />{" "}
            </Protectedroute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
