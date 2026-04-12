import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Signin from "./Components/Signin";

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
