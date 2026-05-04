import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Child from "./Component/Child";
import Home from "./Component/Home"
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import Protectedroute from "./Component/Protectedroute";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/child" element={<Child />} />

         <Route
          path="/home"
          element={
            <Protectedroute>
              <Home />
            </Protectedroute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />


       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
