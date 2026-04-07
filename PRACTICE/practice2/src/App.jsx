import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Signup from "./Component/Signup";
import Signin from "./Component/Signin";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
