import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Signup from "./Component/Signup";
import Signin from "./Component/Signin";
import Searching from "./Component/Searching";
import Protectedroute from "./Component/Protectedroute";
import Parent from "./Component/Parent";
import Child from "./Component/Child";
import Use from "./Component/Use";
import Childtwo from "./Component/Childtwo";
import Parenttwo from "./Component/Parenttwo";
import Common from "./Component/Common";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
          <Route path="/parent" element={<Parent />} />
          <Route path="/child" element={<Child />} />
          <Route path="/childtwo" element={<Childtwo />} />
          <Route path="/parenttwo" element={<Parenttwo />} />
          <Route path="/common" element={<Common />} />
          <Route path="/use" element={<Use />} />

        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
