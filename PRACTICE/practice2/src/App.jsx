import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Signup from "./Component/Signup";
import Signin from "./Component/Signin";
import Searching from "./Component/Searching";
import Protectedroute from "./Component/Protectedroute";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Signup />} />
        {/* <Route path="/searching" element={<Searching />} /> */}
        <Route
          path="/searching"
          element={
            <Protectedroute>
              <Searching />
            </Protectedroute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
