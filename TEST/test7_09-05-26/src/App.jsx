import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./component/Home";
import Productform from "./component/Productform";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Productform />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
