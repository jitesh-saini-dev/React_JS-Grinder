import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Cart from "./Cart";
import Contact from "./Contact";
import Header from "./Header";

const App = () => {
  return (
    <BrowserRoute>
      {<Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRoute>
  );
};

export default App;
