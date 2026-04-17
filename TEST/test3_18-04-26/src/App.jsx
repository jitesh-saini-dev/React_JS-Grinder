import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
// import Newtwodetail from "./Components/Newtwodetail";
// import Protectedroute from "./Components/Protectedroute";
import "./App.css";
import Products from "./Components/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/Newtwo/:id" element={<Newtwodetail />} /> */}
        {/* <Route path="/api" element={<Api objhome={objhome} />} /> */}
        {/* <Route
          path="/api"
          element={
            <Protectedroute>
              <Api />
            </Protectedroute>
          }
        /> */}

        <Route path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
